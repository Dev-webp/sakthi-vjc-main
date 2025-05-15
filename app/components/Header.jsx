"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white">
      {/* Top Line */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            <div className="relative h-14 w-24">
              <Image src="/logo-1.webp" alt="Logo 1" fill className="object-contain" />
            </div>
          </Link>
          <Link href="/" className="text-lg font-bold">
            <div className="relative h-14 w-28 -ml-6">
              <Image src="/logo-2.webp" alt="Logo 2" fill className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Right: Navigation */}
        <div className="hidden md:flex items-center space-x-5 text-sm md:text-base text-gray-800 font-thin">
          {['About Us', 'Services', 'Blog', 'Contact'].map((item) => (
            <div key={item} className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
              <span>{item}</span>
              <FaChevronRight size={12} />
            </div>
          ))}
          {/* Contact Number */}
          <a href="tel:+919160449000" className="flex items-center text-white py-1 px-2 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase bg-custom-blue">
            <div className="relative w-6 h-6 mr-1">
              <Image src="/phone.gif" alt="Phone" fill className="object-contain" />
            </div>
            +91 9160449000
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800 focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-white shadow-md px-4 py-3 space-y-4 text-gray-800 text-sm font-thin">
          {['About Us', 'Services', 'Blog', 'Contact'].map((item) => (
            <div key={item} className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
              <span>{item}</span>
              <FaChevronRight size={12} />
            </div>
          ))}
          <a href="tel:+919160449000" className="flex items-center text-custom-blue font-bold">
            <div className="relative w-6 h-6 mr-2">
              <Image src="/phone.gif" alt="Phone" fill className="object-contain" />
            </div>
            +91 9160449000
          </a>
        </div>
      )}

      {/* Second Line (Main Menu) */}
      <div className="hidden md:flex items-center justify-center space-x-4 py-2 bg-orange-500 text-white text-xs uppercase font-bold">
        {[
          'Home',
          'Migrate To',
          'Study Abroad',
          'PR Visas',
          'Work Abroad',
          'JobSeeker Visas',
          'Visit Visas',
          'Investor Visas',
          'Schengen Visas',
          'Resume Marketing',
          'Coaching/Training'
        ].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
            <span>{item}</span>
            {idx !== 10 && <span>|</span>}
          </div>
        ))}
      </div>

      {/* Mobile Main Menu (if menu open) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-orange-500 px-4 py-3 text-white text-sm uppercase space-y-2 font-bold">
          {[
            'Home',
            'Migrate To',
            'Study Abroad',
            'PR Visas',
            'Work Abroad',
            'JobSeeker Visas',
            'Visit Visas',
            'Investor Visas',
            'Schengen Visas',
            'Resume Marketing',
            'Coaching/Training'
          ].map((item) => (
            <div key={item} className="hover:text-gray-300 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
