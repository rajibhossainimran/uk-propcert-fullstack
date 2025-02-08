import React from "react";

const OrderTracking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-lime-700">
          Track Your Order
        </h1>
        <p className="text-gray-600 mt-1">
          Need help?{" "}
          <span className="font-bold text-lime-600">
            call us 01752477
          </span>
        </p>

        <hr className="my-4 border-gray-300" />

        {/* Tracking Form */}
        <h2 className="text-xl font-semibold text-lime-700">
          Tracking Details
        </h2>

        <form className="mt-4">
          {/* Full Postcode */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Full Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. BR3 1AT"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. martin.roberts@gmail.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-lime-700 text-white font-bold py-3 rounded-lg hover:bg-lime-600 transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderTracking;
