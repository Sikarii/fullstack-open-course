import { useState } from "react";

function Button(props) {
  const increment = () => props.setState((v) => v + 1);

  return (
    <button onClick={increment}>{props.text}</button>
  );
}

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}{props.suffix}</td>
    </tr>
  );
};

function Statistics(props) {
  const all = (props.good + props.neutral + props.bad);
  const average = (props.good - props.bad) / all;
  const positive = (props.good / all) * 100;

  const content = all === 0
    ? <p>No feedback given</p>
    : <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} suffix="%" />
        </tbody>
      </table>;

  return (
    <>
      <h1>Statistics</h1>

      <div>
        {content}
      </div>
    </>
  );
};

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>

        <div>
          <Button text="Good" setState={setGood} />
          <Button text="Neutral" setState={setNeutral} />
          <Button text="Bad" setState={setBad} />
        </div>
      </div>

      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    </div>
  );
};
