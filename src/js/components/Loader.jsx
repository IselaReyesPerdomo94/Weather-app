import React from 'react';

import css from '../../styles/Loader.css';

function Loader() {
  const two = `${css.dot} ${css.two}`;
  const three = `${css.dot} ${css.three}`;

  return <div className={css.loader} data-testid='loader'>
    <span className={css.dot}></span>
    <span className={two}></span>
    <span className={three}></span>
  </div>
}

export default Loader;