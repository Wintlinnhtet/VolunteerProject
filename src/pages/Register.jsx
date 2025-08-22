import React, { useState } from "react";
import "pages/Login";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
const Register = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { step: 1, label: "Organization Details" },
    { step: 2, label: "Account Details" },
    { step: 5, label: "Social Accounts" },
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Render different form sections
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            {/* Your Personal Details */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--card-bg-dark)] uppercase">
                Your Organization Details
              </h3>
            </div>

            {/* Organization Name */}
            <div className="mt-2">
              <input
                type="text"
                name="orgname"
                placeholder="Organization Name"
                className="input-field w-full"
              />
            </div>

            {/* Organization Address */}
            <h3 className="mt-2 text-sm font-semibold text-[var(--card-bg-dark)] uppercase">
              Organization Location
            </h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Street Address (optional)"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Post Code"
                className="input-field"
              />
              <input type="text" placeholder="City" className="input-field" />
            </div>

            {/* Contact Details */}
            <h3 className="mt-2 text-sm font-semibold text-[var(--card-bg-dark)] uppercase">
              Contact Details
            </h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div className="">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-field"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
              />
            </div>
          </>
        );

      case 2:
        return (
          <div className="w-fit">
            <h3 className="text-sm font-semibold text-[var(--card-bg-dark)] uppercase">
              Account Details
            </h3>
            <div className="mt-2 ">
              <input
                type="text"
                placeholder="Username"
                className="input-field "
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <form className="">
            <div className="flex items-center">
              <FaFacebook className="text-[--card-bg-dark] text-2xl mr-4" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Fill your account link"
                className="input-field "
              />
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-[--card-bg-dark] text-2xl mr-4" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Fill your account link"
                className=" input-field "
              />
            </div>
            <div className="flex items-center">
              <FaTwitterSquare className="text-[--card-bg-dark] text-2xl mr-4" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Fill your account link"
                className=" input-field "
              />
            </div>
            <div className="flex items-center">
              <FaInstagramSquare className="text-[--card-bg-dark] text-2xl mr-4" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Fill your account link"
                className=" input-field "
              />
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-fit w-fit flex items-center justify-center p-4 mx-auto mt-8">
      <div className=" w-full rounded-2xl shadow-lg flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="bg-[--card-bg-dark] w-[20rem] p-10 ">
          <h2 className="text-[var(--text-color-light)] text-xl font-semibold mb-8">
            Create account
          </h2>
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 text-[var(--text-color-dark)] rounded-full flex items-center justify-center border-2 ${
                    step === item.step
                      ? "rounded-circle"
                      : step > item.step
                        ? "rounded-circle"
                        : "border-white text-white"
                  }`}
                >
                  {item.step}
                </div>
                <span
                  className={`${
                    step === item.step
                      ? "text-[--text-color-light] font-medium"
                      : step > item.step
                        ? "text-[--text-color-light]"
                        : "text-white"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-[28rem] bg-[#F3F1F4] p-16 flex flex-col m-auto justify-items-center">
          {renderForm()}

          {/* Navigation Buttons */}
          <div className="mt-6 flex">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`button ${
                step === 1
                  ? "bg-gray-300 text-gray-500 hover:bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Back
            </button>
            <button onClick={handleNext} className="button">
              {step === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
