"use client";
import dynamic from 'next/dynamic';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sections2 from "./components/Sections2";
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

// Dynamically import non-critical components with { ssr: false } to ensure they load on the client side
const RoadmapComponent = dynamic(() => import("./components/RoadmapComponent"), { ssr: false });

const Steps = dynamic(() => import("./components/Steps"), { ssr: false });
const Requirements = dynamic(() => import("./components/Requirements"), { ssr: false });
const Services = dynamic(() => import("@/app/components/Services"), { ssr: false });
const Why = dynamic(() => import("./components/Why"), { ssr: false });
const Between = dynamic(() => import("./components/Between"), { ssr: false });
const Book = dynamic(() => import("./components/Book"), { ssr: false });
const Vjcinfo = dynamic(() => import("./components/Vjcinfo"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Above-the-fold content */}
      <Hero /> 
      {/* <Sections2/> */}
      <RoadmapComponent />

      {/* Lazy-loaded components for better performance */}
      {/* <Book /> */}
     
      
<Steps />
 <Between />
     
      
      
      <Requirements />
      <Services />
      <Why />
      <Vjcinfo />
      <Footer />

      
    </>
  );
}
