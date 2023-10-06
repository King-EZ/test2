import React, { useState, useEffect } from 'react';
import {
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  InformationCircleIcon,
  EnvelopeOpenIcon,
  Bars2Icon, // Add the MenuIcon from Heroicons
  XMarkIcon,    // Add the XIcon from Heroicons
} from '@heroicons/react/24/solid';
import Link from 'next/link';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New state for drawer

  useEffect(() => {
    // Add an event listener to track scroll position and show/hide the navbar
    const handleScroll = () => {
      if (window.scrollY > 425) {
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

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all ease-in-out duration-300 ${
        showNavbar ? 'bg-white shadow-xl z-50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-xl font-semibold text-gray-800">
          <div className="container relative mr-4 flex items-center justify-center gap-4">
            {/* Hamburger menu icon */}
            <button
              onClick={toggleDrawer}
              className="sm:hidden text-gray-800 hover:text-gray-600"
            >
              {isDrawerOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars2Icon className="h-6 w-6" />
              )}
            </button>

            {showNavbar && (
              <>
                <Link
                  href="#section1"
                  // ... (your Link component code here)
                >
                  {/* ... (your Link content here) */}
                </Link>
                <Link
                  href="#section2"
                  // ... (your Link component code here)
                >
                  {/* ... (your Link content here) */}
                </Link>
                <Link
                  href="#section3"
                  // ... (your Link component code here)
                >
                  {/* ... (your Link content here) */}
                </Link>
                <Link
                  href="#section4"
                  // ... (your Link component code here)
                >
                  {/* ... (your Link content here) */}
                </Link>
              </>
            )}

            {/* Drawer */}
            {isDrawerOpen && (
              <div className="mt-20 p-4 ">
               <div className="fixed top-0 mt-16 right-0  w-64 bg-white shadow-xl z-50 transition-all duration-300">
              {/* Drawer content */}
              <ul className="p-4 "> {/* Add pt-16 for top padding */}
                <li>
                  <Link href="#section1">Section 1</Link>
                </li>
                <li>
                  <Link href="#section2">Section 2</Link>
                </li>
                <li>
                  <Link href="#section3">Section 3</Link>
                </li>
                <li>
                  <Link href="#section4">Section 4</Link>
                </li>
              </ul>
            </div></div>
            )}
          </div>
        </div>
        <div className="hidden sm:flex space-x-4"></div>
      </div>
    </nav>
  );
}

export default Navbar;
