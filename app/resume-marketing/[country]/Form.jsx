import React, { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => {
        setPopupVisible(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [popupVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      age,
      experience,
      qualification,
      country,
      message,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setExperience('');
        setQualification('');
        setCountry('');
        setMessage('');
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

  return (
    <div
      className="bg-white p-6 py-4 rounded-lg shadow-2xl max-w-md mx-auto w-full mb-6 shadow-gray-500"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mt-0">
        Sign up <span style={{ color: 'rgb(220, 4, 4)' }}> &</span> Get Free Assessment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          pattern="\d*"
          maxLength={10}
          minLength={10}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <input
          type="number"
          name="age"
          placeholder="Your Age"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          name="experience"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Select Experience</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-7 years">5-7 years</option>
          <option value="7+ years">7+ years</option>
        </select>

        <select
          name="qualification"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        >
          <option value="">Select your qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="Ph.D.">Ph.D.</option>
          <option value="Diploma">Diploma</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="2"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            disabled={loading}
           className="w-full bg-gray-950 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg mt-2 sm:mt-0 -mb-2 sm:mb-0"
          >
            {formStatus === 'success' ? 'Form Submitted!' : loading ? 'Submitting...' : 'Submit for Free Assessment'}
          </button>
        </div>
      </form>

      {/* Success Popup */}
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
