import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BookingSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg text-center"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-green-600"
        >
          Booking Successful!
        </motion.h2>
        <p className="mt-2 text-gray-600 pt-5 text-xl pb-3">
          Thank you for your booking. You will receive a confirmation email soon.
        </p>
        <p className="mb-10 text-sm text-red-700">
          If you do not make the payment within 2 hours, your booking will be canceled.
        </p>

        <div className="flex justify-center space-x-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="/"
              className="mt-4 px-6 py-2 bg-lime-700 text-white rounded-lg hover:bg-lime-800 transition duration-300"
            >
              Go to Home
            </Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="/mydashboard"
              className="mt-4 px-6 py-2 bg-lime-700 text-white rounded-lg hover:bg-lime-800 transition duration-300"
            >
              Go to Dashboard
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingSuccess;
