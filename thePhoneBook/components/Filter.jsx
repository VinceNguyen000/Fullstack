const Filter = ({ filteredNames, handleFilterNames }) => {
  return (
    <div>
      Search by Name:{" "}
      <input value={filteredNames} onChange={handleFilterNames} />
    </div>
  );
};

export default Filter;
