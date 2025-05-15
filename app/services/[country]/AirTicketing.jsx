import Image from 'next/image';
import { Plane, Globe, Users, Ticket, GraduationCap, Map } from 'lucide-react';

export default function AirTicketing() {
  return (
    <div className="p-6 max-w-6xl bg-white mx-auto text-black text-base" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="mb-6">
        <h1 className="text-xl mb-3 font-bold text-center">
          Air Ticketing Services – <span className="text-orange-500">VJC Overseas</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
          <Image 
            src="/airticketing.jpg" 
            alt="Air Ticketing" 
            width={200} 
            height={250} 
          />
          <p className="text-lg">
            Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner for seamless, affordable, and reliable air ticketing services. We bring the best of the skies to your fingertips with competitive pricing and unmatched support.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-3 text-center">Why Choose <span className="text-orange-500">VJC Overseas</span> for Air Ticketing?</h2>
      <div className="flex items-start justify-between  mb-4">
        <ul className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
          <li className="text-lg flex items-center gap-2"><Ticket className="w-5 h-5 text-orange-500" /><strong>Competitive Airfares:</strong> Unbeatable rates on domestic and international flights.</li>
          <li className="text-lg flex items-center gap-2"><Globe className="w-5 h-5 text-orange-500" /><strong>Comprehensive Flight Options:</strong> Flights to hundreds of destinations worldwide.</li>
          <li className="text-lg flex items-center gap-2"><Plane className="w-5 h-5 text-orange-500" /><strong>Personalized Travel Solutions:</strong> Tailored flight options for every traveler.</li>
          <li className="text-lg flex items-center gap-2"><Ticket className="w-5 h-5 text-orange-500" /><strong>Hassle-Free Booking:</strong> Quick searches and smooth booking experience.</li>
          <li className="text-lg flex items-center gap-2"><Users className="w-5 h-5 text-orange-500" /><strong>24/7 Customer Support:</strong> Round-the-clock assistance for any queries.</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-3 text-center">Our Air Ticketing Services Include:</h2>
      <div className="flex items-start justify-between gap-4 mb-4">
        <ol className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
          <li className="text-lg flex items-center gap-2"><Plane className="w-5 h-5 text-orange-500" /><strong>Domestic Flights:</strong> Travel within your country with flexible options.</li>
          <li className="text-lg flex items-center gap-2"><Globe className="w-5 h-5 text-orange-500" /><strong>International Flights:</strong> Affordable international flight bookings.</li>
          <li className="text-lg flex items-center gap-2"><Ticket className="w-5 h-5 text-orange-500" /><strong>Round-Trip & One-Way Tickets:</strong> Flexible ticket options.</li>
          <li className="text-lg flex items-center gap-2"><Users className="w-5 h-5 text-orange-500" /><strong>Group Travel Bookings:</strong> Special rates for group reservations.</li>
          <li className="text-lg flex items-center gap-2"><Plane className="w-5 h-5 text-orange-500" /><strong>Business & First-Class Tickets:</strong> Luxury travel options.</li>
          <li className="text-lg flex items-center gap-2"><GraduationCap className="w-5 h-5 text-orange-500" /><strong>Student Travel & Discounts:</strong> Special student flight deals.</li>
          <li className="text-lg flex items-center gap-2"><Map className="w-5 h-5 text-orange-500" /><strong>Multi-City & Stopover Packages:</strong> Explore multiple destinations.</li>
        </ol>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-3 text-center">Easy Online Booking Process</h2>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <Image 
          src="/airplaneseating.jpg" 
          alt="Online Booking" 
          width={300} 
          height={250} 
                />
        <p className="text-lg">
          Booking your flight with <span className="text-orange-500">VJC Overseas</span> is quick and straightforward. Just choose your route, compare prices, and confirm your seat — it's that easy!
        </p>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-3 text-center">Stay Updated with Latest Travel Deals</h2>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <Image 
          src="/followus.avif" 
          alt="Travel Deals" 
          width={100} 
          height={250} 
        />
        <p className="text-lg">
          Subscribe to our newsletter and follow us on social media to receive the latest updates on discounted flights, special offers, and limited-time deals.
        </p>
      </div>

      <h2 className="text-xl font-bold mt-6  mb-3 text-center">Travel Made Simple with <span className="text-orange-500">VJC Overseas</span></h2>
      <p className="text-lg mb-4">At <span className="text-orange-500">VJC Overseas</span>, we are committed to making your travel dreams a reality. From booking to boarding, we’re with you every step of the way.</p>
    </div>
  );
}
