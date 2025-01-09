import { useState } from "react";

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
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Filter shown with:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
       />
      </div>

      <div>
        <h1>Add new</h1>

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
      </div>

      <div>
        <h1>Numbers</h1>
        <ul>
          {filteredPersons.map((p) =>
            <li key={p.name}>
              <p>{p.name} {p.number}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
