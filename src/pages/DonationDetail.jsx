import React from "react";
import { useParams } from "react-router-dom";
import donate1 from "../assets/donate1.png";
import habitat from "../assets/habitat.png";
import qrCode from "../assets/qr.png"; 
import mmPayLogo from "../assets/mmpay.png"; 
import heartIcon from "../assets/heart.png";

// ✅ Move donations data here (or import from a separate file)
const donations = [
  {
    id: 1,
    title: "Answer the Call: Help Rebuild After the Floods",
    description:
      "Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost. Communities are struggling after devastating floods and your time can make all the difference. Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.",
    address: "No.11/26, Pathein Street, San Chaung Township, Yangon (Unicef)",
    organization: "Thit Sar Foundation",
    orgLogo: habitat,
    date: "2nd July, 2025",
    image: donate1,
  },
  // you can add more donation campaigns here...
];

export default function DonationDetail() {
  const { id } = useParams();
  const donationId = parseInt(id, 10);
  const donation = donations.find((item) => item.id === donationId);

  if (!donation) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Donation not found
        </h2>
        <p className="text-gray-600">
          The campaign you’re looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-6">
  {/* Top Section */}
  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    {/* Left Image */}
    <div className="flex">
      <img
        src={donation.image}
        alt={donation.title}
        className="w-full rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* Right Info */}
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">{donation.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        {donation.description}
      </p>
      <p className="font-semibold mb-4">{donation.address}</p>

      {/* Organization & Date on Same Line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={donation.orgLogo}
            alt={donation.organization}
            className="w-10 h-10"
          />
          <span className="ml-2 font-medium">{donation.organization}</span>
        </div>
        <span className="text-gray-500 text-sm">{donation.date}</span>
      </div>
    </div>
</div>

      {/* Donation Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Donation</h2>
        <p className="text-sm text-gray-600 mt-1">
          Or you can donate directly from this MMQR
        </p>

        {/* QR + MyanmarPay */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <img src={qrCode} alt="Donation QR" className="w-40 h-40" />
          <img src={mmPayLogo} alt="MyanmarPay" className="w-32" />
        </div>

      {/* Thank You Message */}
      <div className="mt-20 text-center mb-20">
        <img
          src={heartIcon}
          alt="Heart icon"
          className="w-17 h-17 mx-auto mb-4"
        />
        <p className="text-gray-700">
          The world is brighter because of people like you.
          <br />
          Thank you for your meaningful contribution.
        </p>
      </div>
      </div>
    </div>
  );
}
