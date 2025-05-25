import React, { useEffect, useRef, useState } from "react";
import { FiDroplet } from "react-icons/fi";  // Assuming you use this for the droplet icon

const ColorPicker = ({ color, setColor, colorGrid }) => {
  const [showGrid, setShowGrid] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowGrid(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleColorSelect = (clr) => {
    setColor(clr);
    setShowGrid(false);
  };

  return (
    <div ref={wrapperRef} className=" max-w-md space-y-2 relative">
      <p className="font-semibold text-sm">Color</p>
      <div className="relative ">
        <FiDroplet className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500 text-xl" />
        <input
          type="text"
          value={color}
          onClick={() => setShowGrid(true)}
          onFocus={() => setShowGrid(true)}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#Enter hex or select"
          className="lg:w-[550px] w-full text-sm pl-10 py-4 border border-gray-200 rounded-xl outline-none hover:border-rose-100 hover:border-2 transition-all duration-300"
        />
      </div>
      {showGrid && (
        <div className="grid grid-cols-10 gap-2 max-h-32 overflow-y-auto border rounded p-2 absolute z-100 bg-white w-full mt-1 shadow-lg">
          {colorGrid.map((clr) => (
            <div
              key={clr}
              onClick={() => handleColorSelect(clr)}
              className="w-6 h-6 rounded cursor-pointer border border-gray-200 hover:border-pink-400"
              style={{ backgroundColor: clr }}
              title={clr}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
