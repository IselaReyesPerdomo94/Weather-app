import React from 'react';

import Loader from './components/Loader';
import useBostonWeather from '../hooks/useBostonWeather';
import css from '../styles/Weather';

function Weather() {
  const { data, isLoading } = useBostonWeather();

  if(isLoading) {
    return(<Loader />)
  }

  if(!data) {
    return(<p>We are having problems</p>)
  }

  const { 
    location,
    temperature,
    weather,
    minMaxTemp,
    imgURL} = data; 

  return(<section className={css.section}>
    <h3>Weather forecast:</h3>
    <div className={css.container}>
      <p className={css.city}>{location}</p>
      <p className={css.temperature}>{temperature}</p>
      <img className={css.img} alt='img' src={imgURL} />
      <p className={css.weather}>{weather}</p>
      <p className={css.min}>{minMaxTemp}</p>
    </div>
  </section>)
}

export default Weather;