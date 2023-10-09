import React from 'react';
import Image from 'next/image';

function TextCTA() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="p-4 max-w-4xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
        <h1 className="text-3xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl text-center">
          <span className="xs:col-span-4">
            <span className="text-black">Volledige Website</span>
            <span className="text-emerald-300"> Online</span> vanaf
            <span className="text-emerald-300">€1250!</span>
          </span>
        </h1>
        <div className="xs:row-start-2 xs:col-start-2 xs:self-center text-sm font-bold md:col-start-1 md:col-span-2  md:text-lg text-center ">
          <span className="flex text-xl font-bold justify-center text-center mb-5">
            <span className="text-emerald-300">Mobile&nbsp;</span> First <br />
          </span>
          gebruikerservaring op smartphones en tablets wordt als prioriteit behandeld.
        </div>
        <div className="h-16 md:h-16 xs:h-auto xs:square flex justify-center items-center">
          <Image
          width={140}
          height={160}
            className="w-36 h-36"
            src="/img/icons-home/icon-mobile1.png"
            alt="Icon"
          />
        </div>
        <div className="h-16 md:h-16 xs:h-auto xs:square flex justify-center items-center">
          <div className="xs:row-start-2 xs:col-start-2 xs:self-center text-sm font-bold md:col-start-1 md:col-span-2  md:text-lg text-center ">
            <span className="flex text-xl font-bold justify-center text-center mb-5">
              <span className="text-emerald-300">SEO&nbsp;</span> Friendly <br />
            </span>
            gebruikerservaring op smartphones en tablets wordt als prioriteit behandeld.
          </div>
        </div>
        <div className="h-16 md:h-16 xs:h-auto xs:square flex justify-center items-center">
          <Image
          width={160}
          height={160}
            className="w-36 h-36"
            src="/img/icons-home/icon-seo2.png"
            alt="Icon"
          />
        </div>
        <div className="h-16 xs:h-auto xs:square md:col-start-2">
          <div className="h-16 md:h-16 xs:h-auto xs:square flex justify-center items-center">
            <Image
           width={160}
           height={160}
              className="w-36 h-36"
              src="/img/icons-home/icon-support3.png"
              alt="Icon"
            />
          </div>
        </div>
        <div className="h-16 xs:h-auto xs:square">
          <div className="h-16 md:h-16 xs:h-auto xs:square flex justify-center items-center">
            <div className="xs:row-start-2 xs:col-start-2 xs:self-center text-sm font-bold md:col-start-1 md:col-span-2 md:pr-12 md:text-lg text-center  p-4 ">
              <span className="flex text-xl font-bold justify-center text-center mb-5">
                <span className="text-emerald-300 text-2xl">24<span className="text-black/50">/</span>7&nbsp;</span> Support <br />
              </span>
              gebruikerservaring op smartphones en tablets wordt als prioriteit behandeld.
            </div>
          </div>
        </div>
        <div className="h-16 xs:h-auto xs:square md:col-start-2">
          <div className="h-16 md:h-16 xs:h-auto xs:square flex flex-col justify-center items-center">
            <Image
            width={160}
            height={50}
              className="w-40 h-23"
              src="/img/icons-home/icon-3stars.png"
              alt="Icon"
            />
            <div className="text-3xl text-center font-bold -mt-10"> Basic </div>
            <div className="mt-10">
              <ul className="list-none list-inside text-center">
                <li className="mb-2 text-lg font-bold">Perfect voor Creative&apos;s ZZP&apos;ers:</li>
                <li className="mb-2">24/7 Support</li>
                <li className="mb-2">Responsive Website</li>
                <li className="mb-2">SSL-certificaat</li>
                <li className="mb-2">5 mailadressen</li>
                <li className="mb-2">1 Jaar hosting <br /> (*Daarna €100 per jaar)</li>
                <li className="mb-2">1 Jaar domein <br /> (*Daarna €15 per jaar)</li>
              </ul>
            </div>
            <a
              href="#_"
              className="font-buttonFont rounded mt-5 w-36 px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex justify-center ">Vraag offerte </span>
            </a>
          </div>
        </div>
        <div className="h-16 xs:h-auto xs:square md:col-start-2">
          <div className="h-16 md:h-16 xs:h-auto xs:square flex flex-col justify-center items-center">
            <Image
           width={160}
           height={50}
              className="w-40 h-23"
              src="/img/icons-home/icon-4stars.png"
              alt="Icon"
            />
            <div className="text-3xl text-center font-bold -mt-10"> Pro </div>
            <div className="mt-10">
              <ul className="list-none list-inside text-center">
                <li className="mb-2 text-lg font-bold">Alles wat in basic-pakket staat plus:</li>
                <li className="mb-2">5 Extra Pagina&apos;s</li>
                <li className="mb-2">SEO + Google Bedrijf </li>
                <li className="mb-2">SSL-certificaat</li>
                <li className="mb-2">10 mailadressen</li>
                <li className="mb-2">1 Jaar hosting <br /> (*Daarna €100 per jaar)</li>
                <li className="mb-2">1 Jaar domein <br /> (*Daarna €15 per jaar)</li>
              </ul>
            </div>
            <a
              href="#_"
              className="font-buttonFont rounded mt-5 w-36 px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex justify-center ">Vraag offerte </span>
            </a>
          </div>
        </div>
        <div className="h-16 xs:h-auto xs:square md:col-start-2">
          <div className="h-16 md:h-16 xs:h-auto xs:square flex flex-col justify-center items-center">
            <Image
            width={160}
            height={50}
              className="w-40 h-23"
              src="/img/icons-home/icon-5stars.png"
              alt="Icon"
            />
            <div className="text-3xl text-center font-bold -mt-10"> Pro Max </div>
            <div className="mt-10">
              <ul className="list-none list-inside text-center">
                <li className="mb-2 text-lg font-bold">Alles wat in basic staat plus:</li>
                <li className="mb-2">Ecommerce Solution</li>
                <li className="mb-2">Platform Solution </li>
                <li className="mb-2">Marketplace Solutions</li>
                <li className="mb-2">onbeperkt mailadressen </li>
                <li className="mb-2">Gekoppeld aan office 365 </li>
                <li className="mb-2">1 Jaar hosting  </li>
                <li className="mb-2">*Daarna €100 per jaar</li>
                <li className="mb-2">1 Jaar domein  </li>
                <li className="mb-2">*Daarna €15 per jaar</li>
              </ul>
            </div>
            <a
              href="#_"
              className="font-buttonFont rounded mt-5 w-36 px-5 py-2.5 overflow-hidden group bg-emerald-300 relative hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400/80 hover:shadow-2xl transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex justify-center ">Vraag offerte </span>
            </a>
          </div>
        </div>
        <div className="self-center text-center text-3xl md:text-lg md:col-span-2 md:text-center md:px-4">
          Alle pakketten zijn inclusief Webhosting Webdomein en goed functionerende website.
        </div>
      </div>
    </div>
  );
}

export default TextCTA;
