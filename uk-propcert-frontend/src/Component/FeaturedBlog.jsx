import React from "react";

const FeaturedBlog = () => {
  return (
    <section className="p-6">
     <h2 className="py-12 text-5xl font-semibold text-lime-700 mb-8 text-center" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
     Featured Blog
      </h2>
      <div className="flex flex-col md:flex-row border border-1 bg-white shadow-2xl rounded-2xl overflow-hidden mb-10">
        {/* Left Image Section */}
        <div className="md:w-2/5">
          <img
            src="https://crm.propcert.co.uk/storage/app/public/images/1724917155_4-min%20(1).jpg"
            alt="Blog"
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="md:w-3/5 p-6 flex flex-col justify-start">
          <h3 className="text-3xl font-bold text-lime-800 mb-4">
          Agreed limitations on EICR
          </h3>
          <p className="text-lime-600 font-medium mt-1 mb-4">
            Team Propcert | 12/04/24 | 5m read
          </p>
          <p className="text-gray-600 mt-3 text-lg">
            In this comprehensive guide, we will delve into the intricacies of
            the agreed limitations on EICR, providing valuable insights and
            information to help you navigate this important aspect of property
            management effectively.
          </p>
          <button className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-full transition w-1/3 md:w-1/5">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
