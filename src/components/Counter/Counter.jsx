import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';

const Counter = ({ actualPage, length }) => (
  <div>
    <p className={style.counter}>
      {actualPage}/{length}
    </p>
  </div>
);

Counter.propTypes = {
  actualPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Counter;
