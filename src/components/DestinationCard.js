import React, { useState } from "react";

function DestinationCard({ name, image, description }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      {visited ? (
        <button className="btn-1">visited</button>
      ) : (
        <button>Not Visited</button>
      )}
    </li>
  );
}

export default DestinationCard;
