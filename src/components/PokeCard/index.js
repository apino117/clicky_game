import React from "./node_modules/react";
import "./style.css";

function PokeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PokeCard;
