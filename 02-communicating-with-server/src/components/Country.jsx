export default function Country(props) {
  const languages = Object.values(props.languages);

  return (
    <div>
      <h1>{props.name.common}</h1>
      <div>Capital: {props.capital}</div>
      <div>Area code: {props.area}</div>

      <div>
        <h2>Languages:</h2>

        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>

      <div>
        <img src={props.flags.png} />
      </div>
    </div>
  );
};
