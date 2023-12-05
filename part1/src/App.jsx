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

const Total = (props) => {
  const listTotalExercises = props.parts.map((element) => element.exercise);
  let total = 0;
  for (let i = 0; i < listTotalExercises.length; i++) {
    total += listTotalExercises[i];
  }
  return <div>Number of exercises: {total}</div>;
};

//example map() through object
const MyComponent = () => {
  const users = ["user 1", "user 2", "user 3"];
  return (
    <>
      <div>{users.map((element) => element + " ")}</div>
      <div>{users.map((element) => element[0])}</div>
    </>
  );
};
/*------------------------------------------------- */
//-------------------------------------------------destructuring
const Display = ({ counter }) => <div>{counter}</div>;
//-------------------------------------------------equal to
/* const Display = (props) => {
  return <div>{props.counter}</div>;
}; */

//-------------------------------------------------destructuring
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
//-------------------------------------------------equal to
/* const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
}; */

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

//------------------------------------------------- 1.7
const Statistics = (props) => {
};

/*-----------------------App---------------------------------------------------------------------------------------- */
const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAllFeedback] = useState(0);

  const all = good + neutral + bad;
  const average = (good-bad)/all;
  const positive = good *100/all;
  /*------------------------------------------------- */
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  // const handleClick = () => {
  //   console.log("clicked");
  // };

  /*--------------------Time out--------------------- */
  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  /*------------------------------------------------- */
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  /*------------------------------------------------- */
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
  //------------------------------------------------- 1.6
  const feedbackGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAllFeedback(updatedGood + neutral + bad);
  };
  const feedbackNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAllFeedback(good + updatedNeutral + bad);
  };
  const feedbackBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAllFeedback(good + neutral + updatedBad);
  };
  //-------------------------------------------------

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}

        <History allClicks={allClicks} />
      </div>
      {/*------------------------------------------------- */}
      <h1>Part 1-2</h1>
      <div>{counter}</div>
      {/* event handler is a function or function reference */}
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
      <br />
      {/* event handler is a function call */}
      {/* The value of the onClick attribute is a variable containing a reference to a function */}
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
      <br />
      <Display counter={counter} />
      <br />
      {/* define component Button */}
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
      {/*------------------------------------------------- */}
      <br />
      <h1>Part 1-1</h1>
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

      <Header course={Course.name} />
      <Content parts={Course.parts} />
      <Total parts={Course.parts} />
      {/* <Total exercises={Course.parts.map((element) => element["exercise"])} /> */}
      <p>Test</p>
      <MyComponent />
      <h1>Part 1-6: unicafe</h1>
      <div>
        <Header course="Give Feedback" />
        <Button handleClick={feedbackGood} text="good" />
        <Button handleClick={feedbackNeutral} text="neutral" />
        <Button handleClick={feedbackBad} text="bad" />
      </div>
      <div>
        <div>good: {good}</div>
        <div>neutral: {neutral}</div>
        <div>bad: {bad}</div>
        <div>all: {all}</div>
        <div>average: {average}</div>
        <div>positive: {positive}%</div>
      </div>
    </div>
    //-------------------------------------------------
  );
};

export default App;
