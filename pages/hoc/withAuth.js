// hoc/withAuth.js
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if the token exists in local storage
      const token = localStorage.getItem("token");
            if (!token) {
        // If token does not exist, redirect to login page
        router.push("/Login");
      }
    }, []);

    // If user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
