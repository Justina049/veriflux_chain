import React, { useState } from "react";
import { veriflux_backend } from "../api/veriflux_backend"; // Import backend connection
import "./verifyCertificate.css"; // 

const VerifyCertificate = () => {
  const [hash, setHash] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setError("");
    setCertificate(null);

    try {
      const result = await veriflux_backend.verifyCertificate(hash);

      if (result.certificate.length === 0) {
        setError("❌ Certificate not found!");
      } else {
        setCertificate(result.certificate[0]);
      }
    } catch (err) {
      setError("⚠️ Error verifying certificate");
      console.error(err);
    }
  };

  return (
    <div className="verify-container">
      <h2>🔍 Verify Certificate</h2>
      <input
        type="text"
        placeholder="Enter Certificate Hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>

      {error && <p className="verify-error">{error}</p>}

      {certificate && (
        <div className="verify-certificate">
          <h3>✅ Certificate Details</h3>
          <p><strong>Issuer:</strong> {certificate.issuer}</p>
          <p><strong>Recipient:</strong> {certificate.recipient}</p>
          <p><strong>Program:</strong> {certificate.program}</p>
          <p><strong>Issued At:</strong> {certificate.issuedAt.toString()}</p>
          <p><strong>Status:</strong> {certificate.status}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyCertificate;
