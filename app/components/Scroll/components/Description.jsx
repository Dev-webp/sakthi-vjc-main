// import { Link } from 'lucide-react';
import React from 'react';
import Link from 'next/link';


export default function Description() {
    return (
        <div className="relative flex flex-col justify-center items-center mt-0 md:mt-0 lg:mt-0 py-8 md:py-32 lg:py-14 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-30">
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            fill="none"
        >
            <path
                d="M400 200C550 250 650 150 700 300C750 450 600 500 400 500C200 500 50 450 100 300C150 150 250 150 400 200Z"
                fill="rgba(255,255,255,0.3)"
            />
        </svg>
    </div>
    <div className="relative text-center -mb-6">
        <h1 className="text-[6vw] lg:text-[4vw] font-bold uppercase leading-tight">
            Turn Dreams Into Destinations
        </h1>

        <p className="mt-2 lg:mt-2 text-lg md:text-xl font-medium max-w-[80%] mx-auto">
        Empower Your journey with Most Trusted visa & immigration Brand of India for a brighter future
        </p>
    </div>

    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto lg:max-w-[95%] px-4">
  {/* Canada */}
  <div
    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all mx-auto"
    style={{
      backgroundImage: "url('/canada.png')",
      width: '250px',
      height: '500px',
    }}
  >
    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-4 text-center w-full ">
      <h3 className="text-2xl font-bold text-black uppercase mb-0 ">Canada</h3>
      <Link href="/assessment">
        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap mt-2">
          Free Assessment
        </button>
      </Link>
      <p className="text-sm text-black max-w-44 mx-auto mt-2 ml-2">
      Explore your chances and plan expenses to settle & study in Canada.
      </p>
    </div>
  </div>

  {/* Australia */}
  <div
    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all mx-auto"
    style={{
      backgroundImage: "url('/australia.png')",
      width: '250px',
      height: '500px',
    }}
  >
    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-4 text-center w-full">
      <h3 className="text-2xl font-bold text-black uppercase">Australia</h3>
      <Link href="/assessment">
        <button className="px-4 py-2 text-md font-semibold text-white uppercase whitespace-nowrap mt-2">
          Free Assessment
        </button>
      </Link>
      <p className="text-sm text-black max-w-56 mx-auto mt-2 mr-6">
      Check visa chances & Permanent Residency or study options in Australia.
      </p>
    </div>
  </div>

 
  {/* USA */}
<div
  className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all mx-auto mt-14"
  style={{
    backgroundImage: "url('/Usa.png')",
    width: '200px',
    height: '430px',
  }}
>
  <div className="absolute bottom-28 mt-1 left-1/2 transform -translate-x-1/2 px-4 py-4 text-center w-full">
    <h3 className="text-2xl font-bold text-black uppercase mb-0">USA</h3>
    <Link href="/assessment">
      <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap mt-2">
        Free Assessment
      </button>
    </Link>
    <p className="text-sm text-black max-w-52 mx-auto mt-2">
    Explore your chances & expenses to work or study in the USA.
    </p>
  </div>
</div>


  {/* Germany */}
  <div
    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all mx-auto"
    style={{
      backgroundImage: "url('/germany.png')",
      width: '250px',
      height: '500px',
    }}
  >
    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-4 text-center w-full">
      <h3 className="text-2xl font-bold text-black uppercase mb-0">Germany</h3>
      <Link href="/assessment">
        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap mt-2">
          Free Assessment
        </button>
      </Link>
      <p className="text-sm text-black max-w-64 mx-auto mt-2 mr-5">
        Check your Documentation and Process for Germany Opportunity Card Visa.
      </p>
    </div>
  </div>

  {/* UK */}
  <div
    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all mx-auto"
    style={{
      backgroundImage: "url('/uk.png')",
      width: '250px',
      height: '500px',
    }}
  >
    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-4 text-center w-full">
      <h3 className="text-2xl font-bold text-black uppercase mb-0">UK</h3>
      <Link href="/assessment">
        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap mt-2">
          Free Assessment
        </button>
      </Link>
      <p className="text-sm text-black max-w-44 mx-auto mt-2 ml-3">
        Know your chances and estimated expenses to study in UK.
      </p>
    </div>
  </div>
</div>
</div>
    );
}
