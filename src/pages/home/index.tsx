import Home_Sectie_2_Horizontal_Slider from './2Diensten_Sectie';
import SkillCarousel from './3Stack_Slider/SkillCarousel'
import TextCTA from './4Text_CTA/index'
import React from 'react';
import Portfolio from './5Portfolio/index'
import Contact from './6Contact/index'
import Navbar from '../../components/navBar_Header_Top/index';
import Head from 'next/head';

function Home() {
  // Your component logic here

  return (

  <div className="">  
      <Head>
        <title>Curtis 123Websupport</title>
        <meta property="og:title" content="Curtis 123Websupport" key="title" />
      </Head>
     


    <div className="z-99">
      <Navbar />
    </div>
    <div id="services" className="relative pt-20">
      <Home_Sectie_2_Horizontal_Slider />
    </div>
    <div className="z-1">
      <SkillCarousel />
    </div>
    <div className="z-1 pt-20" id="info">
      <TextCTA />
    </div>
    <div className="z-1 pt-20" id="portfolio">
      <Portfolio />
    </div>
    <div className="z-1 pt-20" id="contact">
      <Contact />
    </div>
  </div>
  
      
    

  );
}

export default Home;

