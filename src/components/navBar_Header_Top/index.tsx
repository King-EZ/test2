import React, { useState, useEffect } from 'react';
import {
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  InformationCircleIcon,
  EnvelopeOpenIcon,
  Bars3Icon, // Add the MenuIcon from Heroicons
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New state for drawer

  useEffect(() => {
    // Add an event listener to track scroll position and show/hide the navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all ease-in-out duration-500 ${
        showNavbar ? 'bg-white shadow-xl z-50' : 'bg-transparent'
      }`}
    >
      <div className="absolute font-bold mt-2 flex items-center text-lg flex-shrink-1"> C.123</div>
      <div className="container mx-auto flex justify-center items-center">
        
        <div className="text-xl font-semibold text-gray-800">
        
          <div className="container relative mr-4 flex items-center justify-center gap-4">
            {showNavbar && (
              <>
                <Link
                  href="#services" onClick={closeDrawer}
                  className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-400 flex items-center"
                >
                  <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="flex justify-center -ml-2">
                    <DevicePhoneMobileIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
                  </span>
                </Link>
                <Link
                  href="#info" onClick={closeDrawer}
                  className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
                >
                  <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="flex justify-center -ml-2">
                    <InformationCircleIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
                  </span>
                </Link>
                <Link
                  href="#portfolio" onClick={closeDrawer}
                  className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
                >
                  <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="flex justify-center -ml-2">
                    <PaintBrushIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
                  </span>
                </Link>
                <Link
                  href="#contact" onClick={closeDrawer}
                  className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
                >
                  <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="flex justify-center -ml-2">
                    <EnvelopeOpenIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
                  </span>
                </Link>
                 
              </>
            )}

              {isDrawerOpen && (
              <div className="fixed top-0  left-0 h-full w-[350px] md:w-[650px] bg-white  z-50   border-r border-slate-300/30 shadow-xl">
                {/* Drawer content */}
                <div className="absolute font-bold text-md flex justify-center items-center  ml-8 mt-5"> Curtis.123websupport.nl</div>
                <ul className="p-4 flex flex-col ml-10 mt-16 justify-center">
                  <li  className="py-4 ">
                    <Link  className="py-4 group text-slate-600 transition duration-300"
                    
                    href="#services " onClick={closeDrawer}>Services
                    <span className="block max-w-0 group-hover:max-w-[100px] transition-all duration-500 h-0.5 bg-emerald-300 "></span>
                    </Link>
                  </li>
                  <li className="py-4 ">
                    <Link href="#info" className="py-4 group text-slate-600 transition duration-300" onClick={closeDrawer}>Info
                    <span className="block max-w-0 group-hover:max-w-[100px] transition-all duration-500 h-0.5 bg-emerald-300"></span>
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link href="#portfolio" className="py-4 group text-slate-600 transition duration-300" onClick={closeDrawer}>Portfolio
                    <span className="block max-w-0 group-hover:max-w-[100px] transition-all duration-500 h-0.5 bg-emerald-300"></span>
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link href="#contact" className="py-4 group text-slate-600 transition duration-300" onClick={closeDrawer}>Contact
                    <span className="block max-w-0 group-hover:max-w-[100px] transition-all duration-500 h-0.5 bg-emerald-300"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
         
        </div>
        
        <div className="hidden sm:flex space-x-4"></div>
      </div>
      <div className=" flex justify-end">

          <button
              onClick={toggleDrawer}
              className="sm:hidden text-gray-800 hover:text-gray-600 -mt-12"
            >
              {isDrawerOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

          </div>
    </nav>
  );
}

export default Navbar;
