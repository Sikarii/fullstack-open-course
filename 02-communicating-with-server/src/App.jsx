import { useEffect, useMemo, useState } from "react";

import AddPersonForm from "./components/AddPersonForm";

import PersonsList from "./components/PersonsList";
import PersonsFilter from "./components/PersonsFilter";

import * as phonebook from "./api";

export default function App() {
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);

  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });

  useEffect(() => {
    phonebook
      .getAll()
      .then((data) => setPersons(data));
  }, []);

  const filteredPersons = useMemo(() => {
    return persons.filter((p) =>
      p.name.toLowerCase().indexOf(search.toLowerCase()) != -1
    );
  }, [persons, search]);

  const addPerson = async (event) => {
    event.preventDefault();

    const isInBook = persons.some((x) => x.name === newPerson.name);

    if (isInBook) {
      return alert(`${newPerson.name} is already added to the phonebook`);
    }

    const data = await phonebook.create(newPerson);

    setPersons((old) => [...old, data]);

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

      <PersonsList
        persons={filteredPersons}
        onDelete={(id) => setPersons((v) => v.filter((x) => x.id !== id))}
      />
    </div>
  );
};
