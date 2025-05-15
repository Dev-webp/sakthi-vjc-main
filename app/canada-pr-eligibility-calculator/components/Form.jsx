"use client"

import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    qualification: '',
    englishfluent: '',
    experience: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    country: '', // Removed default to force user to choose or you can set 'Canada'
  });

  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => setPopupVisible(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [popupVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for button fields
    const { age, qualification, experience, englishfluent } = formData;
    if (!age || !qualification || !experience || !englishfluent) {
      alert('Please select Age, Qualification, Experience, and English level.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          age: '',
          qualification: '',
          englishfluent: '',
          experience: '',
          name: '',
          email: '',
          phone: '',
          message: '',
          country: '', // reset to blank or default if needed
        });
        setPopupVisible(true);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setFormStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const setField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderOptions = (field, label, options) => (
    <div>
      <p className="font-semibold mb-2">{label}</p>
      <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`px-4 py-2 border w-36 transition ${
              formData[field] === opt
                ? 'bg-orange-500 text-white'
                : 'borer border-gray-400 hover:bg-orange-500'
            }`}
            onClick={() => setField(field, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto mb-10 px-4" style={{ fontFamily: "Times New Roman, serif" }}>
      <h2 className="text-3xl font-semibold text-center text-gray-500 mb-4">
       
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {renderOptions('age', 'Select Your Age', ['18 years', '18-35 years', '36-45 years', '46+ years'])}
        {renderOptions('qualification', 'Select Your Qualification', ['PhD', 'Master`s Degree', 'Graduate', 'Diploma', 'Other'])}
        {renderOptions('experience', 'Select Your Experience', ['1-2 yrs', '3-5 yrs', '5-7 yrs', '7+ yrs'])}
        {renderOptions('englishfluent', 'English Skills', ['Basic', 'Intermediate', 'Advanced', 'Fluent'])}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
            required
            value={formData.name}
            onChange={(e) => setField('name', e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            required
            value={formData.email}
            onChange={(e) => setField('email', e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-2 border rounded"
            required
            maxLength={10}
            minLength={10}
            pattern="\d*"
            value={formData.phone}
            onChange={(e) => setField('phone', e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            className="p-2 border rounded"
            required
            value={formData.country}
            onChange={(e) => setField('country', e.target.value)}
          />
          <textarea
            rows={2}
            placeholder="Message"
            className="p-2 border rounded resize-none"
            value={formData.message}
            onChange={(e) => setField('message', e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/6 md:w-2/12 bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            disabled={loading}
          >
            {formStatus === 'success' ? 'Form Submitted!' : loading ? 'Submitting...' : 'Get My Result'}
          </button>
        </div>
      </form>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-xl font-semibold">Submission received, we’ll get back to you shortly!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
