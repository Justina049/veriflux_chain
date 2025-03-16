import React from 'react';

function CertificateList({ certificates, loading, onRefresh }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Certificates</h2>
        <button
          onClick={onRefresh}
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading certificates...</p>
        </div>
      ) : certificates.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No certificates found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.hash}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg text-blue-600 mb-2">{cert.program}</h3>
              <p className="text-sm mb-1"><strong>Recipient:</strong> {cert.recipient}</p>
              <p className="text-sm mb-1"><strong>Issuer:</strong> {cert.issuer}</p>
              <p className="text-sm mb-1">
                <strong>Date:</strong> {new Date(Number(cert.issuedAt) / 1000000).toLocaleString()}
              </p>
              <p className="text-sm mb-1">
                <strong>Status:</strong> 
                <span className={cert.status === 'Valid' ? 'text-green-600' : 'text-red-600'}>
                  {cert.status}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-2 truncate">
                <strong>Hash:</strong> {cert.hash}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CertificateList;