import React, { useState } from "react";
import "./login.css";

import LoginImage from ".././../assets/Images/loginPageImage.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      <div className="loginParentContainer">
        <div className="loginChildContainer">
          <h1 className="loginHeading">Sign In</h1>
          <div className="loginForm">
            <div className="login__formImage">
              <img src={LoginImage} alt="Image" />
            </div>
            <form action="">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter Email"
              />
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Enter Password"
              />
            </form>
          </div>

          <NavLink to={"/api/v1/register"} className="Register">
            Create an account
          </NavLink>

          <button className="loginButton" type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
