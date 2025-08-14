import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F3F1F4] text-[#2F2F2F] px-6 py-10 font-sora">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Love &amp; Spread</h3>
          <p className="text-sm text-[#2F2F2F]-400 mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Sed cras consectetur praesent pharetra. Et viverra mauris pretium et pulvinar cursus. Tincidunt at purus sed et adipiscing eget.</p>
          <div className="w-10 h-10 bg-[#F180FE] rounded-full"></div>
        </div>

        {/* What We Do Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">What We Do</h3>
          <ul className="space-y-4 text-sm text-[#2F2F2F]-400">
            <li className="flex items-center gap-2">💖 Donation</li>
            <li className="flex items-center gap-2">🙌 Volunteering</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#2F2F2F]-500 hover:text-[#F180FE]">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-[#2F2F2F]-500 hover:text-[#F180FE]">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-[#2F2F2F]-500 hover:text-[#F180FE]">
              <FaLinkedinIn size={18} />
            </a>
            {/* <a href="#" className="text-gray-300 hover:text-[#F180FE]">
              <FaBehance size={18} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-black">
        © 2025 Love &amp; Spread. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
