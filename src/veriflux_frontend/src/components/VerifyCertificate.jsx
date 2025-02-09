import React from "react";
import './styles.css';

const VerifyCertificate = ({ onVerify, certificate, setCertId }) => {
  return (
    <div className="container verify-container">
      <h2>Verify Certificate</h2>
      <input
        type="text"
        placeholder="Certificate ID"
        onChange={(e) => setCertId(e.target.value)}
      />
      <button onClick={onVerify}>Verify</button>
      {certificate && (
        <div className="verify-result">
          <p>ID: {certificate.id}</p>
          <p>Issuer: {certificate.issuer}</p>
          <p>Recipient: {certificate.recipient}</p>
          <p>Details: {certificate.details}</p>
          <p><strong>Hash:</strong> {certificate.hash}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyCertificate;
