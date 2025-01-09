import { useState } from "react";

export default function App() {
  const initialPersons = [
    {
      name: "Arto Hellas",
      number: "040-123456",
    },
  ];

  const [persons, setPersons] = useState(initialPersons);

  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });

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
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          <div>
            Name:
            <input
              type="text"
              value={newPerson.name}
              onChange={(e) => setNewPerson((v) => ({ ...v, name: e.target.value }))}
            />
          </div>

          <div>
            Number:
            <input
              type="tel"
              value={newPerson.number}
              onChange={(e) => setNewPerson((v) => ({ ...v, number: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <div>
        <h1>Numbers</h1>
        <ul>
          {persons.map((p) =>
            <li key={p.name}>
              <p>{p.name} {p.number}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
