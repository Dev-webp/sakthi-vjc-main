"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer'; // Hook to detect if the component is in view

const features = [
  {
    id: 1,
    image: "/s1.webp",
    title: "PR Visa",
    description: "Premium Immigration Services For PR Visas To Australia, Canada, New Zealand Etc. So, let us walk you through it to make the process as easy as it can ever be!",
    buttonLabel: "Read More",
  },
  {
    id: 2,
    image: "/s2.webp",
    title: "Student Visa",
    description: "Apply for student visas from the hands of an experienced professional team. We provide seamless access to your global study.",
    buttonLabel: "Read More",
  },
  {
    id: 3,
    image: "/s3.webp",
    title: "Jobseeker Visa",
    description: "Get started now to open doors with our three-step Jobseeker Visa services that speak for themselves. Your international career starts here.",
    buttonLabel: "Read More",
  },
  {
    id: 4,
    image: "/s4.webp",
    title: "Visit Visa",
    description: "Visit and dependent visa processing across the globe in a matter of days. Find the confidence and convenience to travel as you please.",
    buttonLabel: "Read More",
  },
  {
    id: 5,
    image: "/s5.webp",
    title: "Coaching",
    description: "Get a high score with guidance from our certified English language specialists. We are experienced in giving Success strategies that are proven to work for your exams.",
    buttonLabel: "Read More",
  },
  {
    id: 6,
    image: "/s6.webp",
    title: "Investor Visa",
    description: "Work With Us For Stress Free Processing Of Investor Visa To Top European Nations Get motivated to plan your overseas future with us.",
    buttonLabel: "Read More",
  },
  {
    id: 7,
    image: "/s7.webp",
    title: "Resume Marketing",
    description: "Get your resume marketed internationally by us at a cost-effective price and elevate the chances of you getting a job there. Stand out to global hiring managers.",
    buttonLabel: "Read More",
  },
  {
    id: 8,
    image: "/s8.webp",
    title: "Air ticketing",
    description: "Make your travel planning easier with our ticketing and passport services. We take care of everything for a stress-free trip.",
    buttonLabel: "Read More",
  },
];

const FeatureCard = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 h-96">
  <Image
    src={image}
    alt={title}
    width={500} // Set an appropriate width
    height={160} // Set an appropriate height to match h-40 (40 * 4 = 160px)
    className="w-full h-40 object-cover rounded-t-lg"
  />
      <h3 className="mt-4 text-lg font-bold text-gray-800 uppercase">{title}</h3>
      <p className="mt-2 text-gray-600 text-center line-clamp-3">
        {description}
      </p>
      <button
        className="mt-auto px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1"
      >
        {buttonLabel}
      </button>
    </div>
  );
};


const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when the component is first visible
    threshold: 0.1, // Trigger when 20% of the component is in view
  });

  return (
    <section className="py-10" style={{ backgroundImage: 'url(/comp-21.webp)' }}>
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
      <div className="flex flex-col space-y-10">
        {/* Heading section with animations */}
        <motion.div
          className="flex flex-col justify-center text-center mx-auto md:max-w-5xl space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 25
          }}
        >
        
  
          {/* Heading (h1) Animation */}
          <motion.h1
            className="text-3xl font-semibold text-orange-500  md:text-4xl xl:text-[2.75rem] leading-tight uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 120,
              damping: 30,
            }}
          >
            Explore Our Expert <br/> Solutions
          </motion.h1>
  
          {/* Paragraph (p) Animation */}
          <motion.p
            className="text-gray-700 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 120,
              damping: 30,
            }}
          >
           VJC Overseas empowers you to achieve your international dreams. We provide a service that helps you achieve what you&apos;ve always dreamed of, either you want to study at a world-renowned university, immigrate for better career prospects, or explore work opportunities abroad. Our expert team leads  you to take  personalised solutions which helps in your journey  smooth and stress-free. Trust our expertise, proven processes, and commitment to excellence as we help you take the next step toward a bright global future.
          </motion.p>
        </motion.div>
  
     
          <motion.div
      ref={ref}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.2 }}
    >
      {features.map((feature) => (
        <motion.div key={feature.id}>
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </motion.div>
      </div>
    </div>
  </section>
  
  );
};

export default Features;


// import { FaRegHandshake, FaGlobeAmericas, FaGraduationCap, FaBriefcase, FaUsers, FaBalanceScale } from 'react-icons/fa';

// const features = [
//   {
//     id: 1,
//     title: "Expert Visa Consultation",
//     description: "Our experienced consultants guide you through the visa application process, ensuring all requirements are met for a successful application.",
//     icon: <FaRegHandshake className="w-8 h-8 " />
//   },
//   {
//     id: 2, 
//     title: "Immigration Services",
//     description: "We offer comprehensive immigration services, including permanent residency, work permits, and family sponsorships to help you settle abroad.",
//     icon: <FaGlobeAmericas className="w-8 h-8 " />
//   },
//   {
//     id: 3,
//     title: "Study Abroad Assistance",
//     description: "We provide expert advice for students looking to study abroad, assisting with student visas, university applications, and scholarship opportunities.",
//     icon: <FaGraduationCap className="w-8 h-8 " />
//   },
//   {
//     id: 4,
//     title: "Work Visa Services",
//     description: "Our team helps skilled professionals secure work visas for countries with high-demand job markets, including the UK, Canada, and Australia.",
//     icon: <FaBriefcase className="w-8 h-8" />
//   },
//   {
//     id: 5,
//     title: "Family Immigration Support",
//     description: "We support families in reuniting with loved ones abroad through family-based immigration programs and ensure all documentation is correctly filed.",
//     icon: <FaUsers className="w-8 h-8 " />
//   },
//   {
//     id: 6,
//     title: "Legal Assistance ",
//     description: "Our legal experts provide tailored advice to help you navigate complex immigration laws and policies, ensuring a smooth immigration process.",
//     icon: <FaBalanceScale className="w-8 h-8" />
//   },
// ];


// const FeatureCard = ({ title, description, icon }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center text-center space-y-4"
//       initial={{ opacity: 0, y: 20, scale: 0.95 }} // Start with hidden, slightly below, and smaller
//       whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate to fully visible, at the original position, and original scale
//       transition={{
//         opacity: { duration: 0.2 },
//         y: { type: 'spring', stiffness: 100, damping: 25 }, // More natural slide-up
//         scale: { duration: 0.2 }, // Quick scale effect
//       }}
//     >
//       <span className="p-2 rounded-md bg-blue-50 text-orange-500  flex w-max">
//         {icon}
//       </span>
//       <h2 className="text-gray-800  text-xl font-semibold uppercase italic">
//         {title}
//       </h2>
//       <p className="text-gray-700  mx-auto max-w-md">
//         {description}
//       </p>
//     </motion.div>
//   );
// };

  {/* Span Animation */}
          {/* <motion.span
            className="mx-auto w-max pl-5 uppercase font-semibold relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-orange-700 text-orange-600 text-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            Features
          </motion.span> */}

   {/* Wrapping the entire grid section with motion.div to trigger animations when it's in view */}
        {/* <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 sm:gap-x-12 "
          initial={{ opacity: 0 }}  // Start with the grid section hidden
          animate={inView ? { opacity: 1 } : { opacity: 0 }}  // Fade in when it's in view
          transition={{ duration: 0.2, staggerChildren: 0.2 }} // Staggered animation for child elements
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} custom={index}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div> */}
