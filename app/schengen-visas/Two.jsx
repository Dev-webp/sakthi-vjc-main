"use client";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Form from "./Form"; // Adjust the path if necessary

export default function Home() {
  const router = useRouter();

  const slides = [
    { name: "Austria Visit/Tourist Visa", path: "/schengen-visas/austria", image: "/austriatour.avif" },
    { name: "Belgium Visit/Tourist Visa", path: "/schengen-visas/belgium", image: "/belgiumtour.jpg" },
    { name: "Bulgaria Visit/Tourist Visa", path: "/schengen-visas/bulgaria", image: "/balgeriatour.jpg" },
    { name: "Croatia Visit/Tourist Visa", path: "/schengen-visas/croatia", image: "/balgeriatour.webp" },
    { name: "Czech Republic Visit/Tourist Visa", path: "/schengen-visas/czech-republic", image: "/czechtour.jpg" },
    { name: "Denmark Visit/Tourist Visa", path: "/schengen-visas/denmark", image: "/dmtour.jpg" },
    { name: "Estonia Visit/Tourist Visa", path: "/schengen-visas/estonia", image: "/estonia.jpg" },
    { name: "Finland Visit/Tourist Visa", path: "/schengen-visas/finland", image: "/finland.jpg" },
    { name: "France Visit/Tourist Visa", path: "/schengen-visas/france", image: "/france1.jpg" },
    { name: "Germany Visit/Tourist Visa", path: "/schengen-visas/germany", image: "/gremany1.jpg" },
    { name: "Greece Visit/Tourist Visa", path: "/schengen-visas/greece", image: "/greece1.webp" },
    { name: "Hungary Visit/Tourist Visa", path: "/schengen-visas/hungary", image: "/hungary.jpg" },
    { name: "Iceland Visit/Tourist Visa", path: "/schengen-visas/iceland", image: "/iceland.avif" },
    { name: "Italy Visit/Tourist Visa", path: "/schengen-visas/italy", image: "/itlay1.jpg" },
    { name: "Latvia Visit/Tourist Visa", path: "/schengen-visas/latvia", image: "/latvia.jpg" },
    { name: "Liechtenstein Visit/Tourist Visa", path: "/schengen-visas/liechtenstein", image: "/liechtenstein.jpg" },
    { name: "Lithuania Visit/Tourist Visa", path: "/schengen-visas/lithuania", image: "/lithuania.jpeg" },
    { name: "Luxembourg Visit/Tourist Visa", path: "/schengen-visas/luxembourg", image: "/luxembourg.jpg" },
    { name: "Malta Visit/Tourist Visa", path: "/schengen-visas/malta", image: "/malta1.jpg" },
    { name: "Netherlands Visit/Tourist Visa", path: "/schengen-visas/netherlands", image: "/netherlands.jpg" },
    { name: "Norway Visit/Tourist Visa", path: "/schengen-visas/norway", image: "/norway.jpg" },
    { name: "Poland Visit/Tourist Visa", path: "/schengen-visas/poland", image: "/poland.jpg" },
    { name: "Portugal Visit/Tourist Visa", path: "/schengen-visas/portugal", image: "/portugal.avif" },
    { name: "Romania Visit/Tourist Visa", path: "/schengen-visas/romania", image: "/romania.jpg" },
    { name: "Slovakia Visit/Tourist Visa", path: "/schengen-visas/slovakia", image: "/slovakia.jpg" },
    { name: "Slovenia Visit/Tourist Visa", path: "/schengen-visas/slovenia", image: "/slovenia.webp" },
    { name: "Spain Visit/Tourist Visa", path: "/schengen-visas/spain", image: "/spain.jpg" },
    { name: "Sweden Visit/Tourist Visa", path: "/schengen-visas/sweden", image: "/sweden1.jpg" },
    { name: "Switzerland Visit/Tourist Visa", path: "/schengen-visas/switzerland", image: "/switzerland.jpg" },
  ];

  const handleSlideClick = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('all.webp')" }}
      >
        <div className="absolute w-full h-[110%] bg-gradient-to-b from-black/40 to-gray-40"></div>
        <div className="relative z-10 text-white text-center px-4">
          <motion.h1
            className="text-4xl font-extrabold md:text-5xl text-neon mb-4 -mt-28"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Explore the World with Ease
          </motion.h1>
          <p className="text-lg md:text-xl font-light">
            Get Your Tourist Visa Approved Hassle-Free!
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="w-full max-w-5xl mx-auto -mt-[25vh] px-4 relative z-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-lg shadow-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative cursor-pointer" onClick={() => handleSlideClick(slide.path)}>
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-96 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-all">
                <h2 className="text-white text-2xl font-bold text-center px-4">{slide.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Choose VJC Overseas & Form Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 bg-white shadow-md rounded-lg mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Why VJC Overseas?</h2>
          <ul className="text-lg text-gray-600 space-y-3">
            <li>✔️ Leading visa consultancy with years of expertise.</li>
            <li>✔️ 99% visa approval rate.</li>
            <li>✔️ Hassle-free documentation support.</li>
            <li>✔️ Tailored solutions for every visa applicant.</li>
            <li>✔️ Trusted by thousands of satisfied clients.</li>
            <li>✔️ Affordable and transparent pricing.</li>
            <li>✔️ One-on-one expert guidance.</li>
            <li>✔️ Up-to-date visa processing knowledge.</li>
            <li>✔️ Strong international network with embassies.</li>
            <li>✔️ Dedicated customer support team.</li>
            <li>✔️ Step-by-step assistance from application to approval.</li>
            <li>✔️ Quick and reliable processing timelines.</li>
            <li>✔️ 24/7 support for urgent visa queries.</li>
            <li>✔️ Free visa consultation for first-time applicants.</li>
            <li>✔️ 100% compliance with immigration rules.</li>
            <li>✔️ Personalized travel and visa recommendations.</li>
            <li>✔️ Visa success stories from real customers.</li>
            <li>✔️ Simplified application process to save time.</li>
            <li>✔️ Dedicated professionals for every visa category.</li>
            <li>✔️ Your trusted partner in global travel dreams.</li>
          </ul>
        </div>

        {/* Form Section */}
        
          <div className="mt-6 p-6">
            <Form />
          </div>
      
      </section>

      {/* Blog/Insights Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 bg-gray-50 shadow-md rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Latest Travel & Visa Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Top 5 Tips for a Successful Schengen Visa Application",
              excerpt: "Avoid common mistakes and increase your chances of approval...",
              image: "/schen.webp",
              link: "/visitvisas",
            },
            {
              title: "Best Countries for Digital Nomads in 2024",
              excerpt: "Discover visa-friendly destinations perfect for remote work...",
              image: "/schen2.jpg",
              link: "/services",
            },
            {
              title: "Why Choose a Visa Consultant? The Benefits Explained",
              excerpt: "Navigating the visa process is easier with expert guidance...",
              image: "/schen3.jpg",
              link: "/visitvisas",
            },
          ].map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <a href={blog.link} className="text-blue-600 font-semibold inline-block mt-3 hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
