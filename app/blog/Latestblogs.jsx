'use client';
import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';

const blogs = [
   {
    id: 1,
    title: 'Student Visas Made Easy with VJC Overseas',
    description: 'Turn your study abroad dream into reality with expert student visa guidance and support from VJC.',
    image: '/greeceimg.png',
  },
  {
    id: 2,
    title: 'Simplifying Your Visa Process with VJC Experts',
    description: 'Get hassle-free visa services and personalized support for your migration dreams with VJC Overseas.',
    image: '/b2.webp',
  },
  {
    id: 3,
    title: 'Work Visa Opportunities: Build Your Career Abroad',
    description: 'Explore the latest global work visa options and start your international career with VJC Overseas.',
    image: '/women2.avif',
  },
 
];

const LatestBlog = () => {
  return (
    <div className="bg-white px-4 sm:px-10 py-16">
      <h2 className=" md:ml-11 text-4xl bg-gradient-to-r from-black via-orange-500 to-orange-500 bg-clip-text text-transparent">
         Latest Blogs
        </h2>
      {/* Blog Section with Left Image & ZigZag Cards */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
  {/* Left Side Image with Text Overlay */}
  <div className="relative w-full lg:w-2/3 pr-0 lg:pr-8 mb-10 lg:mb-0">
  {/* Background Image */}
  <Image
    src="/blogpageimg.avif"
    alt="Consultation"
    width={700}
    height={900}
    className="w-full object-cover"
  />

  {/* Overlay Text with Points */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 py-10 text-black rounded-xl">
    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
      Visa & Immigration Experts
    </h2>

    <ul className="space-y-3 text-lg lg:text-xl list-disc pl-5 max-w-xl">
      <li>Expert guidance for Study, Work, and PR Visas</li>
      <li>Personalized support for your migration journey</li>
      <li>Latest visa updates and eligibility checks</li>
      <li>Trusted consultants with global experience</li>
    </ul>
  </div>
</div>



        {/* Right Side Zigzag Cards */}
        
{/* Right Side Zigzag Cards */}
<div className="w-full lg:w-[700px] flex flex-col items-center space-y-8">
  {blogs.map((blog, index) => (
    <div
      key={blog.id}
      className={`bg-orange-50 border-l-4 border-orange-500 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-xl w-[95%] max-w-[360px] ${
        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{blog.description}</p>
      <Link href="#" className="text-orange-600 font-medium hover:underline text-sm">
        Read More →
      </Link>
    </div>
  ))}
</div>
</div>

      {/* CTA Section */}
      <div className="relative mt-20 max-w-5xl mx-auto  overflow-hidden bg-gray-800  backdrop-blur-md shadow-xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-100">Need help choosing a country or course?</h3>
            <p className="text-gray-100 mt-1">Get expert advice now — it’s free.</p>
          </div>
          <Link href="/assessment">
            <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow-md transition">
              Fress Visa Assessment
            </button>
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 max-w-6xl mx-auto  rounded-xl overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-xl text-orange-500 mb-2">WANT TO MOVE FORWARD</h2>
          <h1 className="text-3xl text-black font-bold mb-4" style={{ fontFamily: 'cursive' }}>
            Request A Call Back
          </h1>
          <Form />
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 h-full">
          <Image
            src="/blogimg.png"
            alt="Consultation"
            width={700}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
