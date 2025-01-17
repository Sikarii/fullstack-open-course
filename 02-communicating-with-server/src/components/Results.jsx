import Country from "./Country";

export default function Results(props) {
  if (props.results.length === 0) {
    return (
      <div>No results for given search</div>
    );
  }

  if (props.results.length === 1) {
    return (
      <Country {...props.results[0]} />
    );
  }

  if (props.results.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  }

  return (
    props.results.map((x) => (
      <div key={x.name.common}>{x.name.common}</div>
    ))
  );
};
