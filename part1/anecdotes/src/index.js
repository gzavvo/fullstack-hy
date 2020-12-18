import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))

  const randomSelected = () => {
    const randomInt = Math.floor(Math.random() * Math.floor(props.anecdotes.length));
    setSelected(randomInt)
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = () => votes.indexOf(Math.max(...votes))

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <Button text='vote' handleClick={addVote} />
      <Button text='next anecdote' handleClick={randomSelected} />
      <h1>Anecdote with most votes</h1>
      <p>
        {props.anecdotes[maxVotes()]}
      </p>
      <p>
        has {votes[maxVotes()]} votes
      </p>
    </>
  )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
