"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "AboutUs", path: "/about-us" },
    { name: "MigrateTo", path: "/migrate" },
    { name: "StudyAbroad", path: "/studyabroad" },
    { name: "PRVisas", path: "/Permanent-Residency-Visas" },
    { name: "WorkAbroad", path: "/" },
    { name: "JobSeekerVisas", path: "/" },
    { name: "VisitVisas", path: "/" },
    { name: "InvestorVisas", path: "/" },
    { name: "SchengenVisas", path: "/" },
    { name: "ResumeMarketing", path: "/" },
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
      {/* White Top Navbar with Logo and Contact Info */}
      <div className="bg-white py-0 px-2 shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
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

          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-4">
            {["Bangalore", "Hyderabad", "USA"].map((location) => (
              <div key={location} className="flex items-center text-custom-blue animate-pulse">
                <Image src="/loc.png" alt={location} width={20} height={20} />
                <p className="ml-1 text-xs font-semibold italic">{location}</p>
              </div>
            ))}
            <a href="mailto:info@vjcoverseas.com" className="flex items-center text-sm text-black italic font-semibold">
              <FaEnvelope className="mr-1 text-orange-500" />
              info@vjcoverseas.com
            </a>
            <a href="tel:+919160449000" className="flex items-center text-custom-blue text-sm font-bold">
              <Image src="/phone.gif" alt="Phone" width={24} height={24} />
              +91 9160449000
            </a>
          </div>
        </div>
      </div>

      {/* Orange Navbar for Desktop */}
      <div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
        <nav className="flex justify-center items-center px-2 max-w-7xl py-1.5 mx-auto">
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.path} className="text-white text-sm font-semibold uppercase px-4 hover:bg-white hover:bg-opacity-20">
                  {item.name}
                </Link>

                {/* Submenu for Migrate To */}
                {item.name === "Migrate To" && (
                  <div className="absolute left-0 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg space-y-2 w-56 z-50">
                    {migrateSubPages.map((subItem) => (
                      <Link key={subItem.name} href={subItem.path} className="text-orange-500 hover:text-black block py-1 text-sm font-semibold">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Submenu for PR Visas */}
                {item.name === "PR Visas" && (
                  <div className="absolute left-0 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg space-y-2 w-64 z-50">
                    {prVisaSubPages.map((subItem) => (
                      <Link key={subItem.name} href={subItem.path} className="text-orange-500 hover:text-black block py-1 text-sm font-semibold">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden">
        <nav className="flex justify-between items-center py-2 px-4">
          <div className="text-white text-sm">
            <FaEnvelope className="mr-1 inline-block" />
            info@vjcoverseas.com
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="text-white text-xl" />
            <FaTwitter className="text-white text-xl" />
            <FaInstagram className="text-white text-xl" />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className="text-white text-xl" /> : <FaBars className="text-white text-xl" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="flex flex-col items-center space-y-4 bg-orange-500 py-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path} className="text-white text-sm font-semibold uppercase" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
