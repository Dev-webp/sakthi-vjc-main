import Image from 'next/image';

export default function FreeAssessment() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-black" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold md:w-1/2">
          Free Assessment for Abroad Study, Jobseeker Visa, Permanent Residency Visa & Work Abroad – <span className="text-orange-500">VJC Overseas</span>
        </h1>
        <Image 
          src="/ass.webp" 
          alt="Free Assessment" 
          width={400} 
          height={250} 
          className="rounded-lg"
        />
      </div>
      
      <p className="mb-4">Welcome to <span className="text-orange-500">VJC Overseas</span> – Your Gateway to a Global Career and Education! Whether you’re looking to study abroad, find a job, obtain permanent residency, or work overseas, we provide expert guidance through our Free Assessment service.</p>
      
      <h2 className="text-2xl font-bold mt-6">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Study Abroad:</strong> Access top universities worldwide with tailored educational guidance.</li>
        <li><strong>Jobseeker Visa:</strong> Secure the right visa to explore job opportunities in top countries.</li>
        <li><strong>Permanent Residency Visa:</strong> Expert assistance in PR applications for Canada, Australia, and more.</li>
        <li><strong>Work Abroad:</strong> Smooth application process for skilled worker visas and job placements.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">How Our Free Assessment Works</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li><strong>Complete the Form:</strong> Fill out our quick online assessment.</li>
        <li><strong>Expert Evaluation:</strong> Our consultants analyze your profile.</li>
        <li><strong>Personalized Advice:</strong> Get tailored recommendations for visa options.</li>
        <li><strong>Step-by-Step Guidance:</strong> Assistance through document preparation and application filing.</li>
      </ol>
      
      <h2 className="text-2xl font-bold mt-6">Popular Destinations for Study, Work & Immigration</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Canada:</strong> High quality of life, excellent education, and immigration-friendly policies.</li>
        <li><strong>Australia:</strong> Strong job market, top universities, and great living conditions.</li>
        <li><strong>Germany:</strong> Leading destination for skilled workers and students.</li>
        <li><strong>New Zealand:</strong> Balanced lifestyle with excellent career prospects.</li>
        <li><strong>United Kingdom:</strong> A hub for education and skilled professionals.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">Take the First Step Towards Your Global Dream</h2>
      <p className="mb-4">At <span className="text-orange-500">VJC Overseas</span>, we simplify your journey to success. Start your Free Assessment today and explore global opportunities with confidence.</p>
      
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600">
          Start Your Free Assessment
        </button>
      </div>
    </div>
  );
}
