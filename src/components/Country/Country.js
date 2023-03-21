import React from "react";

const Country = (props) => {
  return (
    <div className="card card-compact bg-base-100 bg-gray-200 pb-10">
      <img src={props.flag} alt="Shoes" className="w-full h-56 object-cover" />
      <div className="card-body">
        <h2 className="card-title">Name: {props.name}</h2>
        <p>Capital: {props.capital}</p>
        <p>Population: {props.population}</p>
      </div>
    </div>
  );
};

export default Country;
