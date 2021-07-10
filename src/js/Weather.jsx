import React, { useState, useEffect } from 'react';

import useWeather from '../hooks/getWeather';
import css from '../styles/Weather';

function Weather() {
  const { data, isLoading } = useWeather();

  if(isLoading) {
    return(<p>We are loading the weather</p>)
  }
  return(<section className={css.section}>
    <h3>Weather forecast:</h3>
    <div className={css.container}>
      <p>City</p>
      <p>Current temperature</p>
      <p>Weather</p>
      <p>min and max temperature</p>
    </div>
  </section>)
}

export default Weather;