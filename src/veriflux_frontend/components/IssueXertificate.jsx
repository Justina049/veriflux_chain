import React, { useState } from 'react';
import { certificate_backend } from '../../../declarations/certificate_backend';

function IssueCertificate({ onCertificateIssued }) {
  const [formData, setFormData] = useState({
    issuer: '',
    recipient: '',
    program: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const { issuer, recipient, program } = formData;
      const certificate = await certificate_backend.createCertificate(
        issuer,
        recipient,
        program
      );
      setResult(certificate);
      onCertificateIssued();
      
      // Reset form
      setFormData({
        issuer: '',
        recipient: '',
        program: ''
      });
    } catch (err) {
      setError(err.message || 'An error occurred while issuing the certificate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Issue New Certificate</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="issuer" className="block text-sm font-medium text-gray-700 mb-1">
            Issuer
          </label>
          <input
            type="text"
            id="issuer"
            name="issuer"
            value={formData.issuer}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter issuer name"
          />
        </div>
        
        <div>
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
            Recipient
          </label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipient name"
          />
        </div>
        
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
            Program
          </label>
          <input
            type="text"
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter program name"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Issue Certificate'}
        </button>
      </form>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <h3 className="font-semibold mb-2">Certificate Issued Successfully!</h3>
          <p><strong>Hash:</strong> {result.hash}</p>
          <p><strong>Issuer:</strong> {result.issuer}</p>
          <p><strong>Recipient:</strong> {result.recipient}</p>
          <p><strong>Program:</strong> {result.program}</p>
          <p><strong>Issued At:</strong> {new Date(Number(result.issuedAt) / 1000000).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default IssueCertificate;