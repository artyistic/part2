import Weather from "./Weather"

const CountryDetails = ({country}) => {
    if (country == null)
      return null
    else{
        return(
          <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <Weather name={country.capital} lat={country.capitalInfo.latlng[0]} lon={country.capitalInfo.latlng[1]}/>
        </div>
      )
    }
}

export default CountryDetails