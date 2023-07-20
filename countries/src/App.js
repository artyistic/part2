import axios from "axios"
import { useState, useEffect} from 'react'
import ShowCountries from "./components/ShowCountries"

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api'

const App = () => {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/all`)
      .then(response => setCountries(response.data))
  }, [])


  const searchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    
  }

  const countryFilter = (search === '') 
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    
  const showCountries = (countryName) => {
    setSearch(countryName)
  }


  return (
    <div className="App"> 
      <div>
        find countries <input onChange={searchChange}/>
      </div>
      <ShowCountries countries={countryFilter} showCountries={showCountries}/>
    </div>
  )
}

export default App;
