import React, { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null); // Stores success or error message
  const [loading, setLoading] = useState(false); // State to track loading status
  const [popupVisible, setPopupVisible] = useState(false); // State for showing the success popup

  // Close the success popup after 4 seconds
  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => {
        setPopupVisible(false);
      }, 4000);

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [popupVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when form is being submitted

    const formData = {
      name,
      email,
      phone,
      age,
      message,
    };

    try {
      const response = await fetch('/signup-free-assistance/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setMessage('');
        setPopupVisible(true); // Show success popup
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setFormStatus('error');
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <div className="">
      {/* <h2 className="text-3xl font-bold text-center uppercase text-gray-800 mt-0 lg:mt-4">Sign up & Get Free Assistance</h2> */}

      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-2 mt-4 lg:mt-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            pattern="\d*"
            title="Please enter a valid phone number"
            maxLength={10}
            minLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="age" className="sr-only">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Your Age"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-center mt-4">
  <button
    type="submit"
    className="w-72 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-saffron transition-all duration-200 shadow-lg"
    disabled={loading} // Disable the button while loading
  >
    {formStatus === 'success' ? 'Form Submitted!' : loading ? 'Submitting...' : 'Submit'}
  </button>
</div>

      </form>

      {/* Success Popup */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-xl font-semibold">Submission received, we’ll get back to you shortly!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
