'use client';

import {
  FaClock,
  FaUsers,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEnvelope,
} from 'react-icons/fa';
import Image from 'next/image';
import Form from './Form';

export default function ContactSection() {
  return (
    <div className="w-full bg-white">
      {/* Heading */}
      <div className="text-center py-12 px-4">
        {/* Form + Image + Cards Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-4">
          {/* Left: Form */}
          <div className="flex-1 w-full max-w-xl">
            <Form />
          </div>

          {/* Right: Image + Cards */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-start w-full">
            {/* Image shifted right slightly */}
            <div className="relative -mb-4 md:self-center md:pl-12 lg:pl-20">
              <Image
                src="/sales-girl-1.png"
                alt="Contact"
                width={380}
                height={300}
                className="rounded-lg mx-auto md:mx-0"
              />
            </div>

            {/* Cards (Grid of 6) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Card 1 */}
              <div className="bg-orange-100  p-4 text-center shadow-md hover:shadow-lg transition">
                <FaClock className="text-orange-500 text-2xl mb-2 mx-auto" />
                <h4 className="font-bold text-md text-black">Quick Response</h4>
                <p className="text-sm text-gray-600">Reply within 24 hours</p>
              </div>

              {/* Card 2 */}
              <div className="bg-orange-100  p-4 text-center shadow-md hover:shadow-lg transition">
                <FaUsers className="text-orange-500 text-2xl mb-2 mx-auto" />
                <h4 className="font-bold text-md text-black">Expert Team</h4>
                <p className="text-sm text-gray-600">Professional & helpful</p>
              </div>

              {/* Card 3 */}
              <div className="bg-orange-100  p-4 text-center shadow-md hover:shadow-lg transition">
                <FaCalendarAlt className="text-orange-500 text-2xl mb-2 mx-auto" />
                <h4 className="font-bold text-md text-black">Working Days</h4>
                <p className="text-sm text-gray-600">Mon - Sat available</p>
              </div>

              {/* Card 4 - Location */}
              <div className="bg-orange-100 p-4 text-center shadow-md hover:shadow-lg transition">
                <FaMapMarkerAlt className="text-orange-500 text-2xl mb-2 mx-auto" />
                <h4 className="font-bold text-md text-black">Our Location</h4>
                <p className="text-sm text-gray-600">Banglore,Hyderabad,USA</p>
              </div>

              {/* Card 5 - Email */}
              <div className="bg-orange-100  p-4 text-center shadow-md hover:shadow-lg transition">
                <FaEnvelope className="text-orange-500 text-2xl mb-2 mx-auto" />
                <h4 className="font-bold text-md text-black">Email Us</h4>
                <p className="text-sm text-gray-600"> info@vjcoverseas.com</p>
              </div>

              {/* Card 6 - Phone */}
              <div className="bg-orange-100  p-4 text-center shadow-md hover:shadow-lg transition">
                <FaPhoneAlt className="text-orange-500 text-2xl mb-2 mx-auto" />
                <h4 className="font-bold text-md text-black">Call Us</h4>
                <p className="text-sm text-gray-600">+91 9160449000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
