import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-saffron to-[#ff8614] py-0 lg:py-0 px-0 sm:px-0 lg:px-16 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center ml-4 sm:ml-10 lg:ml-14">
        <Link href="https://vjcoverseas.com" target="_blank" rel="noopener noreferrer" className="block" >
  
        <Image
  src="/logo-1.png" // Ensure the image is in the public folder or provide an absolute URL
  alt="Logo"
  width={64} // Default width for lg:w-16 (16 * 4 = 64px)
  height={64} // Default height for lg:h-16
  className="h-16 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16" // Maintain responsiveness
/>
</Link>
          <Link href="https://vjcoverseas.com"  target="_blank" rel="noopener noreferrer" className="block">
          <Image
  src="/logo-2.png" // Ensure the image is in the public folder or provide an absolute URL
  alt="Logo"
  width={112} // Default width for lg:w-28 (28 * 4 = 112px)
  height={64} // Default height for lg:h-16 (16 * 4 = 64px)
  className="h-16 w-24 md:h-12 md:w-12 lg:h-16 lg:w-28"
/>
          </Link>
        </div>

        {/* Heading (Hidden on Small Devices) */}
        <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 uppercase text-white font-bold text-sm sm:text-lg lg:text-[2.2rem] tracking-wide z-10 text-center px-4 sm:px-0 hidden lg:block mb-0 lg:mb-0 tablet:mb-20">
        Discover Your <br/> Path to Success  
        </h1>


        {/* Instagram and Facebook Icons (Visible Only on Small Devices) */}
        <div className="flex flex-col justify-center items-center space-y-2 sm:hidden ml-4">
  {/* Facebook and Instagram Icons */}
  <div className="flex space-x-2">
    <a
      href="https://www.facebook.com/VJCOVERSEAS/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-black"
    >
      <FaFacebook size={20} />
    </a>
    <a
      href="https://www.instagram.com/vjcoverseas_/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-black"
    >
      <FaInstagram size={20} />
    </a>
  </div>
  
  {/* Twitter Icon */}
  <div>
    <a
      href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-black"
    >
      <FaTwitter size={20} />
    </a>
  </div>
</div>


        <div className='ml-0 lg:ml-[32rem] mt-1 animate-bounce'>
          <Image
            src="/40-1.png" // Replace with the correct image path
            alt="Description of image"
            width={112} // Default width for lg:w-28 (28 * 4 = 112px)
            height={64} 
            className="h-14 w-16 lg:h-24 lg:w-28 object-cover" // Adjust the size as needed
          />
        </div>

        {/* Contact Number */}
        <div className="text-white text-[0.70rem] lg:text-[0.90rem] md:text-sm font-semibold text-center sm:text-left ml-0 md:ml-0 lg:ml-0">
      {/* Phone icon */}
      <div className="flex items-center space-x-2">
  <a href="tel:+919160449000" className="text-white hover:text-black flex items-center">
    <FaPhoneVolume className="text-blue-600 animate-ring mr-1" />
    <span>: +91 9160449000</span>
  </a>
</div>

      
      {/* Email icon */}
      <div className="flex items-center space-x-2">
        
        <a href="mailto:info@vjcoverseas.com" className="text-white hover:text-black flex items-center">
        <FaEnvelope  className="text-blue-600 animate-pulse mr-1" />
          <span>info@vjcoverseas.com </span></a>
      </div>
    </div>
      </div>

      
      

    </header>
  );
};

export default Header;
