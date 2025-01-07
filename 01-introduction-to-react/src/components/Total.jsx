export default function Total(props) {
  const total = props.parts.reduce((sum, p) => p.exercises + sum, 0);

  return (
    <p>
      Number of exercises: {total}
    </p>
  );
};
