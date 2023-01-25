import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio Page</h2>
      <br></br>
      <div class="card-deck">
        <div class="card bg-dark text-white">
          <img
            src="./beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day.jpg"
            class="card-img"
            alt="clear lake at base of mountain"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">
              <a href="https://rarellano5280.github.io/National-Park-Finder">
                XPLOR
              </a>{' '}
              <a href="https://github.com/rarellano5280/National-Park-Finder">
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </h5>
            <p class="card-text">REST APIs</p>
          </div>
        </div>
        <div class="card bg-dark text-white">
          <img
            src="./background-blurry-restaurant-shop-interior.jpg"
            class="card-img"
            alt="icons of different types of food"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">
              <a href="https://ancient-cove-76580.herokuapp.com/">
                Raving Cravings
              </a>{' '}
              <a href="https://github.com/YoungANDgreen/Team5">
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </h5>
            <p class="card-text">MVC</p>
          </div>
        </div>
        <div class="card bg-dark text-white">
          <img
            src="./15292633_5544723.jpg"
            class="card-img"
            alt="weather icons depicting numerous different types of weather"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">
              <a href="https://pure-taiga-67636.herokuapp.com/">
                Google Book Search
              </a>{' '}
              <a href="https://github.com/antonio11duran/book-search-engine">
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </h5>
            <p class="card-text">MERN</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="card-deck">
        <div class="card bg-dark text-white">
          <img
            src="./11155973_4664459.jpg"
            class="card-img"
            alt="daily and monthly planner"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">
              <a href="https://antonio11duran.github.io/daily-planner/">
                Daily Planner
              </a>{' '}
              <a href="https://github.com/antonio11duran/daily-planner">
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div class="card bg-dark text-white">
          <img
            src="./business-financial-concept-with-magnifying-glass-question-mark-yellow-background-flat-lay.jpg"
            class="card-img"
            alt="question mark over black background"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">
              <a href="https://antonio11duran.github.io/Practice-Interview-Quiz/">
                Practice Interview Quiz
              </a>{' '}
              <a href="https://github.com/antonio11duran/Practice-Interview-Quiz">
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div class="card bg-dark text-white">
          <img
            src="./password-with-hand-binary-code.jpg"
            class="card-img"
            alt="hand over binary holding password between fingertips"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">
              <a href="https://antonio11duran.github.io/weather-app/">
                Weather App
              </a>{' '}
              <a href="https://github.com/antonio11duran/weather-app">
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
