import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
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

          <a href="#services">
            <button className="button">Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
