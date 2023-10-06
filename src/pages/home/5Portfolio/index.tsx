import React from 'react';
import Image from 'next/image';


function Portfolio() {
  return (
    <div>
      <div className="relative  mt-20 flex flex-col items-center">
      <div className="flex justify-center relative z-10  text-4xl md:text-5xl font-buttonFont font-bold text-slate-700  text-center">
      Laatste Sites
    </div>
  <span className="absolute w-[400px] md:w-1/4 h-3 bg-emerald-300 top-5 md:top-8 transform translate-y-1/2 left-auto origin-left transition-transform animate-textColorAnimation"></span>
  <div className="relative z-10 my-20 text-4xl md:text-5xl font-buttonFont font-bold text-slate-600/98 text-center">
    
  </div>
</div>

      <div className="relative flex justify-center mb-[200px] flex-shrink-0">
        <div className="flex overflow-x-auto">
          <div className="w-[200] h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px] w-200"
              src="/img/portfolio/ctr-taxi.png"
              alt="CTR-TAXI"
            />
          </div>
          <div className="h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px]"
              src="/img/portfolio/revolutie.png"
              alt="Icon"
            />
          </div>
          <div className="h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px]"
              src="/img/portfolio/123webstore.png"
              alt="Icon"
            />
          </div>
          <div className="h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px]"
              src="/img/portfolio/tigrie.png"
              alt="Icon"
            />
          </div>
          <div className="w-200 h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px] w-200"
              src="/img/portfolio/ctr-taxi.png"
              alt="Icon"
            />
          </div>
          <div className="h-[500px] flex-shrink-0">
            <Image
           width={250}
           height={500}
              className="h-[500px]"
              src="/img/portfolio/revolutie.png"
              alt="Icon"
            />
          </div>
          <div className="h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px]"
              src="/img/portfolio/123webstore.png"
              alt="Icon"
            />
          </div>
          <div className="h-[500px] flex-shrink-0">
            <Image
            width={250}
            height={500}
              className="h-[500px]"
              src="/img/portfolio/tigrie.png"
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
