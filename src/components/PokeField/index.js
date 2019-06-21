import React from "react";
import "./style.css";
import pokemon from "../../pokemon.json";
import PokeCard from "../PokeCard";


function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
class PokeField extends React.Component {

    // Add state of pokemon: pokemon
    state = {
        pokemon
    };

    renderPokemon() {

        const shuffledPokemon = shuffleArray(this.state.pokemon);

        return (
            <div class="row">
                {shuffledPokemon.map(pokemon => (
                    <PokeCard
                        id={pokemon.id}
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        onClick={this.handleBtnClick}
                    />
                ))}
            </div>
        );
    }

    handleBtnClick = event => {

        alert("click");
        this.setState({
            pokemon
        });

    }

    render() {
        return (
            <div class="row">
                {this.renderPokemon()}
            </div>
        );
    };
}

export default PokeField;

