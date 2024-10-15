"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Router to handle page navigation

const Coorg = () => {
  const [hotel, setHotel] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<string[]>([]);
  const [numPeople, setNumPeople] = useState("");
  const [tripType, setTripType] = useState("");
  const router = useRouter(); // Use router to redirect to the dashboard

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hotelOptions = ["Akki Homestay", "The Cocoon", "Coorg Rahul Villa"];

  const handleHotelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHotel(value);
    if (value) {
      const filtered = hotelOptions.filter((hotel) =>
        hotel.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels(hotelOptions);
    }
  };

  const handleSelectHotel = (hotel: string) => {
    setHotel(hotel);
    setFilteredHotels([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setFilteredHotels([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    // Navigate to the Dashboard page
    router.push("/Dashboard");
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/Coorg_bg.jpg')" }} // Your Coorg background image
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1 }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-xl shadow-lg max-w-lg w-full text-center md:max-w-2xl lg:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Trip Details for Coorg</h1>

        <div className="mb-6 relative" ref={dropdownRef}>
          <label htmlFor="hotel" className="block text-lg font-semibold text-gray-700 mb-3">
            Hotel Name:
          </label>
          <input
            id="hotel"
            value={hotel}
            onChange={handleHotelChange}
            placeholder="Enter or select hotel name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          {filteredHotels.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 z-10">
              {filteredHotels.map((hotelOption) => (
                <li
                  key={hotelOption}
                  onClick={() => handleSelectHotel(hotelOption)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {hotelOption}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="numPeople" className="block text-lg font-semibold text-gray-700 mb-3">
            Number of People:
          </label>
          <input
            id="numPeople"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            placeholder="Enter number of people"
            type="number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="tripType" className="block text-lg font-semibold text-gray-700 mb-3">
            Type of Trip:
          </label>
          <select
            id="tripType"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          >
            <option value="">Select trip type</option>
            <option value="Family">Family</option>
            <option value="Couple">Couple</option>
            <option value="Friends">Friends</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <motion.button
          className="w-full py-3 mt-6 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit} // Redirect to Dashboard on click
        >
          Submit
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Coorg;
