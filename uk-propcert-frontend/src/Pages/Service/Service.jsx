import React, { useState } from "react";


const servicesData = [
    {
      "id": 1,
      "service_name": "EICR Electrical Inspection",
      "description": "Electrical Installation Condition Report (EICR) for residential properties.",
      "price": 120,
      "icon": "⚡",
      "category": "Electrical Safety",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/eicr-001.pdf",
      "property": {
        "address": "123 Baker Street, London, UK",
        "type": "Apartment",
        "owner": "John Doe",
        "contact": "+44 1234 567890"
      }
    },
    {
      "id": 2,
      "service_name": "Gas Safety Check",
      "description": "Complete gas safety inspection and certification for landlords.",
      "price": 90,
      "icon": "🔥",
      "category": "Gas Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/gas-001.pdf",
      "report_url": "https://example.com/reports/gas-001.pdf",
      "property": {
        "address": "456 Oxford Street, Manchester, UK",
        "type": "House",
        "owner": "Jane Smith",
        "contact": "+44 9876 543210"
      }
    },
    {
      "id": 3,
      "service_name": "Fire Risk Assessment",
      "description": "Detailed fire safety inspection and compliance certification.",
      "price": 150,
      "icon": "🔥",
      "category": "Fire Safety",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/fire-001.pdf",
      "property": {
        "address": "789 King's Road, Birmingham, UK",
        "type": "Commercial",
        "owner": "ABC Ltd.",
        "contact": "+44 1122 334455"
      }
    },
    {
      "id": 4,
      "service_name": "Energy Performance Certificate (EPC)",
      "description": "Energy efficiency rating and performance certificate.",
      "price": 80,
      "icon": "💡",
      "category": "Energy Efficiency",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/epc-001.pdf",
      "report_url": "https://example.com/reports/epc-001.pdf",
      "property": {
        "address": "321 Queen Street, Liverpool, UK",
        "type": "Flat",
        "owner": "David Johnson",
        "contact": "+44 5566 778899"
      }
    },
    {
      "id": 5,
      "service_name": "Legionella Risk Assessment",
      "description": "Water system testing for Legionella bacteria risk assessment.",
      "price": 110,
      "icon": "💧",
      "category": "Water Safety",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/legionella-001.pdf",
      "property": {
        "address": "654 City Road, Bristol, UK",
        "type": "Office",
        "owner": "Green Tech Ltd.",
        "contact": "+44 6677 889900"
      }
    },
    {
      "id": 6,
      "service_name": "PAT Testing",
      "description": "Portable Appliance Testing (PAT) for electrical equipment safety.",
      "price": 60,
      "icon": "🔌",
      "category": "Electrical Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/pat-001.pdf",
      "report_url": "https://example.com/reports/pat-001.pdf",
      "property": {
        "address": "222 Tower Bridge, London, UK",
        "type": "Shop",
        "owner": "Retail Co.",
        "contact": "+44 9988 776655"
      }
    },
    {
      "id": 7,
      "service_name": "Asbestos Survey",
      "description": "Inspection and report on asbestos presence in buildings.",
      "price": 130,
      "icon": "🏠",
      "category": "Building Safety",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/asbestos-001.pdf",
      "property": {
        "address": "999 Old Street, Leeds, UK",
        "type": "Warehouse",
        "owner": "Storage Solutions Ltd.",
        "contact": "+44 4433 221177"
      }
    },
    {
      "id": 8,
      "service_name": "Smoke Alarm Installation",
      "description": "Installation and testing of smoke alarms for home safety.",
      "price": 50,
      "icon": "🚨",
      "category": "Fire Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/smoke-001.pdf",
      "report_url": "https://example.com/reports/smoke-001.pdf",
      "property": {
        "address": "777 High Street, Glasgow, UK",
        "type": "Apartment",
        "owner": "Emma Watson",
        "contact": "+44 3322 445566"
      }
    },
    {
      "id": 9,
      "service_name": "Boiler Servicing",
      "description": "Routine maintenance and servicing for home boilers.",
      "price": 85,
      "icon": "🔥",
      "category": "Gas Safety",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/boiler-001.pdf",
      "property": {
        "address": "567 Elm Street, Cardiff, UK",
        "type": "House",
        "owner": "James Carter",
        "contact": "+44 2244 556677"
      }
    },
    {
      "id": 10,
      "service_name": "Emergency Lighting Inspection",
      "description": "Testing and certification of emergency lighting systems.",
      "price": 95,
      "icon": "💡",
      "category": "Electrical Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/emergency-lighting-001.pdf",
      "report_url": "https://example.com/reports/emergency-lighting-001.pdf",
      "property": {
        "address": "999 Station Road, Edinburgh, UK",
        "type": "Hotel",
        "owner": "Royal Inns Ltd.",
        "contact": "+44 6677 332211"
      }
    }
  ]
  ;

  const servicesData2 = [
    {
      "id": 1,
      "service_name": "Commercial EICR Inspection",
      "description": "Electrical Installation Condition Report (EICR) for commercial buildings.",
      "price": 250,
      "icon": "⚡",
      "category": "Electrical Safety",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/commercial-eicr-001.pdf",
      "property": {
        "address": "10 Downing Street, London, UK",
        "type": "Office Building",
        "owner": "XYZ Ltd.",
        "contact": "+44 1234 567890"
      }
    },
    {
      "id": 2,
      "service_name": "Fire Safety Risk Assessment",
      "description": "Detailed fire safety compliance check for commercial properties.",
      "price": 300,
      "icon": "🔥",
      "category": "Fire Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/commercial-fire-001.pdf",
      "report_url": "https://example.com/reports/commercial-fire-001.pdf",
      "property": {
        "address": "25 Canary Wharf, London, UK",
        "type": "Skyscraper",
        "owner": "ABC Corp.",
        "contact": "+44 9876 543210"
      }
    },
    {
      "id": 3,
      "service_name": "Gas Safety Inspection",
      "description": "Comprehensive gas safety inspection for commercial kitchens and properties.",
      "price": 200,
      "icon": "🔥",
      "category": "Gas Safety",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/commercial-gas-001.pdf",
      "property": {
        "address": "50 High Street, Manchester, UK",
        "type": "Restaurant",
        "owner": "Gourmet Ltd.",
        "contact": "+44 1122 334455"
      }
    },
    {
      "id": 4,
      "service_name": "Legionella Risk Assessment",
      "description": "Legionella bacteria risk assessment in commercial water systems.",
      "price": 180,
      "icon": "💧",
      "category": "Water Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/commercial-legionella-001.pdf",
      "report_url": "https://example.com/reports/commercial-legionella-001.pdf",
      "property": {
        "address": "78 Mall Road, Birmingham, UK",
        "type": "Shopping Mall",
        "owner": "Mega Malls Ltd.",
        "contact": "+44 5566 778899"
      }
    },
    {
      "id": 5,
      "service_name": "Emergency Lighting Test",
      "description": "Inspection and maintenance of emergency lighting in commercial buildings.",
      "price": 160,
      "icon": "💡",
      "category": "Electrical Safety",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/commercial-lighting-001.pdf",
      "property": {
        "address": "22 Kingsway, Bristol, UK",
        "type": "Hotel",
        "owner": "Luxury Stay Ltd.",
        "contact": "+44 6677 889900"
      }
    },
    {
      "id": 6,
      "service_name": "CCTV Security Assessment",
      "description": "Security camera placement and functionality assessment for businesses.",
      "price": 250,
      "icon": "📷",
      "category": "Security",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/commercial-cctv-001.pdf",
      "report_url": "https://example.com/reports/commercial-cctv-001.pdf",
      "property": {
        "address": "300 Tech Park, Cambridge, UK",
        "type": "IT Office",
        "owner": "Tech Solutions Ltd.",
        "contact": "+44 9988 776655"
      }
    },
    {
      "id": 7,
      "service_name": "Asbestos Survey",
      "description": "Survey for asbestos presence in commercial buildings.",
      "price": 220,
      "icon": "🏠",
      "category": "Building Safety",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/commercial-asbestos-001.pdf",
      "property": {
        "address": "60 Old Street, Leeds, UK",
        "type": "Factory",
        "owner": "Manufacturing Co.",
        "contact": "+44 4433 221177"
      }
    },
    {
      "id": 8,
      "service_name": "Smoke & Fire Alarm Inspection",
      "description": "Testing and certification of smoke and fire alarms in commercial spaces.",
      "price": 140,
      "icon": "🚨",
      "category": "Fire Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/commercial-smoke-001.pdf",
      "report_url": "https://example.com/reports/commercial-smoke-001.pdf",
      "property": {
        "address": "55 Business Road, Glasgow, UK",
        "type": "Corporate Office",
        "owner": "Finance Group Ltd.",
        "contact": "+44 3322 445566"
      }
    },
    {
      "id": 9,
      "service_name": "Boiler Servicing & Inspection",
      "description": "Annual servicing and maintenance of commercial boilers.",
      "price": 190,
      "icon": "🔥",
      "category": "Gas Safety",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/commercial-boiler-001.pdf",
      "property": {
        "address": "29 Elm Street, Cardiff, UK",
        "type": "Supermarket",
        "owner": "FreshMart Ltd.",
        "contact": "+44 2244 556677"
      }
    },
    {
      "id": 10,
      "service_name": "Air Quality & Ventilation Inspection",
      "description": "Assessment of air quality and ventilation systems in commercial buildings.",
      "price": 210,
      "icon": "🌬️",
      "category": "Environmental Safety",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/commercial-air-001.pdf",
      "report_url": "https://example.com/reports/commercial-air-001.pdf",
      "property": {
        "address": "100 Innovation Park, Edinburgh, UK",
        "type": "Research Lab",
        "owner": "Biotech Research Ltd.",
        "contact": "+44 6677 332211"
      }
    }
  ]
  ;

  const servicesData3 = [
    {
      "id": 1,
      "service_name": "Structural Design",
      "description": "Design and planning of structural elements for buildings.",
      "price": 200,
      "icon": "🏗️",
      "category": "Construction",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/structural-design-001.pdf",
      "property": {
        "address": "123 Main Street, City, Country",
        "type": "Commercial",
        "owner": "ABC Corp.",
        "contact": "+44 1234 567890"
      }
    },
    {
      "id": 2,
      "service_name": "Foundation Works",
      "description": "Excavation and foundation installation for buildings.",
      "price": 500,
      "icon": "🧱",
      "category": "Construction",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/foundation-001.pdf",
      "report_url": "https://example.com/reports/foundation-001.pdf",
      "property": {
        "address": "456 Park Avenue, City, Country",
        "type": "Residential",
        "owner": "John Doe",
        "contact": "+44 9876 543210"
      }
    },
    {
      "id": 3,
      "service_name": "Building Permits",
      "description": "Assistance with obtaining necessary permits for construction.",
      "price": 150,
      "icon": "🏠",
      "category": "Administrative",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/building-permits-001.pdf",
      "property": {
        "address": "789 Riverside Drive, City, Country",
        "type": "Mixed Use",
        "owner": "XYZ Ltd.",
        "contact": "+44 1122 334455"
      }
    },
    {
      "id": 4,
      "service_name": "Roofing Installation",
      "description": "Installation of roof structures and covering materials.",
      "price": 350,
      "icon": "🏠",
      "category": "Construction",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/roofing-001.pdf",
      "property": {
        "address": "101 High Street, City, Country",
        "type": "Residential",
        "owner": "Sarah Green",
        "contact": "+44 6677 889900"
      }
    },
    {
      "id": 5,
      "service_name": "Interior Design",
      "description": "Design and decoration of interior spaces.",
      "price": 400,
      "icon": "🎨",
      "category": "Interior",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/interior-design-001.pdf",
      "report_url": "https://example.com/reports/interior-design-001.pdf",
      "property": {
        "address": "321 Queen Street, City, Country",
        "type": "Office",
        "owner": "GreenTech Ltd.",
        "contact": "+44 5566 778899"
      }
    },
    {
      "id": 6,
      "service_name": "Plumbing Installation",
      "description": "Complete plumbing installation for new builds.",
      "price": 250,
      "icon": "🚰",
      "category": "Plumbing",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/plumbing-001.pdf",
      "property": {
        "address": "654 Mountain Road, City, Country",
        "type": "Residential",
        "owner": "Lily Thomas",
        "contact": "+44 2233 445566"
      }
    },
    {
      "id": 7,
      "service_name": "Electrical Wiring",
      "description": "Installation of electrical wiring systems for buildings.",
      "price": 300,
      "icon": "⚡",
      "category": "Electrical",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/electrical-001.pdf",
      "report_url": "https://example.com/reports/electrical-001.pdf",
      "property": {
        "address": "876 Green Lane, City, Country",
        "type": "Commercial",
        "owner": "TechWorks Ltd.",
        "contact": "+44 8899 667788"
      }
    },
    {
      "id": 8,
      "service_name": "Landscaping",
      "description": "Design and maintenance of outdoor spaces.",
      "price": 180,
      "icon": "🌳",
      "category": "Landscaping",
      "status": "In Progress",
      "certificate_url": null,
      "report_url": "https://example.com/reports/landscaping-001.pdf",
      "property": {
        "address": "345 Ocean Drive, City, Country",
        "type": "Mixed Use",
        "owner": "Ocean Group",
        "contact": "+44 9988 776655"
      }
    },
    {
      "id": 9,
      "service_name": "Facade Cleaning",
      "description": "Cleaning of building facades and exterior surfaces.",
      "price": 120,
      "icon": "🧼",
      "category": "Cleaning",
      "status": "Pending",
      "certificate_url": null,
      "report_url": "https://example.com/reports/facade-cleaning-001.pdf",
      "property": {
        "address": "543 Elm Street, City, Country",
        "type": "Residential",
        "owner": "Mike Foster",
        "contact": "+44 3344 556677"
      }
    },
    {
      "id": 10,
      "service_name": "Window Installation",
      "description": "Installation of windows and related structures.",
      "price": 150,
      "icon": "🪟",
      "category": "Construction",
      "status": "Completed",
      "certificate_url": "https://example.com/certificates/window-installation-001.pdf",
      "report_url": "https://example.com/reports/window-installation-001.pdf",
      "property": {
        "address": "999 Sunrise Boulevard, City, Country",
        "type": "Apartment",
        "owner": "James Clark",
        "contact": "+44 5566 778899"
      }
    }
  ]
  ;
