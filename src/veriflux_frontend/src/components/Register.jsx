import React from "react";
import './styles.css';

const Register = ({ onRegister }) => {
  return (
    <div className="container register-container">
      <h2>Register</h2>
      <button onClick={() => onRegister("issuer")}>Register as Issuer</button>
      <button onClick={() => onRegister("verifier")}>Register as Verifier</button>
    </div>
  );
};

export default Register;
