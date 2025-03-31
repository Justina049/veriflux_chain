import React, { useState, useEffect } from 'react';
// import { veriflux_backend } from '../../declarations/veriflux_backend';
import { veriflux_backend } from '../../../declarations/veriflux_backend';
// import './Dashboard.scss';

function Dashboard() {
  const [stats, setStats] = useState({
    totalCertificates: 0,
    uniqueIssuers: 0,
    uniqueRecipients: 0,
    recentCertificates: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const certificates = await veriflux_backend.listCertificates();
      const uniqueIssuers = new Set(certificates.map(cert => cert.issuer)).size;
      const uniqueRecipients = new Set(certificates.map(cert => cert.recipient)).size;
      
      setStats({
        totalCertificates: certificates.length,
        uniqueIssuers,
        uniqueRecipients,
        recentCertificates: certificates.slice(-5).reverse(),
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard Analytics</h2>
      {loading ? <p>Loading...</p> : (
        <div className="stats">
          <div className="stat-box">📜 Total Certificates: {stats.totalCertificates}</div>
          <div className="stat-box">👥 Unique Issuers: {stats.uniqueIssuers}</div>
          <div className="stat-box">🎓 Unique Recipients: {stats.uniqueRecipients}</div>
        </div>
      )}
      <h3>Recent Certificates</h3>
      <ul>
        {stats.recentCertificates.map((cert, index) => (
          <li key={index}>{cert.program} issued to {cert.recipient} by {cert.issuer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
