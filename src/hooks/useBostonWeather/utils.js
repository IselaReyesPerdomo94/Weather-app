/**
 * formatData transform request into usable data;
 * @param {Object} data - Response of request.
 * @returns {Object}
 */
const formatData = data => {
  const city = data?.title;
  const state = data?.parent?.title;
  const location = `${city}, ${state}`;
  const temperature = data?.latt_long;
  const consolidatedWeather = data?.consolidated_weather?.[0];
  const weather = consolidatedWeather?.weather_state_name;
  const minTemp = Math.round(consolidatedWeather?.min_temp);
  const maxTemp = Math.round(consolidatedWeather?.max_temp);
  const minMaxTemp = `${minTemp}°C - ${maxTemp}°C`;
  const img = consolidatedWeather?.weather_state_abbr;
  const imgURL = `https://www.metaweather.com/static/img/weather/${img}.svg`;

  return {
    location,
    temperature,
    weather,
    minMaxTemp,
    imgURL
  };
};

export { formatData };