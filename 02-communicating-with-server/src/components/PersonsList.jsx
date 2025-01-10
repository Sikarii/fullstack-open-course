import Person from "./Person";

import * as phonebook from "../api";

export default function List(props) {
  const deletePerson = async (person) => {
    const confirmed = confirm(`Are you sure you want to delete ${person.name}?`);
    if (!confirmed) {
      return;
    }

    await phonebook.delete(person.id);
    props.onDelete?.(person.id);
  };

  return (
    <ul>
      {props.persons.map((p) =>
        <li key={p.id}>
          <Person
            {...p}
            delete={() => deletePerson(p)}
          />
        </li>
      )}
    </ul>
  );
};
