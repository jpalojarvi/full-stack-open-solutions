import React from 'react'

const App = () => {
  console.log('Hello from the component app')
  // const-definitions
  const course = {
    name: "Half Stack application development",
    part: [
      // part[0]
      {
        name: "Fundamentals of React",
        numberOfExercises: 10
      },
      // part[1]
      {
        name: "Using props to pass data",
        numberOfExercises: 7
      },
      // part[2]
      {
        name: "State of a component",
        numberOfExercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      Subject:
      <br></br>
      {props.part}: {props.numberOfExercises} exercises
    </p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.course.part[0].name} numberOfExercises={props.course.part[0].numberOfExercises} />
      <Part part={props.course.part[1].name} numberOfExercises={props.course.part[1].numberOfExercises} />
      <Part part={props.course.part[2].name} numberOfExercises={props.course.part[2].numberOfExercises} />
    </>
  )
}

const Total = (props) => {
  // Attempt at a for loop, is it possible to count the exercises like this?
  // var sumOfExercises;
  // for (var i = 0; i < props.course.part.numberOfExercises; i++){
  //   sumOfExercises += props.course.part[i].numberOfExercises;
  // }

  return (
    <p>Total number of exercises: {props.course.part[0].numberOfExercises + props.course.part[1].numberOfExercises + props.course.part[2].numberOfExercises}
    </p>
  )
}

export default App