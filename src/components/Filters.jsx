function Filters({changeSearch}) {
  const handleInput = (ev)=>{
    changeSearch(ev.target.value)

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
      <select name="" id=""></select>
    </div>
   </>
  )
}

export default Filters