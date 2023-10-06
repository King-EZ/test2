import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Button from '@/m_Components/Buttons/Button_Header_Homepage/index';
import Iconlist from './Header_Icon_List';
import {
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  InformationCircleIcon,
  EnvelopeOpenIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link'
import ScrollDownButton from '@/pages/home/1Header/ScrollDown_Header_Homepage/index';

const Header = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Designer', 'Developer', 'Supporter'],
      typeSpeed: 90,
      startDelay: 500,
      backSpeed: 25,
      backDelay: 1000,
      showCursor: true,
      cursorChar: '}',
      loop: true,
      smartBackspace: true, // Only backspace to the beginning of the current word
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="relative bg-slate-300/50 headerBG bg-auto bg-no-repeat bg-center h-screen z-0 mb-20">
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="grid grid-cols-1 max-h-96">
          <div className="container relative p-10 bg-emerald-100/5 h-auto -ml-2 -mt-24">
            <div className="flex py-5 mt-20">
              <h2 className="absolute flex ml-4 mt-3 justify-center text-lg md:text-xl font-bold font-buttonFont text-slate-900/80">
                Web&#123;<span ref={el} />
              </h2>
            </div>
            <span className="absolute w-full md:w-1/2 h-[2px] bg-emerald-300/30 -left-[5px] top-[175px] md:top-[103px] ml-3 transform -translate-y-1/2 left-1.2 origin-left transition-transform animate-textColorAnimation"></span>
            <Iconlist />
          </div>
          <div className="container relative mr-4 flex items-center justify-center gap-4">
            <Link
              href="#services"
              className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
            >
              <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="flex justify-center -ml-2">
                <DevicePhoneMobileIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
              </span>
            </Link>
            <Link
              href="#info"
              className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
            >
              <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="flex justify-center -ml-2">
                <InformationCircleIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
              </span>
            </Link>
            <Link
              href="#portfolio"
              className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
            >
              <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="flex justify-center -ml-2">
                <PaintBrushIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
              </span>
            </Link>
            <Link
              href="#contact"
              className="font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300 flex items-center"
            >
              <span className="absolute min-w-full right-0 w-auto h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="flex justify-center -ml-2">
                <EnvelopeOpenIcon className="h-6 w-6 md:h-24 md:w-24 text-white" />
              </span>
            </Link >
          </div>
        </div>
        <div className="mt-36 mr-5">
          <ScrollDownButton />
        </div>
      </div>
      <div className='block mt-24' id="scroll-target"></div>
    </main>
  );
};

export default Header;
