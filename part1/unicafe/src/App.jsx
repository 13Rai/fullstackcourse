import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const Top = ({ handleBad, handleGood, handleNeutral }) => {
  return (
    <div>
      <h2>Give Feedbacks</h2>
      <Button onClick={handleGood} text="Good" /> 
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
    </div>
  )
}

const Stats = ({ good, neutral, bad }) => {
  const goodPoint = 1
  const badPoint = -1
  const total = bad + good + neutral
  const averageRating = ((goodPoint * good) + (badPoint * bad)) / total
  const positive = (good/total)*100

  if (good === 0 && neutral === 0 && bad === 0){
    return(
      <div>
        <h3>Statistics</h3>
        No statistic avalable
      </div>
    )
  }
  return (
    <div>
      <h3>Statistics</h3>
      Good: {good} <br />
      Neutral: {neutral} <br />
      Bad: {bad} <br />
      Average Rating: {averageRating} <br />
      Positive Reviews: {positive}%
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Top handleBad={handleBad} handleGood={handleGood} handleNeutral={handleNeutral} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
