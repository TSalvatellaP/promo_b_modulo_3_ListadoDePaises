import { useState } from "react";
import dataJson from "../services/data.json";
import CountriesList from "./CountriesList";
import "../styles/App.scss";
import Filters from "./Filters";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [continent, setContinent] = useState("all");

  const changeSearch = (value) => {
    setSearchValue(value.toLowerCase());
  };

  const changeContinent = (value) => {
    setContinent(value);
  };

  // Filtrar la lista de países según el nombre y el continente
  const filteredCountries = dataJson.filter((country) => {
    const matchesName = country.name.common.toLowerCase().includes(searchValue);
    const matchesContinent = continent === "all" || country.continents.includes(continent);
    return matchesName && matchesContinent;
  });

  return (
    <>
      <header>
        <h1>Country Info App</h1>
        <p>
          Explore information about countries, capitals, and flags. Add new
          countries and filter through the list!
        </p>
      </header>
      <main>
        <Filters changeSearch={changeSearch} changeContinent={changeContinent} />
        <CountriesList List={filteredCountries} />
      </main>
    </>
  );
}

export default App;
