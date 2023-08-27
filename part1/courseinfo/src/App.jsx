import React from 'react';

const Header = ({ course }) =>{
  return(
    <div>
      <h2>{course}</h2>
    </div>
  )
}

const Content = ({ parts }) =>{
  return(
    <div>
    {parts.map((part) =>(<p>{part.name}: {part.exercises} remaining </p>))}
    </div>
  )
}

const Total = ({ parts }) =>{
  return(
    <div>
     Total exercises remaining: {parts.reduce((total, part) => total + part.exercises, 0)} remaining
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    </div>
  )
}

export default App