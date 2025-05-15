import Form from "../components/Form";
import Footer from "../components/Footer";  

export default function StudyAbroadPage() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col bg-cover bg-center bg-fixed before:inset-0 before:bg-black before:opacity-20"
      style={{ backgroundImage: "url('/studyabroad.png')" }} 
    >
      {/* Main Content Wrapper */}
      <div className="flex flex-1 px-12 pt-32 pb-6 gap-x-12 relative ml-6">


        
        {/* Left Section: Study Abroad Content Box (Smaller & Centered) */}
        <div className="w-1/2  p-5 text-black bg-white/80 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-orange-300/90 hover:shadow-xl border-4 border-transparent hover:border-orange-500 transform hover:-translate-y-2">
          <h1 className="text-2xl font-bold mb-4">Study Abroad</h1>

          <p className="mb-4">
            <span className="font-bold">Study Abroad with VJC Overseas: Your Global Education Partner</span>
          </p>

          <p className="mb-4">
            At VJC Overseas, we believe that education is not just about textbooks—it's about experiencing the world, broadening your horizons, and preparing for a global future.
            Our Study Abroad services are designed to guide students through every step of their international education journey, ensuring a seamless and enriching experience.
          </p>

          <p className="mb-3">
            We collaborate with top universities and educational institutions across the world, offering you access to a wide range of undergraduate, postgraduate, and diploma programs in countries like the <span className="font-bold">USA, Canada, the UK, Australia, and Europe</span>.
            Whether you're looking to pursue your passion in <span className="font-bold">engineering, business, healthcare, or the arts</span>, we can help you find the best program that aligns with your academic and career goals.
          </p>

          <p className="mb-4 font-bold text-orange-500">
            Studying abroad is an investment in your future, and with VJC Overseas, you’re not just applying for a course—you’re embarking on a life-changing adventure.
          </p>

          <p className="mb-4">
            Let us help you take the first step towards a world-class education and an exciting new chapter in your life.
          </p>

          <p className="text-center text-lg font-semibold text-orange-500">
            Start your global education journey with VJC Overseas today!
          </p>
        </div>

        {/* Right Section: Fixed Position Form */}
        <div className="absolute right-16 top-24 w-12/4 p-6 bg-white rounded-lg shadow-lg  ">
          <Form />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-6">
        <Footer />
      </footer>
    </div>
  );
}
