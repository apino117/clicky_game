import React, { Component } from "react";

// Add in JSON to use for the jaunts
import PokeField from "./components/PokeField/index.js";

class App extends Component {

  // Add state of pokemon: pokemon
  state = {

  };


  render() {
    return (

      <div>

        {/* NaV */}
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Title</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Instructions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Score</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Top Score</a>
          </li>
        </ul>

        {/* Jumbotron */}
        <div class="jumbotron">
          <h1 class="display-4">Clicky Game!</h1>
          <p class="lead">Fuckfuckfuckfuckfuckfuckfuck.</p>
        </div>

        {/* Main Content */}
        <div class="container">

          {/* Pokefield Smart Component */}
          <PokeField></PokeField>

        </div>

        {/* footer */}
        <footer class="footer mt-auto py-3">
          <div class="container">
            <span class="text-muted">Footer</span>
          </div>
        </footer>


      </div>
    );
  }

}

export default App;
