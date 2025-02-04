import React from 'react';

const services = [
    {
      title: "Gas Safety Certificates",
      image: "https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/elementor/thumbs/About-Us-2-qd9ulbkdy4ncn524n6qs0ux9d21fa8bq1w5hzib5v4.jpg",
    },
    {
      title: "Energy Performance Certificates",
      image: "https://rawalwasia.in/wp-content/uploads/2024/10/Untitled-18-7.png",
    },
    {
      title: "Electrical Installation Condition Reports",
      image: "https://www.makeurmove.co.uk/images/products/electrical-installation-condition-report.jpg",
    },
  ];

const MostPopular = () => {
    return (
        <div className="container mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
        Most Popular Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-slate-100">
              <h3 className="text-2xl font-bold " style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>{service.title}</h3>
              <button className="border border-lime-600 text-lime-700 px-4 py-2 rounded-full hover:bg-lime-100 bg-slate-100 font-semibold mt-10">
            Get an instant quate
          </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default MostPopular;