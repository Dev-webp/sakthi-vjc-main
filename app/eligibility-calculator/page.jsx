import CalculatorForm from './components/CalculatorForm';
import Top from './components/Top';
import Sections2 from './components/Sections2';
import Section3 from './components/Section3';
import Marquesection from './components/Marquesection';
import Section4 from './components/Section4';
import Section5 from './components/Section5';


export default function Page() {
  return (
    <>
     
        
        {/* Background Image Section with CalculatorForm */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat px-4 py-20"
          style={{ backgroundImage: "url('/calcanimg.png')" }} // Replace with your actual image path
        >
          <div className="max-w-7xl mx-auto ml-10">
            <CalculatorForm />
          </div>
        </div>

       <div className='-mt-24 bg-white'>
       <Sections2 />
       </div>
        

     
       
        
        <div className='pt-[400px] bg-white'>

           
            <Marquesection/>
            
       
        <Section3/>
        
        <Section4/>
        <Section5/>

        </div>
        
    
    </>
  );
}
