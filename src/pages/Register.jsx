import React, { useState } from "react";
import "./Login"
const Register = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { step: 1, label: "Personal Details" },
    { step: 2, label: "Account Details" },
    { step: 3, label: "Tax Details" },
    { step: 4, label: "Summary" },
    { step: 5, label: "Receipt" }
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
              <h3 className="text-sm font-semibold text-[--text-color-dark] uppercase">
                Your Personal Details
              </h3>
              <input
                type="text"
                placeholder="National Identity Number/D-number"
                className="input-field"
              />
              <p className="text-xs text-gray-400 mt-1">
                This should be 11 digits long
              </p>
            </div>

            {/* Name */}
            <div className="mt-6">
              <input
                type="text" name="orgname"
                placeholder="Organization Name"
                className="input-field w-full"/>
            </div>

            {/* Organization Address */}
            <h3 className="mt-6 text-sm font-semibold text-[--text-color-dark] uppercase">
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
              <input
                type="text"
                placeholder="City"
                className="input-field"
              />
              
            </div>

            {/* Contact Details */}
            <h3 className="mt-6 text-sm font-semibold text-[--text-color-dark] uppercase">
              Contact Details
            </h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div className="">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="input-field"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="input-field"
              />
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h3 className="text-sm font-semibold text-gray-600 uppercase">
              Account Details
            </h3>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </>
        );

      case 3:
        return <p>Tax Details form goes here...</p>;

      case 4:
        return <p>Summary page...</p>;

      case 5:
        return <p>Receipt page...</p>;

      default:
        return null;
    }
  };

  return (
    <div className="h-fit w-fit flex items-center justify-center p-4 mx-auto mt-8">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg flex overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="bg-[--card-bg-dark] w-[20rem] p-10 ">
          <h2 className="text-xl font-semibold mb-8">Create account</h2>
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step === item.step
                      ? "rounded-circle"
                      : step > item.step
                      ? "rounded-circle"
                      : "border-gray-500 text-gray-500"
                  }`}
                >
                  {item.step}
                </div>
                <span
                  className={`${
                    step === item.step
                      ? "text-[--text-colour-dark]-600 font-medium"
                      : step > item.step
                      ? "text-[--text-colour-dark]-600"
                      : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-2/3 p-10 flex flex-col justify-between">
          <div>{renderForm()}</div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`button ${
                step === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="button"
            >
              {step === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
