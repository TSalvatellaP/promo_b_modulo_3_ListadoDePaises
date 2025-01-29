import dataJson from "../services/data.json"
import CountriesList from "./CountriesList"


function App() {
  return (
    <>
    <header>
    <h1>Country Info App</h1>
    <p>Explore information about countries, capitals, and flags. Add new countries and filter through the list!</p>
    </header>
    <main>
     <CountriesList countriesList = {dataJson}/>
    </main>
    
    </>
  )
}

export default App





/*
1. Crear variables de estado (array de datos, input de buscar)
2. Crear componentes (....Filter)
*/