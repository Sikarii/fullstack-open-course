export default function Weather(props) {
  const weatherIcon = `https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`

  return (
    <>
      <img src={weatherIcon} />

      <div>Wind: {props.wind.speed} m/s</div>
      <div>Temperature: {props.main.temp} °C</div>
    </>
  );
};
