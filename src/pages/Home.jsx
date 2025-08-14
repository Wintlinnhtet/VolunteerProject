// src/pages/Home.jsx
import React from "react";
import bgImage from "../assets/new_home.png"; // replace with your real background
import volunteerIcon from "../assets/home_icon_1.png";
import donationIcon from "../assets/home_icon_2.png";
import sendIcon from "../assets/home_icon_3.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import donation1 from "../assets/donation1.png";
import donation2 from "../assets/donation2.png";
import volunteer1 from "../assets/volunteer1.png";
import volunteer2 from "../assets/volunteer2.png";
import volunteer3 from "../assets/volunteer3.png";
import volunteer4 from "../assets/volunteer4.png";
import orglogo1 from "../assets/unicef_logo.png";
import orglogo2 from "../assets/tree_logo.png";
import unicef from "../assets/unicef.png";
import care from "../assets/care.png";
import redcross from "../assets/redcross.png";
import unitedway from "../assets/unitedway.png";
import savethechildren from "../assets/savethechildren.png";
import habitat from "../assets/habitat.png";
import amnesty from "../assets/amnesty.png";
import wfp from "../assets/wfp.png";
import globalgiving from "../assets/globalgiving.png";


export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[514px] mb-[-40px]">
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/40" /> {/* Optional overlay */}

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-black px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            A Better Tomorrow Starts Today
          </h1>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl">
            We’re on a mission to build stronger communities and brighter futures. <br />
            Your time and support can shape lives forever.
          </p>
          <button className="bg-[#F180FE] text-white px-10 py-4 rounded-half font-semibold hover:bg-[#D160E0] transition">
            Contact us
          </button>
       </div>
    </div>



   {/* How could you help? Section */}
   <section className="bg-white pt-10 pb-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        How could you help?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <img src={volunteerIcon} alt="Volunteer" className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Become volunteer</h3>
          <p className="text-gray-600 mb-3 px-4">
            Lend your time, skills, and heart to causes that truly matter. Every moment you give brings hope, help, and real change to so...
          </p>
          <p className="text-[#F180FE] leading-snug text-sm font-medium underline cursor-pointer">Read more</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <img src={donationIcon} alt="Call For Donations" className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Call For Donations</h3>
          <p className="text-gray-600 mb-3 px-4">
            Lives are being changed every day — and you can be part of that change. Step up and support a cause that matters.
          </  p>
          <p className="text-[#F180FE] leading-snug text-sm font-medium underline cursor-pointer">Read more</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <img src={sendIcon} alt="Send Donations" className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Send Donations</h3>
          <p className="text-gray-600 mb-3 px-4">
            Choose an amount, pick a cause, and send hope directly where it’s needed most. Every donation brings us closer to a bett...
          </p>
          <p className="text-[#F180FE] leading-snug text-sm font-medium underline cursor-pointer">Read more</p>
        </div>
      </div>
    </section>


    {/* Trusted org section*/}

    <section className="bg-white px-6 py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
            {/* Left Side Text */}
            <div className="text-center md:text-left md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                Trusted by These <br /> Non-Profit <br /> Organizations
              </h2>
            </div>

            {/* Right Side Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-12 md:w-2/3">
              <img src={unicef} alt="UNICEF" className="h-16 md:h-20 object-contain" />
              <img src={care} alt="CARE" className="h-16 md:h-20 object-contain" />
              <img src={redcross} alt="Red Cross" className="h-16 md:h-20 object-contain" />
              <img src={unitedway} alt="United Way" className="h-16 md:h-20 object-contain" />
              <img src={savethechildren} alt="Save the Children" className="h-16 md:h-20 object-contain" />
              <img src={habitat} alt="Habitat" className="h-16 md:h-20 object-contain" />
              <img src={amnesty} alt="Amnesty" className="h-16 md:h-20 object-contain" />
              <img src={wfp} alt="World Food Programme" className="h-16 md:h-20 object-contain" />
              <img src={globalgiving} alt="GlobalGiving" className="h-16 md:h-20 object-contain" />
            </div>
          </div>
        </section>

    {/* Your Donation Matters */}
    <section className="bg-white py-14 px-5">
      <h2 className="text-2xl font-semibold text-center mb-12 justify-center">Your Donation Matters</h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={donation1}
            alt="Be the Reason They Smile"
            className="w-full md:w-[400px] rounded-xl"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Be the Reason They Smile</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Stray souls are waiting for a helping hand and a kind heart—your time could be the light they need. Join us
              in giving them a second chance through compassion, care, and community. Volunteer today and make a difference
              that truly matters.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <img src={orglogo2} alt="icon" className="w-5 h-5" />
            <span>23rd July, 2025</span>
            </div>
            <button className="bg-[#F180FE] text-white text-sm px-6 py-2 rounded-md hover:bg-[#D160E0] transition">
              Send Donations
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={donation2}
            alt="Help & Rebuild Together"
            className="w-full md:w-[400px] rounded-xl"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Help & Rebuild Together</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Stray souls are waiting for a helping hand and a kind heart—your time could be the light they need. Join us
              in giving them a second chance through compassion, care, and community. Volunteer today and make a difference
              that truly matters.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <img src={orglogo2} alt="icon" className="w-5 h-5" /> 
            <span>23rd July, 2025</span>
            </div>
            <button className="bg-[#F180FE] text-white text-sm px-6 py-2 rounded-md hover:bg-[#D160E0] transition">
              Send Donations
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Join Us Section */}
    <section className="bg-[#FDEBFF] py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Top Content: Text + Images */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Section */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-5xl font-bold text-[#F180FE] leading-snug mb-10">
              Join us in building a <br className="hidden md:block" />
              brighter future.
            </h2>
            <button className="bg-[#F180FE] text-white px-14 py-4 rounded-half font-medium hover:bg-[#D160E0] transition">
              Explore
            </button>
          </div>

          {/* Right Images Section */}
          <div className="flex-1 flex justify-center gap-6">
            <img src={image1} alt="img1" className="w-[200px] md:w-[250px] rounded-xl" />
            <img src={image2} alt="img2" className="w-[200px] md:w-[250px] rounded-xl" />
            <img src={image3} alt="img3" className="w-[200px] md:w-[250px] rounded-xl" />
          </div>
        </div>

        {/* Bottom Nav Links*/}
        <div className="mt-10 flex flex-wrap justify-start gap-x-12 gap-y-4 text-[#F180FE] font-medium text-sm">
          <div className="flex items-center gap-2 min-w-[200px]">
            <span>🔥</span> Be part of the change
          </div>
          <div className="flex items-center gap-2 min-w-[200px]">
            <span>🔗</span> Stay connected
          </div>
          <div className="flex items-center gap-2 min-w-[200px]">
            <span>⚡</span> Act now
          </div>
          <div className="flex items-center gap-2 min-w-[200px]">
            <span>🌍</span> Make world a better place
          </div>
        </div>

      </div>
    </section>


    {/* Become Volunteer */}
    <section className="py-14 bg-white px-5 md:px-10 mb-80">
      <h2 className="text-2xl font-semibold text-center mb-12">Become Volunteer</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <img src={volunteer1} alt="Flood Relief" className="w-full h-60 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-[16px] mb-2">
              Answer the Call: Help Rebuild After the Floods
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Communities are struggling after devastating floods and your time can make all the difference.
              Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <img src={orglogo2} alt="icon" className="w-5 h-5" />
                <span>2nd July, 2025</span>
              </div>
              <span className="text-[#F180FE] font-medium cursor-pointer">Apply</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <img src={volunteer2} alt="Spread Knowledge" className="w-full h-60 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-[16px] mb-2">
              Spread Knowledge, Spark Change
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Communities are struggling after devastating floods and your time can make all the difference.
              Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <img src={orglogo1} alt="icon" className="w-5 h-5" />
                <span>23rd July, 2025</span>
              </div>
              <span className="text-[#F180FE] font-medium cursor-pointer">Apply</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <img src={volunteer3} alt="Every Child Deserves" className="w-full h-60 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-[16px] mb-2">
              Every Child Deserves a Chance
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Communities are struggling after devastating floods and your time can make all the difference.
              Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <img src={orglogo1} alt="icon" className="w-5 h-5" />
                <span>2nd July, 2025</span>
              </div>
              <span className="text-[#F180FE] font-medium cursor-pointer">Apply</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <img src={volunteer4} alt="Volunteer Together" className="w-full h-60 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-[16px] mb-2">
              Answer the Call: Help Rebuild After the Floods
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Communities are struggling after devastating floods and your time can make all the difference.
              Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <img src={orglogo2} alt="icon" className="w-5 h-5" />
                <span>23rd July, 2025</span>
              </div>
              <span className="text-[#F180FE] font-medium cursor-pointer">Apply</span>
            </div>
          </div>
        </div>
      </div>
    </section>




    </div>

  
  );
}