import CountryCard from "./CountryCard";

function CountriesList({List}) {
const ListItemHtml = List.map(item =>{
    return <CountryCard key={item.name.common} countryData ={item}/>

});


  return (
    <section  className="card" >
      {ListItemHtml}
    </section>
  )
}

export default CountriesList