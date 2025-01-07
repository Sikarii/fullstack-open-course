import { useState } from "react";

function Statistics(props) {
  const all = (props.good + props.neutral + props.bad);
  const average = (props.good - props.bad) / all;
  const positive = (props.good / all) * 100;

  return (
    <>
      <h1>Statistics</h1>

      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {all}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}%</p>
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
          <button onClick={() => setGood((v) => v + 1)}>Good</button>
          <button onClick={() => setNeutral((v) => v + 1)}>Neutral</button>
          <button onClick={() => setBad((v) => v + 1)}>Bad</button>
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
