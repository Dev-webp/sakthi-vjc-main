import { FaCommentDots, FaClipboardCheck, FaFileAlt, FaPaperPlane, FaMicrophone, FaPlaneDeparture } from 'react-icons/fa';
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 xl:p-2 hover:cursor-default rounded-lg bg-gray-100 group transition duration-300 z-20 hover:z-30 shadow-md shadow-transparent hover:shadow-gray-100/40 border border-transparent hover:border-gray-200 hover:-translate-y-2 overflow-hidden relative">
  <div className="absolute w-40 h-10 rounded-full border-8 border-sky-600/20 blur-md -z-10 -top-1 right-5 rotate-45" />
  <div className="flex min-w-max items-start">
    <div className="p-1.5 rounded-full shadow-sm relative bg-gradient-to-br from-gray-100 to-neutral-300">
      <div className="bg-gray-100 rounded-full p-3 flex">
        <div className="text-orange-500 text-3xl">{icon}</div>
      </div>
    </div>
  </div>
  <div className="space-y-5 flex flex-col md:flex-1 relative">
    <h2 className="text-xl font-semibold text-gray-900">
      {title}
    </h2>
    <p className="text-gray-700 text-justify line-clamp-3">
      {description}
    </p>
    {/* <Link href="#" className="text-sky-700 flex items-center gap-x-3 w-max">
      Get a free consultation
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
      </svg>
    </Link> */}
  </div>
</div>

  );
};

const services = [
  {
    id: 1,
    title: "1. Counselling & Consultation",
    description: "Let our consultation process guide you through your best choice of visa.",
    icon: <FaCommentDots />
  },
  {
    id: 2,
    title: "2. Eligibility Check",
    description: "We evaluate your profile and qualifications to check if it meets the requirement for the visa.",
    icon: <FaClipboardCheck />
  },
  {
    id: 3,
    title: "3. Documents Preparation",
    description: "We can assist you in collecting, authenticating, and preparing all documents for an error-free application.",
    icon: <FaFileAlt />
  },
  {
    id: 4,
    title: "4. Submission of Visa Application",
    description: "We ensure that your application is submitted with every bit of detail required to be processed as soon as possible.",
    icon: <FaPaperPlane />
  },
  {
    id: 5,
    title: "5. Interview Preparation",
    description: "We guide you in all possible visa interview preparations so you are best prepared for the visa interview process.",
    icon: <FaMicrophone />
  },
  {
    id: 6,
    title: "6. Visa Approval & Travel Services",
    description: "Once the visa is approved, we provide services to help you travel without stress and make your move abroad very smooth.",
    icon: <FaPlaneDeparture />
  },
];

const Features = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };
  return (
    <section
  className="py-10"
  style={{ backgroundImage: 'url(/comp-22.webp)' }}
>
  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
    <div className="flex flex-col gap-5">
      <div className="space-y-4 max-w-4xl">
        <motion.h1
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600  dark:text-orange-500 md:text-4xl xl:text-5xl leading-tight uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Easy Visa Process
        </motion.h1>
      </div>
      <motion.p
        className="text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Your Roadmap to Getting a Visa Successfully
      </motion.p>
    </div>

    <motion.div
      className="grid sm:grid-cols-2 gap-6 md:gap-4"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </motion.div>

    {/* Centering the button */}
    <motion.div
      variants={itemVariants}
      className="flex justify-center items-center w-full"
    >
      <Link
        href="#"
        className="px-6 h-11 flex items-center bg-orange-500 rounded-lg text-white"
      >
        Book Free Consultation
      </Link>
    </motion.div>
  </div>
</section>

  );
};

export default Features;
