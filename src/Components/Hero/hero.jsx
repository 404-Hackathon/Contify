import React from "react";
import Books from "./Books.png";
import { Link } from "react-router-dom";
import "./hero.css";
function Hero(props) {
  return (
    <section class="container">
      <div class="wave">
        <div className="hero-Container">
          <div className="p-b">
            <p>
              Hello and welcome to Confity. We will provide for you important
              notes and videos for Highschool Subjects
            </p>
            <Link to="/subjects" className="button-start">
              <button>Start</button>
            </Link>
          </div>
          <img className="hero-img" src={Books} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
