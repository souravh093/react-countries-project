import React from "react";
import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl bg-blue-500 px-10 py-7 text-white">
        All Country: {countries.length}
      </h1>
      <div className="container">
        {countries.map((country) => (
          <Country
            name={country.name.common}
            flag={country.flags.png}
            capital={country.capital?.[0]}
            population={country.population}
          ></Country>
        ))}
      </div>
    </div>
  );
};


export default Countries;
