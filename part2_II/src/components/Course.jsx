import { useDebugValue } from "react";
import Note from "./Note";

const Course = (props) => {
  console.log(props.course.name);
  console.log(props.course.parts);

  const courseName = props.course.name;
  const courseParts = props.course.parts;
  var total = courseParts.reduce((sum, part) => sum + part.exercises, 0);

  console.log(total);

  return (
    <div>
      <h1>{courseName}</h1>
      <ul>
        {courseParts.map((part, i) => (
          <Note key={part.id} note={part} />
        ))}
      </ul>
      <div>total exercises: {total}</div>
    </div>
  );
};
export default Course;
