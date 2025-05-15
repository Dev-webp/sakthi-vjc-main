"use client";
import React, { useState } from "react";
import {  AiOutlineBook, AiOutlineCodepen, AiOutlineShop, AiOutlineUsergroupAdd, AiOutlineCompass, AiOutlineKey } from "react-icons/ai";
import { FaShieldAlt, FaBriefcase } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";


import Content from "./Content"; 
import Gworkvisa from "./Gworkvisa";
import Gstudentvisa from "./Gstudentvisa";
import Gtouristvisa from "./Gtouristvisa";
import Gdependentvisa from "./Gdependentvisa";
import Gselfempvisa from "./Gselfempvisa";
import Gfreelance from "./Gfreelance";
import UKBvisa from "./UKBvisa";
import UKTvisa from "./UKTvisa";
import UKinnovatorvisa from "./UKinnovatorvisa";
import UKsponvisa from "./UKsponvisa";
import UKstudvisa from "./UKstudvisa";

import HKtourist from "./HongKongpages/HKtourist";
import HKemployee from "./HongKongpages/HKemployee";
import HKstudentvisa from "./HongKongpages/HKstudentvisa";

import HKbusiness from "./HongKongpages/HKbusiness";
import HKdependent from "./HongKongpages/HKdependent";
import HKwork from "./HongKongpages/HKwork";

import Canadastudent from "./Canadapages/Canadastudent";
import Canadatourist from "./Canadapages/Canadatourist";
import Canadapr from "./Canadapages/Canadapr";
import Canadafs from "./Canadapages/Canadafs";

import Ausstud from "./Australia-visa/Aus-stud"
import Ausfamily from "./Australia-visa/Aus-family"
import Ausdependent from "./Australia-visa/Aus-dependent"
import Ausbusiness from "./Australia-visa/Aus-business"
import Aussponser from "./Australia-visa/Aus-sponsor";
import Auswork from "./Australia-visa/Aus-work"

import Denbusiness from "./Denmark-visa/Den-business"
import Denstud from "./Denmark-visa/Den-stud"
import Denwork from "./Denmark-visa/Den-work"
import Dentourist from "./Denmark-visa/Den-tourist"


import Newzepr from "./Newzealand-visa/Newze-pr"
import Newzedepen from "./Newzealand-visa/Newze-Depen"
import Newzeskillwork from "./Newzealand-visa/Newze-skillwork"
import Newzestud from "./Newzealand-visa/Newze-stud"
import Newzetourist from "./Newzealand-visa/Newze-tourist"
import Newzebusiness from "./Newzealand-visa/Newze-business"
import Newzework from "./Newzealand-visa/Newze-work"

import UAEstud from "./UAE-visa/UAE-stud";
import UAEgolden from "./UAE-visa/UAE-golden";
import UAEwork from "./UAE-visa/UAE-work";
import UAEgreen from "./UAE-visa/UAE-green";
import UAEtourist from "./UAE-visa/UAE-tourist";



import USAstud from "./USA-visa/USA-stud"
import USAbusiness from "./USA-visa/USA-business"
import USAh1b from "./USA-visa/USA-h1b"
import USAinvestor from "./USA-visa/USA-investor"
import USAtourist from "./USA-visa/USA-tourist"








