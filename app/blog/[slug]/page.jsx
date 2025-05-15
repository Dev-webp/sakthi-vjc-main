'use client';

import { useParams } from 'next/navigation';
import { Phone, Mail } from 'lucide-react';

import Image from 'next/image';
import Canadacomp from './Canadacomp'; 
import Germanyoppcard from './Germanyoppcard';
import Workabroad from './Workabroad';
import Studytips from './Studytips';
import Visitvisa from './Visitvisa';
import Form from '../Form'; // 🛑 Make sure to import your Form component
import Footer from './Footer';

const blogs = [
  {
    id: 1,
    title: 'How to Apply for Canada Student Visa in 2025',
    slug: 'how-to-apply-for-canada-student-visa-2025',
    description: 'A complete checklist for Indian students planning to study in Canada',
    image: '/canada1.jpg',
    category: 'Study Tips',
    component: <Canadacomp />
  },
  {
    id: 2,
    title: 'Germany Opportunity Card - Everything You Need to Know in 2025',
    slug: 'germany-opportunity-card-2025',
    description: 'An overview of the new work visa for BC. Tech professionals migrating to Germany',
    image: '/germany.jpg',
    category: 'Visa Guide',
    component: <Germanyoppcard />
  },
  {
    id: 3,
    title: 'Working While Studying: Pros & Cons',
    slug: 'working-while-studying-pros-cons',
    description: 'Find the balance between academics and income.',
    image: '/WorkingHoliday417Visa.jpg',
    category: 'Work Abroad',
     component: <Workabroad />
  },
  {
    id: 4,
    title: 'Study Abroad Scholarships You Must Know',
    slug: 'study-abroad-scholarships',
    description: 'Unlock your education journey with scholarships.',
    image: '/studyabroad.png',
    category: 'Study Tips',
    component: <Studytips/>
  },
  {
    id: 5,
    title: 'Countries of Tourist Visas',
    slug: 'countries-tourist-visas',
    description: 'Earn while you learn: best part-time opportunities.',
    image: '/balgeriatour.jpg',
    category: 'Visa Guide',
    component:<Visitvisa/>
  },
  {
    id: 6,
    title: 'Serach for your dream countries',
    slug: 'search-dream-country',
    description: 'Earn while you learn: best part-time opportunities.',
    image: '/vjc-gdvisa.jpg',
    category: 'Work Abroad',
    component: <Workabroad />
  },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="text-center text-gray-500 mt-20">Blog not found</div>;
  }

  return (
    <div className="w-full bg-white">
      {/* Full width Image with Title overlay */}
      <div className="relative w-full h-[400px]">
        <Image src={blog.image} alt={blog.title} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{blog.title}</h1>
        </div>
      </div>

      {/* Below the image - Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Left side 60% */}
        <div className="w-full md:w-[60%]">
          {/* ✨ Blog-specific component here */}
          {blog.component && (
            <div>
              {blog.component}
            </div>
          )}
        </div>

        {/* Right side 40% */}
        <div className="w-full md:w-[35%] flex flex-col gap-6">
          
          {/* Box with image + contact */}
          

<div className="bg-white  shadow-lg overflow-hidden text-center">
  {/* Top half: small image */}
  <div className="relative w-full h-40">
    <Image src="/blogcontact.jpg" alt="Contact" fill style={{ objectFit: 'cover' }} />
  </div>

  {/* Bottom half: contact info */}
  <div className="p-6 flex flex-col items-center justify-center space-y-4 bg-gray-900">
    {/* Phone section */}
    <div className="flex flex-col items-center">
      <Phone className="w-8 h-8 text-purple-600 mb-2" />
      <p className="text-white font-semibold">Any questions? Contact us below number</p>
      <p className="text-white font-bold mt-1">+91-9160449000</p>
    </div>

    {/* Divider */}
    <div className="w-10 border-t border-gray-300 my-4"></div>

    {/* Email section */}
    <div className="flex flex-col items-center">
      <Mail className="w-8 h-8 text-purple-600 mb-2" />
      <p className="text-white font-semibold">Any questions? Email us below email ID</p>
      <p className="text-white font-bold mt-1">info@vjcoverseas.com</p>
    </div>
  </div>
</div>


          {/* Form below the box */}
          <div className="bg-white shadow-lg p-6">
            <Form />
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default BlogDetails;
