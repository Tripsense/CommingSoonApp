"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Page = () => {
  const [destination, setDestination] = useState("");
  const router = useRouter();

  const handleDestinationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(event.target.value);
  };

  const handleNextClick = () => {
    if (destination) {
      router.push(`/${destination}`);
    } else {
      alert("Please select a destination");
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1 }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full text-center md:max-w-2xl lg:max-w-3xl transition-all">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">TripSense</h1>
        <div className="mb-6">
          <label
            htmlFor="destination"
            className="block text-lg font-semibold text-gray-700 mb-9"
          >
            Feel Like a Local
          </label>
          <select
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          >
            <option value="">Select your Destination City</option>
            <option value="Coorg">Coorg</option>
          </select>
        </div>
        <motion.button
          onClick={handleNextClick}
          className="w-full py-3 mt-6 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page;
