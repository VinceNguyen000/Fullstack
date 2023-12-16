import Person from "./Person";

const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((filteredPerson) => (
        <Person key={filteredPerson.id} person={filteredPerson} />
      ))}
    </div>
  );
};

export default Persons;
