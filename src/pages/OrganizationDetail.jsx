import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import org1 from "../assets/org1.png";
import org2 from "../assets/org2.png";
import org3 from "../assets/org3.png";
import org4 from "../assets/org4.png";
import org5 from "../assets/org5.png";

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
            image:
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?fit=crop&w=800&q=80",
            title: "Flood Relief Efforts",
          },
          {
            id: 2,
            image:
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?fit=crop&w=800&q=80",
            title: "Emergency Aid Distribution",
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
<div className="flex flex-col md:flex-row w-full mb-10">
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
  <div className="w-full md:w-1/2 bg-[#00ADEF] flex items-center justify-center">
    <img
      src={organization.logo}
      alt={organization.name}
      className="w-full h-full object-contain p-6"
    />
  </div>
</div>


      {/* Activities Section */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Activities</h2>
        <a href="#" className="text-sm text-[#F180FE] hover:underline">
          See all
        </a>
      </div>

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {organization.activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{activity.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationDetail;
