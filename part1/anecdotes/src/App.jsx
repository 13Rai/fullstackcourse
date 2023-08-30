import React, { useState } from 'react';

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initialAnecdoteVotes = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [anecdoteVotes, setAnecdoteVotes] = useState(initialAnecdoteVotes);

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVoting = () => {
    const newVotes = [...anecdoteVotes];
    newVotes[selected] += 1;
    setAnecdoteVotes(newVotes);
  };

  const topVoted = anecdoteVotes.indexOf(Math.max(...anecdoteVotes))

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Number of votes: {anecdoteVotes[selected]}</p>
      <Button onClick={handleAnecdoteClick} text="Next Anecdote" />
      <Button onClick={handleVoting} text="Vote" />

      Anecdote with Most Votes <br />
      {anecdotes[topVoted]} <br />
      Number of votes:
      {anecdoteVotes[topVoted]}
    </div>
  );
};

export default App;
