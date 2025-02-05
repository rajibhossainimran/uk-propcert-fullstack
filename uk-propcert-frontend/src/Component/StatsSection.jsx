import { FaStar, FaDoorOpen, FaHardHat, FaHome } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaStar className="text-lime-600 text-4xl" />,
      number: "20,000+",
      text: "5-star ratings on Trustpilot across our divisions",
    },
    {
      icon: <FaDoorOpen className="text-lime-600 text-4xl" />,
      number: "10,000+",
      text: "Property visits carried out every month",
    },
    {
      icon: <FaHardHat className="text-lime-600 text-4xl" />,
      number: "700+",
      text: "Qualified and accredited field-based professionals",
    },
    {
      icon: <FaHome className="text-lime-600 text-4xl" />,
      number: "500,000+",
      text: "Property visits by our engineers to date",
    },
  ];

  return (
    <div
      className="mt-20 relative bg-cover bg-center py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center h-full"
      style={{
        backgroundImage:
          "url('https://energyperformancecertificates.co.uk/assets/front/image/eicr-london1/section_image.png?v=15.0.500')",
      }}
    >
      <div className="lg:w-1/2 text-white text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold bg-lime-900 bg-opacity-45   rounded-3xl px-5" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.4)" }}>
          Expertise on your doorstep,
          <br />
          covering the whole of the UK.
        </h2>
      </div>
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg px-6 py-8 rounded-lg text-center flex flex-col items-center"
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-gray-800 mt-3">
              {item.number}
            </h3>
            <p className="text-gray-600 mt-4">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
