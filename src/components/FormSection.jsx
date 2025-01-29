import React, { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const fields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      validate: (value) =>
        /^\d{0,10}$/.test(value) || "Phone number must not exceed 10 digits.",
    },
    {
      id: "streetAddress",
      label: "Street Address",
      type: "text",
      required: true,
    },
    {
      id: "city",
      label: "City",
      type: "text",
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const currentField = fields[currentStep];

  return (
    <div className="max-w-md mx-auto text-white rounded-md shadow-md">
      <h1 className="text-6xl hover-animation">Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor={currentField.id}
            className="block text-secondary font-medium mb-1"
          >
            {currentField.label}
          </label>
          <input
            type={currentField.type}
            id={currentField.id}
            name={currentField.id}
            value={formData[currentField.id]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            required={currentField.required}
          />
        </div>
        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
            >
              Previous
            </button>
          )}
          {currentStep < fields.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
