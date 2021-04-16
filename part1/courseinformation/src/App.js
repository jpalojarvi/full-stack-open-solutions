import React from 'react'

const App = () => {
  const course = Header
  const content = Content
  const total = Total
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </div>
  )
}

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
  )

}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1+exercises2+exercises3
  return (
    <div>
      <p><b>Exercises: </b></p>
      <p>{part1}: {exercises1} </p>
      <p>{part2}: {exercises2} </p>
      <p>{part3}: {exercises3} </p>
    </div>
  )
}

const Total = () => {
  return (
    <p>Number of exercises: {Content.total}</p>
  )
}

export default App