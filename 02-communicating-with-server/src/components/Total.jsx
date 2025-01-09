export default function Total(props) {
  const total = props.parts.reduce((sum, p) => p.exercises + sum, 0);

  return (
    <b>Total of {total} exercises</b>
  );
};
