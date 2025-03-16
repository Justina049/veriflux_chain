// import React, { useState } from "react";
// import { AuthClient } from "@dfinity/auth-client";
// import { veriflux_backend } from "declarations/veriflux_backend";

// function App() {
//   const [authClient, setAuthClient] = useState(null);
//   const [identity, setIdentity] = useState(null);
//   const [role, setRole] = useState(null);
//   const [certId, setCertId] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [details, setDetails] = useState("");
//   const [certificate, setCertificate] = useState(null);
//   const [mintStatus, setMintStatus] = useState("");

//   // Authenticate user
//   const login = async () => {
//     const client = await AuthClient.create();
//     await client.login({
//       onSuccess: async () => {
//         const identity = client.getIdentity();
//         setIdentity(identity);
//         setAuthClient(client);

//         // Fetch user role
//         const userRole = await veriflux_backend.getUserRole(identity.getPrincipal().toString());
//         setRole(userRole);
//       },
//     });
//   };

//   // Register user as issuer or verifier
//   const registerUser = async (role) => {
//     await veriflux_backend.registerUser(role);
//     setRole(role);
//   };

//   // Mint a certificate
//   const mintCertificate = async () => {
//     const response = await veriflux_backend.mintCertificate(certId, recipient, details);
//     setMintStatus(response);
//   };

//   // Verify a certificate
//   const verifyCertificate = async () => {
//     const result = await veriflux_backend.verifyCertificate(certId);
//     setCertificate(result);
//   };

//   return (
//     <div className="container">
//       <h1>VeriFlux Certificate Verification</h1>

//       {!identity ? (
//         <button onClick={login}>Login</button>
//       ) : (
//         <>
//           <p>Logged in as: {identity.getPrincipal().toString()}</p>
//           {role ? <p>Role: {role}</p> : (
//             <>
//               <button onClick={() => registerUser("issuer")}>Register as Issuer</button>
//               <button onClick={() => registerUser("verifier")}>Register as Verifier</button>
//             </>
//           )}

//           {role === "issuer" && (
//             <div>
//               <h2>Mint Certificate</h2>
//               <input type="text" placeholder="Certificate ID" onChange={(e) => setCertId(e.target.value)} />
//               <input type="text" placeholder="Recipient" onChange={(e) => setRecipient(e.target.value)} />
//               <input type="text" placeholder="Details" onChange={(e) => setDetails(e.target.value)} />
//               <button onClick={mintCertificate}>Mint</button>
//               {mintStatus && <p style={{ color: "green" }}>Status: {mintStatus}</p>}
//             </div>
//           )}

//           <div>
//             <h2>Verify Certificate</h2>
//             <input type="text" placeholder="Certificate ID" onChange={(e) => setCertId(e.target.value)} />
//             <button onClick={verifyCertificate}>Verify</button>
//             {certificate && (
//               <div>
//                 <p>ID: {certificate.id}</p>
//                 <p>Issuer: {certificate.issuer}</p>
//                 <p>Recipient: {certificate.recipient}</p>
//                 <p>Details: {certificate.details}</p>
//                 <p><strong>Hash:</strong> {certificate.hash}</p>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import { AuthClient } from "@dfinity/auth-client";
// import { veriflux_backend } from "declarations/veriflux_backend";

// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import MintCertificate from "./components/MintCertificate";
// import VerifyCertificate from "./components/VerifyCertificate";
// import "./components/styles.css"; // Import the shared CSS file

// function App() {
//   const [authClient, setAuthClient] = useState(null);
//   const [identity, setIdentity] = useState(null);
//   const [role, setRole] = useState(null);
//   const [certId, setCertId] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [details, setDetails] = useState("");
//   const [certificate, setCertificate] = useState(null);
//   const [mintStatus, setMintStatus] = useState("");

//   // Authenticate user
//   const login = async () => {
//     const client = await AuthClient.create();
//     await client.login({
//       onSuccess: async () => {
//         const identity = client.getIdentity();
//         setIdentity(identity);
//         setAuthClient(client);

//         // Fetch user role
//         const userRole = await veriflux_backend.getUserRole(
//           identity.getPrincipal().toString()
//         );
//         setRole(userRole);
//       },
//     });
//   };

//   // Register user as issuer or verifier
//   const registerUser = async (role) => {
//     await veriflux_backend.registerUser(role);
//     setRole(role);
//   };

//   // Mint a certificate
//   const mintCertificate = async () => {
//     const response = await veriflux_backend.mintCertificate(
//       certId,
//       recipient,
//       details
//     );
//     setMintStatus(response);
//   };

//   // Verify a certificate
//   const verifyCertificate = async () => {
//     const result = await veriflux_backend.verifyCertificate(certId);
//     setCertificate(result);
//   };

//   return (
//     <div className="app">
//       {!identity ? (
//         <Login onLogin={login} />
//       ) : (
//         <>
//           <Home principal={identity.getPrincipal().toString()} role={role} />
//           {!role ? (
//             <Register onRegister={registerUser} />
//           ) : (
//             <>
//               {role === "issuer" && (
//                 <MintCertificate
//                   onMint={mintCertificate}
//                   status={mintStatus}
//                   setCertId={setCertId}
//                   setRecipient={setRecipient}
//                   setDetails={setDetails}
//                 />
//               )}
//               <VerifyCertificate
//                 onVerify={verifyCertificate}
//                 certificate={certificate}
//                 setCertId={setCertId}
//               />
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;








// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import HomePage from "./components/Home";
// import Login from "./pages/Login";
// import ContactUs from "./pages/ContactUs";


// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<LandingPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contact" element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// }







import React, { useState, useEffect } from 'react';
import { veriflux_backend } from '../../declarations/veriflux_backend';
// import { certificate_backend } from '../../declarations/veriflux_backend';
import IssueCertificate from './componentss/IssueCertificate';
import VerifyCertificate from './componentss/VerifyCertificate';
import CertificateList from './componentss/CertificateList'

function App() {
  const [activeTab, setActiveTab] = useState('issue');
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const result = await certificate_backend.listCertificates();
      setCertificates(result);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Certificate Management System
        </h1>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'issue'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('issue')}
          >
            Issue Certificate
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'verify'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('verify')}
          >
            Verify Certificate
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'list'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('list')}
          >
            List Certificates
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'issue' && (
            <IssueCertificate onCertificateIssued={fetchCertificates} />
          )}
          {activeTab === 'verify' && <VerifyCertificate />}
          {activeTab === 'list' && (
            <CertificateList 
              certificates={certificates} 
              loading={loading} 
              onRefresh={fetchCertificates} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;