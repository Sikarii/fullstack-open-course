import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
});

export const getAll = async () => {
  const result = await client.get("/persons");
  return result.data;
};

export const create = async (note) => {
  const result = await client.post("/persons", note);
  return result.data;
};

export const update = async (id, note) => {
  const result = await client.put(`/persons/${id}`, note);
  return result.data;
};
