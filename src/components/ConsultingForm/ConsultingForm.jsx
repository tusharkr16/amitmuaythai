import React, { useState } from "react";
import "./consultingForm.css";

const ConsultingForm = () => {
  return (
    <div className="consultingForm__container">
      <div className="consultingForm">
        <form>
          <h1>Diet Consulting Form</h1>
          <div className="consultingForm__inputs">
            <div className="consultingForm__input__name">
              <label>Name</label>
              <input
                className="firstName__input"
                placeholder="First Name"
                type="text"
              />
              <input placeholder="Last Name" type="text" />
            </div>
            <div className="consultingForm__input__age">
              <label>Age</label>
              <input placeholder="Age" type="number" />
            </div>
            <div className="consultingForm__input__dob">
              <label>Date of Birth</label>
              <input type="date" />
            </div>
            <div className="consultingForm__input__phone">
              <label>Phone Number</label>
              <input placeholder="+91 " type="text" />
            </div>
            <div className="consultingForm__input__email">
              <label>Email</label>
              <input placeholder="Email" type="email" />
            </div>
            <div className="consultingFomr__input__height">
              <label>Current Height</label>
              <input placeholder="Height" type="text" />
            </div>
            <div className="consultingFomr__input__weight">
              <label>Current Weight</label>
              <input placeholder="Weight" type="text" />
            </div>
          </div>
          <button type="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultingForm;
