import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="grid grid-cols-4 px-20 gap-10">
      {countries.map((country) => (
        <Country
          country={country}
          // name={country.name.common}
          // region={country.region}
          // area={country.area}
          // capital={country.capital?.[0]}
          // population={country.population}
          // flags={country.flags.png}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
