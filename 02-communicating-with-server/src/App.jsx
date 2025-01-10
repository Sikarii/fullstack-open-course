import { useState } from "react";

import AddPersonForm from "./components/AddPersonForm";

import PersonsList from "./components/PersonsList";
import PersonsFilter from "./components/PersonsFilter";

export default function App() {
  const initialPersons = [
    {
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      name: "Ada Lovelace",
      number: "39-44-532352",
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
    },
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
    },
  ];

  const [persons, setPersons] = useState(initialPersons);

  const [search, setSearch] = useState("");

  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });

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
