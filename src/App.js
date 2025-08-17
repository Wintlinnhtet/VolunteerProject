import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Volunteering from "./pages/Voluteering";
import VolunteerDetail from "./pages/VolunteerDetail";
import Footer from './components/Footer';
import Donate from "./pages/Donate";
import DonationDetail from "./pages/DonationDetail";
import Organizations from "./pages/Organization";
import OrganizationDetail from "./pages/OrganizationDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/organization" element={<Organizations />} />
        <Route path="/organizations/:id" element={<OrganizationDetail />} />
        <Route path="/volunteer/:id" element={<VolunteerDetail />} />
        <Route path="/donation" element={<Donate />} />
        <Route path="/donation/:id" element={<DonationDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
