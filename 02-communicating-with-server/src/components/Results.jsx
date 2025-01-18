import { useEffect, useState } from "react";

import Country from "./Country";

export default function Results(props) {
  const [country, setCountry] = useState();

  useEffect(() => {
    setCountry(
      props.results.length === 1
        ? props.results[0]
        : undefined
    );
  }, [props.results]);

  if (country) {
    return (
      <Country {...country} />
    );
  }

  if (props.results.length === 0) {
    return (
      <div>No results for given search</div>
    );
  }

  if (props.results.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  }

  return (
    props.results.map((x) => (
      <div key={x.name.common}>
        <span>{x.name.common}</span>
        <button onClick={() => setCountry(x)}>Show</button>
      </div>
    ))
  );
};
