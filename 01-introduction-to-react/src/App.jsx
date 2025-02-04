import { useState } from "react";

export default function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);
  const [topAnecdote, setTopAnecdote] = useState(0);

  const voteAnecdote = () => {
    const v = [...votes];

    const topVotes = v[topAnecdote];
    const newVotes = v[selected] + 1;

    v[selected] = newVotes;
    setVotes(v);

    if (newVotes > topVotes) {
      setTopAnecdote(selected);
    }
  };

  const setRandomAnecdote = () => {
    const rnd = Math.floor(Math.random() * anecdotes.length);
    setSelected(rnd);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>

        <p>{anecdotes[selected]}</p>
        <p>Votes: {votes[selected]}</p>
        <div>
          <button onClick={voteAnecdote}>Vote</button>
          <button onClick={setRandomAnecdote}>Next anecdote</button>
        </div>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[topAnecdote]}</p>
        <p>Votes: {votes[topAnecdote]}</p>
      </div>
    </div>
  );
};
