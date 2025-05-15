'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CalForm = ({
  country = 'Canada',
  title = 'Check Your PR Eligibility Instantly',
  description = 'Curious if you qualify for Permanent Residency? Use our smart, easy-to-use PR Eligibility Calculator to get your score in just a few clicks!',
  ageOptions = ['under 18 years', '18-35 years', '36-45 years', '46+ years'],
  qualificationOptions = ['PhD', 'Master`s Degree', 'Graduate', 'Diploma', 'Other'],
  experienceOptions = ['1 year', '2-3 years', '4-5 years', '6+ years'],
  englishOptions = ['Superior English', 'Proficient English', 'Competent English', 'None']
}) => {
  const [formData, setFormData] = useState({
    age: '',
    experience: '',
    qualification: '',
    englishskills: '',
    country,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.text();
      if (res.ok) {
        setShowPopup(true);
        setFormData({
          age: '',
          experience: '',
          qualification: '',
          englishskills: '',
          country,
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data || 'Something went wrong');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const radioGroup = (label, name, options, required = false) => (
    <div>
      <label className="block text-xl text-blue-900 font-bold mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex flex-wrap gap-4">
        {options.map((opt, idx) => (
          <div
            key={idx}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                [name]: prev[name] === opt ? '' : opt
              }))
            }
            className={`inline-flex items-center gap-2 px-4 py-2 border w-36 h-12 cursor-pointer
              ${formData[name] === opt ? 'bg-orange-600 text-white border border-black' : 'bg-white text-gray-600 border-gray-300'}
              hover:border-orange-600 hover:text-black transition`}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 100, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="-mt-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-orange-500 to-blue-600 mb-4">
            {title}
          </h2>
          <p className="text-lg text-black text-center mb-10 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-5xl p-10 space-y-8 mt-20 md:mt-28 text-left">
        {radioGroup('Select Your Age', 'age', ageOptions, true)}
        {radioGroup('Qualification', 'qualification', qualificationOptions, true)}
        {radioGroup('Work Experience', 'experience', experienceOptions, true)}
        {radioGroup('English Skills', 'englishskills', englishOptions, true)}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 h-10 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 h-10 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-2 h-10 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="p-2 border border-gray-300 w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-600 to-black hover:bg-gray-800 text-white font-semibold px-8 py-3 text-lg transition-all"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Get My Results'}
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md text-center shadow-xl">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Thank you!</h3>
            <p className="text-lg mb-6">Our immigration team will contact you soon.</p>
            <button
              className="px-6 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CalForm;
