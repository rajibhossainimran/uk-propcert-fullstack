import { useState } from "react";
import { FaHome, FaFire, FaPlug, FaClipboardCheck, FaGasPump } from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";

const tabs = [
  { name: "Residential", id: "residential" },
  { name: "Commercial", id: "commercial" },
  { name: "New Build", id: "new_build" },
];

const services = {
  residential: [
    { name: "Domestic EICR", icon: <FaClipboardCheck /> },
    { name: "Boiler Servicing", icon: <FaGasPump /> },
    { name: "Asbestos Survey", icon: <FaFire /> },
    { name: "Gas Safety Certificate (CP12)", icon: <FaPlug /> },
    { name: "MEES Report", icon: <FaHome /> },
    { name: "Legionella Risk Assessment", icon: <GiWaterDrop /> },
    { name: "Domestic EPC", icon: <FaHome /> },
    { name: "Fire Risk Assessments", icon: <FaFire /> },
    { name: "PAT Testing", icon: <FaPlug /> },
    { name: "Inventory Reports", icon: <MdOutlineBuild /> },
    { name: "Get an EPC", icon: <FaClipboardCheck /> },
  ],
  commercial: [
    { name: "Commercial EICR", icon: <FaClipboardCheck /> },
    { name: "HVAC Servicing", icon: <FaGasPump /> },
    { name: "Asbestos Survey", icon: <FaFire /> },
    { name: "Gas Safety Certificate (CP12)", icon: <FaPlug /> },
    { name: "MEES Report", icon: <FaHome /> },
    { name: "Legionella Risk Assessment", icon: <GiWaterDrop /> },
    { name: "Domestic EPC", icon: <FaHome /> },
    { name: "Fire Risk Assessments", icon: <FaFire /> },
  ],
  new_build: [
    { name: "Building Safety Inspection", icon: <FaFire /> },
    { name: "Foundation Check", icon: <MdOutlineBuild /> },
    { name: "PAT Testing", icon: <FaPlug /> },
    { name: "Inventory Reports", icon: <MdOutlineBuild /> },
    { name: "Get an EPC", icon: <FaClipboardCheck /> },
  ],
};

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("residential");

  return (
    <div className="w-full mx-auto p-5">
        <h2 className="py-12 text-5xl font-semibold text-lime-700 mb-8 text-center" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
        Select Your Services
      </h2>
      {/* Tabs */}
      <div className="flex ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-12 py-5 font-semibold text-2xl ${
              activeTab === tab.id ? "rounded-t-[50px] text-white bg-lime-600  border border-lime-600" : "rounded-t-[50px] text-lime-800  border border-lime-600 bg-lime-100"
            }` }
            onClick={() => setActiveTab(tab.id)}
            style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.4)" }}>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className="bg-white border border-lime-600 rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services[activeTab].map((service, index) => (
            <a href="#">
               <div
                key={index}
                className="flex items-center py-8 px-3 bg-gray-100 hover:bg-lime-700 rounded-3xl shadow-md hover:text-white group"
                >
                <div className="text-lime-600 text-4xl mr-3 group-hover:text-white">
                    {service.icon}
                </div>
                <span className="font-semibold text-gray-600 group-hover:text-white text-xl">{service.name}</span>
                </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
