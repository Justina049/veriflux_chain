// // import React from 'react'

// // // const Home = () => {
// // //   return (
// // //     <div>Home</div>
// // //   )
// // // }

// // // export default Home

// // import React from "react";
// // import './home.css';


// // const Home = () => {
// //   return (
// //     <div className="container">
// //       {/* Header */}
// //       <header className="header">
// //         <div className="logo">VeriFlux</div>
// //         <nav className="nav">
// //           <a href="#products">Products</a>
// //           <a href="#statistics">Statistics</a>
// //           <a href="#faq">FAQ</a>
// //           <button className="launch-btn">Launch dApp</button>
// //         </nav>
// //       </header>

// //       {/* Main Section */}
// //       <main className="main">
// //         <h1 className="title">Decentralized Certificate Verification</h1>
// //         <p className="description">
// //           VeriFlux provides a secure and efficient way to verify certificates. Simplify your verification process with transparency and authenticity.
// //         </p>
// //         <button className="main-btn">Launch VeriFlux</button>
// //       </main>

// //       {/* Features */}
// //       <section className="features">
// //         <ul>
// //           <li>✅ Sender pays all transaction fees</li>
// //           <li>✅ Recipients immediately verify certificates</li>
// //         </ul>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;


// ////////////////////////////////////////////////////////////////




// // import React from "react";
// // import './styles.css';

// // const Home = ({ principal, role }) => {
// //   return (
// //     <div className="container">
// //       <h1>Welcome to VeriFlux</h1>
// //       <p>Logged in as: {principal}</p>
// //       <p>Role: {role || "Not registered yet"}</p>
// //     </div>
// //   );
// // };

// // export default Home;





// // export default function HomePage() {
// //     return (
// //       <div style={{ textAlign: "center", marginTop: "50px" }}>
// //         <h1>Welcome to VeriFlux Home Page</h1>
// //         <p>You are successfully authenticated!</p>
// //       </div>
// //     );
// //   }










// import React from "react";
// import "./home.css"; // Import the CSS file

// const Home = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">VeriFlux Chain</div>
//         <ul className="nav-links">
//           <li><a href="/home">Home</a></li>
//           <li><a href="/features">Features</a></li>
//           <li><a href="/about-us">About Us</a></li>
//           <li><a href="/benefits">Benefits</a></li>
//           <li><a href="/login">Login/Register</a></li>
//           <li><a href="/contact-us">Contact Us</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero">
//         <h1>Secure & Verify Certificates Easily</h1>
//         <p>Blockchain-powered certificate verification for transparency and trust.</p>
//         <button className="btn">Get Started</button>
//       </header>

//       {/* Features Section */}
//       <section className="features">
//         <h2>Key Features</h2>
//         <p>VeriFlux Chain allows you to mint and verify certificates securely.</p>
//       </section>

//       {/* About Us Section */}
//       <section className="about">
//         <h2>About Us</h2>
//         <p>We are building a decentralized platform to combat credential fraud.</p>
//       </section>

//       {/* Benefits Section */}
//       <section className="benefits">
//         <h2>Why Choose VeriFlux Chain?</h2>
//         <p>Security, transparency, and trust—all in one platform.</p>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} VeriFlux Chain. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

  


////////////////////////////////////

// import React, { useEffect } from "react";
// import "./home.css";
// import img31 from "../assets/img31.png";
// import { Link, useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleSmoothScroll = (event) => {
//       event.preventDefault();
//       const targetId = event.currentTarget.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         window.scrollTo({
//           top: targetElement.offsetTop - 80, // Adjusted for fixed navbar
//           behavior: "smooth",
//         });
//       }
//     };

//     const navLinks = document.querySelectorAll(".nav-links a");
//     navLinks.forEach((link) => link.addEventListener("click", handleSmoothScroll));

//     return () => {
//       navLinks.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
//     };
//   }, []);

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={img31} alt="VeriFlux Logo" className="logo-img" />
//           <span className="logo-text">VeriFlux Chain</span>
//         </div>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#features">Features</a></li>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#benefits">Benefits</a></li>
//           <li><Link to="/contact">Contact Us</Link></li>
//           <li><button className="login-btn" onClick={() => navigate("/login")}>Login/Register</button></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header id="home" className="hero">
//         <h1>Secure & Verify Certificates Easily</h1>
//         <p>Blockchain-powered certificate verification for transparency and trust.</p>
//         <button className="btn">Get Started</button>
//       </header>

