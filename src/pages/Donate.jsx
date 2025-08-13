import React, { useState } from "react";
import { Link } from "react-router-dom";
import donate1 from "../assets/donate1.png";
import donate2 from "../assets/donate2.png";
import donate3 from "../assets/donate3.png";
import donate4 from "../assets/donate4.png";
import donate5 from "../assets/donate5.png";
import donate6 from "../assets/donate6.png";
import donate7 from "../assets/donate7.png";
import donate8 from "../assets/donate8.png";
import unicef from "../assets/unicef.png";
import habitat from "../assets/habitat.png";
import bgImage from "../assets/volunteer-bg.png";

const donations = [
  {
    id: 1,
    image: donate1,
    title: "Myanmar Flood Relief Aid",
    description:
      "Severe monsoon flooding in Myanmar has displaced thousands. Your donation provides emergency food, clean water, and temporary shelter to affected families.",
    date: "23rd July, 2025",
    org: "UNICEF",
    orgLogo: unicef,
  },
  {
    id: 2,
    image: donate2,
    title: "Rebuild Schools Destroyed by Natural Disasters",
    description:
      "Storms and floods have destroyed many schools across Myanmar. Your donation helps rebuild safe learning spaces and get students back to school.",
    date: "23rd July, 2025",
    org: "UNICEF",
    orgLogo: unicef,
  },
  {
    id: 3,
    image: donate3,
    title: "Donate for Medical Aid",
    description:
      "Your funds support life-saving equipment and medicine delivery to health centers in critical zones.",
    date: "23rd July, 2025",
    org: "UNICEF",
    orgLogo: unicef,
  },
  {
    id: 4,
    image: donate4,
    title: "Help Children with Disabilities Thrive",
    description:
      "Children with disabilities in Myanmar need specialized care and tools for learning and mobility. Your donation empowers them to reach their full potential.",
    date: "25th July, 2025",
    org: "UNICEF",
    orgLogo: unicef,
  },
  {
    id: 5,
    image: donate5,
    title: "Provide Clean Drinking Water to Remote Villages",
    description:
      "Some communities in Myanmar still rely on unsafe water sources. Your support helps install safe, local water systems to improve health and hygiene.",
    date: "23rd July, 2025",
    org: "UNICEF",
    orgLogo: unicef,
  },
  {
    id: 6,
    image: donate6,
    title: "Help Farmers Recover from Crop Loss",
    description:
      "Cyclones and floods have destroyed farmlands in Myanmar. Your support provides seeds, tools, and training for farmers to restart their livelihoods.",
    date: "25th July, 2025",
    org: "Habitat for Humanity",
    orgLogo: habitat,
  },
  {
    id: 7,
    image: donate7,
    title: "Support Education in Rural Myanmar",
    description:
      "Many children in remote areas of Myanmar lack access to quality education. Your support helps provide school supplies, uniforms, and safe classrooms.",
    date: "23rd July, 2025",
    org: "UNICEF",
    orgLogo: unicef,
  },
  {
    id: 8,
    image: donate8,
    title: "Feed Families in Urban Poor Communities",
    description:
      "Many families in Yangon’s low-income neighborhoods struggle to afford daily meals. Your donation helps distribute essential food packs to those in need.",
    date: "25th July, 2025",
    org: "Habitat for Humanity",
    orgLogo: habitat,
  },
];

export default function Donate() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("Recent");
  const [search, setSearch] = useState("");

  const filteredDonations = donations.filter((item) => {
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
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
          Donate & Support
      </h1>
      
      {/* Filter on top */}

      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 flex-wrap bg-transparent p-4 rounded-lg">
          {/* Category Filter */}
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

          {/* Location Filter */}
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

          {/* Sort Filter */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:outline-none focus:ring-pink-300 shadow-sm w-full md:w-auto"
          >
            <option value="Recent">Recent</option>
            <option value="Most Engaged">Most Engaged</option>
          </select>

          {/* Search Input with Icon */}
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



      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {donations.map((donation) => (
          <Link
            to={`/donate/${donation.id}`}
            key={donation.id}
            className="block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-300"
          >
            <img
              src={donation.image}
              alt={donation.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{donation.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{donation.description}</p>
              <p className="text-gray-500 text-xs mb-4">{donation.date}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src={donation.orgLogo} alt={donation.org} className="h-5" />
                </div>
                <span className="text-[#F180FE] text-sm font-semibold hover:underline">
                  Donate
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination (right-aligned) */}
      <div className="flex justify-end max-w-6xl mx-auto px-4 mt-12 mb-20 space-x-4">
        <button className="w-8 h-8 rounded-full bg-[#F180FE] text-white text-sm font-bold">1</button>
        <button className="w-8 h-8 rounded-full border border-[#F180FE] text-[#F180FE] text-sm hover:bg-[#F180FE] hover:text-white">2</button>
        <button className="w-8 h-8 rounded-full border border-[#F180FE] text-[#F180FE] text-sm hover:bg-[#F180FE] hover:text-white">3</button>
        <button className="px-8 py-2 rounded-half border border-[#F180FE] text-[#F180FE] text-sm hover:bg-[#F180FE] hover:text-white">Next</button>
      </div>
    </div>
  );
}
