import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/auth.module.scss";

export default function LoginForm({ toggleAuthMode }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Store the token in local storage
        localStorage.setItem("token", data.token);
        console.log("Token stored in local storage:", data.token);
        alert("Login successful!");

        // Redirect to /upload page
        router.push('/upload');
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="email">Username:</label>
        <input
          type="text"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className={styles.toggleLink} onClick={toggleAuthMode}>
        Don't have an account? Sign up
      </p>
    </div>
  );
}
