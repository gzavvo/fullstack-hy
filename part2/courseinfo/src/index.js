import React from 'react';
import ReactDOM from 'react-dom';

const Total = ({ course }) => {
  const total = course.parts
    .map(part => part.exercises)
    .reduce((acc, part) => acc + part)

  const pStyle = {
    fontWeight: 'bold'
  };

  return (
    <p style={pStyle}>
      total of {total} exercises
    </p>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) =>
          <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        { 
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        }, 
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id:1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id:2
        }
      ]
    }
  ]


  return (
    <>
    {
      courses.map(course => {
        return <Course key= {course.id} course={course} />
      })
    }
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
