import { useEffect, useState } from "react";

import Results from "./components/Results";

import * as countryApi from "./api";

export default function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    countryApi
      .getAll()
      .then((data) => setCountries(data));
  }, []);

  if (countries === null) {
    return (
      <div>Loading...</div>
    );
  }

  const results = !search
    ? countries
    : countries.filter((c) => c.name.common.toLowerCase().indexOf(search.toLowerCase()) != -1);

  return (
    <div>
      <div>
        Find countries:

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {search && <Results results={results} />}
      </div>
    </div>
  );
};
