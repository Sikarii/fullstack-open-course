import { useState } from "react";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = (good + neutral + bad);
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

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
        <h1>Statistics</h1>

        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {all}</p>
          <p>Average: {average}</p>
          <p>Positive: {positive}%</p>
        </div>
      </div>
    </div>
  );
};
