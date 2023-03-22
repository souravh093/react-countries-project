import React from "react";

const Country = (props) => {
  const {name, capital, population, area, region} = props.country;
  return (
    <div className="card w-full bg-white border border-gray-200">
        <img
          className="w-full h-52 object-cover"
          src={props.country.flags.png}
          alt="Shoes"
        />
      <div className="card-body">
        <p className="text-2xl font-bold">Name: {name.common}</p>
        <p className="">Capital: {capital?.[0]}</p>
        <p className="">Population: {population}</p>
        <p className="">Region: {region}</p>
        <p className="">Area: {area} km<sup>2</sup></p>
      </div>
      <figure>
      </figure>
    </div>
  );
};

export default Country;
