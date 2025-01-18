import { useEffect, useState } from "react";

import Weather from "./Weather";

import * as weatherApi from "../api/weather";

export default function Country(props) {
  const [weather, setWeather] = useState();

  const capital = props.capital[0];
  const languages = Object.values(props.languages);

  const [lat, long] = props.latlng;

  useEffect(() => {
    weatherApi
      .get(lat, long)
      .then((data) => setWeather(data))
  }, [lat, long]);

  return (
    <div>
      <h1>{props.name.common}</h1>
      <div>Capital: {capital}</div>
      <div>Area code: {props.area}</div>

      <div>
        <h2>Languages:</h2>

        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>

      <div>
        <img src={props.flags.png} />
      </div>

      <div>
        <h2>Weather in {capital}</h2>

        {!weather
          ? <div>Loading...</div>
          : <Weather {...weather} />
        }
      </div>
    </div>
  );
};
