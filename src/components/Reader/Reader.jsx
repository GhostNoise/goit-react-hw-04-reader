import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import publications from '../../assets/publications.json';

export default class Reader extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
      .isRequired,
  };

  state = {
    actualPage: 0,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const linkIndex = this.parsedItmes(this.props);
    if (!linkIndex) {
      return history.push({ pathname: location.pathname, search: 'link=1' });
    }
    return this.setState({ actualPage: linkIndex });
  }

  componentDidUpdate(prevProps) {
    const linkIndex = this.parsedItmes(this.props);
    const linkPrevIndex = this.parsedItmes(prevProps);
    if (linkIndex !== linkPrevIndex) {
      this.setState({
        actualPage: linkIndex - 1,
      });
    }
  }

  parsedItmes = props => Number(queryString.parse(props.location.search).link);

  handlePage = event => {
    const { name } = event.target;
    const { location, history } = this.props;

    const navigate = () => {
      return history.push({
        ...location,
        pathname: '/reader',
        search: `link=${this.state.actualPage + 1}`,
      });
    };

    this.setState(
      prevState => ({
        actualPage:
          name === 'previous'
            ? prevState.actualPage - 1
            : prevState.actualPage + 1,
      }),
      navigate,
    );
  };

  render() {
    const { actualPage } = this.state;

    return (
      <div className={style.reader}>
        <Publication publications={publications[actualPage]} />
        <Counter actualPage={actualPage + 1} length={publications.length} />
        <Controls
          actualPage={actualPage}
          handlePage={this.handlePage}
          length={publications.length}
        />
      </div>
    );
  }
}
