import Image from 'next/image';
import Background from '../../../../public/bg-2.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import CountrySlider from '@/app/components/Countries';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);


    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-[70vh] lg:h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* Fixed background image with scrolling effect */}
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image
                        src={Background}
                        alt="Background Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                </motion.div>
            </div>
            <div className='mt-80 lg:mt-0'>
            <CountrySlider/></div>
        </div>
    );
}



            