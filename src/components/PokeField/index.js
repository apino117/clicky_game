import React from "react";
import "./style.css";
import pokemon from "../../pokemon.json";
import PokeCard from "../PokeCard";

class PokeField extends React.Component {

    // Add state of pokemon: pokemon
    state = {
        pokemon
    };

    handleBtnClick = event => {

        alert("click");

    }

    renderPokemon() {
        return (
            <div class="row">
                {this.state.pokemon.map(pokemon => (
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

    render() {
        return (
            <div class="row">
                {this.renderPokemon()}
            </div>
        );
    };
}

export default PokeField;