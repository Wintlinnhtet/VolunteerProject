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
        <Route path="/volunteer/:id" element={<VolunteerDetail />} />
        <Route path="/donation" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Add more routes like <Route path="/volunteer" element={<VolunteerJobs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
