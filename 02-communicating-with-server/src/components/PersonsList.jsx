import Person from "./Person";

export default function List(props) {
  return (
    <ul>
      {props.persons.map((p) =>
        <li key={p.name}>
          <Person {...p} />
        </li>
      )}
    </ul>
  );
};
