import Part from "./Part";

export default function Content(props) {
  return (
    <>
      {props.parts.map((p) =>
        <Part
          key={p.id}
          name={p.name}
          exercises={p.exercises}
        />
      )}
    </>
  );
};
