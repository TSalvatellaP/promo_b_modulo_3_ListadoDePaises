import dataJson from "../services/data.json"
import CountriesList from "./CountriesList"
import "../styles/App.scss"
import Filters from "./Filters"
import { useState } from "react";


function App() {
const [searchValue, setSearchValue] = useState("")

const changeSearch = (value) =>{ 
  setSearchValue(value.toLowerCase())
}

const filterCountry = dataJson.filter(country => country.name.common.toLowerCase().includes(searchValue))
//console.log(dataJson)

  return (
    <>
    <header>
    <h1>Country Info App</h1>
    <p>Explore information about countries, capitals, and flags. Add new countries and filter through the list!</p>
    </header>
    <main >
     <Filters changeSearch = {changeSearch}/>
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