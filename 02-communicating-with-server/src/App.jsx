import { useState } from "react";

export default function App() {
  const initialPersons = [
    {
      name: "Arto Hellas",
    },
  ];

  const [persons, setPersons] = useState(initialPersons);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    setPersons((old) => [
      ...old,
      {
        name: newName,
      },
    ]);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Name:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <div>
        <h1>Numbers</h1>
        <ul>
          {persons.map((p) =>
            <li key={p.name}>{p.name}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
