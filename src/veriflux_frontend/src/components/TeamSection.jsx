import React from "react";
import logo from "../assets/pexels-italo-melo-881954-2379004.jpg"; // Import image properly
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./teamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Marketing Manager",
      image: logo, // Use imported image
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Emily Davis",
      role: "Software Engineer",
      image: logo, // Store inside `public/` folder
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "John Doe",
      role: "Marketing Manager",
      image: logo,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Micheal Clark",
      role: "Marketing Manager",
      image: logo,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Sophia Johnson",
      role: "Product Designer",
      image: logo,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Miki Brown",
      role: "Sales Executive",
      image: logo,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <section className="team-section">
      <div className="team-title">Meet the Team</div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-card-circle">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="team-social">
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
