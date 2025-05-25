import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const DropdownArrowKey = ({
  isOpen,
  setIsOpen,
  selectedItem,
  handleSelect,
  items=[]
}) => {
  return (
    <div className='flex gap-2 relative'>
      <div
        className="flex gap-1 items-center cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='hover:text-gray-400 text-sm font-semibold'>{selectedItem}</p>
        {!isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}

        {isOpen && (
          <div className="absolute top-full  left-0 mt-4 bg-white shadow-md rounded-lg p-2 w-40 z-10">
            <ul className="text-gray-700">
              {items.map((item,index)=>(
                  <li
                  key={index}
                  className="p-1 hover:bg-gray-200 cursor-pointer text-sm"
                  onClick={() =>{
                    handleSelect(item);
                    setIsOpen(false);
                  }
                  }
                    
                 
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownArrowKey;
