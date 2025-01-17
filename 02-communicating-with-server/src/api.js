import axios from "axios";

const client = axios.create({
  baseURL: "https://studies.cs.helsinki.fi/restcountries/api",
});

const getAll = async () => {
  const result = await client.get("/all");
  return result.data;
};

const getByName = async (name) => {
  const result = await client.get(`/name/${encodeURIComponent(name)}`);
  return result.data;
};

export {
  getAll as getAll,
  getByName as getByName,
};
