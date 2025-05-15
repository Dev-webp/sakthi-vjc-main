'use client';

import { useState, useEffect } from 'react';
import BlogCards from './BlogCards'; 
import Latestblogs from './Latestblogs';
import Footer from './Footer';

const categories = ['All', 'Study Tips', 'Visa Guide', 'Work Abroad', 'News'];

const backgroundImages = [
  '/blogimg1.webp',
  '/blogimg2.png',
  '/blogimg3.jpg',
  '/blogimg4.webp',
];

const Page = () => {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('All');
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Image Section */}
      <div
        className="relative h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-24"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">VJC Overseas Blog</h1>
          <p className="text-lg mt-2">Explore, Learn, and Get Inspired</p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blog articles..."
              className="w-full px-6 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 rounded-full text-sm font-medium border transition ${
                  active === cat
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="px-4 md:px-24 py-20 bg-white">
        <BlogCards search={search} category={active} />
      </div>
      <Latestblogs/>
      <Footer/>
    </div>
  );
};

export default Page;
