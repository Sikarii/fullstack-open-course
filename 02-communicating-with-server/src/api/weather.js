import axios from "axios";

const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const get = async (lat, long) => {
  const params = {
    lat: lat,
    lon: long,
    units: "metric",
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  };

  const result = await client.get("/weather", {
    params: params,
  });

  return result.data;
};

export {
  get as get,
};
