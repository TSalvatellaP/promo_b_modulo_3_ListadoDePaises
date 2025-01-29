

function CountryCard({countryData}) {
  return (
   
     <article className="article" >
      <button className="btn" >X</button>
      <p>{countryData.flag}</p>
      <h2>{countryData.continents}</h2>
      <h3>{countryData.capital}</h3>
     </article>
  
  )
}

export default CountryCard