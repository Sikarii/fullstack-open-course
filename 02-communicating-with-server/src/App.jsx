import { useEffect, useMemo, useState } from "react";

import AddPersonForm from "./components/AddPersonForm";

import PersonsList from "./components/PersonsList";
import PersonsFilter from "./components/PersonsFilter";

import * as phonebook from "./api";

import { NotificationContainer, useNotification } from "./components/Notification";

export default function App() {
  const notification = useNotification();

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

    const bookIdx = persons.findIndex((x) =>
      x.name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (bookIdx !== -1) {
      const confirmed = confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`);
      if (!confirmed) {
        return;
      }

      const newBook = [...persons];

      const p = {
        ...newBook[bookIdx],
        number: newPerson.number,
      };

      newBook[bookIdx] = p;
      await phonebook.update(p.id, p);

      setPersons(newBook);
      notification.success(`Updated ${newPerson.name}`);
    } else {
      const data = await phonebook.create(newPerson);

      setPersons((old) => [...old, data]);
      notification.success(`Added ${newPerson.name}`);
    }

    setNewPerson({
      name: "",
      number: ""
    });
  };

  const deletePerson = (person) => {
    setPersons((v) => v.filter((x) => x.id !== person.id));
    notification.success(`Deleted ${person.name}`);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <NotificationContainer />

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
        onDelete={deletePerson}
      />
    </div>
  );
};
