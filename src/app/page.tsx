"use client";
import React, { useRef, useEffect } from 'react';
import Home from '../pages/home/';
import Head from 'next/head'

function Page() {
  // Your component logic here

  return (
    <div className="max-w-screen p-2  justify-center overflow-x-hidden">
      <Head>
          {/* Add meta tags, stylesheets, and other head elements here */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          />
          
        </Head>
        <div className="" >
      <Home />
      </div>
    </div>
  );
}

export default Page;


