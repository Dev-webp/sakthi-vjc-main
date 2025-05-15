
'use client'; 


import CalculatorForm from './components/CalculatorForm';
import Top from './components/Top';
import Form from './components/Form';
import Sections2 from './components/Sections2';
import Section3 from './components/Section3';
import Marquesection from './components/Marquesection';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import  Section6 from './components/Section6';
import Section7 from './components/Section7';

import { motion } from 'framer-motion';

const MotionH2 = motion('h2'); // Define MotionH2

export default function Page() {
  return (
    <>
    <div style={{fontFamily:'Times new Roman '}}>
      {/* Background Image Section with CalculatorForm */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat py-48"
        style={{ backgroundImage: "url('/calcanimg.png')" }} // Replace with your actual image path
      >
        <MotionH2
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="-mt-20 text-2xl md:text-3xl max-w-5xl mx-auto font-semibold text-center mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
>
  Check Your Canada PR Eligibility<br />
  <span className="text-2xl md:text-3xl max-w-5xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
    Find out if you qualify for Canadian PR with our quick and easy points calculator.
  </span>
</MotionH2>


        <div className="max-w-7xl mx-auto mt-10 ">
          {/* <CalculatorForm /> */}
          <Form />
        </div>
      </div>

      <div className='-mt-40 bg-white'>
        <Sections2 />
      </div>

      <div className='pt-[400px] bg-white'>
        <Marquesection />
        <Section3 />
         <Section6/>
        <Section4 />
       
        <Section5 />
        <div className=''>
          <Section7/>

        </div>
        
        
      </div>
      </div>
    </>
  );
}
