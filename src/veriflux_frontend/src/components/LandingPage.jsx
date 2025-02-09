
import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import "./LandingPage.css"; // Import the CSS file

export default function App() {
  const [identity, setIdentity] = useState(null);
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
      if (await client.isAuthenticated()) {
        setIdentity(client.getIdentity());
      }
    };
    initAuth();
  }, []);

  const login = async () => {
    if (!authClient) return;

    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: async () => {
        setIdentity(authClient.getIdentity());
        window.location.href = "/home"; // Redirect to home page
      },
      onError: (err) => console.error("Login failed:", err),
    });
  };

  return (
    <div className="landing-container">
      <div className="hero">
        <h1>Welcome to VeriFlux Chain</h1>
        <p>Secure, Transparent, and Decentralized Certificate Verification</p>
        <button onClick={login} className="login-button">
          Lauch App
        </button>
      </div>
    </div>
  );
}
