import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="cardContainer">
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
