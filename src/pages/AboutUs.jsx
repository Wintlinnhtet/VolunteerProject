import React from "react";
import kidsImage from "../assets/kids.png";
import teamImage from "../assets/team.png";
import intouchImage from "../assets/getintouch.png";
import unicef from "../assets/unicef.png";
import care from "../assets/care.png";
import redcross from "../assets/redcross.png";
import unitedway from "../assets/unitedway.png";
import savethechildren from "../assets/savethechildren.png";
import habitat from "../assets/habitat.png";
import amnesty from "../assets/amnesty.png";
import wfp from "../assets/wfp.png";
import globalgiving from "../assets/globalgiving.png";
import program1 from "../assets/program1.png";
import program2 from "../assets/program2.png";
import program3 from "../assets/program3.png";
import program4 from "../assets/program4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function AboutUs() {
  return (
    <div className="w-full font-sora">
      {/* Top Hero Section */}
      <div className="relative w-full h-[580px]">
        <img
          src={kidsImage}
          alt="Kids"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-40 pb-10 flex flex-col md:flex-row justify-between items-start text-white z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-0">
            About Love & Spread
          </h1>
          <p className="text-sm md:text-base max-w-xl leading-relaxed text-white/100">
            Lorem ipsum dolor sit amet consectetur. In tristique nunc duis lectus magna
            pharetra porttitor tortor. Parturient tincidunt urna nunc donec nibh in
            auctor. Erat nunc ac cum elementum felis phasellus.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 mt-12 mb-14 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-[#2F2F2F]">
            Why People Choose <br />
            Love & Spread
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vitae mi sit posuere ut
            vivamus id a nulla cursus. Nullam ut convallis fringilla netus
            magna morbi nunc lacinia. Tortor lacus quam sed viverra justo
            quisque mattis volutpat id.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFE6EE] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-[#C063AC] mb-2 flex items-center gap-2">
              <span>🤝</span> Organize Volunteers
            </h3>
            <p className="text-sm text-gray-700">
              Easily manage volunteer roles, schedules, and communication—all
              in one place. Keep your team aligned and your mission moving
              forward.
            </p>
          </div>
          <div className="bg-[#FCE6FF] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-[#9558A3] mb-2 flex items-center gap-2">
              <span>📢</span> Call For Donations
            </h3>
            <p className="text-sm text-gray-700">
              Engage your community by broadcasting campaigns. Empower people
              to contribute to impactful causes easily and transparently.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="w-full bg-white py-20 px-4 md:px-20 font-sora">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={teamImage} alt="Team" className="rounded-xl w-full object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
              At Love & Spread, we believe in the power of compassion and community.
              Our mission is to connect generous individuals with trusted non-profit organizations to support people in need—
              through donations, time, or both. Whether you're here to give, volunteer, or simply learn, you're part of a movement that
              brings hope, dignity, and real change to communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">200K</h3>
                <p className="text-sm text-gray-600">People we help<br />through Love & Spread</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">$18,000</h3>
                <p className="text-sm text-gray-600">Contributed to individuals<br />and communities in need</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Programmes Section */}
      <div className="w-full pt-8 pb-20 px-4 md:px-20 font-sora text-center">
        <span className="inline-block bg-[#F180FE] text-white text-xs font-semibold px-6 py-2 rounded-half mb-10 rotate-[-5deg] shadow-lg">
          Activities
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2F2F2F]">
          Recent programmes
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="w-full max-w-[1200px] mx-auto mt-12"
        >
          <SwiperSlide>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2">
                <img src={program1} alt="Food distribution" className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]" />
              </div>
              <div className="col-span-2 row-span-1">
                <img src={program2} alt="Field cleanup" className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={program3} alt="Tractor group" className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]" />
              </div>
              <div className="col-span-1 row-span-1">
                <img src={program4} alt="Bus group" className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Get in Touch Section */}
      <div className="relative w-full py-20 font-sora">
        <img src={intouchImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-20 text-center text-white">
          <p className="text-sm md:text-base mb-2 opacity-80">Get in Touch</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">We Would Love To Hear From You</h2>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-8 opacity-90">
            We're here to assist you with any questions, support, or partnership inquiries – reach out to us today.
          </p>
          <button className="bg-[#F180FE] hover:bg-[#d460da] text-white font-medium px-10 py-4 rounded-half transition duration-300">
            Contact us
          </button>
        </div>
      </div>

      {/* Trusted Organizations Section */}
      <div className="w-full bg-white py-20 px-4 md:px-20 font-sora text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">Trusted Organizations</h2>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-12 items-center justify-items-center">
          <img src={unicef} alt="UNICEF" className="h-10 md:h-12 object-contain" />
          <img src={care} alt="Care" className="h-10 md:h-12 object-contain" />
          <img src={redcross} alt="Red Cross" className="h-10 md:h-12 object-contain" />
          <img src={habitat} alt="Habitat for Humanity" className="h-10 md:h-12 object-contain" />
          <img src={amnesty} alt="Amnesty International" className="h-10 md:h-12 object-contain" />
          <img src={wfp} alt="World Food Programme" className="h-10 md:h-12 object-contain" />
          <img src={globalgiving} alt="GlobalGiving" className="h-10 md:h-12 object-contain" />
          <img src={unitedway} alt="United Way" className="h-10 md:h-12 object-contain" />
          <img src={savethechildren} alt="Save the Children" className="h-10 md:h-12 object-contain" />
          <img src={habitat} alt="Habitat for Humanity" className="h-10 md:h-12 object-contain" />
          <img src={care} alt="Care" className="h-10 md:h-12 object-contain" />
          <img src={wfp} alt="World Food Programme" className="h-10 md:h-12 object-contain" />
        </div>
      </div>
    </div>
  );
}