const Service = () => {
  const [services, setServices] = useState(servicesData);
  const [services2, setServices2] = useState(servicesData2);
  const [services3, setServices3] = useState(servicesData3);

  return (
   <div>
    {/* resident service */}
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-4xl text-lime-800 font-bold mb-4 text-center ">Residential Services</h2>
      <hr className="border-t-4 border-lime-500 my-5 h-1 rounded-lg shadow-md" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col justify-center items-center py-5">
            <div className="flex flex-col items-center justify-center align-middle space-x-3">
              <p className="text-5xl py-2 text-center">{service.icon}</p>
              <h3 className="text-[24px] text-lime-800 py-2 font-semibold ">{service.service_name}</h3>
            </div>
            <p className="text-gray-600 text-xl py-1 text-center mt-2">{service.description}</p>
            <p className="text-gray-800 font-bold mt-2 text-center">Price: ${service.price}</p>
            {/* <p className={`mt-2 px-2 py-1 inline-block text-sm rounded ${
              service.status === "Completed" ? "bg-green-100 text-green-800" :
              service.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
              "bg-blue-100 text-blue-800"
            }`}>
              {service.status}
            </p> */}
            {/* <p className="text-gray-500 text-sm mt-2">{service.property.address}</p> */}
            {/* <div className="mt-3">
              {service.certificate_url ? (
                <a href={service.certificate_url} className="text-blue-600 underline" target="_blank">
                  View Certificate
                </a>
              ) : (
                <span className="text-gray-400">No Certificate</span>
              )}
            </div> */}
            <a href="#">
            <button className="bg-lime-700 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-md transition rounded-3xl mt-8">
                                Get an instant quote
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* commersial services  */}
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-4xl text-lime-800 font-bold mb-4 text-center ">Commercial Services</h2>
      <hr className="border-t-4 border-lime-500 my-5 h-1 rounded-lg shadow-md" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services2.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col justify-center items-center py-5">
            <div className="flex flex-col items-center justify-center align-middle space-x-3">
              <p className="text-5xl py-2 text-center">{service.icon}</p>
              <h3 className="text-[24px] text-lime-800 py-2 font-semibold ">{service.service_name}</h3>
            </div>
            <p className="text-gray-600 text-xl py-1 text-center mt-2">{service.description}</p>
            <p className="text-gray-800 font-bold mt-2 text-center">Price: ${service.price}</p>
            {/* <p className={`mt-2 px-2 py-1 inline-block text-sm rounded ${
              service.status === "Completed" ? "bg-green-100 text-green-800" :
              service.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
              "bg-blue-100 text-blue-800"
            }`}>
              {service.status}
            </p> */}
            {/* <p className="text-gray-500 text-sm mt-2">{service.property.address}</p> */}
            {/* <div className="mt-3">
              {service.certificate_url ? (
                <a href={service.certificate_url} className="text-blue-600 underline" target="_blank">
                  View Certificate
                </a>
              ) : (
                <span className="text-gray-400">No Certificate</span>
              )}
            </div> */}
            <a href="#">
            <button className="bg-lime-700 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-md transition rounded-3xl mt-8">
                                Get an instant quote
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>


    {/* new build services  */}
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-4xl text-lime-800 font-bold mb-4 text-center ">New Build Services</h2>
      <hr className="border-t-4 border-lime-500 my-5 h-1 rounded-lg shadow-md" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services3.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col justify-center items-center py-5">
            <div className="flex flex-col items-center justify-center align-middle space-x-3">
              <p className="text-5xl py-2 text-center">{service.icon}</p>
              <h3 className="text-[24px] text-lime-800 py-2 font-semibold ">{service.service_name}</h3>
            </div>
            <p className="text-gray-600 text-xl py-1 text-center mt-2">{service.description}</p>
            <p className="text-gray-800 font-bold mt-2 text-center">Price: ${service.price}</p>
            {/* <p className={`mt-2 px-2 py-1 inline-block text-sm rounded ${
              service.status === "Completed" ? "bg-green-100 text-green-800" :
              service.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
              "bg-blue-100 text-blue-800"
            }`}>
              {service.status}
            </p> */}
            {/* <p className="text-gray-500 text-sm mt-2">{service.property.address}</p> */}
            {/* <div className="mt-3">
              {service.certificate_url ? (
                <a href={service.certificate_url} className="text-blue-600 underline" target="_blank">
                  View Certificate
                </a>
              ) : (
                <span className="text-gray-400">No Certificate</span>
              )}
            </div> */}
            <a href="#">
            <button className="bg-lime-700 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-md transition rounded-3xl mt-8">
                                Get an instant quote
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Service;
