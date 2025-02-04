import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Get an instant quote",
      description:
        "Select your service, enter your details and get your quote. Alternatively, you can call or email us.",
    },
    {
      id: 2,
      title: "Pay online or by phone",
      description:
        "Pay securely online or by phone. Our call centre and live chat is there for you every step of the way.",
    },
    {
      id: 3,
      title: "We take care of the rest",
      description:
        "We’ll contact you to schedule your order. With fast turnaround times, your order will be completed in no time.",
    },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="py-12 text-5xl font-semibold text-lime-700 mb-8 text-center" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
      How PropCert works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="w-28 h-28 flex items-center justify-center text-5xl font-bold text-lime-600 border-8 border-lime-600 rounded-full ">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold text-lime-800 mt-8">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2 px-4 text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
