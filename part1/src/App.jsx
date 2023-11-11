import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part}: {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((element) => (
        <Part part={element.part} exercise={element.exercise} />
      ))}
    </div>
  );
};

/* const Total = (props) => {
  const listTotalExercises = props.exercises;
  let total = 0;
  for (let i = 0; i < listTotalExercises.length; i++) {
    total += listTotalExercises[i];
  }
  return <div>Number of exercises: {total}</div>;
}; */

const Total = (props) =>{
  const listTotalExercises = props.parts.map(element => element.exercise)
  let total = 0;
  for (let i = 0; i < listTotalExercises.length; i++) {
    total += listTotalExercises[i];
  }
  return <div>Number of exercises: {total}</div>;
}

const MyComponent = () => {
  const users = ["user 1", "user 2", "user 3"];
  return (
    <>
      <div>{users.map((element) => element + " ")}</div>
      <div>{users.map((element) => element[0])}</div>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Course = {
    name: "Half Stack application development",
    parts: [
      {
        part: "Fundamentals of React",
        exercise: 10,
      },
      {
        part: "Using props to pass data",
        exercise: 7,
      },
      {
        part: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <MyComponent />
      <Header course={Course.name} />
      <Content parts={Course.parts} />
      <Total parts={Course.parts} />
      {/* <Total exercises={Course.parts.map((element) => element["exercise"])} /> */}
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
