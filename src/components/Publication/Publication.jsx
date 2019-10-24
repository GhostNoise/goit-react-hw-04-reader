import React from 'react';
import PropTypes from 'prop-types';
import style from './Publication.module.css';

const Publication = ({ publications: { title, text } }) => (
  <article className={style.publications}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  publications: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