const countriesData = {
    "Migrate to Germany": {
      description:"",
      image: "https://example.com/germany-image.jpg", // Add the image URL here
      visaTypes: [
        "Germany Opportunity Card",
        "Germany Work Visa",
        "Germany Student Visa",
        "Germany Tourist Visa",
        "Germany Dependent Visa",
        "Germany Self Employment Visa",
        "Germany Freelance Visa"
      ]
    },
    "Migrate to Canada": {

      image: "https://example.com/canada-image.jpg", // Add the image URL here
      visaTypes: [
        "Canada Work Visa",
        "Canada Student Visa",
        "Canada Tourist Visa",
        "Canada Permanent Residency Visa",
        "Canada Family Sponsorship Visa"
      ]
    },
    "Migrate to United States": {
      image: "https://example.com/us-image.jpg", // Add the image URL here
      visaTypes: [
        "USA Student Visa",
        "USA Tourist Visa",
        "USA Business Visa",
        "USA H1B Visa",
        "USA Investor Visa"
      ]
    },
    "Migrate to Australia": {

      image: "https://example.com/australia-image.jpg", // Add the image URL here
      visaTypes: [
        "Australia Student Visa",
        "Australia Tourist Visa",
        "Australia Business Visa",
        "Australia Work Visa",
        "Australia Family Visa",
        "Australia Dependent Visa",
        "Australia Work Visa",
        "Australia Sponsorship Visa"
      ]
    },
    "Migrate to United Kingdom": {
      image: "https://example.com/uk-image.jpg", // Add the image URL here
      visaTypes: [
        "UK Student Visa",
        "UK Tourist Visa",
        "UK Business Visa",
        "UK Innovator Visa",
        "UK Sponsorship Visa"
      ]
    },
    "Migrate to New Zealand": {
      image: "https://example.com/nz-image.jpg", // Add the image URL here
      visaTypes: [
        "New Zealand Permanent Resident Visa",
        "New Zealand Skilled Work Visa",
        "New Zealand Student Visa",
        "New Zealand Business Visa",
        "New Zealand Tourist Visa",
        "New Zealand Dependent Visa",
        "New Zealand Work Visa"
      ]
    },
    "Migrate to South Africa": {
      image: "https://example.com/south-africa-image.jpg", // Add the image URL here
      visaTypes: [
        "South Africa Critical Skills Visa",
        "South Africa General Work Visa",
        "South Africa Business Visa",
        "South Africa Tourist Visa"
      ]
    },
    "Migrate to Hong Kong": {
      image: "https://example.com/hong-kong-image.jpg", // Add the image URL here
      visaTypes: [
        "Hong Kong Student Visa",
        "Hong Kong Employment Visa",
        "Hong Kong Business Visa",
        "Hong Kong Tourist Visa",
        "Hong Kong Dependent Visa",
        "Hong Kong Work Visa"
      ]
    },
    "Migrate to Denmark":{
      image: "https://example.com/denmark-image.jpg", // Add the image URL here
      visaTypes: [
        "Denmark Student Visa",
        "Denmark Work Permit Visa",
        "Denmark Tourist Visa",
        "Denmark Business Visa"
      ]
    },
    "Migrate to UAE": {
      image: "https://example.com/uae-image.jpg", // Add the image URL here
      visaTypes: [
        "UAE Student Visa",
        "UAE Golden Visa",
        "UAE Work Visa",
        "UAE Green Visa",
        "UAE Tourist Visa"
      ]
    }
  };

