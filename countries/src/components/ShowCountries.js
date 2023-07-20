import CountryDetails from "./CountryDetails";

const ShowCountries = ({ countries, showCountries }) => {
  if (countries.length === 0) {
    return <div>No search results</div>;
  } else if (countries.length > 10) {
    return <div>Too many countries, please provide more search tokens</div>;
  } else if (countries.length === 1) {
    return (
      <CountryDetails country={countries[0]}/>
    )
  }
  else{
    return(
      <div>
        {countries.map(result => {
          return (
            <div key={result.idd.root.substring(1)+result.idd.suffixes}>
              {result.name.common} <button onClick={() => showCountries(result.name.common)}>Show</button>
            </div>
            
          )
        })}
      </div>
      
    )
  }
}

export default ShowCountries
