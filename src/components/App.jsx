import dataJson from "../services/data.json";
import CountriesList from "./CountriesList";
import "../styles/App.scss";
import Filters from "./Filters";
import { useState } from "react";


function App() {
const [searchValue, setSearchValue] = useState("");
const [continent, setContinent] = useState ("all");

const changeSearch = (value) =>{ 
  setSearchValue(value.toLowerCase());
};

const changeContinent = (value) =>{
  setContinent (value);
};


const filterCountry = dataJson.filter ((item) => {
  item.name.common.toLowerCase().includes(searchValue);
  continent === "all" || item.continents.includes(continent);
});






  return (
    <>
    <header>
    <h1>Country Info App</h1>
    <p>Explore information about countries, capitals, and flags. Add new countries and filter through the list!</p>
    </header>
    <main >
     <Filters changeSearch = {changeSearch} changeContinent={changeContinent} />
     <CountriesList List = {filterCountry}/>
    </main>
    
    </>
  )
}

export default App





/*
1. Crear variables de estado 
2. Crear componentes (....Filter)
*/