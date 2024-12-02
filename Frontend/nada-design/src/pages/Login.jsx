import React from "react";
import "../components/Login.css";
import googleLogo from '../assets/Google-logo.png'; // Replace with the actual path to your image

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Section with Image */}
      <div className="login-image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/209f9b9f036cf2bddace85ace86c63beed66c28a5bb76f538231d564ddbf0173"
          alt="Cyclist"
        />
      </div>

      {/* Right Section with Form */}
      <div className="login-form-container">
        <h1>
          <span className="highl">Keep calm and avoid doping</span>
        </h1>
        <h2>
          <span className="login">Login</span>
        </h2>
        

        <form className="login-form">
          <label htmlFor="userRole">Select User Role</label>
          <select id="userRole" className="form-input">
            <option value="">Select</option>
          </select>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter Email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter Password"
          />

          <button type="submit" className="form-button">
            Submit
          </button>

          <div className="divider">Or</div>

          <button type="button" className="google-button">
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
            Continue with Google
          </button>
          <h4>
          <a href="/signup" className="sign-up">SignUp</a>
          </h4>

        </form>
      </div>
    </div>
  );
};

export default Login;
