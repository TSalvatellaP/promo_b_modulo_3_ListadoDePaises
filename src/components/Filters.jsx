function Filters({ changeSearch, changeContinent }) {
  const handleInput = (ev) => {
    changeSearch(ev.target.value);
  };

  const handleSelect = (ev) => {
    changeContinent(ev.target.value);
  };

  return (
    <>
      <h2>Filters</h2>
      <div>
        <h4>By Country</h4>
        <form>
          <input type="text" onChange={handleInput} />
        </form>
      </div>

      <div>
        <h4>By Continent</h4>
        <select onChange={handleSelect}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
}

export default Filters;
