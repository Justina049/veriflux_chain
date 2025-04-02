import React from "react";
import "./HeroSection.scss";
import Particles from "../componentss/Particles";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background Particles */}
      <div className="particles-bg">
        <Particles />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Secure & Decentralized Certificate Verification</h1>
        <p>VeriFlux ensures authenticity with blockchain security.</p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
