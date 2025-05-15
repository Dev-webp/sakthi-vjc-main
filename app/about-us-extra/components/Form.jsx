import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mcqAnswers, setMcqAnswers] = useState([]);

  // Define country-specific questions and options
  const mcqQuestions = {
    Germany: [
      { question: "Select your age", options: ["Below 18", "18 to 35", "35 to 40", "Above 40"] },
      { question: "Qualification", options: ["Is your qualification and University fully recognized", "Is your qualification and University Partially recognized"] },
      {question:"Relevant Work Experience", options:["5 years in the last 7 years","2 Years in the last 5 years"] },
      {question:"German Language Proficiency", options:["A2 level","B1 Level","B2 and above"] },
      {question:"English Language Proficiency: C1 Level", options:["Yes","No"] },
      {question:"Previous Legal Stay in Germany", options:["Yes","No"] },
      {question:"Spouse Qualifying", options:["Yes","No"] },
    ],
    Canada: [
      { question: "Your age group", options: ["Below 18", "18 - 35", "36", "37","38","39","40","41","42","43","44","45","46","47 or more"] },
      { question: "Your years of work experience", options: ["1 year", "2 year", "3 year", "4 year","5 year","6 year","7 or more Years"] },
      {question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary"] },
      {question:"Your English Proficiency", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
      {question:"Your French Proficiency", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
      {question:"Are you married?", options:["Yes","No"] },
      {question:"Have you worked in Canada for 1 or more years?", options:["Yes","No"]},
      {question:"Have you Studied in Canada for 2 or more years?", options:["Yes","No"]},
      {question:"Do you have an adult relative in Canada on a PR visa/is a citizen?", options:["Yes","No"]},
      // {question:}
    ],
    USA: [
      { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
      {question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
      {question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
      {question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
      {question:"Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?", options:["YES","NO"]}
    ],
    
    UK: [
      { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
      {question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
      {question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
      {question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
      {question:"Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?", options:["YES","NO"]}
    ],
    Australia:[
      { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
      { question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
      {question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
      {question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
    ],
    
    Newzealand: [
      { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
      {question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
      {question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
      {question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
      {question:"Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?", options:["YES","NO"]}
    ],
    
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setMcqAnswers(Array(mcqQuestions[country].length).fill(''));
    setCurrentStep(1);
  };

  const handleMcqChange = (index, answer) => {
    const updatedAnswers = [...mcqAnswers];
    updatedAnswers[index] = answer;
    setMcqAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentStep === 0 && selectedCountry) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep < mcqQuestions[selectedCountry].length) {
      if (mcqAnswers[currentStep - 1]) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(0);
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { name, email, phone, age, message, selectedCountry, mcqAnswers };
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setPopupVisible(true);
    
        // Hide popup after 3-4 seconds
        setTimeout(() => {
          setPopupVisible(false);
        }, 3000);
      }
    
    } catch (error) {
      console.error('Error:', error.message);
      setFormStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-start mt-28 pt-6 sm:ml-4 md:ml-8 lg:ml-12">
    {/* Country Selection Step */}
    <h1 className="text-lg sm:text-2xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-500 text-center fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 z-10">
  Select a Country to Live, Work and Settle in Abroad
</h1>


    {currentStep === 0 ? (
      <div className='-mt-32'>
        <h3 className="text-xl font-semibold">Select a Country for free Evaluation</h3>
        <div className="flex flex-wrap gap-3 ">
          {Object.keys(mcqQuestions).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)} // Just select, don't advance step
              className={`px-3 py-3 border border-orange-700 hover:bg-gray-700 h-12  
                ${selectedCountry === country ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            >
              {country}
            </button>
          ))}
        </div>
  
        {/* Next button appears only if a country is selected */}
        {selectedCountry && (
          <button
            className={`px-6 py-3 h-12 w-28 mt-4 text-white flex items-center justify-center gap-2 transition duration-300 ease-in-out 
              ${selectedCountry ? 'bg-orange-500 hover:bg-gray-900' : 'bg-orange-500 hover:bg-orange-600'}`}
            onClick={handleNext} // Now Next button will move to the next step
          >
            Next <span className="text-white text-2xl mb-1">›</span>
          </button>
        )}
      </div>
    ) : currentStep <= mcqQuestions[selectedCountry].length ? (
      // MCQ Questions Step
      <div className='-mt-32'>
        <h3 className="text-xl font-semibold">
          {mcqQuestions[selectedCountry][currentStep - 1].question}
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {mcqQuestions[selectedCountry][currentStep - 1].options.map((option) => (
            <button
              key={option}
              onClick={() => handleMcqChange(currentStep - 1, option)}
              className={`px-3 py-3 h-12 border border-slate-700 ${mcqAnswers[currentStep - 1] === option ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between w-[300px] px-4">
  <button 
    className="px-6 py-3 h-12 w-28 bg-gray-500 text-white flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:bg-orange-600" 
    onClick={handlePrevious}
  >
    <span className="text-white text-2xl mb-1">‹</span> Back
  </button>
  
  {/* Next Button */}
  <button
    className={`px-6 py-3 h-12 w-28 text-white flex items-center justify-center gap-2 transition duration-300 ease-in-out 
      ${mcqAnswers[currentStep - 1] ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'}`}
    onClick={handleNext}
    disabled={!mcqAnswers[currentStep - 1]} // Disable the button if no answer is selected
  >
    Next <span className="text-white text-2xl mb-1">›</span>
  </button>
</div>

      </div>
    ) : (
      // Handle other steps or form submission

  
     
        // User Form Step
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-start -mt-6 md:ml-8 lg:ml-10">
         
{/* <h1 className="text-3xl font-bold text-center text-black mb-8">
  Complete the last step and you'll be on your way to the next exciting journey.
</h1> */}

  <div className="space-y-6">
    {/* Name, Email, and Phone on one line */}
    <div className="flex space-x-4">
      <div className="w-full sm:w-1/3">
        <label className="block text-gray-700 font-medium">Your Name</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-orange-200"
        />
      </div>

      <div className="w-full sm:w-1/3">
        <label className="block text-gray-700 font-medium">Your Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-orange-200"
        />
      </div>

      <div className="w-full sm:w-1/3">
        <label className="block text-gray-700 font-medium">Phone</label>
        <input 
          type="tel" 
          placeholder="Enter your phone number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-orange-200"
        />
      </div>
    </div>

    {/* Age and Message on the next line */}
    <div className="flex space-x-4">
      <div className="w-full sm:w-1/3">
        <label className="block text-gray-700 font-medium">Age</label>
        <input 
          type="number" 
          placeholder="Enter your age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required 
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-orange-200"
        />
      </div>

      <div className="w-full sm:w-1/2">
        <label className="block text-gray-700 font-medium">Your Message</label>
        <textarea 
          placeholder="Write your message here..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-orange-200 resize-none h-24"
        />
      </div>
    </div>
  </div>

  {/* Back and Submit Buttons */}
  <div className="flex justify-center gap-x-6 sm:gap-x-8 md:gap-x-28 lg:gap-x-96"> {/* Centered on smaller screens and gap on different screen sizes */}
  <button 
    className="px-6 py-3 h-12 w-28 bg-gray-500 text-white flex items-center justify-center transition duration-300 ease-in-out hover:bg-orange-600 mr-4" 
    onClick={handlePrevious}
  >
    <span className="text-white text-2xl mb-1">‹</span> Back
  </button>
  
  <button type="submit" className="px-6 py-3 h-12 w-28 bg-orange-500 text-white flex items-center transition duration-300 ease-in-out hover:bg-orange-600" disabled={loading}>
    {loading ? 'Submitting...' : 'Submit'}
  </button>
  

</div>



</form>

      




      )}
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