//       {/* Features Section */}
//       <section id="features" className="features">
//         <h2>Key Features</h2>
//         <p>VeriFlux Chain allows you to mint and verify certificates securely.</p>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="about">
//         <h2>About Us</h2>
//         <p>We are building a decentralized platform to combat credential fraud.</p>
//       </section>

//       {/* Benefits Section */}
//       <section id="benefits" className="benefits">
//         <h2>Why Choose VeriFlux Chain?</h2>
//         <p>Security, transparency, and trust—all in one platform.</p>
//       </section>

//       {/* Footer Section */}
//       <footer id="contact" className="footer">
//         <p>&copy; {new Date().getFullYear()} VeriFlux Chain. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect } from "react";
import "./home.css";
import logo from "../assets/img31.png";
import navLogo from "../assets/veriflux.png";
import { FaCertificate, FaCheckCircle, FaShieldAlt, FaGlobe, FaLock, FaDatabase, FaExpand, FaExclamationTriangle, FaClock } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import TeamSection from "./TeamSection";


// const teamMembers = [
//   { id: 1, name: "Team Member 1", role: "CEO", imgSrc: "path/to/t1.webp" },
//   { id: 2, name: "Team Member 2", role: "CTO", imgSrc: "path/to/t2.webp" },
//   { id: 3, name: "Team Member 3", role: "COO", imgSrc: "path/to/t3.webp" },
//   { id: 4, name: "Team Member 4", role: "CFO", imgSrc: "path/to/t6.webp" },
//   { id: 5, name: "Team Member 5", role: "CMO", imgSrc: "path/to/t7.png" },
// ];


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjusted for fixed navbar
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
    navLinks.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* 1️⃣ Logo Section */}
        <div className="logo-container">
          <img src={navLogo} alt="VeriFlux Logo" className="logo-img" />
          <span className="logo-text">VeriFlux Chain</span>
        </div>

        {/* 2️⃣ Navigation Links (Smooth Scroll) */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#benefits">Benefits</a></li>
        </ul>

        {/* 3️⃣ Contact Us & Login (Navigate to Pages) */}
        <div className="auth-buttons">
          <Link to="/contact" className="contact-btn">Contact Us</Link>
          <button className="login-btn" onClick={() => navigate("/login")}>Login/Register</button>
        </div>
      </nav>

      
      {/* Hero Section */}
<header id="home" className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Secure & Verify Certificates Easily</h1>
    <p className="hero-description">
      Blockchain-powered certificate verification for transparency and trust.
    </p>
    <ul className="hero-features">
      <li>⭐ Built on a secure decentralized platform</li>
      <li>⭐ Easy certificate minting and verification</li>
      <li>⭐ Fraud prevention and transparency</li>
    </ul>
    <button className="hero-button">Get Started</button>
  </div>
  <div className="hero-image">
    <img src={logo} alt="Hero Graphic" />
  </div>
</header>



{/* Key Features Section */}
<section id="key-features" className="key-features-section">
  <h2 className="key-features-title">Key Features of VeriFlux Chain</h2>
  <p className="key-features-description">
    VeriFlux Chain allows you to mint and verify certificates securely with a seamless and efficient process.
  </p>

  <div className="features-grid">
    {/* Feature 1 - Mint Certificates */}
    <div className="feature-item">
      {/* <img src="mint-icon.png" alt="Minting Icon" className="feature-icon" /> */}
      <GrCertificate className="feature-icon" size={40} color="#007bff" />
      <h3>Mint Certificates</h3>
      <p>Issue tamper-proof certificates with a unique cryptographic hash, ensuring authenticity.</p>
    </div>

    {/* Feature 2 - Secure Verification */}
    <div className="feature-item">
      {/* <FaCertificate className="feature-icon" size={40} color="#007bff" /> */}
      <FaCheckCircle className="feature-icon" size={40} color="green" />
      <h3>Instant Verification</h3>
      <p>Verify certificate authenticity instantly on the blockchain with real-time validation.</p>
    </div>

    {/* Feature 3 - Fraud Prevention */}
    <div className="feature-item">
      {/* <img src="fraud-icon.png" alt="Fraud Prevention Icon" className="feature-icon" /> */}
      <FaExclamationTriangle className="feature-icon" size={40} color="red" />
      <h3>Fraud Prevention</h3>
      <p>Eliminate fake credentials by ensuring all issued certificates are immutable and verifiable.</p>
    </div>

    {/* Feature 4 - Transparent Recordkeeping */}
    <div className="feature-item">
      {/* <img src="transparency-icon.png" alt="Transparency Icon" className="feature-icon" /> */}
      <FaDatabase className="feature-icon" size={40} color="orange" />
      <h3>Transparent Recordkeeping</h3>
      <p>Maintain a decentralized, tamper-proof certificate registry accessible to institutions and verifiers.</p>
    </div>
  </div>
</section>



{/* About VeriFlux Chain */}
<section id="about" className="about-section">
  <div className="about-container">
    <div className="about-content">
      <h2 className="about-title">About VeriFlux Chain</h2>

      <p className="about-description">
        VeriFlux Chain is a decentralized certificate verification system designed 
        to eliminate fraud, enhance trust, and streamline authentication processes 
        using cutting-edge blockchain technology.
      </p>

      <div className="about-cards">
        {/* Mission Card */}
        <div className="about-card">
          <h3 className="about-card-title">Our Mission</h3>
          <p className="about-card-text">
            Our mission is to provide a secure and verifiable solution for institutions, 
            employers, and individuals to validate credentials with confidence.
          </p>
        </div>

        {/* Vision Card */}
        <div className="about-card">
          <h3 className="about-card-title">Our Vision</h3>
          <p className="about-card-text">
            We envision a future where academic and professional achievements are 
            authenticated seamlessly, reducing fraudulent claims and increasing transparency.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose VeriFlux Chain */}
