import Image from 'next/image';

export default function AirTicketing() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-black text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <h1 className="text-4xl font-bold md:w-1/2">
          Air Ticketing Services – <span className="text-orange-500">VJC Overseas</span>
        </h1>
        <Image 
          src="/airticketing.jpg" 
          alt="Air Ticketing" 
          width={300} 
          height={250} 
          className="rounded-lg"
        />
      </div>
      
      <p className="mb-4">Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner for seamless, affordable, and reliable air ticketing services...</p>
      
      <h2 className="text-3xl font-bold mt-6">Why Choose <span className="text-orange-500">VJC Overseas</span> for Air Ticketing?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="text-xl"><strong>Competitive Airfares:</strong> Unbeatable rates on domestic and international flights.</li>
        <li className="text-xl"><strong>Comprehensive Flight Options:</strong> Flights to hundreds of destinations worldwide.</li>
        <li className="text-xl"><strong>Personalized Travel Solutions:</strong> Tailored flight options for every traveler.</li>
        <li className="text-xl"><strong>Hassle-Free Booking:</strong> Quick searches and smooth booking experience.</li>
        <li className="text-xl"><strong>24/7 Customer Support:</strong> Round-the-clock assistance for any queries.</li>
      </ul>
      
      <h2 className="text-3xl font-bold mt-6">Our Air Ticketing Services Include:</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="text-xl"><strong>Domestic Flights:</strong> Travel within your country with flexible options.</li>
        <li className="text-xl"><strong>International Flights:</strong> Affordable international flight bookings.</li>
        <li className="text-xl"><strong>Round-Trip & One-Way Tickets:</strong> Flexible ticket options.</li>
        <li className="text-xl"><strong>Group Travel Bookings:</strong> Special rates for group reservations.</li>
        <li className="text-xl"><strong>Business & First-Class Tickets:</strong> Luxury travel options.</li>
        <li className="text-xl"><strong>Student Travel & Discounts:</strong> Special student flight deals.</li>
        <li className="text-xl"><strong>Multi-City & Stopover Packages:</strong> Explore multiple destinations.</li>
      </ol>
      
      <h2 className="text-3xl font-bold mt-6">Easy Online Booking Process</h2>
      <p className="text-xl mb-4">Booking your flight with <span className="text-orange-500">VJC Overseas</span> is quick and straightforward...</p>
      
      <h2 className="text-3xl font-bold mt-6">Stay Updated with Latest Travel Deals</h2>
      <p className="text-xl mb-4">Subscribe to our newsletter and follow us on social media for updates on discounted flights...</p>
      
      <h2 className="text-3xl font-bold mt-6">Travel Made Simple with <span className="text-orange-500">VJC Overseas</span></h2>
      <p className="text-xl mb-4">At <span className="text-orange-500">VJC Overseas</span>, we are committed to making your travel dreams a reality...</p>
      
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white py-3 px-8 text-xl rounded-lg shadow-md hover:bg-orange-600">
          Book Your Flight Now
        </button>
      </div>
    </div>
  );
}