import React, { useState } from "react";
import LoginForm from "../../components/login-Form/loginForm";
import SignupForm from "../../components/signup-Form/signupForm";
import Navbar from "../../components/header/Navbar";

export default function LoginPage() {
  const [authMode, setAuthMode] = useState("login");

  const toggleAuthMode = () => {
    setAuthMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };

  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <br />
      <main>
        <div>
          {authMode === "login" ? (
            <LoginForm toggleAuthMode={toggleAuthMode} />
          ) : (
            <SignupForm toggleAuthMode={toggleAuthMode} />
          )}
        </div>
      </main>
    </React.Fragment>
  );
}
