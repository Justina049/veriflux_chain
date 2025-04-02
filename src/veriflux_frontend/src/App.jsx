// // import React, { useState, useEffect } from 'react';
// import { veriflux_backend } from '../../declarations/veriflux_backend';
// import IssueCertificate from './componentss/IssueCertificate';
// import VerifyCertificate from './componentss/VerifyCertificate';
// import CertificateList from './componentss/CertificateList'
// import './index.scss';

// function App() {
  
//   const [activeTab, setActiveTab] = useState('issue');
//   const [certificates, setCertificates] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCertificates = async () => {
//     try {
//       setLoading(true);
//       const result = await veriflux_backend.listCertificates();
//       setCertificates(result);
//     } catch (error) {
//       console.error('Error fetching certificates:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   return (
//     <div className="app-container">
//       <div className="content-wrapper">
//         <h1 className="page-title">Certificate Management System</h1>

//         {/* Tabs */}
//         <div className="tabs">
//           <button
//             className={`tab-button ${activeTab === 'issue' ? 'active' : ''}`}
//             onClick={() => setActiveTab('issue')}
//           >
//             Issue Certificate
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'verify' ? 'active' : ''}`}
//             onClick={() => setActiveTab('verify')}
//           >
//             Verify Certificate
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
//             onClick={() => setActiveTab('list')}
//           >
//             List Certificates
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className="tab-content">
//           {activeTab === 'issue' && (
//             <IssueCertificate onCertificateIssued={fetchCertificates} />
//           )}
//           {activeTab === 'verify' && <VerifyCertificate />}
//           {activeTab === 'list' && (
//             <CertificateList
//               certificates={certificates}
//               loading={loading}
//               onRefresh={fetchCertificates}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentss/Navbar";
import HeroSection from "./componentss/HeroSection";
import IssueCertificate from "./pages/IssueCertificate/IssueCertificate";
import VerifyCertificate from "./pages/VerifyCertificate/VerifyCertificate";
import CertificateList from "./pages/CertificateList/CertificateList";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Particles from "./componentss/Particles";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/issue" element={<IssueCertificate />} />
          <Route path="/verify" element={<VerifyCertificate />} />
          <Route path="/list" element={<CertificateList />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
