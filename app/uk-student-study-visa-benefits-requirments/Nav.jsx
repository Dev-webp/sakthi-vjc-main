"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClipboardCheck } from 'react-icons/fa';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us" },
    { name: "Migrate To", path: "/migrate" },
    { name: "Study Abroad", path: "/studyabroad" },
    { name: "PR Visas", path: "/prvisas" },
    { name: "Work Abroad", path: "/workabroad" },
    { name: "Job Seeker Visas", path: "/jobseeker-visas" },
    { name: "Visit Visas", path: "/visitvisas" },
    { name: "Investor Visas", path: "/investor-visas" },
    { name: "Schengen Visas", path: "/schengen-visas" },
    { name: "Resume Marketing", path: "/resume-marketing" },
    { name: "Coaching/Training", path: "/coaching" },
   
  ];

  const extraItems = [
    { name: "About us" },
    { name: "Services" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const fixedItems = [
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
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
  
  const coachingSubPages = [
    { name: "IELTS", path: "/ielts" },
    { name: "GMAT", path: "/gmat" },
    { name: "GRE", path: "/gre" },
    { name: "DUOLINGO", path: "/duolingo" },
    { name: "PTE", path: "/pte" },
    { name: "TOEFL", path: "/toefl" },
  
  ];
  
  const workabroadSubPages = [
    { name: "Germany Work Permit", path: "/workabroad/germany-work-permit" },
    { name: "Canada Work Permit", path: "/workabroad/canada-work-permit" },
    { name: "USA H1b Visa", path: "/workabroad/usa-h1b-visa" },
    { name: "Australia Work Permit", path: "/workabroad/australia-work-permit" },
    { name: "UK Work Permit", path: "/workabroad/united-kingdom-work-permit" },
    { name: "Denmark Work Permit", path: "/workabroad/denmark-work-permit" },
    { name: "Dubai Work Permit", path: "/workabroad/dubai-work-permit" },
  ];

  const studyabroadSubPages = [
    { name: "USA", path: "/studyabroad/usa" },
    { name: "United Kingdom", path: "/studyabroad/uk" },
    { name: "Canada", path: "/studyabroad/canada" },
    { name: "Australia", path: "/studyabroad/australia" },
    { name: "Germany", path: "/studyabroad/germany" },
    { name: "Italy", path: "/studyabroad/italy" },
    { name: "France", path: "/studyabroad/france" },
    { name: "Singapore", path: "/studyabroad/singapore" },
    { name: "Malaysia", path: "/studyabroad/malaysia" },
    { name: "South Africa", path: "/studyabroad/southafrica" },
    { name: "New Zealand", path: "/studyabroad/newzealand" },
    { name: "Philippines", path: "/studyabroad/philippiness" },
    { name: "Poland", path: "/studyabroad/poland" },
    { name: "Ireland", path: "/studyabroad/ireland" },
    { name: "Spain", path: "/studyabroad/spain" },
    { name: "Netherlands", path: "/studyabroad/netherlands" },
    { name: "Switzerland", path: "/studyabroad/switerland" },
    { name: "Denmark", path: "/studyabroad/denmark" },
    { name: "Dubai", path: "/studyabroad/Dubai" },
    { name: "Luxembourg", path: "/studyabroad/luxembourg" },
    { name: "Hongkong", path: "/studyabroad/hongkong" },
    { name: "UAE", path: "/studyabroad/uae" },
    { name: " Norway", path: "/studyabroad/norway" },
    { name: "Sweden", path: "/studyabroad/sweden" },
  ];

  const prVisaSubPages = [
    { name: "Canada Permanent Residency Visa", path: "/prvisas/canadapr" },
    { name: "Australia Permanent Residency Visa", path: "/prvisas/australiapr" },
    { name: "UK Permanent Residency Visa", path: "/prvisas/ukpr" },
    { name: "New Zealand Permanent Residency Visa", path: "/prvisas/newzelandpr" },
    { name: "Germany Blue Card Visa", path: "/prvisas/germanybluecard" },
    { name: "USA Green Card", path: "/prvisas/usagreencard" },
  ];
  const resumemarketingSubPages = [
  
      { name: "Canada", path: "/resume-marketing/canada-resume-marketing" },
      { name: "Germany", path: "/resume-marketing/germany-resume-marketing" },
      { name: "USA", path: "/resume-marketing/usa-resume-marketing" },
      { name: "Australia", path: "/resume-marketing/australia-resume-marketing" },
      { name: "UK", path: "/resume-marketing/uk-resume-marketing" },
      { name: "Denmark", path: "/resume-marketing/denmark-resume-marketing" },
      { name: "Ireland", path: "/resume-marketing/ireland-resume-marketing" },
      { name: "Dubai", path: "/resume-marketing/dubai-resume-marketing" },
      { name: "Austria", path: "/resume-marketing/austria-resume-marketing" },
      { name: "Singapore", path: "/resume-marketing/singapore-resume-marketing" },
      { name: "New Zealand", path: "/resume-marketing/new-zealand-resume-marketing" },
      { name: "Malaysia", path: "/resume-marketing/malaysia-resume-marketing" },
      {name: "Poland",path: "/resume-marketing/poland-resume-marketing" },
      { name: "Malta", path: "/resume-marketing/malta-resume-marketing" },
    
  ];
  const jobseeker = [
    { name: "Germany Jobseeker Visa", path: "/jobseeker-visas/germany-jobseeker-visa" },
    { name: "Austria Jobseeker Visa", path: "/jobseeker-visas/austria-jobseeker-visa" },
    { name: "Portugal Jobseeker Visa", path: "/jobseeker-visas/portugal-jobseeker-visa" },
    { name: "Sweden Jobseeker Visa", path: "/jobseeker-visas/sweden-jobseeker-visa" },
    { name: "Norway Jobseeker Visa", path: "/jobseeker-visas/norway-jobseeker-visa" },
    { name: "UAE Jobseeker Visa", path: "/jobseeker-visas/uae-jobseeker-visa" },
   
  ];
  const servicesSubPages = [
    { name: "Profile Evaluation", path: "/services/profile-evaluation" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    { name: "Immigration Consultation", path: "/services/immigration-consultation" },
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "IELTS Coaching", path: "/services/ielts-coaching" },
    { name: "Resume Writing", path: "/services/resume-writing" },
    { name: "Job Search Assistance", path: "/services/job-search-assistance" },
    { name: "Interview Preparation", path: "/services/interview-preparation" },
    { name: "Post-Landing Services", path: "/services/post-landing-services" },
    { name: "Legal & Documentation", path: "/services/legal-documentation" },
  ];
  
  const investorvisasSubPages = [
    { name: "USA Investor Visa", path: "/investor-visas/usa-investor-visa"},
    { name: "Canada Investor Visa", path: "/investor-visas/canada-investor-visa"},
    { name: "Germany Investor Visa", path: "/investor-visas/germany-investor-visa" },
    { name: "Australia Investor Visa", path: "/investor-visas/australia-investor-visa"},
    { name: "UK Investor Visa", path: "/investor-visas/uk-investor-visa" },
    { name: "UAE Investor Visa", path: "/investor-visas/uae-investor-visa"},
    { name: "Portugal Investor Visa", path: "/investor-visas/portugal-investor-visa" },
    { name: "Austria Investor Visa", path: "/investor-visas/austria-investor-visa" },
   
  ];
  const visitvisasSubPages = [
    { name: "USA Visit Visa", path: "/visitvisas/usa-visit-visa" },
  { name: "USA B1 Visa", path: "/visitvisas/usa-b1-visa" },
  { name: "USA B2 Visa", path: "/visitvisas/usa-b2-visa" },
  { name: "USA B1/B2 Visa", path: "/visitvisas/usa-b1-b2-visa" },
  { name: "Canada Visit Visa", path: "/visitvisas/canada-visit-visa" },
  { name: "Australia Visit Visa", path: "/visitvisas/australia-visit-visa" },
  { name: "UK Visit Visa", path: "/visitvisas/uk-visit-visa" },
  { name: "Dubai Visit Visa", path: "/visitvisas/dubai-visit-visa" },
  { name: "Denmark Visit Visa", path: "/visitvisas/denmark-visit-visa" },
  { name: "Austria Visit Visa", path: "/visitvisas/austria-visit-visa" },
  { name: "Italy Visit Visa", path: "/visitvisas/italy-visit-visa" },
  { name: "Schengen Visit Visa", path: "/visitvisas/schengen-visit-visa" },
   
  ];
  const schengenSubPages = [
    { name: "Austria ", path: "/schengen-visas/austria",},
    { name: "Belgium ", path: "/schengen-visas/belgium", },
    { name: "Bulgaria ", path: "/schengen-visas/bulgaria",  },
    { name: "Croatia ", path: "/schengen-visas/croatia",  },
    { name: "Czech Republic ", path: "/schengen-visas/czech-republic",},
    { name: "Denmark ", path: "/schengen-visas/denmark",  },
    { name: "Estonia ", path: "/schengen-visas/estonia",  },
    { name: "Finland ", path: "/schengen-visas/finland",  },
    { name: "France ", path: "/schengen-visas/france",  },
    { name: "Germany ", path: "/schengen-visas/germany",},
    { name: "Greece ", path: "/schengen-visas/greece",  },
    { name: "Hungary ", path: "/schengen-visas/hungary",  },
    { name: "Iceland ", path: "/schengen-visas/iceland",  },
    { name: "Italy ", path: "/schengen-visas/italy",  },
    { name: "Latvia ", path: "/schengen-visas/latvia", },
    { name: "Liechtenstein ", path: "/schengen-visas/liechtenstein", },
    { name: "Lithuania ", path: "/schengen-visas/lithuania", },
    { name: "Luxembourg ", path: "/schengen-visas/luxembourg",},
    { name: "Malta ", path: "/schengen-visas/malta",},
    { name: "Netherlands ", path: "/schengen-visas/netherlands",},
    { name: "Norway ", path: "/schengen-visas/norway", },
    { name: "Poland ", path: "/schengen-visas/poland", },
    { name: "Portugal ", path: "/schengen-visas/portugal",  },
    { name: "Romania ", path: "/schengen-visas/romania",  },
    { name: "Slovakia ", path: "/schengen-visas/slovakia", },
    { name: "Slovenia ", path: "/schengen-visas/slovenia",  },
    { name: "Spain ", path: "/schengen-visas/spain", },
    { name: "Sweden ", path: "/schengen-visas/sweden",},
    { name: "Switzerland ", path: "/schengen-visas/switzerland", },
   
  ];
  

  return (
    
    <header>
       
      
      {/* Top Section */}
      <div className="bg-white py-0 px-2  shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center -ml-5">
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

          <div className="hidden md:flex items-center ml-4">
            <div className="relative h-8 w-8">
              <Image src="/message.gif" alt="News" fill className="object-contain" />
            </div>
          </div>

          {/* Marquee */}
          <div className="marquee-container flex-1 mx-10 hidden md:block">
            <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
              Your Study and Work Abroad Opportunities Await! Explore the world with us. Learn more about visa programs and opportunities today!
            </p>
          </div>

         {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4 mr-6">
        {extraItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
            <span>{item.name}</span>
            <FaChevronRight size={12} />
          </div>
        ))}
      </div>
    
              <a href="tel:+919160449000" className="flex items-center text-white py-1 px-0 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-6">
                <div className="relative w-6 h-6 mr-2">
                  <Image src="/phone.gif" alt="Phone" fill className="object-contain" />
                </div>
                <span className="text-custom-blue">+91 9160449000</span>
              </a>
            </div>
          </div>
       
    
      

{/* Desktop Navbar */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
  <div className="max-w-6xl mx-auto">
    <nav className="flex justify-center items-center py-2 text-xs">
      <div className="flex flex-row -space-x-2 whitespace-nowrap">
        {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          {item.name === "Study Abroad" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>
               
              {/* Study Abroad Submenu */}
              <div className="absolute left-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-5 grid-rows-4 gap-2 bg-black bg-opacity-50 p-3 w-[700px] min-h-[200px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {studyabroadSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
            
          ) : item.name === "Resume Marketing" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>

              {/* Resume Marketing Submenu - OPEN TO LEFT */}
              <div className="absolute right-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-3 gap-2 bg-black bg-opacity-50 p-3 w-[500px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {resumemarketingSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : item.name === "Visit Visas" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>
             {/* Visit Visas Submenu - OPEN TO LEFT */}
             <div className="absolute right-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-4 gap-2 bg-black bg-opacity-50 p-3 w-[600px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {visitvisasSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : item.name === "Schengen Visas" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>
             {/* Visit Visas Submenu - OPEN TO LEFT */}
             <div className="absolute right-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-6 gap-2 bg-black bg-opacity-50 p-3 w-[600px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {schengenSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          
          ) : (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5  uppercase mt-1"
              >
                {item.name}
              </Link>




              {["Migrate To", "PR Visas", "Job Seeker Visas","Work Abroad","Investor Visas","Services","Coaching/Training"].includes(item.name) && (
  <div className="absolute left-0 top-full mt-3 invisible bg-gradient-to-br from-orange-500/60 to-black opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 flex flex-col space-y-2 bg-black bg-opacity-50 p-3 shadow-xl z-50 transition-all duration-300 ease-in-out">
    {(
      item.name === "Migrate To"
        ? migrateSubPages
        :item.name === "Work Abroad"
        ? workabroadSubPages
        : item.name === "PR Visas"
        ? prVisaSubPages
        : item.name === "Services"
        ? servicesSubPages
        : item.name === "Coaching/Training"
        ? coachingSubPages
        : item.name === "Investor Visas"
        ? investorvisasSubPages
        : item.name === "Job Seeker Visas"
        ? jobseeker
        : [] // Fallback
    ).map((subItem) => (
      <Link
        href={subItem.path}
        key={subItem.name}
        className="text-white text-sm font-semibold text-center  px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-nowrap"
      >
        {subItem.name}
      </Link>
    ))}
  </div>
)}

  
            </div>
          )}

          {index < menuItems.length - 1 && (
            <span className="text-white hidden lg:inline-block">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>
</div>

<div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden block">
  <nav className="flex justify-between items-center py-2 px-4">
    <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
      <div className="flex items-center animate-pulse text-black">
        <a href="mailto:info@vjcoverseas.com" className="flex items-center">
          <FaEnvelope className="mr-1 w-4 h-8 text-white" />
          <p>info@vjcoverseas.com</p>
        </a>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-4">
      <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-white hover:text-black text-xl" />
      </a>
      <a href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white hover:text-black text-xl" />
      </a>
      <a href="https://www.instagram.com/vjcoverseas_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white hover:text-black text-xl" />
      </a>
    </div>

    {/* Hamburger Menu */}
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col items-end justify-end text-xs space-y-1">
  <span className="block h-1 w-8 bg-white rounded"></span>   {/* Big line */}
  <span className="block h-1 w-6 bg-white rounded"></span>   {/* Smaller line */}
  <span className="block h-1 w-4 bg-white rounded"></span>   {/* Smallest line */}
</button>
{/* Mobile Menu */}
{isMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-gradient-to-tr from-orange-500 to-black/80 text-white flex flex-col space-y-2 font-bold p-4 z-50">
    {menuItems.map((item, index) => (
      <div key={index} className="border-b border-white/20 pb-2">
        <a href={item.path} className="hover:text-orange-500 block">
          {item.name}
        </a>
      </div>
    ))}
    {extraItems.map((item, index) => (
      <div key={index} className="flex items-center justify-between border-b border-white/20 pb-2 hover:text-orange-500 cursor-pointer">
        <span>{item.name}</span>
        <FaChevronRight size={12} />
      </div>
    ))}
  </div>
)}

  </nav>

  {/* Dropdown Menu for Small Screens */}
  {/* <div
    className={`absolute left-0 w-full bg-gradient-to-tr from-black to-orange-600/75 shadow-md transition-all duration-300  ${
      isMenuOpen ? "top-full opacity-100 visible" : "top-[-300px] opacity-0 invisible" 
    }`} style={{fontFamily:'Times new roman'}}
  >
    <ul className="flex flex-col text-center py-4 space-y-3 max-h-[500px] overflow-y-auto">
      {menuItems.map((item, index) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className="text-white text-lg font-semibold hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
          {index < menuItems.length - 1 && <hr className="w-1/2 mx-auto border-black opacity-50" />}
        </li>
      ))}

      
      
    </ul>
  </div> */}
 

</div>







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
