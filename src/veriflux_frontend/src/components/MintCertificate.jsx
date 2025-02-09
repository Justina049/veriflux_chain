import React from "react";
import './styles.css';

const MintCertificate = ({ onMint, status, setCertId, setRecipient, setDetails }) => {
  return (
    <div className="container mint-form">
      <h2>Mint a Certificate</h2>
      <input
        type="text"
        placeholder="Certificate ID"
        onChange={(e) => setCertId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipient"
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Details"
        onChange={(e) => setDetails(e.target.value)}
      />
      <button onClick={onMint}>Mint</button>
      {status && <p className="mint-status">{status}</p>}
    </div>
  );
};

export default MintCertificate;
