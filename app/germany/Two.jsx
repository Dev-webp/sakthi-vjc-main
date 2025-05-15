"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Goppcardvisa from "./Germany-visa/Goppcardvisa";
import Form from "./Form";

const germanyVisas = [
  { name: "Germany Opportunity Card", path: "/migrate/germany/opportunity-card" },
  { name: "Germany Work Visa", path: "/migrate/germany/work-visa" },
  { name: "Germany Student Visa", path: "/migrate/germany/student-visa" },
  { name: "Germany Tourist Visa", path: "/migrate/germany/tourist-visa" },
  { name: "Germany Dependent Visa", path: "/migrate/germany/dependent-visa" },
  { name: "Germany Self Employment Visa", path: "/migrate/germany/self-employment-visa" },
];

const backgroundImage = "/germanybgimg.jpg";

const MigrateGermany = () => {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? "bg-loaded" : "bg-loading"}`}>
      {/* Background Section */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title and Description */}
        <div className="w-full lg:w-1/2 lg:ml-16 mt-[-2rem] text-center lg:text-left">
          <h1 className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-12 sm:mt-12">
            Migrate to Germany
          </h1>
          <p className="flex text-black tracking-tight text-center lg:text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold">
            Explore visa opportunities in Germany. Whether for work, study, or business, we help make your migration easy and stress-free.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
          <Form />
        </div>
      </div>

      {/* Visa Options Section */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10 items-center lg:items-start">
        {/* Visa Buttons */}
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for Germany
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {germanyVisas.map(({ name, path }) => (
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

        {/* Visa Content Display */}
        <div className="w-full lg:flex-1 ml-10 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0">
          <Goppcardvisa />
        </div>
      </div>
    </div>
  );
};

export default MigrateGermany;
