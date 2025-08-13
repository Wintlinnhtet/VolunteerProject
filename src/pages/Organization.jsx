import { useState } from "react";
import org1 from "../assets/org1.png";
import org2 from "../assets/org2.png";
import org3 from "../assets/org3.png";
import org4 from "../assets/org4.png";
import org5 from "../assets/org5.png";
// import org2 from "../assets/org2.png";


export default function Organizations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Example data
  const organizations = [
    {
      name: "UNICEF Myanmar",
      description:
        "Works to protect children’s rights through education, health care, and emergency support across Myanmar.Works to protect children’s rights through education, health care, and emergency support across Myanmar.Works to protect children’s rights through education, health care, and emergency support across Myanmar.Works to protect children’s rights through education, health care, and emergency support across Myanmar.",
      logo: org1, // adjust your static asset path
      tags: ["Education", "Health", "Children"],
    },
    {
      name: "Save the Children Myanmar",
      description:
        "Works to protect children’s rights through education, health care, and emergency support across Myanmar.Works to protect children’s rights through education, health care, and emergency support across Myanmar.Works to protect children’s rights through education, health care, and emergency support across Myanmar.",
      logo: org2, // adjust your static asset path
      tags: ["Education", "Health", "Children"],
    },
    {
        name: "VSO Myanmar",
        logo: org3, // replace with real
        description:
          "Works to protect children's rights through education, health care, and emergency support across Myanmar.",
        tags: ["Health", "Children"],
      },
      {
        name: "Myanmar Maternal and Child Welfare Association (MMCWA)",
        logo: org4,
        description:
          "Works to protect children's rights through education, health care, and emergency support across Myanmar.",
        tags: ["Health", "Children"],
      },
      {
        name: "Myanmar Red Cross Society",
        logo: org5,
        description:
          "Works to protect children's rights through education, health care, and emergency support across Myanmar.",
        tags: ["Health", "Children"],
      },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-0 md:px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
        Our Partner Organizations
        </h1>
      <p className="text-center text-gray-600 mb-6">
        Connecting you with trusted organization makes a difference in Myanmar
      </p>

      {/* Filters and search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 w-full md:w-auto">
        <select
          className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:outline-none focus:ring-pink-300 shadow-sm w-full md:w-auto"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Children">Children</option>
        </select>
        <div className="flex items-center border rounded px-2 py-2 w-full md:w-80 bg-gray-100 focus:border-pink-300 focus:outline-none shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    
    {/* Divider */}
    <div className="max-w-6xl mx-auto px-4">
        <hr className="mb-8" />
    </div>

      {/* Organization list */}
      <div className="space-y-8">
  {organizations.map((org, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row bg-transparent rounded-xl overflow-hidden h-[300px]"
    >
      {/* Left side - logo */}
      <div className="w-full md:w-1/2 flex items-center justify-start bg-transparent h-full">
        <img
          src={org.logo}
          alt={org.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right side - content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{org.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-6">
            {org.description}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {org.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white text-[#F180FE] rounded-half px-3 py-2 border border-[#F180FE]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="w-fit px-6 py-2 rounded-half bg-[#F180FE] text-white text-sm hover:bg-[#D160E0]">
          Read more
        </button>
      </div>
    </div>
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
