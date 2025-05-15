import React from 'react';
import Image from 'next/image';

const highlight = {
  color: 'orange',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontFamily: 'Times New Roman, serif',
  fontSize: '18px',
  lineHeight: '1.8',
  marginBottom: '20px',
};

const DubaiWorkPermit = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 className='text-2xl font-bold md:flex justify-center' >
        Dubai Work Permit Visa – <span style={highlight}>VJC Overseas</span>
      </h1>

      <p className='mt-3 text-base'>
        Welcome to <span style={highlight}>VJC Overseas</span>, your trusted partner for obtaining a Dubai Work Permit Visa. 
        If you’re seeking to enhance your career prospects, experience a dynamic work environment, and explore a thriving city 
        with unparalleled opportunities, a Dubai work visa is your gateway to success.
      </p>

      <h2 className='text-xl font-bold mt-3'>Why Choose Dubai for Work?</h2>
      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
              
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <Image
                    src="/dwvisaimg.webp"
                    alt="Image description"
                    width={500} // Replace with your image's actual width
                    height={300}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
                  />
                </div>
      <p >
        Dubai is one of the world’s fastest-growing economies, attracting skilled professionals from every corner of the globe. 
        The city offers an exciting blend of modernity, culture, and business innovation. With its strategic location, 
        world-class infrastructure, and no income tax policies, Dubai presents an ideal destination for foreign workers.
        A Dubai Work Permit Visa enables you to tap
      </p>
      </div>
      <p> into this global hub and unlock countless career and personal growth opportunities. </p>

      <h2 className='text-xl font-bold mt-3' >Benefits of Dubai Work Permit Visa</h2>
      <ul className='list-disc'>
        <li><strong>No Income Tax:</strong>One of the biggest perks of living and working in Dubai is the tax-free income. Dubai’s tax-free environment allows professionals to keep 100% of their earnings, offering substantial savings compared to other countries. </li>
        <li><strong>International Work Experience:</strong> Dubai’s lucrative salary packages make it an attractive destination for job seekers. Salaries in Dubai are competitive and often come with additional benefits such as housing allowances, transportation allowances, and more.</li>
        <li><strong>High Earning Potential:</strong> Dubai’s lucrative salary packages make it an attractive destination for job seekers. Salaries in Dubai are competitive and often come with additional benefits such as housing allowances, transportation allowances, and more.</li>
        <li><strong>World-Class Healthcare & Education:</strong> Dubai offers high-quality healthcare services, and expats can also benefit from excellent schooling facilities for their children. Companies often cover medical and schooling expenses, making Dubai an even more appealing choice for families</li>
        <li><strong>Safe and Secure Environment:</strong> Dubai is known for its low crime rates, safety, and strict law enforcement. It is one of the most secure cities for expatriates, offering peace of mind for you and your family. </li>
        <li><strong>Access to Thriving Industries:</strong> Dubai is a major global business hub, with flourishing industries in sectors like construction, finance, tourism, technology, healthcare, and trade. By securing a Dubai Work Permit Visa, you position yourself in the heart of these booming industries.</li>
      </ul>

      <h2 className='text-xl font-bold mt-3' >Salary Scale in Dubai for Foreign Workers</h2>
      <ul className='list-disc' >
        <li>Software Engineers & IT Professionals: AED 10,000 – AED 25,000</li>
        <li>Healthcare Professionals: AED 12,000 – AED 30,000</li>
        <li>Construction & Engineering: AED 8,000 – AED 20,000</li>
        <li>Accountants & Analysts: AED 12,000 – AED 22,000</li>
        <li>Sales & Marketing: AED 8,000 – AED 18,000</li>
      </ul>
      <p>
      Additional benefits, including housing allowances and performance bonuses, often boost the overall compensation package. Furthermore, expats in Dubai often receive free or subsidized medical insurance, paid annual leave, and more. 
      </p>

      <h2 className='text-xl font-bold mt-3'>Living in Dubai – A Lifestyle Like No Other</h2>
      <ul className='list-disc'>
        <li><strong>High Quality of Life:</strong> Enjoy access to top-notch shopping malls, five-star restaurants, luxury spas, and entertainment venues. Dubai’s vibrant lifestyle offers something for everyone, from exhilarating desert safaris to world-famous beaches.</li>
        <li><strong>Cultural Diversity:</strong> Dubai is a melting pot of cultures and ethnicities, and expats are welcomed with open arms. This cosmopolitan city offers a rich cultural experience with events, festivals, and a variety of international cuisines.</li>
        <li><strong>Modern Infrastructure:</strong> Dubai is renowned for its state-of-the-art infrastructure, including the Dubai Metro, taxis, and ride-hailing services. The city’s well-connected transport system makes commuting effortless</li>
        <li><strong>Work-Life Balance:</strong>Dubai promotes a healthy work-life balance, with ample leisure opportunities, including beach resorts, luxury malls, and the famous Dubai Marina. </li>
      </ul>

      <h2 className='text-xl font-bold mt-3' >Advantages of Dubai Work Permit Visa with <span className='text-orange-600 font-bold'>VJC Overseas</span>?</h2>
      <ul className='list-disc'>
        <li>Expert consultation on visa process and documentation.</li>
        <li>Fast and smooth application handling.</li>
        <li>Personal help with housing, healthcare, and settling in.</li>
        <li>Legal support to stay compliant with Dubai regulations.</li>
      </ul>

      <h2 className='text-xl font-bold mt-3' >Get Your Dubai Work Permit Visa Today!</h2>
      <p>
        Embark on your professional journey in Dubai with confidence. <span style={highlight}>VJC Overseas</span> provides 
        tailored support to ensure your Dubai Work Permit Visa process is seamless. Reach out now to begin your exciting future!
      </p>
    </div>
  );
};

export default DubaiWorkPermit;
