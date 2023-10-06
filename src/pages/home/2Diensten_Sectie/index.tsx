import React from 'react';
import Image from 'next/image';


// Define an array van Cards
const cardData = [

  {
    title: 'Full Stack Development',
    content:
      'Front-end, Back-end, Databases en API ... '
      ,
    imageUrl: '/img/services/fullstack.png',
    
  },
  {
    title: 'Wordpress Development',
    content:
      'Custom Wordpress Plugins en Themas, dat is waar ik me mee bezig hou',
    imageUrl: '/img/services/wordpress1.png',
    
  }, {
    title: 'Page optimization',
    content:
      'Haal het alles uit je website beste uit het internet, ik ken de fijnste technieken .',
    imageUrl: '/img/services/page-0.png',
    
  }, {
    title: 'E-commerce Solutions',
    content:
      'Complete Ecommcerce oplossingen. Denk bijvoorbeeld aan WOOCommerce',
    imageUrl: '/img/services/shop1.png',
    
  },{
    title: 'AI Development',
    content:
      'Adsense, Google Analytics, Monster Insight Zijn enkele tools die ik gebruik.',
    imageUrl: '/img/services/ai-dev.png',
    
  },{
    title: 'SEO',
    content:
      'Azure-900, Itil v4, CCNA. Zijn enkele certificaten die ik heb behaald',
    imageUrl: '/img/services/seo.png',
    
  },
  
];
// Const Slider-Sectie
const Home_Sectie_2_Horizontal_Slider = () => {
  return (
    
    <div className="min-h-fit m-4 ">
         {/* Container */}
    
         <div className="relative flex justify-center p-3 mt-24">
         <div className="flex justify-center relative z-10  text-4xl md:text-5xl font-buttonFont font-bold text-slate-700  text-center">
      Curtis@123websupport.nl
    </div>
  <span className="absolute mt-2 w-[470px] h-3 bg-emerald-300 top-5 md:top-8 transform translate-y-1/2 left-auto origin-left transition-transform animate-textColorAnimation"></span>
  <div className="relative z-10 my-20 text-4xl md:text-5xl font-buttonFont font-bold text-slate-600/98 text-center">
    
  </div>
          </div>
        {/* TITEL +  groene streep */}

     

      <div className="container relative min-w-full overflow-x-auto overflow-y-hidden whitespace-nowrap mt-28 bg-white ">
        <div className="flex flex-row ">
          {cardData.map((card, index) => (
          
          //CARDS 

        <div 
              key={index}
              className=" max-w-sm m-4 bg-white shadow-lg border-2 mb-10 border-teal-500/5 rounded-lg hover:shadow-xl hover:scale-105  transform transition-transform ease-in-out duration-1900">
              <Image 
                width={600}
                height={110}
                src={card.imageUrl}
                alt={`Card ${index + 1}`}
                
                className="w-full h-48 rounded-xl object-cover items-center bg-blend-overlay shadow-xl"/>

              <div className="p-4 ">
                <h2 className="text-xl font-semibold font-buttonFont">{card.title}</h2>

                   <p className="text-gray-600 max-w-l py-8 font-buttonFont" 
                      style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}> {card.content}
                   </p>

                   <a href="#_" className=" font-buttonFont rounded px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300">
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span className="relative">Lees Meer... </span>
                  </a>
              </div>
           {/* CARDS */}    

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_Sectie_2_Horizontal_Slider ;
