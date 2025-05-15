import Footer from "../components/Footer"; // Adjust path if needed

export default function Page() {
  return (
  
    <div
      className="w-full min-h-screen flex flex-col bg-orange-400 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/piclumen-1740825881432.png')" }}
    >
      {/* About Us Section */}
      <section className="mt-24 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-4xl space-y-6 bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
          Welcome to VJC Overseas, your trusted partner in overseas education and immigration services. 
          Established in 2009, we are an award-winning consultancy based in Hyderabad, with branch offices in Bengaluru, Karnataka, and the USA. With over 15 years of experience, VJC Overseas has successfully assisted more than 75,000 students and working professionals in fulfilling their dreams of studying abroad and pursuing immigration opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed">
          We pride ourselves on our commitment to excellence and a passion for helping individuals achieve their goals. Our team of highly experienced professionals is dedicated to providing personalized and effective solutions tailored to each client's unique needs. At VJC Overseas, we understand the importance of getting the right guidance, and that’s why we continuously 
          update our knowledge to stay ahead of the constantly evolving immigration rules and study abroad options.
          </p>
          <p>Whether you're seeking a visa for higher studies, looking to work abroad, or exploring immigration pathways, we are here to ensure that your application is handled with precision and care. Our expertise and dedicated approach
             have helped us build a solid reputation as a leading consultancy in the field.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full items-stretch">
          {/* Mission */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center flex flex-col justify-center h-full min-h-[200px]">
            <h2 className="text-2xl font-bold text-blue-800">Mission</h2>
            <p className="text-gray-700 mt-2">
            At VJC Overseas, our mission is to provide exceptional and reliable consultancy services to individuals seeking opportunities in overseas education and immigration. We strive to empower our clients with accurate, timely, and professional guidance, ensuring 
            their success in navigating the complexities of the global education and immigration systems.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center flex flex-col justify-center h-full min-h-[200px]">
            <h2 className="text-2xl font-bold text-green-800">Vision</h2>
            <p className="text-gray-700 mt-2">
            Our vision is to be a global leader in overseas education and immigration consultancy, offering unmatched services that inspire trust, deliver success, and help our clients achieve their aspirations. We aim to foster long-lasting relationships with our clients by consistently
             delivering excellence and by staying ahead of industry changes to provide the best possible outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
<section className="flex flex-col items-center justify-center px-6 py-16 text-center">
  <div className="max-w-3xl bg-yellow-100 bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105">
    <h2 className="text-3xl font-bold text-yellow-800">Our Aim</h2>
    
    <p className="text-gray-700 leading-relaxed mt-4">
      Our aim is to guide every individual who walks through our doors toward a successful future. With a track record of over 75,000 successful visa applications, we are committed to:
    </p>

    <ul className="list-disc list-inside text-left mt-4 text-gray-700">
      <li>Delivering personalized solutions for each client.</li>
      <li>Offering expert advice that aligns with changing immigration policies.</li>
      <li>Continually updating our knowledge to keep clients ahead of global trends.</li>
      <li>Ensuring high success rates with meticulous attention to detail on every application.</li>
    </ul>
  </div>
</section>


      {/* CEO's Message Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16">
        <div className="max-w-3xl text-center bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800">CEO’s Message</h2>
          <p className="text-gray-700 leading-relaxed mt-4">
          "At VJC Overseas, we believe that every dream is achievable with the right guidance and dedication. Since our inception in 2009, we have witnessed the transformative power of education and immigration in shaping the lives of countless individuals. Our team of experts is driven by the passion to
           empower students and professionals to reach their full potential in their international careers."
          </p>
          <p>"We recognize that navigating the complex world of visas and immigration can be overwhelming, which is why we are here to offer clarity and support at every step. We are proud of our remarkable track record and continue to evolve our services in line 
            with the ever-changing landscape of immigration policies and study abroad opportunities."</p>
            <p>"Our journey has been built on the trust of our clients, and we remain committed to delivering the highest level of professionalism and success. I invite you to experience the VJC Overseas difference,
               where your dreams of studying abroad and immigrating to a better future can become a reality.""</p>
          <p className="text-gray-700 font-bold mt-4">– CEO, VJC Overseas</p>
          
        </div>
      </section>

      {/* Spacer (pushes footer to bottom) */}
      <div className="flex-grow"></div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-6">
        <Footer />
      </footer>
    
    </div>
    
  );
}
