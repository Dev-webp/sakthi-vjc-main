import React from "react";
import Image from "next/image";


const Tier4visa =() =>{
    return (
        <div
          style={{
            position: "relative",
            padding: "10px",
            boxSizing: "border-box",
            backgroundColor: "white",
            fontFamily: "Times New Roman",
            overflow: "hidden",
          }}
        >
          <section>
            <h1 className="text-2xl font-bold mb-4">
              UK Tier 4 Student Visa – Study in the UK with<span className="text-orange-500">VJC Overseas</span>
            </h1>
            <p>
              Your Gateway to World-Class Education in the United Kingdom
              <br />
              Dreaming of studying in the UK? The UK Tier 4 Student Visa is your ticket to experiencing top-ranked universities, global exposure, and career-defining opportunities. At VJC Overseas, we specialize in guiding Indian students through the complete UK student visa process – making your overseas education journey seamless and successful.
            </p>
      
            <hr />
      
            <h2 className="text-xl mt-3 font-bold">What is the UK Tier 4 Student Visa?</h2>
            <p>
              The UK Tier 4 (General) Student Visa, now known as the Student Route Visa, allows international students to live and study in the UK for courses longer than 6 months. This visa is essential if you're planning to pursue undergraduate, postgraduate, or doctoral degrees at recognized UK institutions.
            </p>
           
            <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
                                        
                                          <div className="flex-shrink-0 mx-auto lg:mx-0">
                                            <Image
                                              src="/uktier4.png"
                                              alt="Image description"
                                              width={500} // Replace with your image's actual width
                                              height={300}
                                              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
                                            />
                                          </div>
                                         
                                          </div>
      
            <h3 className="font-semibold mt-2">✅ Eligibility:</h3>
            <ul>
              <li>Confirmation of Acceptance for Studies (CAS) from a licensed UK education provider</li>
              <li>Proof of English language proficiency (IELTS/TOEFL/PTE)</li>
              <li>Financial evidence to support tuition fees and living costs</li>
              <li>Valid passport and supporting documents</li>
            </ul>
      
            <p><strong>Visa Duration:</strong> Course length + 4 months post-study period</p>
            <p><strong>Visa Extensions:</strong> Possible for further studies or switching to a Graduate Route visa</p>
      
            <hr />
      
            <h2 className="text-xl mt-3 font-bold">Top Benefits of the UK Tier 4 Student Visa for Indian Students</h2>
            <ul>
              <li>Study at Globally Ranked Universities like Oxford, Cambridge, and Imperial College London</li>
              <li>Post-Study Work Opportunities through the Graduate Route (2 years or 3 for PhDs)</li>
              <li>Part-Time Work: 20 hours/week during term & full-time during holidays</li>
              <li>Pathway to Permanent Residency (ILR) through work visas after graduation</li>
              <li>Spouse & Dependent Visa Options for postgraduate students</li>
            </ul>
      
            <hr />
      
            <h2 className="text-xl mt-3 font-bold">Cost of Living in the UK for Indian Students</h2>
            <div>
              <table border="1">
                <thead>
                  <tr>
                    <th>Expense Type</th>
                    <th>Monthly Estimate (GBP)</th>
                    <th>Monthly Estimate (INR)*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Accommodation</td>
                    <td>£400 - £800</td>
                    <td>₹42,000 – ₹84,000</td>
                  </tr>
                  <tr>
                    <td>Food & Groceries</td>
                    <td>£150 - £250</td>
                    <td>₹15,000 – ₹26,000</td>
                  </tr>
                  <tr>
                    <td>Transport</td>
                    <td>£50 - £100</td>
                    <td>₹5,000 – ₹10,000</td>
                  </tr>
                  <tr>
                    <td>Utilities & Internet</td>
                    <td>£60 - £100</td>
                    <td>₹6,000 – ₹10,000</td>
                  </tr>
                  <tr>
                    <td>Miscellaneous</td>
                    <td>£100 - £200</td>
                    <td>₹10,000 – ₹21,000</td>
                  </tr>
                </tbody>
              </table>
              <p><strong>Total Estimate: £800 - £1,400 / ₹85,000 – ₹1.5 Lakhs per month</strong></p>
              <p><strong>*Exchange rates may vary</strong></p>
              <p><strong>Pro Tip:</strong> Studying in cities like Manchester, Leeds, or Glasgow can be more affordable than London.</p>
            </div>
      
            <hr />
      
            <h2 className="text-xl mt-3 font-bold">Essential Tips for Indian Students in the UK</h2>
            <ul>
              <li>Open a UK Bank Account for easier financial management</li>
              <li>Get a Student Oyster Card for discounted travel</li>
              <li>Join Indian Student Societies for support and cultural connections</li>
              <li>Stay Visa-Compliant: Attend classes and meet visa conditions</li>
              <li>Health Insurance: IHS gives access to NHS services</li>
            </ul>
      
            <hr />
      
            <h2 className="text-xl mt-3 font-bold">Why Choose VJC Overseas for Your UK Student Visa?</h2>
            <ul>
              <li>1-on-1 Visa Guidance & Documentation Support</li>
              <li>FREE University & Course Selection Counseling</li>
              <li>100% Visa Application Filing Assistance</li>
              <li>Mock Interviews & SOP Writing Help</li>
              <li>Post-Visa Services: Forex, Accommodation, Travel Assistance</li>
            </ul>
            <p>We’ve helped thousands of Indian students secure their UK student visas and start a new life abroad with confidence. You could be next!</p>
      
            <hr />
      
            <h2 className="text-xl mt-3 font-bold">Let’s Make Your UK Dream a Reality</h2>
            <p>
              Connect with VJC Overseas, India’s trusted UK student visa consultant.
              <br />
              <strong>Visit Us:</strong> Hyderabad | Bengaluru
              <br />
              <strong>Call Now:</strong> +91-9160449000
              <br />
              <strong>Email:</strong> info@vjcoverseas.com
            </p>
            <p><strong>Apply for your UK Tier 4 Student Visa with VJC Overseas – Your Future Starts Here.</strong></p>
          </section>
        </div>
      );
      

}

export default Tier4visa;