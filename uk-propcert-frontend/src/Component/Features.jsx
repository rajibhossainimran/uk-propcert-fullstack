import { FaClock } from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";

const Features = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-white text-center">
      {/* UK-wide service */}
      <div className="bg-lime-800 flex flex-col items-center justify-center py-6 px-4">
        <FaMap size={30} />
        <p className="text-lg font-semibold mt-2">UK-wide service</p>
      </div>

      {/* Fast turnaround */}
      <div className="bg-lime-700 flex flex-col items-center justify-center py-6 px-4">
        <FaClock size={30} />
        <p className="text-lg font-semibold mt-2">Fast turnaround</p>
      </div>

      {/* Competitive prices */}
      <div className="bg-lime-600 flex flex-col items-center justify-center py-6 px-4">
        <GiPiggyBank size={30} />
        <p className="text-lg font-semibold mt-2">Competitive prices</p>
      </div>

      {/* UK call centre */}
      <div className="bg-lime-500 flex flex-col items-center justify-center py-6 px-4">
        <FaHeadset size={30} />
        <p className="text-lg font-semibold mt-2">UK call centre</p>
      </div>
    </div>
  );
};

export default Features;
