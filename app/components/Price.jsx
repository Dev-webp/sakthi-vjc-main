"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="py-20 " style={{ backgroundImage: 'url(/comp-1.webp)' }}>
  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col space-y-10"
    >
      <div className="flex gap-10 flex-col items-center">
        <div className="text-center max-w-2xl">
          <h2 className="text-[2.75rem] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 md:text-4xl xl:text-5xl leading-tight">
            Our Services
          </h2>
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }} // Add a slight delay for sequential fade-in
          >
            At VJC Overseas, we offer a wide range of services designed to support individuals and businesses in achieving their international goals. 
          </motion.p>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto"
      >
        {[
          {
            id: 1,
            title: "Visa Consultation",
            description: "We guide you through the entire process, from eligibility assessment to documentation submission, ensuring that your application stands the success.",
            recommended: false,
          },
          {
            id: 2,
            title: "Permanent Residency Visas",
            description:
              "We expertise in processing Permanent Residency Visa services to individuals and families seeking to establish long-term residency in countries such as Canada, Australia, and New Zealand.",
            recommended: true,
          },
          {
            id: 3,
            title: "Resume Marketing",
            description:
              "Our team stays updated with the latest immigration policies and provides personalised advice to help you make informed decisions.",
            recommended: false,
          },
        ].map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`relative rounded-lg border bg-white h-96 p-6 sm:p-10 space-y-6 shadow-xl hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2 transition duration-300 ${
              service.recommended
                ? "bg-gray-100 shadow-gray-200/40"
                : "shadow-transparent"
            }`}
          >
            {service.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-gray-200 text-gray-700">
                Recommended
              </div>
            )}
            <div className="text-center space-y-3">
              <h2 className="font-semibold text-2xl text-gray-900 uppercase">
                {service.title}
              </h2>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
            <div className="flex relative py-1 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-200" />
            <div className="flex justify-center">
              <Link
                href="#"
                className={`outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md ${
                  service.recommended
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-orange-500"
                }`}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>

  );
};

export default ServiceSection;
