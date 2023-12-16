import { useState } from "react";
import Person from "../components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto", number: "111", id: 1 },
    { name: "Ada Lovelace", number: "222", id: 2 },
    { name: "Dan Abramov", number: "333", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [names, setNames] = useState("");
  const [numbers, setNumbers] = useState("");
  const [filteredNames, setFilteredNames] = useState("");

  //------------------------------------------------------------------------------------------------------------//
  const addObject = (event) => {
    event.preventDefault();
    const aObject = {
      name: names,
      number: numbers,
      id: persons.length + 1,
    };

    console.log("Add button clicked", event.target);
    console.log("new inputting Object with name is: ", names);
    console.log("current array persons: ", persons);

    if (names === "" || numbers === "") {
      window.alert("Null input");
    } else {
      if (
        persons.some(
          (person) => person.name === names && person.number === numbers
        )
      ) {
        window.alert(`${names} is already added to phonebook`);
      } else {
        setPersons(persons.concat(aObject));
        setNames("");
        setNumbers("");
      }
    }
  };

  const handleNames = (event) => {
    console.log("Inputting Name: ", event.target.value); // console input Name
    setNames(event.target.value);
  };

  const handleNumbers = (event) => {
    console.log("Inputting Number: ", event.target.value); // console input Number
    setNumbers(event.target.value);
  };

  const handleFilterNames = (event) => {
    setFilteredNames(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.includes(filteredNames)
  );

  return (
    <div>
      <div>
        Search by Name:{" "}
        <input value={filteredNames} onChange={handleFilterNames} />
      </div>
      {/* <div>Debug filtered Name: {filteredNames}</div> */}
      <h2>Phonebook</h2>
      <form onSubmit={addObject}>
        <div>
          name: <input value={names} onChange={handleNames} />
        </div>
        <div>
          number: <input value={numbers} onChange={handleNumbers} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div>Debug inputting Name: {names}</div> */}
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((filteredPerson) => (
          <Person key={filteredPerson.id} person={filteredPerson} />
        ))}
      </ul>
    </div>
  );
};

export default App;
