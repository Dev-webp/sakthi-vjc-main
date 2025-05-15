import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
// import Form from '../../Form';  // Import your Form component

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to control modal visibility

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center p-0 md:p-5 lg:p-5 mt-0 lg:mt-4 tablet:mt-10">
      <Link href='/assessment'>
      <button
        className="bg-saffron text-white py-3 px-10 rounded-full uppercase text-xl font-semibold border border-black italic hover:bg-black hover:text-white transition-all flex items-center space-x-2"
        onClick={openModal}  // Open the modal on button click
      >
        <span>Schedule Your Consultation Today</span>
        {/* <FaArrowRight className="text-white text-xl" /> */}
      </button>
      </Link>

      {/* Popup Modal */}
      
    </div>
  );
};

export default Book;
