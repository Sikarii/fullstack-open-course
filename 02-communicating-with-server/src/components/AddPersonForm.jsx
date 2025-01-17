export default function AddForm(props) {
  // This component should hold the state for the form
  // However, the exercise explicitly says to hold them in the root

  return (
    <>
      <form onSubmit={props.submit}>
        <div>
          <div>
            Name:
            <input
              type="text"
              value={props.name}
              onChange={(e) => props.nameChanged(e.target.value)}
            />
          </div>

          <div>
            Number:
            <input
              type="tel"
              value={props.number}
              onChange={(e) => props.numberChanged(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};
