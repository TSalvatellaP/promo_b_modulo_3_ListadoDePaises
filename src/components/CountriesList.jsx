import CountryCard from "./CountryCard";

function ListCountries({countriesList}) {
const countriesItemHtml = countriesList.map(item =>{
  return <CountryCard/>

});


  return (
    <section>
    {countriesItemHtml}
    </section>
  )
}

export default ListCountries