import React from "react";
import vol1 from "../assets/vol1.png";
import orglogo1 from "../assets/unicef_logo.png";
import heartIcon from "../assets/heart.png";

export default function VolunteerDetail() {
  // Static dummy data (replace with API call later)
  const volunteer = {
    title: "Answer the Call: Help Rebuild After the Floods",
    description:
      "Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost. Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost. Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.",
    address: "No.11/26, Pathein Street, San Chaung Township, Yangon (Unicef)",
    organization: "Unicef",
    orgLogo: orglogo1,
    date: "2nd July, 2025",
    image: vol1,
      // "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop"
    terms: [
      "The logistics position at this level focuses on providing logistics support to the ongoing warehouse operations at two warehouses in Karachi.",
      "Purpose of the Job: Under the close supervision and guidance of the Senior Logistics Associate, the Logistics Assistant provides administrative, procedural, and operational support and assistance for the efficient warehouse operations (inbound/outbound program supplies at Damco and JPMC) and distribution to the Implementing Partners throughout Pakistan in compliance with UNICEF Supply Procedures and Guidance for in-land logistics.",
      "Support logistics team on assessing implementing partners logistics capacity and supply monitoring.",
      "Physical random check of program supplies upon arrival at the warehouse. Verify the items for any visible damage, quantities, packing details and expiry dates where applicable. Report for any damage or short shipped items.",
      "Follow up with the program for the dispatch of supplies.",
      "Liaise with WH teams for Picking of supplies as per respective Release Orders from program. Cross check the consignee details prior to the dispatch of cargo."
    ],
    overview: [
      "Relevant Field experience required.",
      "Ability to manage and organize logistics operations effectively.",
      "Strong communication skills, both verbal and written.",
      "Flexibility and adaptability in dynamic environments.",
      "Accountability and professionalism in handling logistics tasks."
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-6">
  {/* Top Section */}
  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    {/* Left Image */}
    <div className="flex">
      <img
        src={volunteer.image}
        alt={volunteer.title}
        className="w-full rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* Right Info */}
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">{volunteer.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        {volunteer.description}
      </p>
      <p className="font-semibold mb-4">{volunteer.address}</p>

      {/* Organization & Date on Same Line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={volunteer.orgLogo}
            alt={volunteer.organization}
            className="w-10 h-10"
          />
          <span className="ml-2 font-medium">{volunteer.organization}</span>
        </div>
        <span className="text-gray-500 text-sm">{volunteer.date}</span>
      </div>
    </div>
  </div>


      {/* Terms & Conditions */}
      <div className="mt-12">
        <h2 className="text-center text-lg font-bold mb-4">Terms & Conditions</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {volunteer.terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>

      {/* Checkbox */}
      <div className="mt-6 flex items-start">
        <input type="checkbox" id="terms" className="mt-1 mr-2" />
        <label htmlFor="terms" className="text-gray-700 text-sm">
          I have read and agreed to the following terms & conditions.
        </label>
      </div>

{/* Organization & Date Row
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center">
    <img
      src={volunteer.orgLogo}
      alt={volunteer.organization}
      className="w-10 h-10 object-contain"
    />
    <span className="ml-2 font-medium">{volunteer.organization}</span>
  </div>
  <span className="text-gray-500 text-sm whitespace-nowrap">
    {volunteer.date}
  </span>
</div> */}

{/* Overview Section */}
<div className="mt-12">
  <h2 className="text-center text-lg font-bold mb-6">Overview</h2>

  <div className="flex justify-center">
    <ul className="list-disc text-gray-700 space-y-2 mb-8 max-w-xl">
      {volunteer.overview.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

{/* Image + Form */}
<div className="grid md:grid-cols-2 gap-8 items-stretch">
  {/* Left Image */}
  <div className="flex">
    <img
      src={volunteer.image}
      alt="Volunteer work"
      className="rounded-xl shadow-lg w-full object-cover"
    />
  </div>

  {/* Right Form */}
  <form className="space-y-4 flex flex-col justify-center h-full">
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name"
        className="border-b border-gray-300 outline-none pb-1 w-full"
      />
      <input
        type="text"
        placeholder="Phone"
        className="border-b border-gray-300 outline-none pb-1 w-full"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <input
        type="number"
        placeholder="Age"
        className="border-b border-gray-300 outline-none pb-1 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        className="border-b border-gray-300 outline-none pb-1 w-full"
      />
    </div>
    <input
      type="text"
      placeholder="Address"
      className="border-b border-gray-300 outline-none pb-1 w-full"
    />
    <textarea
      placeholder="Suggestion"
      className="border-b border-gray-300 outline-none pb-1 w-full"
    ></textarea>

    <button
      type="submit"
      className="w-full bg-[#F180FE] text-white py-2 rounded-lg font-medium hover:bg-[#D160E0] transition"
    >
      Submit
    </button>
  </form>
</div>
</div>



      {/* Thank You Message */}
      <div className="mt-20 text-center mb-20">
        <img
          src={heartIcon}
          alt="Heart icon"
          className="w-18 h-18 mx-auto mb-4"
        />
        <p className="text-gray-700">
          The world is brighter because of people like you.
          <br />
          Thank you for your meaningful contribution.
        </p>
      </div>
    </div>
  );
}