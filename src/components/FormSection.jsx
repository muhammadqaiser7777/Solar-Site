import React, { useState, useEffect } from "react";
import formImage from "../assets/images/solar2.jpg";

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
    affid: "",
    rid: "",
    tid: "",
    url: window.location.href,
    start: "",
    min: "",
    ipAddress: "",
    userAgent: navigator.userAgent,
  });

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setFormData((prevData) => ({ ...prevData, ipAddress: data.ip }));
      })
      .catch((error) => console.error("Failed to fetch IP address:", error));

    const urlParams = new URLSearchParams(window.location.search);
    const affid = urlParams.get("affid") || "";
    const rid = urlParams.get("rid") || "";
    const tid = urlParams.get("tid") || "";
    const start = new Date().getTime();
    const min = Math.floor(start / 60000);

    setFormData((prevData) => ({
      ...prevData,
      affid,
      rid,
      tid,
      start,
      min,
    }));
  }, []);

  useEffect(() => {
    if (!document.querySelector("script[src*='trustedform.com/trustedform.js']")) {
      const trustedFormScript = document.createElement("script");
      trustedFormScript.type = "text/javascript";
      trustedFormScript.async = true;
      trustedFormScript.src =
        (document.location.protocol === "https:" ? "https" : "http") +
        "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" +
        new Date().getTime() +
        Math.random();
      document.body.appendChild(trustedFormScript);
    }
  }, []);
  

  useEffect(() => {
    if (!document.getElementById("LeadiDscript_campaign")) {
      const leadiDScript = document.createElement("script");
      leadiDScript.id = "LeadiDscript_campaign";
      leadiDScript.type = "text/javascript";
      leadiDScript.async = true;
      leadiDScript.src =
        "//create.lidstatic.com/campaign/402848de-d8aa-7158-923b-a6a24e7956dc.js?snippet_version=2";
      document.body.appendChild(leadiDScript);
    }
  }, []);

  useEffect(() => {
    const trustedFormPingScript = document.createElement("script");
    trustedFormPingScript.innerHTML = `
      function recordTrustedFormPing() {
        var pingUrlField = document.querySelector("input[name='xxTrustedFormPingUrl']");
        if (pingUrlField && pingUrlField.value) {
          var img = document.createElement("img");
          img.src = pingUrlField.value;
          img.style.display = "none";
          document.body.appendChild(img);
        }
      }
      window.addEventListener("beforeunload", recordTrustedFormPing);
    `;
    document.body.appendChild(trustedFormPingScript);
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const fields = [
    {
      id: "currencyBill",
      label: "How much is your currency bill?",
      type: "select",
      options: ["50$", "100$", "200$"],
    },
    {
      id: "sunExposure",
      label: "How much sun hits your roof?",
      type: "select",
      options: ["Full Sun", "Not Sure"],
    },
    {
      id: "energyProvider",
      label: "Who is your energy provider?",
      type: "select",
      options: ["Unsure/Not Listed", "Alabama Power"],
    },
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "phone", label: "Phone Number", type: "tel" },
    { id: "address", label: "Address", type: "text" },
    { id: "city", label: "City", type: "text" },
    {
      id: "state",
      label: "State",
      type: "select",
      options: ["Alabama", "Alaska", "Arizona"],
    },
    { id: "zipCode", label: "Zip Code", type: "text" },
    {
      id: "homeOwner",
      label: "Home Owner",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      id: "propertyType",
      label: "Property Type",
      type: "select",
      options: ["Commercial", "Multinational"],
    },
    {
      id: "purchaseTimeFrame",
      label: "Purchase Time Frame",
      type: "select",
      options: ["1-2 weeks", "2-3 weeks"],
    },
    {
      id: "bestTimeToCall",
      label: "Best Time to Call",
      type: "select",
      options: ["Any Time", "Morning"],
    },
    {
      id: "serviceRequirements",
      label: "Tell us about your service requirements in brief",
      type: "textarea",
    },
    { id: "agreement", label: "I agree to the terms", type: "checkbox" },
  ];

  const totalSteps = Math.ceil(fields.length / 2);
  const progressPercentage = ((totalSteps - currentStep) / totalSteps) * 100;

  const validateFields = () => {
    let newErrors = {};
    fields.slice(currentStep, currentStep + 2).forEach((field) => {
      if (!formData[field.id]) {
        newErrors[field.id] = "This field is required";
      }
      if (field.id === "zipCode" && formData.zipCode.length > 5) {
        newErrors.zipCode = "Zip code cannot exceed 5 digits";
      }
      if (field.id === "phone" && formData.phone.length > 10) {
        newErrors.phone = "Phone number cannot exceed 10 digits";
      }
      if (
        field.id === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
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
      alert("Form has been submitted successfully!");
      setFormData({
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
        affid: formData.affid,
        rid: formData.rid,
        tid: formData.tid,
        url: formData.url,
        start: formData.start,
        min: formData.min,
        ipAddress: formData.ipAddress,
        userAgent: formData.userAgent,
      });
      setCurrentStep(0);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center  bg-heading text-secondary p-8 md:p-12  shadow-lg">
      {/* Left side Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={formImage}
          alt="Solar Panel"
          className="w-full h-auto rounded-4xl shadow-md"
        />
      </div>

      {/* Right side Form */}
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-4xl font-semibold mb-6 text-center">Get a Quote</h1>
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-600"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <form onSubmit={handleSubmit}>
          {fields.slice(currentStep, currentStep + 2).map((field) => (
            <div key={field.id} className="mb-6">
              <label htmlFor={field.id} className="block font-medium mb-2">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select an option</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              ) : field.type === "checkbox" ? (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.id}
                    checked={formData[field.id]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={field.id}>{field.label}</label>
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              )}
              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}

          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-5 py-3 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            {currentStep < fields.length - 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-tertiary hover:text-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
