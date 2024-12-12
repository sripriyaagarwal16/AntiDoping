import React, { useState, useContext } from "react";
import "../components/Login.css";
import googleLogo from "../assets/Google-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/Usercontext"; // Import UserContext for global role management

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState(null); // State to handle error messages
  const navigate = useNavigate();
  const { setRole } = useContext(UserContext); // Access setRole to update global role

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      // Send login request
      const response = await axios.post("http://localhost:5000/login", formData);
      const { user } = response.data; // Extract user data from response

      // Save role in localStorage and update global context
      localStorage.setItem("role", user.role);
      setRole(user.role);

      alert("Login successful!");

      // Navigate based on the user's role
      switch (user.role) {
        case "investigator":
          navigate("/collaborate");
          break;
        case "whistleblower":
          navigate("/whistleblower");
          break;
        case "admin":
          navigate("/admin");
          break;
          case "analyst":
          navigate("/player");
          break;
        default:
          navigate("/"); // Default route if role is not recognized
          break;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Display API error message
      } else {
        setError("An unexpected error occurred. Please try again."); // Handle generic errors
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/209f9b9f036cf2bddace85ace86c63beed66c28a5bb76f538231d564ddbf0173"
          alt="Cyclist"
        />
      </div>
      <div className="login-form-container">
        <h1>
          <span className="highl">Keep calm and avoid doping</span>
        </h1>
        <h2>
          <span className="login">Login</span>
        </h2>

        {/* Display Error Message */}
        {error && <div className="error">{error}</div>}

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />

          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            className="form-input"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="analyst">Analyst</option>
            <option value="investigator">Investigator</option>
            <option value="whistleblower">Whistleblower</option>
          </select>

          <button type="submit" className="form-button">
            Submit
          </button>
          <div className="divider">Or</div>
          <button type="button" className="google-button">
            <img src={googleLogo} alt="Google Logo" className="google-logo" /> Continue with Google
          </button>
          <h4>
            <a href="/signup" className="sign-up">
              SignUp
            </a>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;