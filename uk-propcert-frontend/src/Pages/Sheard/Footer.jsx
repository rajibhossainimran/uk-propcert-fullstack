import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
      }}
    >
      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between border-b border-lime-500 pb-6">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-lime-400">PROPCERT</h2>
          </div>

          {/* Services Section */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-lg font-semibold text-lime-400 mb-2">
                Services
              </h3>
              <ul className="space-y-1">
                <li>Domestic EPC</li>
                <li>Domestic EICR</li>
                <li>Gas Safety Certificate (CP12)</li>
                <li>PAT Testing</li>
                <li>Fire Risk Assessments</li>
                <li>Asbestos Survey</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-lime-400 mb-2">
                Commercial Services
              </h3>
              <ul className="space-y-1">
                <li>Commercial EPC</li>
                <li>Commercial EICR</li>
                <li>Commercial PAT Testing</li>
                <li>Water Usage Calculations</li>
                <li>Heat Loss Calculations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-lime-400 mb-2">
                About Us
              </h3>
              <ul className="space-y-1">
                <li>Blog</li>
                <li>FAQs</li>
                <li>Track Your Order</li>
                <li>Company Information</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-lime-400 mb-2">
                Contact Us
              </h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-lime-400" />
                  01752477208
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-lime-400" />
                  rajibhossainimran@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm">
          © 2025 UkPropCert. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
