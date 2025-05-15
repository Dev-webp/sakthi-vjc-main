import React from "react";
import Image from 'next/image';
const Sloveniavisit = () => {
    return (
        <div className="flex flex-col gap-6">
          
          <section className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Slovenia Tourist Visa – Explore Europe’s Hidden Gem with  <span className="text-orange-500">VJC Overseas</span></h1>

            <p>Discover Slovenia – Where Alpine Beauty Meets Medieval Charm</p>
             <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
                                                                                        
                                                                                          <div className="flex-shrink-0 mx-auto lg:mx-0">
                                                                                            <Image
                                                                                              src="/sloveniavisitcontent.jpg"
                                                                                              alt="Image description"
                                                                                              width={500} // Replace with your image's actual width
                                                                                              height={300}
                                                                                              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg" 
                                                                                            />
                                                                                           </div>
                                                                                           <p className="mb-4">
              Nestled in the heart of Europe, Slovenia is a breathtaking destination known for its lush green landscapes, alpine lakes, fairytale castles, and charming towns. 
              From the glistening waters of Lake Bled to the vibrant capital city of Ljubljana, Slovenia offers a peaceful yet culturally rich experience that captivates every traveller.
              As part of the Schengen Zone, a Slovenia tourist visa allows visitors to explore not just this stunning country but also travel across 26 Schengen countries seamlessly.
            </p>
            </div>
          </section>
    
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Slovenia Tourist Visa Overview</h2>
            <p>A Slovenia Visit Visa (Type C - Short Stay Schengen Visa) is ideal for tourists planning to explore the country for up to 90 days within a 180-day period.</p>
            <ul className="list-disc ml-6">
              <li><strong>Visa Validity:</strong> Up to 90 days within a 180-day period</li>
              <li>Valid for travel across all Schengen countries</li>
            </ul>
          </section>
    
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Slovenia Tourist Visa Fees:</h2>
            <ul className="list-disc ml-6">
              <li>Adults (12 years and above): €80</li>
              <li>Children (6 to 11 years): €40</li>
              <li>Children under 6: Free</li>
              <li>VFS service charges may apply depending on the country of application</li>
            </ul>
          </section>
    
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Documents Required for Slovenia Visit Visa</h2>
            <p>To ensure a smooth visa approval process, prepare the following documents:</p>
            <ul className="list-disc ml-6">
              <li>Valid Passport (Issued within last 10 years, valid at least 3 months after your intended departure)</li>
              <li>Completed Visa Application Form</li>
              <li>Recent Passport-sized Photos (As per Schengen specifications)</li>
              <li>Travel Insurance (Minimum coverage of €30,000, valid in Schengen countries)</li>
              <li>Proof of Accommodation (Hotel bookings or invitation letter from host)</li>
              <li>Proof of Travel Itinerary (Round-trip flight reservations or travel plan)</li>
              <li>Financial Proof (Recent bank statements showing sufficient funds)</li>
              <li>Cover Letter (Explaining purpose and duration of visit)</li>
              <li>Employment Proof (For employees: letter from employer; for self-employed: business registration)</li>
              <li>Visa Fee Payment Receipt</li>
            </ul>
            <p className="italic">Note: Additional documents may be requested based on your individual application or embassy requirements.</p>
          </section>
    
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Top Tourist Attractions in Slovenia</h2>
            <p>Whether you're a nature lover, a history enthusiast, or a foodie, Slovenia offers something unforgettable for every visitor:</p>
            <ul className="list-disc ml-6">
              <li><strong>Lake Bled:</strong> A postcard-perfect glacial lake with a picturesque church on an island and a medieval castle overlooking the water.</li>
              <li><strong>Ljubljana:</strong> The charming capital, famous for its pedestrian-friendly old town, dragon bridge, vibrant markets, and café culture.</li>
              <li><strong>Triglav National Park:</strong> Home to the majestic Julian Alps and the emerald-green Soča River, ideal for hiking, rafting, and nature lovers.</li>
              <li><strong>Postojna Cave & Predjama Castle:</strong> An awe-inspiring network of underground caves and a fairytale castle built dramatically into a cliff face.</li>
              <li><strong>Piran:</strong> A beautiful coastal town on the Adriatic Sea known for its Venetian architecture and seafood delights.</li>
            </ul>
          </section>
    
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Why Choose VJC Overseas for Your Slovenia Visa Assistance?</h2>
            <p>At VJC Overseas, we provide end-to-end visa assistance with:</p>
            <ul className="list-disc ml-6">
              <li>Accurate document checklist tailored to your profile</li>
              <li>Expert application form filling and appointment booking</li>
              <li>Mock interview support (if required)</li>
              <li>Regular follow-ups and updates until visa decision</li>
            </ul>
            <p>We ensure a hassle-free, high-success rate visa experience so you can focus on planning your adventure.</p>
          </section>
    
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Start Your Slovenian Journey Today!</h2>
            <p>
              Dreaming of wandering through alpine valleys, sipping coffee by cobbled streets, or sailing on Lake Bled? 
              Let VJC Overseas make your Slovenia visit a reality with expert visa assistance.
            </p>
            <p>Contact us today to begin your application and get personalized guidance from our visa consultants.</p>
          </section>
    
        </div>
      );


}

export default Sloveniavisit;