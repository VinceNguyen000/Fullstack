import { useState } from "react";
import Person from "../components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [names, setNames] = useState("");
  const [newPhoneNumber,setPhoneNumber] = useState();

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: names,
      id: persons.length + 1,
    };

    console.log("Add button clicked", event.target);
    console.log("new inputting Object with name is: ", names);

    console.log("current array persons: ", persons);

    if (names === "") {
      window.alert("Null input");
    } else {
      if (persons.some((person) => person.name === names)) {
        window.alert(`${names} is already added to phonebook`);
      } else {
        setPersons(persons.concat(nameObject));
        setNames("");
      }
    }
  };

  const handleNameChange = (event) => {
    console.log("Inputting Name: ", event.target.value); // console input Name
    setNames(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={names} onChange={handleNameChange} />
        </div>
        <div>
          number: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>inputting Name: {names}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
