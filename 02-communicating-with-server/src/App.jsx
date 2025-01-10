import axios from "axios";

import { useEffect, useState } from "react";

import AddPersonForm from "./components/AddPersonForm";

import PersonsList from "./components/PersonsList";
import PersonsFilter from "./components/PersonsFilter";

export default function App() {
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);

  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });

  useEffect(() => {
    const fetchPersons = async () => {
      const result = await axios.get("http://localhost:3001/persons");
      setPersons(result.data);
    };

    fetchPersons();
  }, []);

  // Ideally useMemo is used here
  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().indexOf(search.toLowerCase()) != -1
  );

  const addPerson = (event) => {
    event.preventDefault();

    const isInBook = persons.some((x) => x.name === newPerson.name);

    if (isInBook) {
      return alert(`${newPerson.name} is already added to the phonebook`);
    }

    setPersons((old) => [
      ...old,
      {
        ...newPerson,
      }
    ]);

    setNewPerson({
      name: "",
      number: ""
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonsFilter
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Add new</h3>

      <AddPersonForm
        name={newPerson.name}
        number={newPerson.number}
        nameChanged={(name) => setNewPerson((v) => ({ ...v, name: name }))}
        numberChanged={(number) => setNewPerson((v) => ({ ...v, number: number }))}
        submit={addPerson}
      />

      <h3>Numbers</h3>

      <PersonsList persons={filteredPersons} />
    </div>
  );
};
