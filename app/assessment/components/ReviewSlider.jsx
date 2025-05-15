import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ReviewsSlider = () => {
  const reviews = [
    {
      name: 'Vishu Vishwambar',
      rating: 5,
      text: 'We are delighted to announce that my parents USA B2 visa was approved we could not have done it without the great help from VJC Overseas Consultancy. Their staff guided us easily through every stage of the process, was professional, knowledgeable, and Their knowledge guaranteed a flawless and successful result from drafting the paperwork to interview advice. Many thanks to VJC Overseas for enabling this trip to be unforgettable and free from stress! Strongly suggest their services to anyone looking for help with visas. 🌟',
      photo: '/vishu.jpg',
      fontFamily: 'serif',
    },
    {
      name: 'Harikishan Nagireddy',
      rating: 5,
      text: 'I’m very grateful to VJC Overseas, Veni and Praharshika for their outstanding support with my mother’s US B1 visa application. Their professionalism and guidance made the entire process smooth and stress-free.The mock interview conducted by Veni was especially helpful, boosting my mother’s confidence and preparing her well for the actual interview. Thanks to their expertise, her visa was approved without any issues.highly recommend VJC Overseas for their reliable and efficient visa assistance. Thank you for your excellent service!',
      photo: '/harikishan.jpg',
      fontFamily: 'sans-serif',
    },
    {
      name: 'Anusha prabhu',
      rating: 5,
      text: 'Exceptional service! We consulted Bhanu ma’am for our Singapore visa, and she ensured we had it in just three days! From start to finish, she was incredibly professional, efficient, and thorough. She handled everything on our behalf, making the entire process smooth and hassle-free. Her attention to detail and commitment to customer satisfaction truly set her apart. Highly recommend her services to anyone looking for a seamless visa experience!',
      photo: '/anusha.jpg',
      fontFamily: 'cursive',
    },
    {
      name: 'Srikar Nikhil Vanama',
      rating: 5,
      text: 'I had an excellent experience with their services for my parents B1/B2 visa application. They provided comprehensive support, from filling out the DS-160 form to booking the visa appointment at our preferred location. The training they offered before the visa interview was also invaluable. Their responsiveness was top-notch; I could easily reach them via WhatsApp, and they were always ready to assist with any queries. Overall, the process was stress-free, as they took care of every detail, making it a seamless experience. Highly recommend their services for anyone seeking hassle-free visa assistance.',
      photo: '/Srikar-Nikhil.jpg',
      fontFamily: 'monospace',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full bg-white py-12" style={{fontFamily:'Times new Roman'}}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Clients Review
        </h2>
        <div className="flex justify-center items-center mb-12 ">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>

        <p className="text-xl text-center text-black mb-8 font-bold ">
          Our Lovely Clients Get Helped From Our Company
        </p>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg mb-6 border border-orange-500 h-[400px]">
              <div className="flex justify-center w-full mb-4" style={{ marginBottom: '20px' }}>
                <Image
                  src={review.photo}
                  alt={review.name}
                  width={96} // Adjust width (px)
                  height={96} // Adjust height (px)
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              {/* <h3 className="font-semibold text-xl text-gray-700 mb-2">{review.name}</h3>
              <div className="text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}{'★'.repeat(5 - review.rating)}
              </div> */}
              <div className="px-4 text-gray-600" style={{ fontFamily: review.fontFamily, marginBottom:'20px' }}>
                <p>{review.text}</p>
              </div>
              
              <div className="text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}{'★'.repeat(5 - review.rating)}
              </div>
              <h3 className="text-xl text-gray-700 mb-2 font-bold">{review.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsSlider;
