import React from "react";
import { useAuth } from "./Authprovider";

function AuthenticatedComponent() {
  const { loginData } = useAuth();

  // Example usage: Display different content based on authentication state
  return (
    <div>
      {loginData ? (
        <p>Welcome, {loginData.username}!</p>
      ) : (
        <p>Please log in to access this content.</p>
      )}
    </div>
  );
}

export default AuthenticatedComponent;
