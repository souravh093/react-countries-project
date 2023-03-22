import React from "react";

const Country = (props) => {
  return (
    <div className="card w-96 bg-white">
        <img
          className="w-full h-52 object-cover"
          src={props.country.flags}
          alt="Shoes"
        />
      <div className="card-body">
        <h2 className="text-2xl font-bold">Name: {props.country.name}</h2>
        <p className="">Capital: {props.country.capital}</p>
        <p className="">Population: {props.country.population}</p>
        <p className="">Region: {props.country.region}</p>
        <p className="">Area: {props.country.area} km<sup>2</sup></p>
      </div>
      <figure>
      </figure>
    </div>
  );
};

export default Country;
