"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Globe, DollarSign, ClipboardCheck, Users } from "lucide-react";
import PassportServices from "./PassportServices";
import AirTicketing from "./AirTicketing";
import ForexServices from "./ForexServices";
import FreeAssessment from "./FreeAssessment";
import FreeCounselling from "./FreeCounselling";
import Form from "./Form";

const services = [
  { key: "passport-services", title: "Passport Services", image: "/passport.webp", icon: <Globe size={20} /> },
  { key: "air-ticketing", title: "Air Ticketing", image: "/airtecket.png", icon: <Plane size={20} /> },
  { key: "forex-services", title: "Forex Services", image: "/forex.png", icon: <DollarSign size={20} /> },
  { key: "free-assessment", title: "Free Assessment", image: "/freeassignment.webp", icon: <ClipboardCheck size={20} /> },
  { key: "free-counselling", title: "Free Counselling", image: "/freeass.jpg", icon: <Users size={20} /> },
];

export default function ServicePage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentKey = pathname.split("/").pop();

  const serviceComponents = {
    "passport-services": <PassportServices />,
    "air-ticketing": <AirTicketing />,
    "forex-services": <ForexServices />,
    "free-assessment": <FreeAssessment />,
    "free-counselling": <FreeCounselling />,
  };

  const [selectedService, setSelectedService] = useState(services[0]);

  useEffect(() => {
    const foundService = services.find((service) => service.key === currentKey);
    if (foundService) {
      setSelectedService(foundService);
    }
  }, [currentKey]);

  return (
    <section className="min-h-screen flex flex-col bg-white items-center py-4 text-oranage mt-16 md:mt-0  shadow-orange-500/30">
      {/* Moving Text Below Navbar */}
      <div className="w-full bg-white py-2 overflow-hidden">
        <marquee className="flex items-center text-lg font-bold text-black space-x-8">
          <Image src="/logo.png" alt="Company Logo" width={80} height={120} className="inline-block mx-2" />
          {services.map((service, index) => (
            <span key={index} className="mx-4">{service.title} |</span>
          ))}
        </marquee>
      </div>

      {/* Heading Section */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-6 text-black drop-shadow-lg"
      >
        Explore Our Services
      </motion.h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4 gap-10 relative bg-cover bg-center bg-no-repeat  shadow-xl p-8"
        style={{ backgroundImage: "url('/images/your-background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        
        {/* Left Section */}
        <motion.div className="md:w-1/2 text-left relative z-10">
          <h3 className="text-3xl font-bold text-white mb-4 ml-44">{selectedService.title}</h3>
          <Image src={selectedService.image} alt={selectedService.title} width={500} height={300} className=" shadow-md mx-auto mb-4" />
        </motion.div>

        {/* Right Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:w-1/2 relative z-10">
  {services.map((service) => (
    <motion.button
      key={service.key}
      onClick={() => {
        router.push(`/services/${service.key}`, { scroll: false });
        setTimeout(() => {
          window.scrollTo(0, 0);
          router.replace(`/services/${service.key}`); // Prevent full page reload
        }, 100);
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center gap-2 p-4 min-h-12 w-full  text-lg font-semibold transition-all duration-300 shadow-md ${
        selectedService.key === service.key
          ? "bg-orange-700 text-white scale-105"
          : "bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-30"
      }`}
    >
      {service.icon} {service.title}
    </motion.button>
  ))}
</div>
</div>

      {/* Content Section */}
      <div className="flex flex-col items-start w-full max-w-6xl gap-8 mt-10">
        <motion.div className="w-full p-6 bg-black bg-opacity-10 backdrop-blur-lg text-center max-h-[700px] overflow-y-auto">
          <h3 className="text-2xl font-bold text-black mb-2">{selectedService.title}</h3>
          
          <div className="text-gray-200">{serviceComponents[selectedService.key]}</div>
        </motion.div>

        {/* CTA & Form Section */}
        <div className="w-full flex flex-col md:flex-row gap-6 p-4">
          {/* Left: Call-to-Action Box with Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-white p-6  shadow-lg md:w-1/2 flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: "url('/bar.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div> {/* Dark Overlay */}
            <h3 className="text-3xl font-bold mb-2 relative z-10">Get Started Today!</h3>
            <p className="text-lg relative z-10">Unlock exclusive benefits and hassle-free services with us.</p>
            <div className="mt-4 bg-white text-orange-700 px-4 py-2  font-semibold relative z-10">
              Limited Offer: Free Consultation!
            </div>
          </motion.div>

          {/* Right: Form Component */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
