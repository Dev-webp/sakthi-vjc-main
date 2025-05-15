"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Formleft from "../Formleft/Formleft";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => setPopupVisible(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [popupVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupVisible(true);

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setExperience("");
    setQualification("");
    setCountry("");
    setMessage("");
  };

  return (
    <section
      ref={ref}
      className="w-full  py-10 px-4 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/assets/canadapr/formbg1.png)" }}
    >
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-xl overflow-hidden flex flex-col-reverse md:flex-row">
        {/* Left content with animation */}
        <div className="w-full md:w-1/2">
          <Formleft inView={inView} />
        </div>

        {/* Right Form with animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 p-6 md:p-10 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300"
        >
          <h2 className="text-2xl md:text-3xl px-4 font-bold text-center text-sky-800 mb-10">
            Sign up <span className="text-red-600">&</span> Get{" "}
            <span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800"
              style={{
                animation: "blink 1s infinite",
                animationDelay: "0.5s",
              }}
            >
              CANADA
            </span>{" "}
            Assessment
            <style jsx>{`
              @keyframes blink {
                50% {
                  opacity: 0;
                }
              }
            `}</style>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10 text-gray-900">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              maxLength={10}
              minLength={10}
              pattern="\d{10}"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                setPhone(onlyNums);
              }}
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <input
              type="number"
              name="age"
              placeholder="Your Age"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <select
              name="experience"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              rows={6}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-semibold transition-all duration-200 shadow-md"
            >
              Submit for Free Assessment
            </button>
          </form>

          {popupVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full text-center">
                <p className="text-xl font-semibold">
                  Submission received, we’ll get back to you shortly!
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
