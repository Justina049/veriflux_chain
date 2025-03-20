// import React, { useState } from 'react';
// import { veriflux_backend } from '../../../declarations/veriflux_backend';
// import './VerifyCertificate.scss';

// function VerifyCertificate() {
//   const [hash, setHash] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     try {
//       const verificationResult = await  veriflux_backend.verifyCertificate(hash);
//       console.log("Raw verification result:", verificationResult);
//       setResult(verificationResult);
//     } catch (err) {
//       setError(err.message || 'An error occurred while verifying the certificate');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="verify-certificate">
//       <h2>Verify Certificate</h2>
      
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="hash">Certificate Hash</label>
//           <input
//             type="text"
//             id="hash"
//             value={hash}
//             onChange={(e) => setHash(e.target.value)}
//             required
//             placeholder="Enter certificate hash"
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Verifying...' : 'Verify Certificate'}
//         </button>
//       </form>

//       {error && (
//         <div className="alert error">
//           {error}
//         </div>
//       )}
      
//       {result && result.certificate && (
//         <div className="alert success">
//           <h3>Certificate Verified!</h3>
//           <p><strong>Hash:</strong> {result.certificate.hash}</p>
//           <p><strong>Issuer:</strong> {result.certificate.issuer}</p>
//           <p><strong>Recipient:</strong> {result.certificate.recipient}</p>
//           <p><strong>Program:</strong> {result.certificate.program}</p>
//           <p><strong>Issued At:</strong> {new Date(Number(result.certificate.issuedAt) / 1000000).toLocaleString()}</p>
//           <p><strong>Status:</strong> {result.certificate.status}</p>
//           <p><strong>Certified:</strong> {result.certified ? 'Yes' : 'No'}</p>
//         </div>
//       )}
      
//       {result && !result.certificate && (
//         <div className="alert warning">
//           Certificate not found
//         </div>
//       )}
//     </div>
//   );
// }

// export default VerifyCertificate;



import React, { useState } from 'react';
import { veriflux_backend } from '../../../declarations/veriflux_backend';
import './VerifyCertificate.scss';

function VerifyCertificate() {
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const verificationResult = await veriflux_backend.verifyCertificate(hash);
      console.log("Raw verification result:", verificationResult);
      setResult(verificationResult);
    } catch (err) {
      setError(err.message || 'An error occurred while verifying the certificate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-certificate">
      <h2>Verify Certificate</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hash">Certificate Hash</label>
          <input
            type="text"
            id="hash"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            required
            placeholder="Enter certificate hash"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify Certificate'}
        </button>
      </form>

      {error && (
        <div className="alert error">
          {error}
        </div>
      )}
      
      {result && (
        <div className="alert">
          <h3>Verification Result</h3>
          <p><strong>Certified by System:</strong> {result.certified ? 'Yes' : 'No'}</p>
          
          {result.certificate ? (
            <>
              <p><strong>Hash:</strong> {result.certificate.hash}</p>
              <p><strong>Issuer:</strong> {result.certificate.issuer}</p>
              <p><strong>Recipient:</strong> {result.certificate.recipient}</p>
              <p><strong>Program:</strong> {result.certificate.program}</p>
              <p><strong>Issued At:</strong> {new Date(Number(result.certificate.issuedAt) / 1000000).toLocaleString()}</p>
              <p><strong>Status:</strong> {result.certificate.status}</p>
            </>
          ) : (
            <p><strong>Certificate:</strong> Not found for the provided hash</p>
          )}
        </div>
      )}
    </div>
  );
}

export default VerifyCertificate;