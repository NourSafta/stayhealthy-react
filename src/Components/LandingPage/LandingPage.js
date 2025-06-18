import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const isLoggedIn = sessionStorage.getItem("auth-token");

  return (
    <section className="hero-section">
      <div>
        <div className="flex-hero" data-aos="fade-up">
          <h1>
            Your Health
            <br />
            <span className="text-gradient">Our Responsibility</span>
          </h1>

          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at
            quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
          </h4>

          <Link to={isLoggedIn ? "/instant-consultation" : "/signup"}>
            <button className="button">
              {isLoggedIn ? "Instant Consultation" : "Get Started"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
