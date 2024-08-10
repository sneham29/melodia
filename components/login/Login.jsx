import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../login/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Added state for role selection
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Submitted email:", email);
    console.log("Submitted password:", password);
    console.log("Selected role:", role);

    if (!email || !password || !role) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
        role, // Include role in the request body
      });

      if (response.status === 200) {
        const userRole = response.data.role; // Get the user's role from the response
        alert("Login successful!");

        // Redirect based on the role
        if (userRole === "admin") {
          history.push("/admin");
        } else if (userRole === "staff") {
          history.push("/staff");
        } else {
          history.push("/home");
        }
      } else {
        setError("Invalid email, password, or role");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="heading">Welcome to Melodia!</h1>
      <div className="login-form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="****"
            id="password"
            name="password"
            required
          />
          <label htmlFor="role">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            id="role"
            name="role"
            required
          >
            <option value="user">User</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <button
          className="register-link-btn"
          onClick={() => history.push("/register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

export default Login;
