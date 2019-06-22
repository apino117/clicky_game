import React from "react";
import "./style.css";

function Score(props) {

  return (
    <div className="card">
      <p class="card-text">Score: {props.score}</p>
    </div>
  );
}

export default Score;