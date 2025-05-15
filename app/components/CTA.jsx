import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-6">
  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
    <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200">
      {/* Background Blur Elements */}
      <div className="absolute right-0 top-0 h-full w-full flex justify-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
          <span className="absolute w-16 h-16 -top-1 -right-1 bg-orange-100 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-orange-300 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-orange-300 rounded-md rotate-45" />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
          <span className="absolute w-16 h-16 -top-1 -right-1 bg-orange-100 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-orange-300 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-orange-300 rounded-md rotate-45" />
        </div>
      </div>

      {/* Animated Text Content */}
      <motion.div
        className="mx-auto text-center max-w-xl md:max-w-4xl relative space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is visible
      >
        {/* Animated Title */}
        <motion.h1
          className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-black uppercase"
          variants={fadeIn}
        >
          Ready to take the <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 from-20% via-orange-400 via-30% to-orange-600">
            next step <br />
          </span>
          in your immigration journey?
        </motion.h1>

        {/* Animated Description */}
        <motion.p className="text-gray-700" variants={fadeIn}>
          Start your immigration journey with expert guidance. We provide
          personalized solutions to help you navigate visa processes smoothly and efficiently.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          className="mx-auto max-w-md sm:max-w-xl flex justify-center"
          variants={fadeIn}
        >
          <Link href='/assessment'>
          <button className="outline-none h-12 px-5 rounded-xl bg-orange-600 text-white flex items-center">
            Book Consultant
          </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default CtaSection;
