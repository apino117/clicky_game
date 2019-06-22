import React from "react";
import "./style.css";

class Score extends React.Component {

    state = {
        score: 0
    };

    incrementScore = event => {

        

        let newScore = this.state.score
        newScore++;

        this.setState({
            score: newScore
        });
    }

    render() {
        return (
            <div className="card">
                <button onClick={this.incrementScore}>Increment</button>
                <p class="card-text">Score: {this.state.score}</p>
            </div>
        );
    }

}

export default Score;