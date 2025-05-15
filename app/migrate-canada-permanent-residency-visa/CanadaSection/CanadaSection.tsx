"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const canadaPRBenefits = [
  {
    title: "Freedom to Live, Work & Study Anywhere in Canada",
    desc: "Settle in any province—from vibrant cities like Toronto to peaceful towns in Nova Scotia.",
    image: "/assets/canadapr/slides/slide1.png",
  },
  {
    title: "World-Class Free Healthcare",
    desc: "Access government-funded healthcare services with no extra cost.",
    image: "/assets/canadapr/slides/slide2.png",
  },
  {
    title: "Free Quality Education for Children",
    desc: "PR holders’ children enjoy free public education up to grade 12.",
    image: "/assets/canadapr/slides/slide3.png",
  },
  {
    title: "Family Sponsorship Made Easy",
    desc: "Bring your spouse, children, and even parents to join your Canadian journey.",
    image: "/assets/canadapr/slides/slide4.png",
  },
  {
    title: "No Job Offer Needed to Apply",
    desc: "Many immigration streams like Express Entry don’t require a job offer.",
    image: "/assets/canadapr/slides/slide5.png",
  },
  {
    title: "Travel Visa-Free to Over 25 Countries (After Citizenship)",
    desc: "Canada offers a clear path to citizenship, unlocking powerful passport privileges.",
    image: "/assets/canadapr/slides/slide1.png",
  },
  {
    title: "Access to Social Security Benefits",
    desc: "Receive unemployment support, pension plans, and child care benefits.",
    image: "/assets/canadapr/slides/slide2.png",
  },
  {
    title: "Own Property & Start a Business Freely",
    desc: "Enjoy the same legal rights as citizens when it comes to investing or starting a venture.",
    image: "/assets/canadapr/slides/slide3.png",
  },
  {
    title: "Safe, Peaceful & Inclusive Society",
    desc: "Live in one of the world’s safest and most multicultural countries.",
    image: "/assets/canadapr/slides/slide4.png",
  },
  {
    title: "Quick Citizenship Eligibility – Just 3 Years of Residency",
    desc: "Become eligible to apply for citizenship after just 3 years of living in Canada.",
    image: "/assets/canadapr/slides/slide5.png",
  },
];

const CanadaVisaSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/canadapr/slidebg.png')` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 drop-shadow-lg">
        Canada Permanent Residency Visa Benefits
      </h2>
      <p className="text-gray-800 max-w-2xl mx-auto mb-12 drop-shadow-md">
        Discover the top reasons why becoming a Canadian Permanent Resident is a
        life-changing opportunity.
      </p>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[EffectCoverflow, Mousewheel]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3} // Make sure it's an integer here (avoid 2.2)
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
            thresholdDelta: 10, // 🔥 Important to limit to 1 slide per scroll
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="visa-swiper"
        >
          {canadaPRBenefits.map((slide, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <div className="relative rounded-xl shadow-xl overflow-hidden w-[350px] md:w-[400px] mx-auto h-[420px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default CanadaVisaSection;
