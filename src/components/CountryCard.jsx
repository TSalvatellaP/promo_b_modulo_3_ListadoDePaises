import PropTypes from 'prop-types';

function CountryCard({ countryData, onClose }) {
  const handleClose = () => {
    onClose(countryData.name.common);
  };

  return (
    <article className="article">
      <button className="btn" onClick={handleClose}>
        X
      </button>
      <p>{countryData.flag}</p>
      <h2>{countryData.name.common}</h2>
      <h2>{countryData.continents && countryData.continents[0]}</h2>
      <h3>{countryData.capital && countryData.capital[0]}</h3>
    </article>
  );
}

CountryCard.propTypes = {
  countryData: PropTypes.shape({
    flag: PropTypes.string,
    continents: PropTypes.arrayOf(PropTypes.string),
    capital: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CountryCard;