import { useState } from "react";

const faqs = [
  {
    question: "What is the validity period of a Commercial EPC?",
    answer:
      "A Commercial Energy Performance Certificate (EPC) is valid for 10 years from the date of issue; meaning you can use the same EPC for 10 years before needing to get a new one for the property if you are marketing it for sale or rent again. ",
  },
  { question: "Who undertakes energy calculations for a commercial property?", answer: "" },
  { question: "Is an EPC required for a non-residential property?", answer: "" },
  { question: "Can PropCert arrange an EPC for a property?", answer: "" },
  { question: "How to track orders?", answer: "" },
  { question: "How long will it take to have the certificate issued?", answer: "" },
  { question: "What is the property certification process with PropCert?", answer: "" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full mx-auto p-4">
      {/* FAQ Section */}
      <div className=" p-4 rounded-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-lime-300">
            <button
              className="w-full text-left text-xl flex justify-between items-center text-white font-medium bg-lime-700 px-10 py-5 rounded-md"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            > ✔ 
              {faq.question}
              <span className="text-4xl">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-700 pb-3 px-5 py-2 text-2xl">{faq.answer || "Coming soon..."}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