const Migrate = () => {
  const [selectedCountry, setSelectedCountry] = useState(null); // No country selected initially
  const [selectedVisa, setSelectedVisa] = useState(null); // To store selected visa type
  const [showVisaTypes, setShowVisaTypes] = useState(false); // State to toggle between country list and visa types
  const [viewingVisaDetail, setViewingVisaDetail] = useState(false); // State for viewing details of a specific visa

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedVisa(null); // Reset selected visa when country is selected
    setShowVisaTypes(true); // Show visa types after country selection
    setViewingVisaDetail(false); // Reset the visa detail view
  };

  const handleVisaSelect = (visa) => {
    setSelectedVisa(visa);
  };

  const handleBackToCountries = () => {
    setShowVisaTypes(false); // Go back to the countries list
    setViewingVisaDetail(false); // Reset visa detail view
  };

  const handleBackToVisaTypes = () => {
    setViewingVisaDetail(false); // Go back to the visa types list
  };

  const getIconForVisaType = (visaType) => {
    return (
      <div className="bg-gray-100 p-2 rounded-full">
        {visaType.includes("Student") && <AiOutlineBook className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Work") && <AiOutlineCodepen className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Business") && <AiOutlineShop className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Tourist") && <AiOutlineCompass className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Family") && <AiOutlineUsergroupAdd className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Golden") && <FaShieldAlt className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Permanent Resident") && <AiOutlineKey className="h-6 w-6 text-orange-500" />}
        {!visaType.includes("Student") && !visaType.includes("Work") && !visaType.includes("Business") && !visaType.includes("Tourist") && !visaType.includes("Family") && !visaType.includes("Golden") && !visaType.includes("Permanent Resident") && <FaBriefcase className="h-6 w-6 text-orange-500" />}
      </div>
    );
  };

  return (

    
    <section className="py-10 bg-gradient-to-bl from-white to-orange-50" tyle={{fontFamily: "Times New Roman, serif"}}>
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 mt-5">
    {/* Left Sidebar (Country or Visa List) */}
    <div className="w-full lg:w-[27%] sticky top-0 h-full mb-2 lg:mb-0">
      <h2 className="text-2xl font-bold mb-6 uppercase text-center tracking-wide" style={{color:'rgb(220, 4, 4)'}}>
        {viewingVisaDetail ? "Visa Details" : selectedVisa ? "Visa Types" : "Countries to Migrate .."}
      </h2>

      <ul className="space-y-3 text-gray-700">
  {/* Show countries list if not in visa types view */}
  {!showVisaTypes && !viewingVisaDetail &&
    Object.keys(countriesData).map((country, index) => (
      <li
        key={index}
        onClick={() => handleCountrySelect(country)}
        className={`cursor-pointer px-6 py-2 rounded-lg shadow-md transform hover:scale-105 flex justify-between items-center transition duration-300 ${
          country === selectedCountry ? "bg-orange-300 text-black" : "hover:bg-orange-300 hover:text-black"
        }`}
      >
        <span>{country}</span>
        <AiFillCaretRight className="h-4 w-4 text-gray-900" />
      </li>
    ))}

  {/* Show visa types if in visa types view */}
  {showVisaTypes &&
    countriesData[selectedCountry]?.visaTypes.map((visa, index) => (
      <li
        key={index}
        onClick={() => handleVisaSelect(visa)}
        className={`cursor-pointer px-4 py-2 rounded-lg shadow-md transform hover:scale-105 flex justify-between items-center transition duration-300 ${
          visa === selectedVisa ? "bg-orange-300 text-black" : "hover:bg-orange-300 hover:text-black"
        }`}
      >
        <span>{visa}</span>
        {getIconForVisaType(visa)}
      </li>
    ))}
</ul>


      {/* Back button to go back to countries list */}
      {showVisaTypes && !viewingVisaDetail && (
        <button
          onClick={handleBackToCountries}
          className="mt-6 px-4 py-2 bg-gray-950 text-white rounded-lg shadow-md hover:bg-teal-950 transition duration-300 w-full hover:bg-orange-300"
        >
          Back to Countries
        </button>
      )}

      {/* Back button to go back to visa types */}
      {viewingVisaDetail && (
        <button
          onClick={handleBackToVisaTypes}
          className="mt-6 px-4 py-2 bg-gray-950 text-white hover:bg-orange-300 rounded-lg shadow-md hover:bg-teal-950 transition duration-300 w-full"
        >
          Back to Visa Types
        </button>
      )}
    </div>

    {/* Right Content (Country description and visa details) */}
    <div className="w-full lg:w-[70%]">
      {/* Display default content if no country selected */}
      {!selectedCountry ? (
         <div>
          <Ausdependent />
        
       </div>
       
      ) : (
        <>
          {!viewingVisaDetail ? (
            <>
              {!selectedVisa ? (
                <>
                  {/* <h3 className="text-3xl font-semibold text-black mb-4 text-center">{selectedCountry}</h3> */}
                  <p className="text-lg text-gray-600 mb-8 text-center ">{countriesData[selectedCountry]?.title}</p>
                  <p className="text-lg text-gray-600 mb-8 text-center">
                {countriesData[selectedCountry]?.description}
              </p>
                  {/* Display country image below the description */}
                  <div className="text-center">
                    <image
                      src={countriesData[selectedCountry]?.image}
                      alt={selectedCountry}
                      className="mx-auto mt-4 max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  {/* Render Content component only for "Migrate to Germany" */}
              {selectedCountry === "Migrate to Germany" && <Content />}
              {selectedCountry === "Migrate to United Kingdom" && <UKstudvisa />}
              {selectedCountry === "Migrate to Hong Kong" && <HKstudentvisa />}
              {selectedCountry === "Migrate to Canada" && <Canadastudent />}
              {selectedCountry === "Migrate to Australia" && <Ausstud />}
              {selectedCountry === "Migrate to Denmark" && <Denstud />}
              {selectedCountry === "Migrate to New Zealand" && <Newzepr />}
              
              {selectedCountry === "Migrate to UAE" && <UAEstud/>}
              {selectedCountry === "Migrate to United States" && <USAstud />}
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-semibold text-black mb-4 text-center"></h3>
                  <p className="text-lg text-gray-600 mb-8 text-center">
                   {/* {selectedVisa} for {selectedCountry}. */}
                  </p>
                  {/* Render Content component for "Germany Opportunity Card" */}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Opportunity Card" && <Content />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Work Visa" && <Gworkvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Student Visa" && <Gstudentvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Tourist Visa" && <Gtouristvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Dependent Visa" && <Gdependentvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Self Employment Visa" && <Gselfempvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Freelance Visa" && <Gfreelance />}

              {selectedCountry === "Migrate to United Kingdom"  && selectedVisa === "UK Business Visa" && <UKBvisa />}
              {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Tourist Visa" && <UKTvisa /> }
              {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Innovator Visa" && <UKinnovatorvisa />}
             {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Sponsorship Visa" && <UKsponvisa />}
             {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Student Visa" && <UKstudvisa />}

             {selectedCountry === "Migrate to Hong Kong" && selectedVisa === "Hong Kong Student Visa" && <HKstudentvisa />}
             {selectedCountry === "Migrate to Hong Kong" && selectedVisa === "Hong Kong Employment Visa" && <HKemployee />}
             {selectedCountry === "Migrate to Hong Kong" && selectedVisa === "Hong Kong Business Visa" && <HKbusiness />}
             {selectedCountry === "Migrate to Hong Kong" && selectedVisa === "Hong Kong Tourist Visa" && <HKtourist />}
             {selectedCountry === "Migrate to Hong Kong" && selectedVisa === "Hong Kong Dependent Visa" && <HKdependent />}
             {selectedCountry === "Migrate to Hong Kong" && selectedVisa === "Hong Kong Work Visa" && <HKwork />}
             
             {selectedCountry === "Migrate to Canada" && selectedVisa === "Canada Student Visa" && <Canadastudent/>}
             {selectedCountry === "Migrate to Canada" && selectedVisa === "Canada Tourist Visa" && <Canadatourist />}
             {selectedCountry === "Migrate to Canada" && selectedVisa === "Canada Permanent Residency Visa" && <Canadapr />}
             {selectedCountry === "Migrate to Canada" && selectedVisa === "Canada Family Sponsorship Visa" && <Canadafs />}

             {selectedCountry === "Migrate to Australia" && selectedVisa === "Australia Student Visa" && <Ausstud />}
              {selectedCountry === "Migrate to Australia" && selectedVisa === "Australia Sponsorship Visa" && <Aussponser />}
              {selectedCountry === "Migrate to Australia" && selectedVisa === "Australia Dependent Visa" && <Ausdependent />}
              {selectedCountry === "Migrate to Australia" && selectedVisa === "Australia Family Visa" && <Ausfamily />}
              {selectedCountry === "Migrate to Australia" && selectedVisa === "Australia Business Visa" && <Ausbusiness />}
              {selectedCountry === "Migrate to Australia" && selectedVisa === "Australia Work Visa" && <Auswork></Auswork>}
             
                {/* Render Content component for "Denmark Opportunity Card" */}
              {selectedCountry === "Migrate to Denmark" && selectedVisa === "Denmark Business Visa" && <Denbusiness/>}
              {selectedCountry === "Migrate to Denmark" && selectedVisa === "Denmark Student Visa" && <Denstud/>}
              {selectedCountry === "Migrate to Denmark" && selectedVisa === "Denmark Tourist Visa" && <Dentourist/>}
              {selectedCountry === "Migrate to Denmark" && selectedVisa === "Denmark Work Permit Visa" && <Denwork/>}

              {/* Render Content component for "Newzealand Opportunity Card" */}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Business Visa" && <Newzebusiness/>}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Student Visa" && <Newzestud/>}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Permanent Resident Visa" && <Newzepr/>}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Tourist Visa" && <Newzetourist/>}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Dependent Visa" && <Newzedepen/>}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Work Visa" && <Newzework/>}
              {selectedCountry === "Migrate to New Zealand" && selectedVisa === "New Zealand Skilled Work Visa" && <Newzeskillwork/>}

              {selectedCountry === "Migrate to UAE" && selectedVisa === "UAE Student Visa" && <UAEstud/>}
              {selectedCountry === "Migrate to UAE" && selectedVisa === "UAE Golden Visa" && <UAEgolden/>}
              {selectedCountry === "Migrate to UAE" && selectedVisa === "UAE Green Visa" && <UAEgreen/>}
              {selectedCountry === "Migrate to UAE" && selectedVisa === "UAE Work Visa" && <UAEwork/>}
              {selectedCountry === "Migrate to UAE" && selectedVisa === "UAE Tourist Visa" && <UAEtourist/>}
     
              {/* Render Content component for "USA Opportunity Card" */}
              {selectedCountry === "Migrate to United States" && selectedVisa === "USA Business Visa" && <USAbusiness/>}
               {selectedCountry === "Migrate to United States" && selectedVisa === "USA Student Visa" && <USAstud/>}
               {selectedCountry === "Migrate to United States" && selectedVisa === "USA Investor Visa" && <USAinvestor/>}
               {selectedCountry === "Migrate to United States" && selectedVisa === "USA Tourist Visa" && <USAtourist/>}
               {selectedCountry === "Migrate to United States" && selectedVisa === "USA H1B Visa" && <USAh1b/>}

             
                </>
                
                
              )}
              
            </>
          ) : (   
            <>
              <h3 className="text-3xl font-semibold text-black mb-4 text-center">Details for {selectedVisa}</h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Here you can find all the information about {selectedVisa} for {selectedCountry}.
              </p>
            </>
          )}
        </>
      )}
      
    </div>
  </div>
</section>

  );
};

export default Migrate;
