import React, { useState } from 'react';

const PropertySelector = () => {
  const [selectedType, setSelectedType] = useState('Residential');

  const propertyTypes = [
    { 
      title: 'Residential',
      description: 'Saved this option if your property is a common private, and we do. Example: New Build, Fans of from 1 to 2+ properties.',
      services: [
        "Energy Performance Certificate (EPC)",
        "Portable Appliance Test (PAT)",
        "Better Service",
        "Floorplan",
        "ECR | PAT Bundle",
        "Gas Safety Certificate + Better Service Bundle",
        "EV Charger Install",
        "Alpendee Survey",
        "Gas Safety Certificate + CO Detector Bundle",
        "Electrical Remedials",
        "Smoke/CO Alarm",
        "Electrical Installation Condition Report (ECR)",
        "Gas Safety Certificate (CP12)",
        "Legionella Risk Assessment",
        "MES Report",
        "EPC | Floorplan Bundle",
        "Residential Fire Risk Assessment",
        "BER",
        "QMNE Survey",
        "Fire Alarm Condition Report Remedials",
        "GSCH85/CO"
      ]
    },
    {
      title: 'Commercial',
      description: 'Example: Offices, retail, and rental properties.',
      services: [
        "Commercial Energy Performance Certificates",
        "Commercial Portfolio Appliance Test (PM1)",
        "Commercial Emergency Light Test Remedials",
        "Commercial Adaptive Management Survey",
        "Commercial Electrical Installation Condition Report",
        "Display Energy Certificate",
        "Commercial Legionella Risk Assessment",
        "Commercial Emergency Lighting Test",
        "Commercial BFC + Floor Plan"
      ]
    },
    {
      title: 'New Build / Conversion',
      description: 'New constructions and property conversions.',
      services: [
        "New Build SAP EPC",
        "Residential Air Tightness Test",
        "Workplace Testing",
        "SBEM EPC",
        "Sustainability Label",
        "New Build Commercial EPC (No SBEM)",
        "Water Usage Calculation",
        "Sound Testing",
        "Heat Loss Calculations (for calculated)",
        "Energy Statement",
        "Commercial Air Test",
        "SBEM (No EPC)"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Select Your Property Type</h1>

      {/* Property Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {propertyTypes.map((type) => (
          <div
            key={type.title}
            onClick={() => setSelectedType(type.title)}
            className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
              selectedType === type.title
                ? 'bg-lime-600 text-white shadow-lg'
                : 'bg-white hover:shadow-md'
            }`}
          >
            <h2 className="text-xl font-semibold mb-3">{type.title}</h2>
            <p className={`text-sm ${
              selectedType === type.title ? 'text-blue-100' : 'text-gray-600'
            }`}>
              {type.description}
            </p>
          </div>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyTypes.find(t => t.title === selectedType)?.services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <h3 className="text-gray-800 font-medium">{service}</h3>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
        <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertySelector;