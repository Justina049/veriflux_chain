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














