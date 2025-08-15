<<<<<<< HEAD
import './App.css';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Volunteering from "./pages/Voluteering";
import VolunteerDetail from "./pages/VolunteerDetail";
import Footer from './components/Footer';
import Donate from "./pages/Donate";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
>>>>>>> fa432265e0e89cfec79540c973d05f743809b6de
    </Router>
  );
}

export default App;