<section id="why-veriflux" className="why-veriflux-section">
  <h2 className="why-veriflux-title">Why Choose VeriFlux Chain?</h2>
  <p className="why-veriflux-description">
    VeriFlux Chain revolutionizes certificate verification with a secure, 
    decentralized, and fraud-resistant platform.
  </p>

  <div className="why-veriflux-container">
    {/* Advanced Security */}
    <div className="why-veriflux-card">
      {/* <img src="secure-icon.png" alt="Security Icon" className="why-veriflux-icon" /> */}
      <MdOutlineSecurity className="feature-icon" size={40} color="purple" />
      <h3>Advanced Security</h3>
      <p>Utilizes cryptographic hashing and decentralized technology to prevent certificate forgery and unauthorized modifications.</p>
      <p>Ensures secure document uploads with automatic verification of authenticity.</p>
    </div>

    {/* Global Accessibility */}
    <div className="why-veriflux-card">
      {/* <img src="global-icon.png" alt="Global Icon" className="why-veriflux-icon" /> */}
      <FaGlobe className="feature-icon" size={40} color="blue" />
      <h3>Global Accessibility</h3>
      <p>Verify certificates instantly from anywhere in the world with seamless online access.</p>
      <p>Real-time tracking enables users to monitor the status of certificate submissions effortlessly.</p>
    </div>

    {/* Immutable Records */}
    <div className="why-veriflux-card">
      {/* <img src="immutable-icon.png" alt="Immutable Records Icon" className="why-veriflux-icon" /> */}
      <FaClock className="feature-icon" size={40} color="black" />
      <h3>Immutable Records</h3>
      <p>All certificates are permanently recorded on a tamper-proof decentralized ledger, ensuring long-term validity.</p>
      <p>Institutions can easily issue certificates with verifiable details, enhancing trust and transparency.</p>
    </div>

    {/* Decentralized & Scalable */}
    <div className="why-veriflux-card">
      {/* <img src="scalable-icon.png" alt="Scalability Icon" className="why-veriflux-icon" /> */}
      <FaExpand className="feature-icon" size={40} color="teal" />
      <h3>Decentralized & Scalable</h3>
      <p>Built on the Internet Computer (ICP), offering high reliability, efficiency, and scalability for seamless verification.</p>
      <p>Designed to accommodate a growing number of users without compromising performance.</p>
    </div>
  </div>
</section>


{/* Meet the Team Section */}
<TeamSection />




      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} VeriFlux Chain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;






