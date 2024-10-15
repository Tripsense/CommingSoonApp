"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHome, AiOutlineSearch, AiOutlineFire, AiOutlineCompass } from "react-icons/ai";
import TripBuilder from './TripBuilder';
import Cuisine from './Cuisine';
import GoLive from './GoLive';
import Discover from './Discover';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("TripBuilder");

  // Function to render the selected component
  const renderContent = () => {
    switch (selectedOption) {
      case "TripBuilder":
        return <TripBuilder />;
      case "Cuisine":
        return <Cuisine />;
      case "GoLive":
        return <GoLive />;
      case "Discover":
        return <Discover />;
      default:
        return <TripBuilder />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sticky Sidebar for larger screens */}
      <div className="hidden md:flex md:w-[180px] bg-gray-800 text-white p-6 flex-col sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setSelectedOption("TripBuilder")}
            className={`block text-lg hover:text-orange-500 transition-all ${
              selectedOption === "TripBuilder" ? "text-orange-500" : ""
            }`}
          >
            Trip Builder
          </button>
          <button
            onClick={() => setSelectedOption("Cuisine")}
            className={`block text-lg hover:text-orange-500 transition-all ${
              selectedOption === "Cuisine" ? "text-orange-500" : ""
            }`}
          >
            Cuisine
          </button>
          <button
            onClick={() => setSelectedOption("GoLive")}
            className={`block text-lg hover:text-orange-500 transition-all ${
              selectedOption === "GoLive" ? "text-orange-500" : ""
            }`}
          >
            Go Live
          </button>
          <button
            onClick={() => setSelectedOption("Discover")}
            className={`block text-lg hover:text-orange-500 transition-all ${
              selectedOption === "Discover" ? "text-orange-500" : ""
            }`}
          >
            Discover
          </button>
        </nav>
      </div>

      {/* Main content area to display selected component */}
      <motion.div
        className="flex-grow bg-gray-100 p-6 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.div>

      {/* Bottom Bar for mobile view */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 px-6 flex justify-between items-center md:hidden">
        <button
          onClick={() => setSelectedOption("TripBuilder")}
          className={`flex flex-col items-center text-gray-600 hover:text-orange-500 ${
            selectedOption === "TripBuilder" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineHome className="text-2xl" />
          <span className="text-xs mt-1">Trip Builder</span>
        </button>
        <button
          onClick={() => setSelectedOption("Cuisine")}
          className={`flex flex-col items-center text-gray-600 hover:text-orange-500 ${
            selectedOption === "Cuisine" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineSearch className="text-2xl" />
          <span className="text-xs mt-1">Cuisine</span>
        </button>
        <button
          onClick={() => setSelectedOption("GoLive")}
          className={`flex flex-col items-center text-gray-600 hover:text-orange-500 ${
            selectedOption === "GoLive" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineFire className="text-2xl" />
          <span className="text-xs mt-1">Go Live</span>
        </button>
        <button
          onClick={() => setSelectedOption("Discover")}
          className={`flex flex-col items-center text-gray-600 hover:text-orange-500 ${
            selectedOption === "Discover" ? "text-orange-500" : ""
          }`}
        >
          <AiOutlineCompass className="text-2xl" />
          <span className="text-xs mt-1">Discover</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
