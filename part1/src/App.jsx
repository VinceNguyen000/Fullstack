import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*------------------------1.1-1.5------------------------- */
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

//--------------------------------------------------------------------------------destructuring
const Display = ({ counter }) => <div>{counter}</div>;
//--------------------------------------------------------------------------------equal to
/* const Display = (props) => {
  return <div>{props.counter}</div>;
}; */

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
//--------------------------------------------------------------------------------equal to
/* const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
}; */

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

/*------------------------1.8------------------------- */
const Statistic = ({ good, neutral, bad, all, average, positive }) => (
  <div>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>all: {all}</p>
    <p>average: {average}</p>
    <p>positive: {positive}%</p>
  </div>
);

/*------------------------1.9------------------------- */
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <div>No feedback given</div>;
  } else {
    //passing Event Handlers to Child Components/another component here
    /*     return (
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    ); */
    //--------------------------------------------------------------------------------refactor
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    );
  }
};
/*------------------------1.10-1.11------------------------- */
const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <div>
        {text}: {value}%
      </div>
    );
  }
  return (
    <div>
      {text}: {value}
    </div>
  );
};
/*------------------------1.12-1.14------------------------- */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/*------------------------1.14------------------------- */
const HighestVotes = ({ anecdotes, vote }) => {
  let highestVoteInt = Math.max(...vote);

  if (highestVoteInt !== 0) {
    let position = vote.indexOf(highestVoteInt);
    return (
      <div>
        <p>{anecdotes[position]}</p>
        <p> This anecdote has {highestVoteInt}</p>
      </div>
    );
  }
};

/*-----------------------App---------------------- */
const App = () => {
  /*------------------------1.1-1.5------------------------- */
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
  /*------------------------1.6-1.11------------------------- */
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;
  /*------------------------1.12------------------------- */
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  /*------------------------1.1-1.5------------------------- */
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  // const handleClick = () => {
  //   console.log("clicked");
  // };

  //--------------------------------------------------------------------------------Time out
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

  /*------------------------1.1-1.5------------------------- */
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
  /*------------------------1.6-1.11------------------------- */
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
  /*------------------------1.12------------------------- */
  const [selected, setSelected] = useState(0);
  const [vote, setVotes] = useState(Array(anecdotes.length).fill(0));

  const nextAnedocte = () => {
    let randomInt = getRandomInt(anecdotes.length);
    while (randomInt === selected) {
      randomInt = getRandomInt(anecdotes.length);
    }
    setSelected(randomInt);
  };
  /*------------------------1.13------------------------- */
  const voteAnedocte = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVotes(newVote);
    console.log(newVote);
  };

  //*------------------------return App------------------------- */
  return (
    <div>
      {/*------------------------1.1-1.5------------------------- */}
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
      {/*------------------------------------------------- */}
      <h1>Part 1-2</h1>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}

        <History allClicks={allClicks} />
      </div>
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
      {/*-----------------------1.6-1.11-------------------------- */}
      <h1>Part 1.6-1.14: unicafe</h1>
      <div>
        <Header course="Give Feedback" />
        <Button handleClick={feedbackGood} text="good" />
        <Button handleClick={feedbackNeutral} text="neutral" />
        <Button handleClick={feedbackBad} text="bad" />
      </div>
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {all}</p>
        <p>average: {average}</p>
        <p>positive: {positive}%</p>
      </div>
      <div>
        <h2>Statistic</h2>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      </div>
      <div>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      </div>
      {/*---------------------------1.12---------------------- */}
      <h2>Anecdotes of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>This quote has: {vote[selected]}</div>
      <Button handleClick={nextAnedocte} text="next anecdocte" />
      <Button handleClick={voteAnedocte} text="vote" />
      <h2>Anecdotes with most votes</h2>
      <HighestVotes anecdotes={anecdotes} vote={vote} />
    </div>
  );
};

export default App;
