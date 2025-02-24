import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FormSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
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
    if (
      !document.querySelector("script[src*='trustedform.com/trustedform.js']")
    ) {
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
    [
      {
        id: "currencyBill",
        label: "How much is your current bill?",
        type: "select",
        options: [
          "50$",
          "100$",
          "200$",
          "300$",
          "400$",
          "500$",
          "600$",
          "700$",
          "800$",
          "More than 900$",
        ],
      },
      {
        id: "sunExposure",
        label: "How much sun hits your roof?",
        type: "select",
        options: ["Full sun", "Partially shaded", "Mostly shaded", "Not sure"],
      },
    ],
    [
      {
        id: "energyProvider",
        label: "Who is your energy provider?",
        type: "select",
        options: [
          "Unsure/Not Listed",
          "Alabama Power",
          "Alameda Municipal Power",
          "Alaska Villages Electric Cooperative",
          "Allegheny Power",
          "Alliant Energy",
          "Ambit Enery",
          "Anaheim Public Utilities",
          "Appalachain Power",
          "Arizona Public Service",
          "Ashland Electric",
          "Atlantic City Electric",
          "Austin Energy",
          "Avista Utilities",
          "Azusa Light & Water",
          "American Electric Power",
          "Ameren",
          "APS",
          "Atlantic City Electric",
          "Austin Energy",
          "Avista",
          "Baltimore Gas & Electric",
          "Bangor Hydro Electric",
          "Basin Electric Power Cooperative",
          "Batavia Municipal Electric",
          "Bear Valley Electric",
          "Beauregard Electric CO-OP",
          "Benton PUD",
          "Berea Municipal Utilities",
          "Berkeley Electric Cooperative",
          "Berkshire Company",
          "Big Rivers Electric Corporation",
          "Black Hills Energy",
          "Black Hills Power",
          "Blue Grass Energy",
          "Blue Ridae Eleatical Membershio Corp",
          "Borough of Ellwood City",
          "Bounce Energy",
          "Braintree Electric Light Department",
          "Brigham City Public Power",
          "Brunswick EMC",
          "Bryan Texas Utilities",
          "Burbank Water & Power",
          "Caddo Electric Cooperative",
          "California Public Utilities Commission",
          "Calpine",
          "Canby Electric",
          "Carteret-Craven Electric Cooperative",
          "CenterPoint Energy",
          "Central Electric Power Cooperative",
          "Central Hudson Gas & Electric",
          "Central Maine Power",
          "Central Montana Electric Power Cooperative",
          "Central Vermont Public Service",
          "CH Energy Group",
          "Champion Energy Services",
          "Chariton Valley Electric Cooperative",
          "Chelan County Public Utility District",
          "Cherokee Electric Cooperative",
          "Cheyenne Light Fuel & Power",
          "Choptank Electric Cooperative",
          "Chugach Electric Association",
          "Cincinnati Bell Energy",
          "Cirro Energy",
          "Citizens Choice Energy Jamestown BPU",
          "Citizens Electric of Lewisburg",
          "Citizens Utilities Board",
          "City & County of San Francisco",
          "City of Dover Electric Department",
          "City of Milford Electric Department",
          "City of Palo Alto Utilities",
          "City of Rock Hill",
          "City of Safford Electric Department",
          "City of Tallahassee Utilities",
          "City of Vero Beach",
          "City Utilities of Springfield",
          "Claverack REC",
          "Clay Electric Co-op",
          "Clearwater Power",
          "CLECO",
          "Cleveland Electric Illuminating Company",
          "Coast Electric",
          "College Station Utilities",
          "Colorado Springs Utilities",
          "Colton Public Utilities Glendale Public Service Department",
          "Columbia REA",
          "Columbia River Public Utility District",
          "ComEd Electric Company",
          "Connecticut Light & Power",
          "Connecticut Natural Gas",
          "Consolidated Edison Company of New York (Con Edison)",
          "Consolidated Electric Cooperative",
          "Consumers Energy",
          "Copper Valley Electric Association",
          "Coserv Electric",
          "Coweta Fayette EMC",
          "CPS Energy",
          "Dairyland Power Co-op",
          "Danville Utilities",
          "Dayton Power & Light",
          "Delaware Electric Cooperative",
          "Delmarva Power",
          "DEMCO",
          "Denton Municipal Electric",
          "Direct Energy",
          "Dominion Virginia Power",
          "Douglas County Public Utility District dPi Energy",
          "DTE Energy (Detroit Edison)",
          "Duke Energy",
          "Duke Energy Indiana",
          "Duke Energy Kentucky",
          "Duke Energy NC",
          "Duke Energy Ohio",
          "Duke Energy SC",
          "Duncan Valley Electric Cooperative",
          "Duquesne Light",
          "East River Electric Cooperative",
          "East River Electric Power Co-op",
          "Eau Claire Energy Cooperative",
          "El Paso Electric",
          "Electric Database Publishing",
          "Electric Power Board",
          "Electrical District No. 2",
          "ElectriCities",
          "Emerald PUD",
          "Empire District Electric Company",
          "Entergy",
          "Entrust Energy",
          "Eugene Water & Electric Board",
          "Everything Energy",
          "Excel Energy",
          "Farmers Electrical Cooperative",
          "Farmington Electric Utility System",
          "First Electric Cooperative",
          "First Texas Energy Corporation",
          "FirstEnergy",
          "Fleming-Mason Energy Cooperative",
          "Flint Energies",
          "Florida Municipal Power Agency",
          "Florida Power & Light",
          "Florida Public Utility Company Palm Beach",
          "Gainesville Regional Utilities",
          "Garland Power and Light",
          "Georgetown Utility Services (GUS)",
          "Georgia EMC",
          "Georgia Power",
          "Gexa Energy",
          "Golden Valley Electric Association",
          "Granite State Electric",
          "Grant County Public Utility District",
          "Great River Energy",
          "Green Island Power Authority",
          "Green Mountain Energy",
          "Green Mountain Power",
          "Gridley Municipal Utilities",
          "Guadalupe Valley Electric Cooperative",
          "Gulf Power",
          "GVEC",
          "Halifax Electric Membership",
          "Hawaiian Electric Company (HECO)",
          "Hawaiian Electric Industries",
          "Healdsburg Municipal Electric Department",
          "Henderson Municipal Power and Light",
          "High Plains Power",
          "High West Energy",
          "Highline Electric Association",
          "Holden Municipal Light Department",
          "Holland Board of Public Works",
          "Holy Cross Energy Company",
          "Howard Electric Cooperative",
          "Hutchinson Utilities Commission",
          "Hyrum City Power & Light",
          "IDACORP",
          "Idaho Power",
          "Imperial Irrigation District",
          "Independence Power and Light",
          "Indianapolis Power & Light",
          "Intermountain Power Agency",
          "Intermountain Rural Electric Association",
          "International Electric Power (IEP)",
          "Interstate Power and Light Company",
          "ITC Midwest",
          "Jackson",
          "JEA",
          "Jersey Central Power and Light Company",
          "Jones-Onslow EMC",
          "Just Energy",
          "Kansas City Board of Public Utilities",
          "Kansas City Power & Light",
          "Kauai Island Utility Cooperative (KIUC)",
          "Kaysville City",
          "Kenergy Corp",
          "Kentucky Utilities",
          "Kingsport Power (Appalachian Power)",
          "Kissimmee Utility Authority",
          "Klickitat Public Utility District",
          "Knoxville Utilities Board",
          "Kodiak Electric Association",
          "L&O Power Co-op",
          "La Plata Electric Association",
          "Lafayette Utilities System",
          "Lake Country Power",
          "Lake Worth Utilities",
          "Lakeland Electric",
          "Lamar Light and Power",
          "Lansing Board of Water & Light",
          "LCEC",
          "Lenoir City Utilities Board",
          "Little River Electric Co-Op",
          "Lodi Electric Utility",
          "Long Island Power Authority (LIPA)",
          "Lorain Medina Rural Electric Cooperative",
          "Los Angeles Department of Water and Power",
          "Louisville Gas & Electric",
          "Lower Colorado River Authority",
          "Lower Valley Energy",
          "Lumbee River EMC",
          "Luminant",
          "Madison Gas and Electric",
          "Magic Valley",
          "Magnolia Electric",
          "Mansfield Municipal Electric",
          "Marblehead Electric Light Department",
          "Marshall Municipal Utilities",
          "Mason County Public Utility District 3",
          "Massachusetts Electric",
          "Massachusetts Municipal Wholesale Electric Company (MMWEC)",
          "Massena Electric Department",
          "Maui Electric Company",
          "MDU",
          "Memphis Light Gas and Water",
          "Met-Ed",
          "MidAmerican Energy",
          "Midwest Energy",
          "Minnesota Power",
          "Minnkota Power Cooperative",
          "Mississippi Power Company",
          "Missouri River Energy Services",
          "Modesto Irrigation District",
          "Mojave Electric Cooperative",
          "Montana Electric Cooperatives' Association",
          "Montana-Dakota Utilities",
          "Mountain Utilities",
          "Municipal Light & Power",
          "Nantucket Electric",
          "Narragansett Electric",
          "Nashville Electric Service",
          "National Grid",
          "Navopache Electric Cooperative",
          "Nebraska Public Power District",
          "Nevada Power",
          "New York Power Authority (NYPA)",
          "New York State Electric & Gas (NYSEG)",
          "New-Mac Electric",
          "Norris Electric Cooperative",
          "North Carolina Electric Membership Corp.",
          "North Little Rock Electric",
          "Northeast Utilities",
          "Northern Indiana Public Service Company",
          "Northern Neck Electric Cooperative",
          "Northwestern Energy",
          "NOVEC",
          "NRG Energy",
          "NSTAR",
          "NV Energy",
          "Ocala Electric",
          "Ohio Edison",
          "Oklahoma Gas & Electric",
          "Omaha Public Power District",
          "Oncor Electric (Formerly TXU)",
          "Orange & Rockland",
          "Orlando Utilities Commission",
          "Otter Tail Power Company",
          "Overton Power District No 5",
          "Owensboro Municipal Utilities",
          "Pacific Gas & Electric",
          "PacifiCorp",
          "PacifiCorp (Pacific Power)",
          "PacifiCorp (Rocky Mountain Power)",
          "Pasadena Water & Power",
          "Peabody Municipal Light Plant",
          "PECO",
          "Pedernales Electric Cooperative",
          "Penelec",
          "Penn Power",
          "People",
          "PEPCO",
          "Pike County Light & Power Company",
          "Portland General Electric",
          "Potomoc Edison (FirstEnergy)",
          "PowerSouth Energy Cooperative",
          "PPL",
          "Progress Energy Carolinas",
          "Progress Energy Florida",
          "Public Service Company of New Mexico Public Service Company of Oklahoma",
          "Public Service Electric and Gas Company (PSE&G)",
          "Public Service of NH",
          "Puget Sound Energy",
          "PWC Fayetteville",
          "Randolph Electric Membership Corp",
          "Rappahannock Electric Cooperative",
          "Redding Electric Utility (REU)",
          "Reliant Energy",
          "River Falls Municipal Utility",
          "Riverside Public Utilities",
          "Rochester Gas & Electric",
          "Rochester Public Utilities",
          "Rural Valley Electric Co.",
          "Rushmore Electric Cooperative",
          "Sacramento Municipal Utility District",
          "Salem Electric",
          "Salt River Electric",
          "Salt River Project",
          "Sam Houston Electric",
          "San Diego Gas & Electric",
          "Santee Cooper",
          "Sawnee EMC",
          "Seattle City Light",
          "SELCO",
          "Shenandoah Valley Electric Cooperative",
          "Sierra Pacific Power",
          "Sierra-Pacific Power",
          "Silicon Valley Power",
          "SLECMO",
          "Snohomish County Public Utility District (PUD)",
          "Source Power and Gas",
          "South Carolina Electric & Gas Company",
          "South Central Power Company",
          "Southern California Edison",
          "Southern California Public Power Authority",
          "Southern Maryland Electric Cooperative",
          "Southern Rivers Energy",
          "Southwest Mississippi Electric Power Association",
          "Southwestern Electric Power Company (SWEPCO)",
          "Springfield City Water Light & Power",
          "Star Tex Power",
          "Sterling Municipal Light Department",
          "Stream Energy",
          "Sulphur Springs Valley Electric Cooperative",
          "Summer Energy",
          "Superior Plus Utility",
          "Surprise Valley Power",
          "Sussex Rural Electric Cooperative",
          "SWEPCO",
          "Tacoma Power",
          "Tara Energy",
          "TECO",
          "Tennessee Jackson Energy Authority",
          "Tennessee Valley Authority",
          "Texas Electric Service Company",
          "Tideland EMC",
          "Tillamook PUD",
          "Toledo Edison",
          "Town of Vienna",
          "Tri Eagle Energy",
          "Trico Electric Cooperative",
          "Tri-County Electric",
          "Trinity PUD",
          "Trinity Valley Electric Cooperative",
          "Tucson Electric Power",
          "Turlock Irrigation District (TID)",
          "UGI Utilities",
          "UniSource Energy Services",
          "United Cooperative Services",
          "United Illuminating",
          "United Power Inc",
          "Unitil Corporation",
          "Upper Missouri G&T Cooperative",
          "Upper Peninsula Power Company",
          "Valley Electric Association",
          "Vernon Light & Power",
          "Vineland Municipal Electric Utility",
          "Wake Electric",
          "Wakefield Municipal Gas and Light Department",
          "Wallingford Electric",
          "Wasco Electric",
          "Washington - St. Tammany Electric Cooperative",
          "We Energies",
          "Weakley County Municipal Electric System",
          "Wellsboro Electric Company",
          "West Oregon Electric Cooperative",
          "Westar Energy",
          "Western Massachusetts Electric",
          "Wheeling Electric Power (AEP Ohio)",
          "Wilson Energy",
          "Wiregrass Electric Cooperative",
          "Wisconsin Power and Light Company",
          "Wisconsin Public Service Corporation",
          "Withlacoochee River Electric Cooperative",
          "WTU Retail Energy",
          "Wyandotte Municipal Services",
          "XOOM Energy",
          "Xcel Energy",
          "Other",
        ],
      },
    ],
    [
      { id: "firstName", label: "First Name", type: "text" },
      { id: "lastName", label: "Last Name", type: "text" },
    ],
    [
      { id: "email", label: "Email", type: "email" },
      { id: "phone", label: "Phone Number", type: "tel" },
    ],
    [
      { id: "address", label: "Address", type: "text" },
      { id: "city", label: "City", type: "text" },
    ],
    [
      {
        id: "state",
        label: "State",
        type: "select",
        options: [
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming",
        ],
      },
      { id: "zipCode", label: "Zip Code", type: "text" },
    ],
    [
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
        options: ["Commercial", "Multinational", "Residential"],
      },
    ],
    [
      {
        id: "purchaseTimeFrame",
        label: "Purchase Time Frame",
        type: "select",
        options: [
          "1-2 weeks",
          "3-4 weeks",
          "5-6 weeks",
          "7-8 weeks",
          "Time is flexible",
        ],
      },
      {
        id: "bestTimeToCall",
        label: "Best Time to Call",
        type: "select",
        options: ["Any Time", "Morning", "Afternoon", "Evening"],
      },
    ],
    [
      {
        id: "serviceRequirements",
        label: "Brief Explanation",
        type: "textarea",
      },
      { id: "agreement", label: "", type: "checkbox" },
    ],
  ];

  const totalSteps = fields.length;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const validateFields = () => {
    let newErrors = {};

    fields[currentStep].forEach((field) => {
      if (!formData[field.id]) {
        newErrors[field.id] = "This field is required";
      }

      if (field.id === "zipCode") {
        if (formData.zipCode.length !== 5) {
          newErrors.zipCode = "Zip code must be exactly 5 digits";
        }
      }

      if (field.id === "phone") {
        if (formData.phone.length !== 10) {
          newErrors.phone = "Phone number must be exactly 10 digits";
        }
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
    console.log("Current Step:", currentStep);
    if (validateFields()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form submitted:", formData);

      const demoFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        category: 1,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zipCode,
        homeOwner: formData.homeOwner,
        cabinetsType: formData.serviceRequirements,
        vid: 1, // Vendor ID
        leadtype: 2, // Lead type
        istest: 1, // Test mode
      };

      // Convert demoFormData to a URL-encoded string
      const requestBody = new URLSearchParams(demoFormData).toString();

      try {
        const response = await fetch(
          "https://usasolars.com/proxy.php", // PHP Proxy URL
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: requestBody,
          }
        );

        const responseText = await response.text();
        // alert("Server response: " + responseText);
      } catch (error) {
        console.error("Error submitting demo form:", error);
        alert("There was an error submitting the form. Please try again.");
      }

      // Reset form data while keeping tracking parameters
      setFormData({
        ...formData,
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
      navigate("/thank-you");
      setCurrentStep(0);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white text-secondary p-8 md:p-12 md:pt-0  shadow-lg">
      {/* Left side Image */}
      <div className="hidden md:block w-1/2 relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
        )}
        <img
          src="/assets/images/solar2.webp"
          alt="Solar Panel"
          className={`w-full h-auto transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {/* Right side Form */}
      <div className="w-full md:w-1/2 p-6 pt-12 md:pt-32 pb-6 rounded-4xl md:rounded-t-full bg-[#fe9929] relative overflow-hidden flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-6 text-center">Get a Quote</h1>

        {/* Progress Bar */}
        <div className="w-[90%] md:w-full bg-gray-300 rounded-full h-3 mb-6 mx-auto overflow-hidden max-w-xs md:max-w-full">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-600"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs sm:max-w-xl md:max-w-lg flex flex-col items-center overflow-auto"
        >
          {fields[currentStep].map((field) => (
            <div key={field.id} className="mb-6 w-full">
              <label htmlFor={field.id} className="block font-medium mb-2">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={
                    field.id === "homeOwner"
                      ? formData[field.id] === 1
                        ? "Yes"
                        : formData[field.id] === 2
                        ? "No"
                        : ""
                      : formData[field.id] || ""
                  }
                  onChange={(e) => {
                    let selectedValue = e.target.value;

                    // Convert "Yes" -> 1 and "No" -> 2 for homeOwner field
                    if (field.id === "homeOwner") {
                      selectedValue =
                        selectedValue === "Yes"
                          ? 1
                          : selectedValue === "No"
                          ? 2
                          : "";
                    }

                    setFormData({
                      ...formData,
                      [field.id]: selectedValue,
                    });
                  }}
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
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              ) : field.type === "checkbox" ? (
                <div className="flex items-start gap-2  ">
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.id}
                    checked={formData[field.id]}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor={field.id} className="text-sm text-justify">
                    By clicking, I agree to the{" "}
                    <Link to="/user-terms" className="underline text-primary">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="underline text-primary"
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                    , I authorize home improvement companies, their contractors,
                    and <Link className="underline text-primary"
                      to="/marketing-partners" >Partner Companies</Link> to contact me about home improvement
                    offers by phone calls and text messages to the number I
                    provided. I authorize that these marketing communications
                    may be delivered to me using an automatic telephone dialing
                    system or by prerecorded message. I understand that my
                    consent is not a condition of purchase, and I may revoke
                    that consent at any time. Mobile and data charges may apply.
                    California Residents.
                  </label>
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
                className="px-5 py-3 bg-tertiary mr-15 text-black rounded-lg shadow-md hover:bg-primary hover:text-heading cursor-pointer"
              >
                Previous
              </button>
            )}
            {currentStep < fields.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-tertiary hover:text-primary cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-white rounded-lg shadow-md cursor-pointer"
              >
                Get My Consultation
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
