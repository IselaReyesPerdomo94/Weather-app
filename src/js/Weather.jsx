import React from 'react';

import useBostonWeather from '../hooks/useBostonWeather';
import css from '../styles/Weather';

function Weather() {
  const { data, isLoading } = useBostonWeather();
  console.log(data);
  if(isLoading) {
    return(<p>We are loading the weather</p>)
  }

  const city = data?.title;
  const state = data?.parent?.title;
  const location = `${city}, ${state}`;
  const temperature = data?.latt_long;
  const consolidatedWeather = data?.consolidated_weather?.[0];
  const weather = consolidatedWeather?.weather_state_name;
  const minTemp = Math.round(consolidatedWeather?.min_temp);
  const maxTemp = Math.round(consolidatedWeather?.max_temp);
  const minMaxTemp = `${minTemp}°C - ${maxTemp}°C`;

  return(<section className={css.section}>
    <h3>Weather forecast:</h3>
    <div className={css.container}>
      <p className={css.city}>{location}</p>
      <p className={css.temperature}>{temperature}</p>
      <img className={css.img} alt='img'/>
      <p className={css.weather}>{weather}</p>
      <p className={css.min}>{minMaxTemp}</p>
    </div>
  </section>)
}

export default Weather;