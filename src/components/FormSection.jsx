import React, { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    currencyBill: "",
    sunExposure: "",
    energyProvider: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    homeOwner: "",
    propertyType: "",
    purchaseTimeFrame: "",
    bestTimeToCall: "",
    serviceRequirements: "",
    agreement: false,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const fields = [
    { id: "currencyBill", label: "How much is your currency bill?", type: "select", options: ["50$", "100$", "200$"] },
    { id: "sunExposure", label: "How much sun hits your roof?", type: "select", options: ["Full Sun", "Not Sure"] },
    { id: "energyProvider", label: "Who is your energy provider?", type: "select", options: ["Unsure/Not Listed", "Alabama Power"] },
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "phone", label: "Phone Number", type: "tel" },
    { id: "address", label: "Address", type: "text" },
    { id: "city", label: "City", type: "text" },
    { id: "state", label: "State", type: "select", options: ["Alabama", "Alaska", "Arizona"] },
    { id: "zipCode", label: "Zip Code", type: "text" },
    { id: "homeOwner", label: "Home Owner", type: "select", options: ["Yes", "No"] },
    { id: "propertyType", label: "Property Type", type: "select", options: ["Commercial", "Multinational"] },
    { id: "purchaseTimeFrame", label: "Purchase Time Frame", type: "select", options: ["1-2 weeks", "2-3 weeks"] },
    { id: "bestTimeToCall", label: "Best Time to Call", type: "select", options: ["Any Time", "Morning"] },
    { id: "serviceRequirements", label: "Tell us about your service requirements in brief", type: "textarea" },
    { id: "agreement", label: "I agree to the terms", type: "checkbox" },
  ];

  const validateFields = () => {
    let newErrors = {};
    fields.slice(currentStep, currentStep + 2).forEach(field => {
      if (!formData[field.id]) {
        newErrors[field.id] = "This field is required";
      }
      if (field.id === "zipCode" && formData.zipCode.length > 5) {
        newErrors.zipCode = "Zip code cannot exceed 5 digits";
      }
      if (field.id === "phone" && formData.phone.length > 10) {
        newErrors.phone = "Phone number cannot exceed 10 digits";
      }
      if (field.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleNext = () => {
    if (validateFields()) {
      if (currentStep < fields.length - 2) setCurrentStep((prev) => prev + 2);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-20 bg-heading text-secondary rounded-md shadow-md">
      <h1 className="text-3xl mb-4 text-center cursor-pointer ">Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        {fields.slice(currentStep, currentStep + 2).map((field) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block font-medium mb-1">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none" required>
                <option value="">Select an option</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none" required />
            ) : field.type === "checkbox" ? (
              <div className="flex items-center">
                <input type="checkbox" id={field.id} name={field.id} checked={formData[field.id]} onChange={handleChange} className="mr-2" />
                <label htmlFor={field.id}>{field.label}</label>
              </div>
            ) : (
              <input type={field.type} id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none" required />
            )}
            {errors[field.id] && <p className="text-red-500 text-sm">{errors[field.id]}</p>}
          </div>
        ))}

        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <button type="button" onClick={handlePrevious} className="px-4 py-2 bg-gray-300 text-black rounded-md">Previous</button>
          )}
          {currentStep < fields.length - 2 ? (
            <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
