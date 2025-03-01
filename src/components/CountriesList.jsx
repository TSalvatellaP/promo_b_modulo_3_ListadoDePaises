import CountryCard from "./CountryCard";
import PropTypes from 'prop-types';

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

CountriesList.propTypes = {
  List: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
   
  })).isRequired,
};

export default CountriesList