'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const universities = [
  {
    name: "University of Oxford",
    undergraduate: "£26,770 – £38,010/year",
    postgraduate: "£24,000 – £45,000/year",
    image: "/studyinuk/oxford.jpg",
    description: "Oxford is one of the most prestigious universities in the world, offering a rich academic tradition and a globally recognized degree."
  },
  {
    name: "University of Cambridge",
    undergraduate: "£22,227 – £58,038/year",
    postgraduate: "£22,000 – £45,000/year",
    image: "/studyinuk/cambridge-university.jpg",
    description: "Cambridge boasts a unique collegiate system and a world-class research environment, attracting scholars from across the globe."
  },
  {
    name: "University of Edinburgh",
    undergraduate: "£19,000 – £34,000/year",
    postgraduate: "£21,000 – £40,000/year",
    image: "/studyinuk/uni-of-edinburgh.jpg",
    description: "The University of Edinburgh is a prestigious Scottish institution known for its rich history and research-intensive programs."
  },
  {
    name: "University of Manchester",
    undergraduate: "£20,000 – £33,000/year",
    postgraduate: "£22,000 – £40,000/year",
    image: "/studyinuk/Manchester.jpg",
    description: "Manchester is a global university with a strong emphasis on research, innovation, and international engagement."
  },
  {
    name: "London School of Economics (LSE)",
    undergraduate: "£22,000 – £31,000/year",
    postgraduate: "£24,000 – £45,000/year",
    image: "/studyinuk/lse.webp",
    description: "LSE is a leading social science university renowned for economics, politics, and international relations."
  },
  {
    name: "University College London (UCL)",
    undergraduate: "£20,000 – £35,000/year",
    postgraduate: "£20,000 – £50,000/year",
    image: "/studyinuk/ucl.jpg",
    description: "UCL is a multi-disciplinary university with a strong reputation for academic excellence and innovation."
  },
];

const UKUniversities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section className="w-full h-auto lg:h-[60vh] bg-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {universities.map((uni, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative w-full h-auto lg:h-full flex flex-col lg:flex-row bg-white">

                {/* White Background Layer */}
                <div className="absolute inset-0 bg-white z-0" />

                {/* Diagonally Clipped Image */}
                <div className="relative w-full lg:w-[60%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-full z-10">
                  <div className="w-full h-full clip-diagonal overflow-hidden relative">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30" />
                  </div>
                </div>

                {/* Text Content */}
                <div
                  key={currentIndex}
                  className="w-full lg:w-[40%] h-auto lg:h-full z-20 px-6 sm:px-8 py-6 lg:py-8 flex flex-col justify-center animate-slideDown space-y-3"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 leading-snug">{uni.name}</h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Undergraduate:</strong> {uni.undergraduate}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Postgraduate:</strong> {uni.postgraduate}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{uni.description}</p>
                  <button
                    onClick={() => {
                      const section = document.getElementById("details-section");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-black bg-white group"
                  >
                    <span className="relative z-10">Know More</span>
                    <ArrowRight size={16} className="relative z-10" />
                    <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Styles */}
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.8s ease-out;
          }

          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          }

          @media (max-width: 1024px) {
            .clip-diagonal {
              clip-path: none;
            }
          }
        `}</style>
      </section>

      {/* Scroll target section */}
      <section id="details-section" className="w-full bg-white p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-900">More About UK Universities</h2>
        
      </section>
    </>
  );
};

export default UKUniversities;
