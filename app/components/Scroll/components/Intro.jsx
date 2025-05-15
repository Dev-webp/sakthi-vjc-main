import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Background from '../../../../public/bg-2.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import Form from '@/app/components/Form'; // Importing your existing form component

export default function Hero() {
    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    const handleFormToggle = () => {
        setShowForm(!showForm); // Toggle form visibility
    };

    const handleCloseForm = () => {
        setShowForm(false); // Close form
    };

    return (
        <div className="relative h-[80vh] lg:h-[80vh] overflow-hidden bg-gray-700" ref={container}>
            {/* Background Image with Parallax Effect */}
            <motion.div style={{ y }} className="absolute inset-0">
                <Image src={Background} fill alt="background" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-85"></div>
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                <motion.h1
                    className="text-[6vw] md:text-[3vw] font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 drop-shadow-lg uppercase"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Turning your global dreams to reality with <br/> VJC Overseas
                </motion.h1>
                <motion.h1
                    className="text-[3vw] md:text-[1rem] max-w-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 drop-shadow-lg uppercase"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Welcome to VJC Overseas, a trusted name in the field of overseas education and immigration services
                </motion.h1>

                <motion.p
                    className="mt-4 text-base md:text-xl text-gray-300 max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    At VJC Overseas, we feel that your international journey deserves the best guidance. We simplify the complex process with our experienced team on your side so that you don&apos;t have to face it alone. Up to now, we&apos;ve already helped over 1,000 people achieve their global dreams and are now continuing our support for many more. So, let us be trusted partners in your journey towards a brighter future.  
                </motion.p>

                <motion.div
                    className="mt-6 space-x-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <Link href='/services'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 ml-4 md:ml-0 lg:ml-0 rounded-lg shadow-lg transition-all">
                        Explore Services
                    </button>
                    </Link>
                    <button 
                        className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-6 mt-4 md:mt-0 lg:mt-0 rounded-lg shadow-lg transition-all"
                        onClick={handleFormToggle} // Trigger form visibility toggle
                    >
                        Contact Our Experts
                    </button>
                </motion.div>
            </div>

            {/* Conditionally Render the Form */}
            {showForm && (
                <div className="fixed top-16 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20">
                    <div className="relative bg-white rounded-lg p-8 w-[30rem]">
                        <button 
                            onClick={handleCloseForm} // Close the form
                            className="absolute top-4 right-2 text-xl w-16 h-16 text-gray-700 hover:text-gray-900"
                        >
                            &times;
                        </button>
                        <Form /> {/* Importing your form here */}
                    </div>
                </div>
            )}
        </div>
    );
}
