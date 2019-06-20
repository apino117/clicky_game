import React from 'react';

function App() {
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

        <div class="row">
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
          <div class="col-3">
            <h1>I'm A Picture!</h1>
          </div>
        </div>

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

export default App;
