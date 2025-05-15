import Image from 'next/image';

export default function VJCOverseas() {
  return (
    <div className="bg-white text-black p-6 font-[Times New Roman]">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          Free Counseling for Abroad Study, Jobseeker Visa, Permanent Residency Visa & Work Abroad - 
          <span className="text-orange-500"> VJC Overseas</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <Image 
          src="/Counselling-1.jpg" 
          alt="VJC Overseas" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg mb-6"
        />
      </div>
      <p className="text-lg leading-relaxed">
        Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in pursuing opportunities abroad. Whether you're looking to study overseas, secure a jobseeker visa, apply for permanent residency, or explore work opportunities internationally, we offer expert guidance and free counseling to help you achieve your dreams...
      </p>
      
      <h2 className="text-2xl font-bold mt-6">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Free Counseling: Receive personalized advice and detailed guidance.</li>
        <li>Expert Consultants: Our experienced team is well-versed in immigration laws and study options.</li>
        <li>End-to-End Support: From application assistance to post-arrival services.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">Our Services</h2>
      <p className="mt-2">We offer assistance with Study Abroad Counseling, Jobseeker Visas, Permanent Residency, and Work Abroad Opportunities.</p>
      
      <h2 className="text-2xl font-bold mt-6">Countries We Specialize In</h2>
      <p className="mt-2">Canada, Australia, Germany, USA, UK, New Zealand, and more.</p>
      
      <h2 className="text-2xl font-bold mt-6">How It Works</h2>
      <ol className="list-decimal pl-6 mt-2">
        <li>Get in Touch: Contact us to schedule your free session.</li>
        <li>Discuss Your Goals: Receive tailored advice.</li>
        <li>Receive a Roadmap: Get a step-by-step plan.</li>
        <li>Ongoing Support: Assistance throughout your journey.</li>
      </ol>
      
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600">
          Contact Us for Free Counseling
        </button>
      </div>
    </div>
  );
}
