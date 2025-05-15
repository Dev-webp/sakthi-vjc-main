'use client';

import './global.css';
import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'How to Apply for Canada Student Visa in 2025',
    slug: 'how-to-apply-for-canada-student-visa-2025',
    description: 'A complete checklist for Indian students planning to study in Canada',
    image: '/canada1.jpg',
    category: 'Study Tips',
  },
  {
    id: 2,
    title: 'Germany Opportunity Card - Everything You Need to Know in 2025',
    slug: 'germany-opportunity-card-2025',
    description: 'An overview of the new work visa for tech professionals migrating to Germany',
    image: '/germany.jpg',
    category: 'Visa Guide',
  },
  {
    id: 3,
    title: 'Working While Studying: Pros & Cons',
    slug: 'working-while-studying-pros-cons',
    description: 'Find the balance between academics and income.',
    image: '/WorkingHoliday417Visa.jpg',
    category: 'Work Abroad',
  },
  {
    id: 4,
    title: 'Study Abroad Scholarships You Must Know',
    slug: 'study-abroad-scholarships',
    description: 'Unlock your education journey with scholarships.',
    image: '/studyabroad.png',
    category: 'Study Tips',
  },
  {
    id: 5,
    title: 'Countries Offering Tourist Visas',
    slug: 'countries-tourist-visas',
    description: 'Top destinations with easy tourist visa options.',
    image: '/balgeriatour.jpg',
    category: 'Visa Guide',
  },
  {
    id: 6,
    title: 'Search for Your Dream Country',
    slug: 'search-dream-country',
    description: 'Plan your journey to study, work, or migrate abroad.',
    image: '/vjc-gdvisa.jpg',
    category: 'Work Abroad',
  },
];

const BlogCards = ({ search = '', category = 'All' }) => {
  const filtered = blogs.filter((blog) => {
    const matchesCategory = category === 'All' || blog.category === category;
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='bg-white'>
      <div className="-mt-12 mb-6 bg-white">
        <h2 className="text-4xl bg-gradient-to-r from-black via-orange-500 to-orange-500 bg-clip-text text-transparent">
          Featured Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 bg-white">
        {filtered.length > 0 ? (
          filtered.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <div className="relative group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-80">
                {/* Image container */}
                <div className="relative w-[95%] h-full mx-auto overflow-hidden">
                 
                 <div className="relative w-[95%] h-full mx-auto overflow-hidden folded-image">
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>



                  {/* Bottom-left overlay text box with flip effect */}
                  <div className="absolute bottom-[-12px] left-[-12px] w-11/12 h-36 perspective">
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      {/* Front Side */}
                      <div className="absolute inset-0 bg-white text-black p-4 rounded-lg backface-hidden">
                        <span className="text-xs uppercase tracking-wide font-semibold text-black opacity-80">
                          {blog.category}
                        </span>
                        <h2 className="text-md font-bold mt-1 line-clamp-2">
                          {blog.title}
                        </h2>
                      </div>

                      {/* Back Side */}
                     <div className="absolute inset-0 bg-transparent text-black p-4 transform rotate-y-180 backface-hidden group-hover:bg-black/70 hover:text-white transition-colors duration-500">

  <span className="text-xs uppercase tracking-wide font-semibold opacity-90">
    {blog.category}
  </span>
  <h2 className="text-md font-bold mt-1 line-clamp-2">
    {blog.title}
  </h2>
</div>

                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogCards;
