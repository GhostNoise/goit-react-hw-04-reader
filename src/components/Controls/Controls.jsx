import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ actualPage, handlePage, length }) => (
  <section className={style.controls}>
    <button
      type="button"
      className={style.button}
      onClick={handlePage}
      name="previous"
      disabled={!actualPage}
    >
      Назад
    </button>
    <button
      type="button"
      className={style.button}
      onClick={handlePage}
      name="next"
      disabled={actualPage + 1 === length}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handlePage: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  actualPage: PropTypes.number.isRequired,
};

export default Controls;
