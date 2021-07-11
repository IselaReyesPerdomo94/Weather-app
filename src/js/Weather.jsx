import React from 'react';

import useWeather from '../hooks/useWeather';
import css from '../styles/Weather';

function Weather() {
  const { data, isLoading } = useWeather();

  if(isLoading) {
    return(<p>We are loading the weather</p>)
  }
  return(<section className={css.section}>
    <h3>Weather forecast:</h3>
    <div className={css.container}>
      <p className={css.city}>City</p>
      <p className={css.temperature}>Current temperature</p>
      <img classsName={css.img} alt='img'/>
      <p className={css.weather}>Weather</p>
      <p className={css.min}>min and max temperature</p>
    </div>
  </section>)
}

export default Weather;