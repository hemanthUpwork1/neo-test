import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();
  const [accessGranted, setAccessGranted] = useState<boolean>(false);

  useEffect(() => {
    const checkAccess = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect();
      } else {
        try {
          await getAccessTokenSilently();
          setAccessGranted(true);
        } catch (err) {
          console.error("Error getting token", err);
          setAccessGranted(false);
        }
      }
    };

    if (!isLoading) checkAccess();
  }, [isLoading, isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  if (isLoading || accessGranted === null) {
    return <div>Loading...</div>;
  }

  if (!accessGranted) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
