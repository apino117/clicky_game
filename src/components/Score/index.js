import React from "react";
import "./style.css";

class Score extends React.Component {

    state = {
        score: 0
    };

    render() {
        return (
            <div className="card">
                <button onClick={function () { alert('click'); }}>Increment</button>
                <p class="card-text">Score: {this.state.score}</p>
            </div>
        );
    }

}

export default Score;