const PersonForm = ({
  object,
  objectName,
  handleNames,
  objectNum,
  handleNumb,
}) => {
  return (
    <form onSubmit={object}>
      <div>
        name: <input value={objectName} onChange={handleNames} />
      </div>
      <div>
        number: <input value={objectNum} onChange={handleNumb} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
