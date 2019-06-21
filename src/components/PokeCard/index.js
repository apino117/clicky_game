import React from "react";
import "./style.css";

function PokeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.onClick}/>
      </div>
      <p class="card-text">{props.name}</p>
    </div>
  );
}

export default PokeCard;


