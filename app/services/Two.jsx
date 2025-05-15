"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaPassport,
  FaPlane,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaUserGraduate,
  FaPhoneAlt,
  FaGlobe,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import Form from "./Form";

function TrustedByThousands() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 5000;
    const step = Math.ceil(end / 100);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-blue-700 text-white py-12 w-full text-center">
      <div className="absolute inset-0 bg-opacity-50 bg-[url('/trust-bg.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold drop-shadow-lg">
          Trusted by <span className="text-yellow-300">{count}+</span> Happy Customers
        </h2>

        <div className="mt-6 flex justify-center gap-12">
          <div className="flex flex-col items-center">
            <FaGlobe className="text-3xl text-yellow-300" />
            <p className="text-lg font-semibold">3000+ Visas Approved</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGraduationCap className="text-3xl text-yellow-300" />
            <p className="text-lg font-semibold">2000+ Study Admissions</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-3xl text-yellow-300" />
            <p className="text-lg font-semibold">4800+ Positive Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Two() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState({
    key: "passport-services",
    title: "Passport Services",
  });

  const handleRedirect = (path) => {

    router.push(path);
  };

  const services = [
    { key: "passport-services", title: "Passport Services" },
    { key: "air-ticketing", title: "Air Ticketing Services" },
    { key: "forex-services", title: "Forex Services" },
    { key: "free-assessment", title: "Free Assessment" },
    { key: "free-counselling", title: "Free Counselling" },
  ];

  useEffect(() => {
    const foundService = services.find((service) => service.key === "passport-services");
    if (foundService) {
      setSelectedService(foundService);
    }
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col bg-white items-center py-4 text-orange-500 mt-16 md:mt-0 shadow-orange-500/30 w-full overflow-x-hidden">
        {/* Moving Text Below Navbar */}
        <div className="w-full bg-white py-2 overflow-hidden">
          <marquee className="flex items-center text-lg font-bold text-black space-x-8">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={80}
              height={120}
              className="inline-block mx-2"
            />
            {services.map((service, index) => (
              <span key={index} className="mx-4">
                {service.title} |
              </span>
            ))}
          </marquee>
        </div>

        {/* Services Section */}
        <section className="bg-gray-100 py-16 flex justify-center w-full">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Heading and Description */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
  <h2 className="font-extrabold text-3xl sm:text-4xl">Our Services</h2>
  <p className="text-gray-700 text-lg mt-4 max-w-lg mx-auto lg:mx-0 animate-slide-up">
    Explore our comprehensive range of services designed to make your journey smooth, stress-free, and successful.
  </p>
</div>


            {/* Right Side - Image & Buttons */}
            <div className="relative w-full lg:w-1/2 flex flex-col-reverse lg:flex-row items-center lg:justify-end lg:ml-36 mt-8 lg:mt-0">
              {/* Buttons */}
              <div className="mt-6 lg:mt-0 lg:absolute lg:left-0 lg:transform lg:-translate-x-1/2 flex flex-col space-y-4 w-full sm:w-auto items-center sm:items-end">
                {[
                  { icon: FaPassport, label: "Passport Services", link: "/services/passport-services" },
                  { icon: FaPlane, label: "Air Ticketing Services", link: "/services/air-ticketing" },
                  { icon: FaMoneyBillWave, label: "Forex Services", link: "/services/forex-services" },
                  { icon: FaClipboardCheck, label: "Free Assessment", link: "/services/free-assessment" },
                  { icon: FaUserGraduate, label: "Free Counselling", link: "/services/free-counselling" },
                ].map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleRedirect(service.link)}
                    className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-3 hover:bg-orange-100 hover:scale-105 transition duration-300 w-60 animate-fade-in"
                  >
                    <service.icon className="text-orange-600 text-xl" />
                    <p className="text-sm font-semibold text-gray-800">{service.label}</p>
                  </button>
                ))}
              </div>

              {/* Image */}
              <div className="relative w-full flex justify-center lg:justify-end">
                <Image
                  src="/ser1.png"
                  alt="Services Image"
                  width={450}
                  height={300}
                  className="animate-zoom-in w-60 sm:w-80 md:w-[450px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-800 text-white py-12 text-center w-full">
          <h2 className="text-3xl font-bold animate-bounce">Get Started with Us Today!</h2>
          <p className="text-lg mt-2 animate-fade-in">
            Ready to begin your journey? Our experts are here to help.
          </p>
          <button
            onClick={() => handleRedirect("/contact")}
            className="mt-4 px-6 py-3 bg-orange-400 text-blue-800 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Contact Us <FaPhoneAlt className="inline ml-2" />
          </button>
        </section>

        {/* Inquiry Form Section */}
        <section className="bg-gray-100 py-16 w-full">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Inquiry Form */}
            <div className="w-full lg:w-1/2">
              <Form />
            </div>

            {/* Right Side - Trust & Testimonial Section */}
            <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start">
              {/* Testimonial Box */}
              <div className="bg-blue-600 text-white p-6 mt-6 lg:-top-[150px] rounded-lg shadow-lg relative z-10 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto lg:mx-0">
                <p className="text-lg italic">
                  "VJC Overseas made my visa process seamless! Highly professional and always supportive. Highly recommended!" 
                </p>
                <p className="mt-4 font-semibold">- Emily Johnson, USA</p>
              </div>

              {/* Image Positioned at Bottom Right */}
              <div className="relative w-full flex justify-center md:flex md:justify-end lg:justify-end">
  <Image 
    src="/services.png" 
    alt="Trusted" 
    width={2440} 
    height={2440} 
    className="
      w-full 
      max-w-[520px] 
      h-auto 
      object-contain 
      md:static 
      md:w-[400px] 
      md:max-w-[400px] 
      lg:absolute 
      lg:right-[-130px] 
      lg:-top-[240px] 
      lg:w-[520px] 
      lg:h-[520px]"
  />
</div>

            </div>
          </div>
        </section>

          

        <TrustedByThousands />

        {/* Video Section */}
        <section className="bg-gray-900 text-white py-16 flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold text-orange-400 animate-slide-up">
            Watch How We Can Help You
          </h2>
          <p className="mt-2 text-gray-300 max-w-xl text-center animate-fade-in">
            Learn more about our services and success stories from our satisfied clients.
          </p>
          <div className="mt-6 relative w-full max-w-lg">
            <a href="https://youtu.be/cLNpEry1oPQ?si=NR8PtaZ2eAABx1OK" target="_blank" className="relative">
              <Image
                src="/youtube.jpg"
                alt="Video Thumbnail"
                width={600}
                height={350}
                className="rounded-lg shadow-lg transition duration-300 hover:scale-105"
              />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
