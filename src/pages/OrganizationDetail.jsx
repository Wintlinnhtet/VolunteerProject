import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import org1 from "../assets/org1.png";
import vol1 from "../assets/vol1.png";
import vol2 from "../assets/vol2.png";
import vol3 from "../assets/vol3.png";
import vol4 from "../assets/vol4.png";
import unicef from "../assets/unicef.png";
import org_photo1 from "../assets/org_photo1.png";
import org_photo2 from "../assets/org_photo2.png";
import leader1 from "../assets/leader1.png";
import leader2 from "../assets/leader2.png";
import leader3 from "../assets/leader3.png";

const OrganizationDetail = () => {
  const { id } = useParams(); // Get org ID from route
  const [organization, setOrganization] = useState(null);

  // Example: Fetch org data from backend (replace with real API later)
  useEffect(() => {
    // Simulate backend fetch
    const fetchOrganization = async () => {
      // Replace this static data with actual API call later
      const orgData = {
        id,
        name: "UNICEF Myanmar",
        startedDate: "April, 1950",
        status: "Active",
        region: "Yangon, Myanmar",
        activitiesCount: 12,
        logo: org1,
        activities: [
          {
            id: 1,
            image: [vol1],
            title: "Myanmar Flood Relief Aid",
            description:
              "Severe monsoon flooding in Myanmar has displaced thousands. Your donation provides emergency food, clean water, and shelter.",
            date: "28th July, 2025",
            type: "donate",
          },
          {
            id: 2,
            image: [vol2],
            title: "Answer the Call: Help Rebuild After the Floods",
            description:
              "Communities are struggling after devastating floods. Join our volunteer efforts to support families and help rebuild.",
            date: "25th July, 2025",
            type: "apply",
          },
          {
            id: 3,
            image: [vol3],
            title: "Spread Knowledge, Spark Change",
            description:
              "Join our volunteer efforts to deliver aid, support families, and help children continue their education.",
            date: "23rd July, 2025",
            type: "apply",
          },
          {
            id: 4,
            image: [vol4],
            title: "Rebuild Schools Destroyed by Natural Disasters",
            description:
              "Storms and floods have destroyed many schools. Your donation helps rebuild safe learning spaces.",
            date: "23rd July, 2025",
            type: "donate",
          },
        ],
        
      };
      setOrganization(orgData);
    };

    fetchOrganization();
  }, [id]);

  if (!organization) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
{/* Top Section */}
<div className="flex flex-col md:flex-row w-full mb-10 rounded-xl overflow-hidden min-h-[250px]">
  {/* Left Info */}
  <div className="w-full md:w-1/2 bg-[#FEE6FF] p-8 flex flex-col justify-center">
    <h1 className="text-3xl font-bold mb-6">{organization.name}</h1>
    <div className="grid grid-cols-2 gap-y-6">
      <div>
        <p className="text-sm">Started Date</p>
        <p className="font-semibold">{organization.startedDate}</p>
      </div>
      <div>
        <p className="text-sm">Status</p>
        <p className="font-semibold flex items-center">
          {organization.status}
          <span className="ml-2 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </p>
      </div>
      <div>
        <p className="text-sm">Region</p>
        <p className="font-semibold">{organization.region}</p>
      </div>
      <div>
        <p className="text-sm">Activities</p>
        <p className="font-semibold">{organization.activitiesCount}</p>
      </div>
    </div>
  </div>

  {/* Right Logo */}
  <div className="w-full md:w-1/2">
    <img
      src={organization.logo}
      alt={organization.name}
      className="w-full h-full object-cover"
    />
  </div>
</div>



  {/* Right Logo
  <div className="w-full md:w-1/2">
    <img
      src={organization.logo}
      alt={organization.name}
      className="w-full h-full object-cover"
    />
  </div>
</div> */}



{/* Activities Section */}
<div className="mb-10 flex justify-between items-center max-w-6xl mx-auto px-4">
  <div className="flex-1 flex justify-center">
    <h2 className="text-2xl font-bold text-gray-800">Activities</h2>
  </div>
  <a
    href="#"
    className="text-sm text-[#F180FE] hover:underline whitespace-nowrap"
  >
    See all
  </a>
</div>

{/* Activities Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
  {organization.activities.map((activity) => (
    <div
      key={activity.id}
      className="block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-300"
    >
      {/* Image */}
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">{activity.title}</h2>
        <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
        <p className="text-gray-500 text-xs mb-4">{activity.date}</p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={unicef}
              alt={organization.name}
              className="h-5"
            />
          </div>
          <span
            className={`text-sm font-semibold hover:underline ${
              activity.type === "donate" ? "text-[#F180FE]" : "text-[#F180FE]"
            }`}
          >
            {activity.type === "donate" ? "Donate" : "Apply"}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

{/* About Section */}
<div className="max-w-6xl mx-auto px-4 py-16 text-center">
  {/* Top Label */}
  <span className="px-4 py-2 bg-[#FBDCFF] text-[#F180FE] rounded-half text-sm font-medium">
    About us
  </span>

  {/* Description */}
  <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
    Works to protect children’s rights through education, health care,
    and emergency support across Myanmar. Works to protect children’s
    rights through education, health care, and emergency support
    across Myanmar.
  </p>

  {/* Big Heading */}
  <h2 className="mt-10 text-3xl md:text-4xl font-bold text-gray-900">
    Since 1946
  </h2>

   {/* Two Column Layout */}
   <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Left Image */}
    <div>
      <img
        src={org_photo1}
        alt="History"
        className="rounded-xl w-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="flex flex-col justify-start text-left">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Changing lives, one step at a time
      </h3>
      <p className="text-gray-600 mb-6">
        At Hopely, we believe that even the smallest actions can spark
        meaningful change.
      </p>
      <img
        src={org_photo2}
        alt="Modern Impact"
        className="rounded-xl w-full object-cover"
      />
    </div>
  </div>

  {/* Bottom Button */}
  {/* <div className="mt-12">
    <button className="px-6 py-2 bg-[#FBDCFF] text-[#F180FE] rounded-half font-medium hover:bg-pink-200 transition">
      Meet The Team
    </button>
  </div> */}
</div>

{/* Meet the Team Section */}
<div className="max-w-6xl mx-auto px-4 py-8 text-center">
  {/* Top Label */}
  <span className="px-6 py-2 bg-[#FBDCFF] text-[#F180FE] rounded-half text-sm font-medium">
    Meet The Team
  </span>

  {/* Heading */}
  <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
    Team Leaders
  </h2>

  {/* Team Cards */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
    {/* Member 1 */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={leader1}
        alt="Yasumasa Kimura"
        className="rounded-xl w-full h-72 object-cover"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Yasumasa Kimura</h3>
        <p className="text-sm text-gray-600">Myanmar Representative</p>
      </div>
    </div>

    {/* Member 2 */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={leader2}
        alt="Marcoluigi Corsi"
        className="rounded-xl w-full h-72 object-cover"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Marcoluigi Corsi</h3>
        <p className="text-sm text-gray-600">Deputy Representative</p>
      </div>
    </div>

    {/* Member 3 */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={leader3}
        alt="Sarah Shelby"
        className="rounded-xl w-full h-72 object-cover"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Sarah Shelby</h3>
        <p className="text-sm text-gray-600">Programme Specialist</p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};

export default OrganizationDetail;
