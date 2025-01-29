function Filters({changeSearch, changeContinent }) {
  const handleInput = (ev)=>{
    changeSearch(ev.target.value)
  };
  const handleSelect = (ev) => {
    changeContinent (ev.target.value);
  }

  return (
    <>
    <h2>Filters</h2>
    <div>
      <h4>By Country</h4>
      <form action="">
      <input type="text" onChange={handleInput} />
      </form>
    </div>

    <div>
      <h4>By Continent</h4>
      <select name="" id="" onChange={handleSelect} >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="northAmerica">North America</option>
        <option value="southAmerica">South America</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
   </>
  )
}

export default Filters