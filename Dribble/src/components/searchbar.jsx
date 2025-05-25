import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import DropdownArrowKey from './drop-down-arrowkey';


const options = ["Short", "Art", "Video", ];


const SearchBar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [selectedItem,setSelectedItem] = useState("Short");
    
    const handleSelect = (item) =>{
        setSelectedItem(item);
        setIsOpen(false);
    };



  return (
    <div className=' px-3'>
        <div className="flex items-center bg-gray-100 rounded-full p-2 border-4 border-transparent justify-between hover:bg-white hover:border-rose-50 transition-all duration-300">
            {/* left side */}
            <div>
                <input
                    type="text"
                    placeholder="What are you looking for ?"
                    className=" w-[250px] lg:w-[600px] md:w-[520px] px-3 py-0.5 focus:outline-none bg-transparent text-xs lg:text-sm font-semibold"
                />
            </div>

            {/* right side */}
            <div className="flex items-center justify-center gap-2">
                <DropdownArrowKey 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedItem={selectedItem}
                handleSelect={handleSelect}
                items={options}
                optionsFontSize="text-sm"/>

            <FiSearch className="text-white text-4xl p-2 bg-rose-400 rounded-full cursor-pointer" />

            </div>
            
        </div>
    </div>
  )
}

export default SearchBar;



