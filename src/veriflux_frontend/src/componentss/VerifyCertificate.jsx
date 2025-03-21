import React, { useState } from 'react';
import { veriflux_backend } from '../../../declarations/veriflux_backend';
import './VerifyCertificate.scss';

function VerifyCertificate() {
  const [hash, setHash] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const verification = await veriflux_backend.verifyCertificate(hash);
      setResult(verification);
      console.log(result);
    } catch (err) {
      setError(err.message || 'An error occurred during verification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-certificate">
      <h2>Verify Certificate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Certificate Hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify Certificate'}
        </button>
      </form>

      {error && (
        <div className="alert error">{error}</div>
      )}

      {result && (
        <div className="verification-result">
          <h3>Verification Result</h3>
          <p><strong>Certified by System:</strong> {result.certified ? 'Yes' : 'No'}</p>
          <p><strong>Client-side Verification:</strong> {result.valid ? '✅ Verified' : '❌ Not Verified'}</p>
          <p><strong>Hash:</strong> {result.certificate[0]?.hash || 'N/A or Hash o not match'}</p>
          <p><strong>Issuer:</strong> {result.certificate[0]?.issuer || 'N/A'}</p>
          <p><strong>Recipient:</strong> {result.certificate[0]?.recipient || 'N/A'}</p>
          <p><strong>Program:</strong> {result.certificate[0]?.program || 'N/A'}</p>
          <p><strong>Issued At:</strong> 
            {result.certificate[0]?.issuedAt ? 
              new Date(Number(result.certificate[0].issuedAt) / 1_000_000).toLocaleString() 
              : 'Invalid Date'}
          </p>
          <p><strong>Status:</strong> {result.certificate[0]?.status || 'N/A'}</p>
          <p><strong>Verification Status:</strong> {result.valid ? '✅ Valid' : '❌ Invalid or Not Verified'}</p>
        </div>
      )}
    </div>
  );
}

export default VerifyCertificate;
