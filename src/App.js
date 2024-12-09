import React from "react";
import "./components/FontAwsomeIcon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import ReadMore from "./components/ReadMore/ReadMore";
import ReadMoreIntro from "./components/ReadMoreIntro/ReadMoreIntro";
import ConsultingForm from "./components/ConsultingForm/ConsultingForm";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/v1/home" element={<Home />} />
          <Route path="/api/v1/login" element={<Login />} />
          <Route path="/api/v1/register" element={<Register />} />
          <Route path="/api/v1/contact-us" element={<ContactUs />} />
          <Route path="/api/v1/read-more" element={<ReadMore />} />
          <Route path="/api/v1/read-more-intro" element={<ReadMoreIntro />} />
          <Route path="/api/v1/consulting-form" element={<ConsultingForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
