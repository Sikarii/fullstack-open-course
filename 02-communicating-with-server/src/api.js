import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
});

const getAll = async () => {
  const result = await client.get("/persons");
  return result.data;
};

const create = async (person) => {
  const result = await client.post("/persons", person);
  return result.data;
};

const update = async (id, person) => {
  const result = await client.put(`/persons/${id}`, person);
  return result.data;
};

const $delete = async (id) => {
  const result = await client.delete(`/persons/${id}`);
  return result.data;
};

export {
  getAll as getAll,
  create as create,
  update as update,
  $delete as delete,
};
