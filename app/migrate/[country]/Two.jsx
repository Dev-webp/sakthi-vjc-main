"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Goppcardvisa from "./Germany-visa/Goppcardvisa";
import Canadapr from "./Canadapages/Canadawork";
import Ausstud from "./Australia-visa/Aus-stud";
import USAstud from "./USA-visa/USA-stud";
import UKBvisa from "./UK-visa/UKBvisa";
import HKstudentvisa from "./HongKongpages/HKstudentvisa";
import Newzepr from "./Newzealand-visa/Newze-pr"
import Denbusiness from "./Denmark-visa/Den-business"
import UAEstud from "./UAE-visa/UAE-stud";
import sfgerneralskilledvisa from "./southafricavisas/sfgerneralskilledvisa";

import Form from "../Form";

const countryVisaData = {
  germany: [
    { name: "Germany Opportunity Card", path: "/migrate/germany/opportunity-card" },
    { name: "Germany Work Visa", path: "/migrate/germany/work-visa" },
    { name: "Germany Student Visa", path: "/migrate/germany/student-visa" },
    { name: "Germany Tourist Visa", path: "/migrate/germany/tourist-visa" },
    { name: "Germany Dependent Visa", path: "/migrate/germany/dependent-visa" },
    { name: "Germany Self Employment Visa", path: "/migrate/germany/self-employment-visa" },
  ],
  canada: [
    { name: "Canada Work Permit", path: "/migrate/canada/work-permit" },
    { name: "Canada Student Visa", path: "/migrate/canada/student-visa" },
    { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
    { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
    { name: "Canada Family Sponsorship Visa", path: "/migrate/canada/family-sponsorship-visa" },
  ],
  "united-states": [
    { name: "USA Student Visa", path: "/migrate/united-states/student-visa" },
    { name: "USA Tourist Visa", path: "/migrate/united-states/tourist-visa" },
    { name: "USA Business Visa", path: "/migrate/united-states/business-visa" },
    { name: "USA H1B Visa", path: "/migrate/united-states/H1B-visa" },
    { name: "USA Investor Visa", path: "/migrate/united-states/investor-visa" }
  ],
  australia: [
    { name: "Australia Student Visa", path: "/migrate/australia/student-visa" },
    // { name: "Australia Tourist Visa", path: "/migrate/australia/tourist-visa" },
    { name: "Australia Business Visa", path: "/migrate/australia/business-visa" },
    { name: "Australia Work Visa", path: "/migrate/australia/work-visa" },
    { name: "Australia Family Visa", path: "/migrate/australia/family-visa" },
    { name: "Australia Dependent Visa", path: "/migrate/australia/dependent-visa" },
    { name: "Australia Sponsorship Visa", path: "/migrate/australia/sponsorship-visa" },
   
  ],
  "united-kingdom": [
    { name: "UK Student Visa", path: "/migrate/united-kingdom/student-visa" },
    { name: "UK Tourist Visa", path: "/migrate/united-kingdom/tourist-visa" },
    { name: "UK business Visa", path: "/migrate/united-kingdom/business-visa" },
    { name: "UK Innovator Visa", path: "/migrate/united-kingdom/innovator-visa" },
    { name: "UK Sponsorship Visa", path: "/migrate/united-kingdom/sponsorship-visa" }
  ],
  "new-zealand": [
    { name: "New Zealand Permanent Resident Visa", path: "/migrate/new-zealand/permanent-resident-visa" },
    { name: "New Zealand Work Visa", path: "/migrate/new-zealand/work-visa" },
    { name: "New Zealand Student Visa", path: "/migrate/new-zealand/skilled-work-visa" },
    { name: "New Zealand Skilled Work Visa", path: "/migrate/new-zealand/skilled-work-visa" },
    { name: "New Zealand Business Visa", path: "/migrate/new-zealand/business-visa" },
    { name: "New Zealand Tourist Visa", path: "/migrate/new-zealand/tourist-visa" },
    { name: "New Zealand Dependent Visa", path: "/migrate/new-zealand/dependent-visa" },
  ],
  "south-africa": [
    { name: "South Africa Critical Skills Visa", path: "/migrate/south-africa/critical-skills-visa" },
    { name: "South Africa General Work Visa", path: "/migrate/south-africa/general-work-visa" },
    { name: "South Africa Business Visa", path: "/migrate/south-africa/business-visa" },
    { name: "South Africa Tourist Visa", path: "/migrate/south-africa/tourist-visa" },
  ],
  "hong-kong": [
    { name: "Hong Kong Student Visa", path: "/migrate/hong-kong/student-visa" },
    { name: "Hong Kong Employment Visa", path: "/migrate/hong-kong/employment-visa" },
    { name: "Hong Kong Business Visa", path: "/migrate/hong-kong/business-visa" },
    { name: "Hong Kong Tourist Visa", path: "/migrate/hong-kong/tourist-visa" },
    { name: "Hong Kong Dependent Visa", path: "/migrate/hong-kong/dependent-visa" },
    { name: "Hong Kong Work Visa", path: "/migrate/hong-kong/work-visa" },
  ],
  denmark: [
    { name: "Denmark Student Visa", path: "/migrate/denmark/work-visa" },
    { name: "Denmark Work Permit Visa", path: "/migrate/denmark/work-permit-visa" },
    { name: "Denmark Tourist Visa", path: "/migrate/denmark/tourist-visa" },
    { name: "Denmark Business Visa", path: "/migrate/denmark/business-visa" },
  ],
  uae: [
    { name: "UAE Student Visa", path: "/migrate/uae/work-visa" },
    { name: "UAE Golden Visa", path: "/migrate/uae/golden-visa" },
  { name: "UAE Work Visa", path: "/migrate/uae/work-visa" },
  { name: "UAE Green Visa", path: "/migrate/uae/green-visa" },
  { name: "UAE Tourist Visa", path: "/migrate/uae/tourist-visa" },
],
};

const visaComponents = {
  germany: Goppcardvisa, // Default component for Germany
  canada: Canadapr, // Default component for Canada
  "united-states":USAstud,
  australia:Ausstud,
  "united-kingdom":UKBvisa,
  "new-zealand":Newzepr,
  "south-africa":sfgerneralskilledvisa,
  "hong-kong":HKstudentvisa,
  denmark:Denbusiness,
  uae:UAEstud,
};

const backgroundImages = {
  germany: "/germanybgimg.jpg",
  canada: "/canadabgimg.jpg",
  "united-states": "/usabgimg.jpg",
  australia: "/australiabgimg.jpg", 
  "united-kingdom": "/ukk.jpg",
  "new-zealand": "/nzz.jpg",
  "south-africa": "/sa666.png",
  "hong-kong": "/hongkong444.jpg",
  uae: "/uae333.jpg",
  denmark: "/denmark222.jpg",

};

const MigrateCountry = () => {
  const router = useRouter();
  const { country, visa } = useParams();
  const visas = countryVisaData[country] || [];
  const DefaultVisaComponent = visaComponents[country] || null;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? "bg-loaded" : "bg-loading"}`}>
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImages[country]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full lg:w-1/2 lg:ml-16 mt-[-2rem] text-center lg:text-left">
          <h1
            className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-20 sm:mt-12"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Migrate to {country.charAt(0).toUpperCase() + country.slice(1)}
          </h1>
          <p
            className="flex text-black tracking-tight text-center lg:text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
          <Form />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10 items-center lg:items-start">
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country.charAt(0).toUpperCase() + country.slice(1)}
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <button
                key={path}
                className="w-full sm:w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
                onClick={() => router.push(path)}
              >
                {name}
                <ArrowRight className="w-6 h-6 text-black transition duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:flex-1 ml-10 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0">
          {DefaultVisaComponent ? <DefaultVisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>
      </div>
    </div>
  );
};

export default MigrateCountry;
