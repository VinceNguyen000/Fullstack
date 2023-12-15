import { useDebugValue } from "react";
import Note from "./Note";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ parts }) => {
  var total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>
      <b>Total: {total}</b>
    </p>
  );
};

const Course2 = ({ course }) => {
  console.log("element:", course);
  console.log("name: ", course.name);
  console.log("parts: ", course.parts);
  return (
    <div>
      <Header name={course.name} />
      {course.parts.map((e) => (
        <Note key={e.id} note={e} />
      ))}
      <Total parts={course.parts} />
    </div>
  );
};

export default Course2;
