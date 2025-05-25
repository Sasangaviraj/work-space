import React, { useState, useRef, useEffect } from 'react';
import RootLayout from '../layout/root-layout';
import SerchBar from '../components/searchbar';
import DropdownArrowKey from '../components/drop-down-arrowkey';
import { IoFilter } from 'react-icons/io5';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FiSearch, FiDroplet } from 'react-icons/fi';
import ColorPicker from "../components/ColorPicker";
import TimeframeDropdown from '../components/TimeFrame';
import MiddleCart from '../components/Middle-cart';
import second from '../assets/second.jpg';
import logo from '../assets/logo.png'
import Footer from '../layout/footer';
import { Outlet, useNavigate } from 'react-router';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFrameOpen,setIsFrameOpen] = useState(false);
  const [selected, setSelected] = useState("popular");
  const [activeSearch, setActiveSearch] = useState('trending searches');
  const [activemenulist, setActiveMenuList] = useState('Discover');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [color, setColor] = useState('');
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const trendingItems = [
    'trending searches', 'landing Page', 'e Commerce', 'mobile app',
    'logo design', 'icons', 'dashboard',
  ];

  const menuItems = [
    'Discover', 'Animation', 'Branding', 'Illustration', 'Mobile',
    'Print', 'Product Design', 'Typography', 'Web Design',
  ];

  const Popular = ['Popular', 'New & Networthy'];

  const timeframes = ['Now','This past week','This past month','Ths past year','All'];

  const colorGrid = [
    '#FF0000', '#FF5733', '#FF8D1A', '#FFC300', '#FFD700',
    '#ADFF2F', '#00FF00', '#00FA9A', '#00CED1', '#1E90FF',
    '#4169E1', '#8A2BE2', '#DA70D6', '#FF69B4', '#F08080',
    '#808080', '#A9A9A9', '#D3D3D3', '#000000', '#FFFFFF'
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className='lg:px-6 sm:px-2'>
      <Outlet />

      {/* Hero Section */}
      <section className="w-full flex flex-col gap-8 text-center bg-white p-4 py-12 items-center justify-center">
        <h1 className="text-[35px] lg:text-[62px] md:text-[62px] font-Source-Serif-4 Display text-[#0D0C22] font-medium leading-9 lg:leading-18 md:leading-16 tracking-wide  ">
          Discover the world’s <br className="hidden lg:block md:block" /> top <br className="hidden lg:hidden" /> designers
        </h1>

        <h2 className="text-[14px] lg:text-[18px] md:text-[15px] font-Mons-Sans tracking-tight">
          Explore work from the most talented and accomplished <br className="lg:hidden" /> designers <br className="hidden lg:block" /> ready to take on your next project
        </h2>

          
        <SerchBar />

        {/* Trending Items */}
            <div className="flex flex-wrap gap-2 justify-center px-4 lg:hidden mt-4">
              {trendingItems.map((item) => (
                <TrendingSearch
                  key={item}
                  title={item}
                  isActive={activeSearch === item}
                  onClick={() => setActiveSearch(item)}
                />
              ))}
            </div>


            {/* Trending Searches - Desktop */}
            <div className="hidden lg:flex gap-3 text-center px-4 mt-4 overflow-x-auto no-scrollbar">
              {trendingItems.map((item) => (
                <TrendingSearch
                  key={item}
                  title={item}
                  isActive={activeSearch === item}
                  onClick={() => setActiveSearch(item)}
                />
              ))}
            </div>


      </section>

      {/* Menu Section */}
      <section className="flex justify-between items-center lg:p-6 px-4">
        
        <div className="flex gap-3 rounded-xl bg-white items-center justify-center border border-gray-200 px-4 py-3" 
        onClick={() => setIsOpen(!isOpen)
        }>
          <DropdownArrowKey
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedItem={selected}
            handleSelect={setSelected}
            items={Popular}
          />
        </div>

        <div className="lg:flex gap-3 hidden">
          {menuItems.map((item) => (
            <MenuItemSet
              key={item}
              title={item}
              isActive={activemenulist === item}
              onclick={() => setActiveMenuList(item)}
            />
          ))}
        </div>
 
        {/* filter button */}
        <div className="relative inline-block">
          <div
            className="flex gap-2 px-3 py-2 rounded-full border cursor-pointer border-gray-400 bg-white items-center justify-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <IoFilter className="cursor-pointer" />
            <p>Filter</p>
          </div>

         


        </div>

      </section>


       {isFilterOpen && (
            <div className="  w-full mt-5  max-h-[50vh] sm:max-h-none bg-white  px-4 sm:px-6 py-5 overflow-y-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Tags Search */}
              <div className="w-full px-4">
                <p className="font-semibold text-sm mb-1">Tags</p>
                <div className=" bg-white border border-gray-200 rounded-xl p-4 relative hover:border-rose-100 hover:border-2 transition-all duration-300">
                  <input
                    type="text"
                    placeholder="Search tags"
                    className="w-[550px] border-none outline-none pl-6 text-sm"
                  />
                  <FiSearch className="text-gray-500 text-l font-bold absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Color Picker */}
              <div className="w-full px-4">
                <div className="w-full">
                  <ColorPicker color={color} setColor={setColor} colorGrid={colorGrid} />
                </div>
              </div>

              {/* Timeframe Dropdown */}
              <div className="w-full px-4">
                <div className="w-full">
                  <TimeframeDropdown />
                </div>
              </div>

            </div>
          )}

      {/* Mobile Scroll Menu */}
      <div className="flex lg:hidden mt-6 px-4 items-center justify-center gap-2">
        <button onClick={scrollLeft} className="p-1">
          <ChevronLeft className="text-gray-500" />
        </button>

        <div ref={scrollRef}
         className="flex overflow-x-auto gap-2 no-scrollbar px-2 py-2 scroll-smooth">
          {menuItems.map((item) => (
            <MenuItemSet
              key={item}
              title={item}
              isActive={activemenulist === item}
              onclick={() => setActiveMenuList(item)}
            />
          ))}
        </div>

        <button onClick={scrollRight} className="p-1">
          <ChevronRight className="text-gray-500" />
        </button>
      </div>


      <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-3 '>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>
        <MiddleCart image={second} logo={logo} title="Race" tag="Pro" likes={50} views={756}/>

      </section>

      {/* sing up countinue */}
      <div className="flex justify-center mt-10 ">
        <button className='text-white bg-black font-semibold px-4 py-3 text-xs  items-center  rounded-full cursor-pointer ' onClick={()=>navigate('/sing-up')}>Sing up to countinue</button>
      </div>



      



       








    </div>
  );
};

export default Home;

const TrendingSearch = ({ title, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`min-w-[120px] text-sm text-center rounded-full lg:px-4 px-2 py-1 cursor-pointer transition duration-300 ${
      isActive ? 'bg-white shadow-md' : 'bg-gray-200 hover:bg-white'
    }`}
  >
    {title}
  </div>
);

const MenuItemSet = ({ onclick, title, isActive }) => (
  <div
    onClick={onclick}
    className={`min-w-[100px] font-semibold text-sm text-center rounded-full lg:px-4 px-2 py-1 cursor-pointer transition duration-300 flex  items-center justify-center ${
      isActive ?  'bg-white shadow-md' : 'hover:text-gray-500'
    }`}
  >
    <div className="flex items-center justify-center gap-1 ">
      <span>{title}</span>
      {title === "illustration" && <span>➔</span>}
    </div>
  </div>
);

