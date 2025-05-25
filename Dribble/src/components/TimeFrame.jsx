import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const TimeframeDropdown = () => {
  const options = ["Now", "This Past Week", "This Past Month", "This Past Year", "All Time"];
  const [selected, setSelected] = useState("Now");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:w-[550px] w-full" ref={dropdownRef}>
      <p className="mb-1 font-semibold text-sm text-gray-700">Timeframe</p>
      <div
        onClick={toggleDropdown}
        className="border border-gray-200 rounded-lg px-4 py-4 cursor-pointer flex justify-between items-center  hover:border-rose-100 hover:border-2"
      >
        <span>{selected}</span>
        <FaChevronDown className="text-gray-500 text-sm" />
      </div>

      {isOpen && (
        <div className="mt-1 border border-gray-300 rounded-lg shadow-lg absolute bg-white z-50 w-[600px] ">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-3 hover:bg-gray-100 cursor-pointer ${
                selected === option ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeframeDropdown;
