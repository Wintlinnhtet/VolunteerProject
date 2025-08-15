import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vol1 from "../assets/vol1.png";
import vol2 from "../assets/vol2.png";
import vol3 from "../assets/vol3.png";
import vol4 from "../assets/vol4.png";
import vol5 from "../assets/vol5.png";
import vol6 from "../assets/vol6.png";
import vol7 from "../assets/vol7.png";
import vol8 from "../assets/vol8.png";
import unicef from "../assets/unicef.png";
import savethechildren from "../assets/savethechildren.png";
import bgImage from "../assets/volunteer-bg.png";

// Static mock data (will be replaced by backend later)
const staticVolunteerOpportunities = [
  { id: 1, image: vol1, title: "Answer the Call: Help Rebuild After the Floods", description: "Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.", date: "23rd July, 2025", org: "UNICEF", orgLogo: unicef, category: "Education", location: "Yangon"},
  { id: 2, image: vol2, title: "Spread Knowledge, Spark Change", description: "Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.", date: "23rd July, 2025", org: "UNICEF", orgLogo: unicef, category: "Health", location: "Mandalay"},
  { id: 3, image: vol3, title: "Every Child Deserves a Chance", description: "Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.", date: "23rd July, 2025", org: "UNICEF", orgLogo: unicef, category: "Education", location: "Yangon"},
  { id: 4, image: vol4, title: "Volunteer Together, Make a Difference", description: "Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.", date: "23rd July, 2025", org: "UNICEF", orgLogo: unicef, category: "Health", location: "Naypyidaw"},
  { id: 5, image: vol5, title: "Plant Trees for Future", description: "Reforestation programs to restore nature and biodiversity.", date: "23rd July, 2025", org: "Save the Children", orgLogo: savethechildren, category: "Environment", location: "Yangon"},
  { id: 6, image: vol6, title: "Community Cleanup Volunteer", description: "Help organize a local clean-up and waste reduction program.", date: "23rd July, 2025", org: "UNICEF", orgLogo: unicef, category: "Environment", location: "Mandalay"},
  { id: 7, image: vol7, title: "Donate Your Blood", description: "Your blood donation can save lives. Join our blood drive today.", date: "23rd July, 2025", org: "Save the Children", orgLogo: savethechildren, category: "Health", location: "Yangon"},
  { id: 8, image: vol8, title: "Health Check-Up Camps", description: "Join our team to organize free health camps for rural communities.", date: "23rd July, 2025", org: "UNICEF", orgLogo: unicef, category: "Health", location: "Naypyidaw"},
];

export default function Volunteering() {
  const [volunteers, setVolunteers] = useState(staticVolunteerOpportunities);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("Recent");
  const [search, setSearch] = useState("");

  // 🔹 Ready for backend API
  useEffect(() => {
    // Uncomment and adjust URL when backend is ready
    /*
    fetch("https://your-backend-api.com/volunteers")
      .then((res) => res.json())
      .then((data) => setVolunteers(data))
      .catch((err) => console.error("Error fetching volunteers:", err));
    */
  }, []);

  const filteredVolunteers = volunteers.filter((item) => {
    return (
      (category === "" || item.category === category) &&
      (location === "" || item.location === location) &&
      (search === "" || item.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div
      className="min-h-screen py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
        Become Volunteer
      </h1>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 flex-wrap p-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:outline-none focus:ring-pink-300 shadow-sm w-full md:w-auto"
          >
            <option value="">Category</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Environment">Environment</option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:outline-none focus:ring-pink-300 shadow-sm w-full md:w-auto"
          >
            <option value="">Location</option>
            <option value="Yangon">Yangon</option>
            <option value="Mandalay">Mandalay</option>
            <option value="Naypyidaw">Naypyidaw</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:outline-none focus:ring-pink-300 shadow-sm w-full md:w-auto"
          >
            <option value="Recent">Recent</option>
            <option value="Most Engaged">Most Engaged</option>
          </select>

          <div className="relative w-full md:w-auto flex-grow">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:border-pink-300 focus:outline-none shadow-sm w-full"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="mb-8" />
      </div>

      {/* Volunteer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {filteredVolunteers.map((volunteer) => (
          <Link
            to={`/volunteer/${volunteer.id}`}
            key={volunteer.id}
            className="block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-300"
          >
            <img
              src={volunteer.image}
              alt={volunteer.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{volunteer.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{volunteer.description}</p>
              <p className="text-gray-500 text-xs mb-4">{volunteer.date}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={volunteer.orgLogo}
                    alt={volunteer.org}
                    className="h-5"
                  />
                </div>
                <span className="text-[#F180FE] text-sm font-semibold hover:underline">
                  Apply
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end max-w-6xl mx-auto px-4 mt-12 mb-20 space-x-4">
        <button className="w-8 h-8 rounded-full bg-[#F180FE] text-white text-sm font-bold">1</button>
        <button className="w-8 h-8 rounded-full border border-[#F180FE] text-[#F180FE] text-sm hover:bg-[#F180FE] hover:text-white">2</button>
        <button className="w-8 h-8 rounded-full border border-[#F180FE] text-[#F180FE] text-sm hover:bg-[#F180FE] hover:text-white">3</button>
        <button className="px-8 py-2 rounded-half border border-[#F180FE] text-[#F180FE] text-sm hover:bg-[#F180FE] hover:text-white">Next</button>
      </div>
    </div>
  );
}
