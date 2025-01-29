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
/*
CountriesList.PropTypes={
  List: PropTypes.array

}*/

export default CountriesList