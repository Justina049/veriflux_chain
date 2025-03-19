import React from 'react';
import './CertificateList.scss';

function CertificateList({ certificates, loading, onRefresh }) {
  return (
    <div className="certificate-list">
      <div className="header">
        <h2>All Certificates</h2>
        <button onClick={onRefresh} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {loading ? (
        <div className="message">
          <p>Loading certificates...</p>
        </div>
      ) : certificates.length === 0 ? (
        <div className="message">
          <p>No certificates found</p>
        </div>
      ) : (
        <div className="grid">
          {certificates.map((cert) => (
            <div key={cert.hash} className="card">
              <h3>{cert.program}</h3>
              <p><strong>Recipient:</strong> {cert.recipient}</p>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p>
                <strong>Date:</strong> {new Date(Number(cert.issuedAt) / 1000000).toLocaleString()}
              </p>
              <p>
                <strong>Status:</strong>{' '}
                <span className={cert.status === 'Valid' ? 'valid' : 'invalid'}>
                  {cert.status}
                </span>
              </p>
              <p className="hash"><strong>Hash:</strong> {cert.hash}</p>
            </div>
          ))}
        </div>
      )}
    </div>

  );
}

export default CertificateList;