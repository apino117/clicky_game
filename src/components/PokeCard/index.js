import React from "react";
import "./style.css";

function PokeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={function() { alert('click'); }}/>
      </div>
    </div>
  );
}

export default PokeCard;
