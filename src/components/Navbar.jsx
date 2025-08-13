import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/volunteers.jpg";
import bell from "../assets/noti.png";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#F180FE] leading-snug border-b-2 border-[#F180FE] pb-1"
      : "hover:text-[#F180FE] leading-snug";

  return (
    <nav className="w-full bg-white shadow-sm px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" /> */}
        <div className="w-10 h-10 bg-[#F180FE] rounded-full"></div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-14 font-medium text-gray-700">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        <NavLink to="/volunteering" className={navLinkStyle}>Volunteering</NavLink>
        <NavLink to="/donation" className={navLinkStyle}>Donate</NavLink>
        <NavLink to="/organization" className={navLinkStyle}>Organizations</NavLink>
        <NavLink to="/about" className={navLinkStyle}>About</NavLink>
        <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 relative">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="text-gray-700 text-xl hover:text-[#F180FE] focus:outline-none"
        >
          <FiSearch />
        </button>

        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="absolute top-10 right-24 border border-gray-300 rounded px-10 py-3 text-sm shadow-md focus:outline-none focus:ring focus:ring-[#F180FE]"
            autoFocus
          />
        )}

        <img src={bell} alt="Notifications" className="w-5 h-5 cursor-pointer" />
        <UserCircleIcon className="w-8 h-8 text-[#F180FE] cursor-pointer hover:opacity-80" />
      </div>
    </nav>
  );
}
