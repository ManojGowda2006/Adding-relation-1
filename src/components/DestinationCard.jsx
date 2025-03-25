import React from "react";
import "../App.css";

function DestinationCard({ id, name, location, image, description, price }) {
  return (
    <div key={id} className="destination-card">
      <img src={image} className="destination-image" alt={name} />
      <p className="destination-name">{name}</p>
      <p className="destination-location">{location}</p>
      <p className="destination-description">{description}</p>
      <p className="destination-price">{price}</p>
    </div>
  );
}

export default DestinationCard;
