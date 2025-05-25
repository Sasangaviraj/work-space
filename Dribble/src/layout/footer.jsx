import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='w-full px-4 py-8 bg-white lg:px-40 lg:pt-15 lg:pb-7'>
      {/* footer section line one */}
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between ">

        <div className="flex items-center justify-center mb-4 lg:mb-0">
          <img
            src="https://cdn.gymshark.com/images/branding/gs-icon-text.svg"
            className="h-5 object-contain"
            alt="Dribbble Logo" 
          />
        </div>

        {/* Navigation Links */}
        <div className="flex  items-center text-center gap-2 flex-row flex-wrap justify-center lg:gap-14">
          <p className="cursor-pointer text-sm font-semibold">For designers</p>
          <p className="cursor-pointer text-sm font-semibold">Hire talent</p>
          <p className="cursor-pointer text-sm font-semibold">Inspiration</p>
          <p className="cursor-pointer text-sm font-semibold">Advertising</p>
          <p className="cursor-pointer text-sm font-semibold">Blog</p>
          <p className="cursor-pointer text-sm font-semibold">About</p>
          <p className="cursor-pointer text-sm font-semibold">Careers</p>
          <p className="cursor-pointer text-sm font-semibold">Support</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 mt-6 items-center justify-center lg:mt-0"> 
          <FaTwitter className='cursor-pointer h-5 w-5' />
          <FaFacebookF className='cursor-pointer h-5 w-5' />
          <FaInstagram className='cursor-pointer h-5 w-5' />
          <FaPinterestP className='cursor-pointer h-5 w-5' />
        </div>

      </div>

      {/* footer section line two */}
      <div className='mt-8 w-full flex flex-col items-center gap-2 lg:mt-20 lg:flex-row lg:justify-between'>
        {/* Copyright */}
        <div className='flex  items-center gap-2 flex-col lg:flex-row md:gap-3'> 
          <div className="flex gap-1 items-center justify-center">
            <MdCopyright className='text-gray-400' />
            <p className="text-sm text-gray-400 cursor-pointer">2025 Dribbble</p>
          </div>
          <div className="flex gap-3 ">
            <p className='text-sm text-gray-400 cursor-pointer'>Terms</p>
            <p className='text-sm text-gray-400 cursor-pointer'>Privacy</p>
            <p className='text-sm text-gray-400 cursor-pointer'>Cookies</p>
          </div>
        </div>

        {/* Second links */}
        <div className="flex  items-center lg:gap-2 flex-row gap-2 ">
          <p className='text-gray-400 text-sm cursor-pointer'>Jobs</p>
          <p className='text-gray-400 text-sm cursor-pointer'>Designers</p>
          <p className='text-gray-400 text-sm cursor-pointer'>Freelancers</p>
          <p className='text-gray-400 text-sm cursor-pointer'>Tags</p>
          <p className='text-gray-400 text-sm cursor-pointer'>Places</p>
          <p className='text-gray-400 text-sm cursor-pointer'>Resources</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;