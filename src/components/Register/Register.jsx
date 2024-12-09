import React, { useState } from "react";
import "./register.css";

import RegisterImage from ".././../assets/Images/registerPageImage.png";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      <div className="registerParentContainer">
        <div className="registerChildContainer">
          <h1 className="registerHeading">Sign Up</h1>
          <div className="registerForm">
            <form action="">
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Enter Name"
              />
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
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                placeholder="Confirm Your Password"
              />
            </form>
            <div className="register__formImage">
              <img src={RegisterImage} alt="Image" />
            </div>
          </div>
          <NavLink to={"/api/v1/login"} className="alreadyRegister">
            Already register
          </NavLink>
          <button
            className="registerButton"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
