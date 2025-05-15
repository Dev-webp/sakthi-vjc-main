"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Content from "./Content";
const visaData = [
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

const defaultVisa = {
  name: "Job Seeker Visa",
  image: "/usa.webp",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [hoveredVisa, setHoveredVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <>
      <Head>
        <title>Visit Visas - VJC Overseas</title>
        <meta
          name="description"
          content="Apply for USA, Canada, Australia, UK, Schengen and other Visit Visas with expert guidance from VJC Overseas."
        />
        <link rel="canonical" href="https://www.vjcoverseas.com/visitvisas" />
      </Head>

      <div className="w-full min-h-screen bg-white text-black">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="/7.webp"
            alt="Visa Background"
            className="w-full h-[70vh] object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            >
              Explore Visit Visas
            </motion.h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl">
              Choose your destination and begin your journey with VJC Overseas.
            </p>
          </div>
        </div>

        <div className="relative -mt-24 z-10 px-6 md:px-12">
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    {visaData.slice(0, 6).map((visa, index) => (
      <motion.div
        key={visa.name}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-gray-700 border border-gray-700 p-4 h-36 rounded-xl hover:bg-orange-500 shadow-lg hover:shadow-orange-500/40 transition hover:scale-105 cursor-pointer flex flex-col justify-between"
        onClick={() => handleVisaClick(visa)}
        onMouseEnter={() => setHoveredVisa(visa)}
        onMouseLeave={() => setHoveredVisa(selectedVisa)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="text-orange-400 w-5 h-5" />
            <h3 className="text-sm font-semibold text-white">{visa.name}</h3>
          </div>
          <ArrowRight className="text-gray-300 w-4 h-4" />
        </div>
        <p className="text-xs text-white mt-3">
          Click to learn more about {visa.name}.
        </p>
      </motion.div>
    ))}
  </div>
</div>

<div className="relative mt-5 z-0 px-6 md:px-12">
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    {visaData.slice(6, 12).map((visa, index) => (
      <motion.div
        key={visa.name}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-gray-700 border border-gray-700 p-4 h-36 rounded-xl hover:bg-orange-500 shadow-lg hover:shadow-orange-500/40 transition hover:scale-105 cursor-pointer flex flex-col justify-between"
        onClick={() => handleVisaClick(visa)}
        onMouseEnter={() => setHoveredVisa(visa)}
        onMouseLeave={() => setHoveredVisa(selectedVisa)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="text-orange-400 w-5 h-5" />
            <h3 className="text-sm font-semibold text-white">{visa.name}</h3>
          </div>
          <ArrowRight className="text-gray-300 w-4 h-4" />
        </div>
        <p className="text-xs text-white mt-3">
          Click to learn more about {visa.name}.
        </p>
      </motion.div>
    ))}
  </div>
</div>

        {/* Content Component */}
        <div className="mt-16 px-6 md:px-12">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Migrate;
