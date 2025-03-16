import React, { useState } from 'react';
import { certificate_backend } from '../../../declarations/certificate_backend';

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
      const verificationResult = await certificate_backend.verifyCertificate(hash);
      setResult(verificationResult);
    } catch (err) {
      setError(err.message || 'An error occurred while verifying the certificate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Verify Certificate</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hash" className="block text-sm font-medium text-gray-700 mb-1">
            Certificate Hash
          </label>
          <input
            type="text"
            id="hash"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                placeholder="Enter certificate hash"
            />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
            {loading ? 'Verifying...' : 'Verify Certificate'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {result && result.certificate && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <h3 className="font-semibold mb-2">Certificate Verified!</h3>
          <p><strong>Hash:</strong> {result.certificate.hash}</p>
          <p><strong>Issuer:</strong> {result.certificate.issuer}</p>
          <p><strong>Recipient:</strong> {result.certificate.recipient}</p>
          <p><strong>Program:</strong> {result.certificate.program}</p>
          <p><strong>Issued At:</strong> {new Date(Number(result.certificate.issuedAt) / 1000000).toLocaleString()}</p>
          <p><strong>Status:</strong> {result.certificate.status}</p>
          <p><strong>Certified:</strong> {result.certified ? 'Yes' : 'No'}</p>
        </div>
      )}
      
      {result && !result.certificate && (
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          Certificate not found
        </div>
      )}
    </div>
  );
}

export default VerifyCertificate;