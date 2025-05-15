
"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import Image from "next/image"; 
import { FaEnvelope, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us" },
    { name: "Migrate To", path: "/migrate" },
    { name: "Study Abroad", path: "/studyabroad" },
    { name: "PR Visas", path: "/Permanent-Residency-Visas" },
    { name: "Work Abroad", path: "/" },
    { name: "Job Seeker Visas", path: "/" },
    { name: "Visit Visas", path: "/" },
    { name: "Investor Visas", path: "/" },
    { name: "Schengen Visas", path: "/" },
    { name: "Resume Marketing", path: "/" },
    { name: "Coaching/Training", path: "/" },
  ];

  const migrateSubPages = [
    { name: "Germany", path: "/migrate/germany" },
    { name: "Canada", path: "/migrate/canada" },
    { name: "United States", path: "/migrate/united-states" },
    { name: "Australia", path: "/migrate/australia" },
    { name: "United Kingdom", path: "/migrate/united-kingdom" },
    { name: "New Zealand", path: "/migrate/new-zealand" },
    { name: "South Africa", path: "/migrate/south-africa" },
    { name: "Hong Kong", path: "/migrate/hong-kong" },
    { name: "Denmark", path: "/migrate/denmark" },
    { name: "UAE", path: "/migrate/uae" },
  ];

  const prVisaSubPages = [
    { name: "Canada Permanent Residency Visa", path: "/pr#residency" },
    { name: "Australia Permanent Residency Visa", path: "/pr#schengen" },
    { name: "UK Permanent Residency Visa", path: "/pr#marketing" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr#marketing" },
    { name: "Germany Blue Card Visa", path: "/pr#marketing" },
    { name: "USA Green Card", path: "/pr#marketing" },
    
  
  
  ];
  
  
  

  return (
    <header>
      {/* White background section with logo, contact information, and marquee */}
      <div className="bg-white py-0 px-2 shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo (Always visible) */}
          <div className="flex items-center -ml-5 ">
  <Link href="/" className="text-lg font-bold">
    <div className="relative h-14 w-24"> 
      <Image src="/logo-1.webp" alt="Logo" fill className="object-contain" />
    </div>
  </Link>
  <Link href="/" className="text-lg font-bold">
    <div className="relative h-14 w-28 -ml-6"> 
      <Image src="/logo-2.webp" alt="Logo" fill className="object-contain" />
    </div>
  </Link>
</div>


          {/* Hidden for md and sm */}
          <div className="hidden md:flex items-center ml-4">
          <div className="relative h-8 w-8">
              <Image src="/message.gif" alt="News" fill className="object-contain" />
            </div>
          </div>
          

          {/* Marquee Section */}
          <div className="marquee-container flex-1 mx-4 hidden md:block">
            <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
              Your Study and Work Abroad Opportunities Await! Explore the world with us. Learn more about visa programs and opportunities today!
            </p>
          </div>

          {/* Contact Information (Hidden on md and sm devices) */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
              {["Bangalore", "Hyderabad", "USA"].map((location) => (
                <div key={location} className="flex items-center animate-pulse text-custom-blue">
                  <div className="relative w-5 h-5 mr-1">
                    <Image src="/loc.png" alt={location} fill className="object-contain" />
                  </div>
                  <p>{location}</p>
                </div>
              ))}
            </div>

            {/* Mail Address with Icon */}
            <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <a href="mailto:info@vjcoverseas.com" className="flex items-center">
                  <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
                  <p>info@vjcoverseas.com</p>
                </a>
              </div>
            </div>

            {/* Phone Number with Icon */}
            <div>
            <a href="tel:+919160449000" className="flex items-center text-white py-1 px-0 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-3">
                <div className="relative w-6 h-6 mr-1">
                  <Image src="/phone.gif" alt="Phone" fill className="object-contain" />
                </div>
                <span className="text-custom-blue">+91 9160449000</span>
              </a>
            </div>
          </div>
        </div>
      </div>

{/* Orange background section for large screens */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
  <nav className="flex justify-between items-center px-2 max-w-7xl py-1.5">
    <div className="flex flex-row -space-x-2 whitespace-nowrap">
    {menuItems.map((item, index) => (
  <React.Fragment key={item.name}>
    {item.name === "Migrate To" || item.name === "PR Visas" ? (
      <div className="relative group">
        <Link href={item.path} className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-1">
          {item.name}
        </Link>
        {/* Dropdown for Migrate To and PR Visas */}
        <div className="absolute left-0 hidden group-hover:block bg-gray-50 p-2 space-y-2 rounded-lg shadow-lg">
          {(item.name === "Migrate To" ? migrateSubPages : prVisaSubPages).map((subItem) => (
            <Link
              href={subItem.path}
              key={subItem.name}
              className="text-orange-500 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-200 hover:bg-opacity-30 transition-all ease-in-out block"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <Link
        href={item.path}
        className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-1"
      >
        {item.name}
      </Link>
    )}
    {index < menuItems.length - 1 && <span className="text-white hidden lg:inline-block">|</span>}
  </React.Fragment>
))}

    </div>
  </nav>
</div>


{/* Small devices */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden">
  <nav className="flex justify-between items-center py-2">
    {/* Mail Address */}
    <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
      <div className="flex items-center animate-pulse text-black">
        <a href="mailto:info@vjcoverseas.com" className="flex items-center">
          <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
          <p>info@vjcoverseas.com</p>
        </a>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-4 ml-6">
      <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaFacebook className="text-white hover:text-black"/>
      </a>
      <a href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaTwitter className="text-white hover:text-black" />
      </a>
      <a href="https://www.instagram.com/vjcoverseas_/" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaInstagram className="text-white hover:text-black" />
      </a>
    </div>

    {/* Hamburger/Close Icon for small screens */}
    <div className="flex items-center px-4 ml-4">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white text-xl"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Navigation links for small screens */}
    <div
      className={`absolute top-9 left-0 w-full h-screen items-center bg-orange-500 flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <Link
            href={item.path}
            className="text-white text-sm font-semibold px-4 mt-2 hover:bg-white hover:bg-opacity-20 uppercase"
            onClick={() => setIsMenuOpen(false)} 
          >
            {item.name}
          </Link>
          {index < menuItems.length - 1 && (
            <div className="w-40 h-px bg-white mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>

      {/* Add margin to ensure content below is not hidden */}
      <div className="mt-0"></div> {/* Adjust the margin if necessary */}
       
{/* Floating Vertical Assessment Button with Shaking "FREE" and Arrow */}
<Link href="/assessment">
  <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
    
    {/* "FREE" Text with Shaking Effect */}
    <div className="text-white font-bold text-sm bg-green-500 px-3 py-1 rounded-lg shadow-lg animate-shake">
      FREE
    </div>

    {/* Bouncing Downward Arrow */}
    <div className="animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* Vertical Assessment Text */}
    <div className="flex flex-col items-center text-white font-bold text-sm bg-orange-500 px-3 py-2 rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-orange-600">
      <span>A</span>
      <span>S</span>
      <span>S</span>
      <span>E</span>
      <span>S</span>
      <span>S</span>
      <span>M</span>
      <span>E</span>
      <span>N</span>
      <span>T</span>
    </div>

  </div>
</Link>

<style>
  {`
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-3px); }
      50% { transform: translateX(3px); }
      75% { transform: translateX(-3px); }
      100% { transform: translateX(0); }
    }
    .animate-shake {
      animation: shake 0.5s infinite;
    }
  `}
</style>




    </header>

  );
};

export default Navbar;










