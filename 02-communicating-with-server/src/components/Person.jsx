export default function Person(props) {
  return (
    <div>
      <p>{props.name} {props.number}</p>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};
