import React from 'react'
import Image from 'next/image'

const Newzetourist = () => {
    return (
        <div className="m-2 p-2" style={{
            fontFamily: "Times New Roman", backgroundColor: 'white', position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{ marginBottom: '5%' }}>
                <h3 className="text-2xl mt-4 font-semibold text-black text-center">
                    New Zealand Tourist Visa  - VJC Overseas<span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
                </h3>
            </div>
            <h3 className="text-blue-500 text-center m-2 font-bold text-lg mb-6">
            Explore New Zealand: Your Gateway to Adventure
            </h3>

            <p className='mb-6'>New Zealand, with its breath taking landscapes, vibrant culture, and welcoming locals, is one of the world’s top destinations for travellers. Whether you're here to explore the stunning beaches, majestic mountains, or immerse yourself in the rich Maori heritage, a New Zealand Tourist Visa is the first step toward making your dream vacation come true.</p>
            <p className='mb-6'>At VJC Overseas, we make the process of obtaining your New Zealand Tourist Visa seamless and hassle-free. From the moment you reach out to us, our expert team will guide you through the application process, ensuring you meet all the necessary requirements for a successful visa approval.</p>
           
            <div className="flex mb-6 flex-col justify-center lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <Image
                        src="/assets/Newzetourist.png"
                        alt="Australia Business Visa"
                        width={500} // Replace with your image's actual width
                        height={300}

                        className="w-full max-w-xs mt-5 sm:max-w-sm md:max-w-md lg:w-full lg:h-60 object-contain shadow-lg rounded-lg" />
                </div>
                
                   
                
            </div>
            <h3 className=' m-2 font-bold text-black text-lg mb-6'>
            Types of New Zealand Tourist Visas
                    </h3>
                    <p className='mb-6'>New Zealand offers a range of visas based on the nature of your visit, including:</p>
                    <ul className='mb-6 ml-8 list-decimal'>
                        <li className='mb-6'><b>Visitor Visa: </b>
                        For tourists wishing to stay in New Zealand for leisure, sightseeing, or visiting family/friends.</li>
                        <li className='mb-6'><b>Multiple Entry Visa: </b>
                        For travellers who wish to enter and exit New Zealand multiple times within a set period.</li>
                        <li className='mb-6'><b>Transit Visa: </b>
                        For travellers who are passing through New Zealand on their way to another destination.</li>       
                    </ul>
                    <p className='mb-6'>We can help you determine the right visa for your trip, ensuring that your application is accurate and complete.</p>

            <h3 className=' m-2 font-bold text-black  text-lg mb-6'>
            New Zealand Tourist Visa Requirements
            </h3>
            <p className='mb-6'>To apply for a New Zealand Tourist Visa, you’ll need to meet certain requirements:</p>
            <ul className='list-disc mb-6 ml-8'>
                <li><b>Valid Passport:  </b>Your passport must be valid for at least 3 months beyond your intended departure date from New Zealand.</li>
                <li><b>Proof of Funds:  </b>Evidence that you have sufficient funds to support yourself during your stay in New Zealand.</li>
                <li><b>Travel Itinerary:</b>A detailed travel itinerary, including accommodation details, flight bookings, and planned activities.</li>
                <li><b>Heaith and Character Requirements:  </b>Depending on the length of your stay, you may need to provide a medical certificate or police clearance.</li>
                <li><b>Visa Fee:</b>The visa fee must be paid at the time of your application. Fees vary depending on the type of visa and duration of stay.</li>
            </ul>
            <h3 className=' m-2 font-bold text-black text-lg mb-6'>
            Visa Fees and Processing Time
            </h3>
            <h3 className='mb-6 font-bold'>Visa Fees</h3>
            <p className='mb-6'>The visa fee for a New Zealand Tourist Visa can vary depending on the specific type of visa you apply for. As of the latest update, the approximate fees are as follows:</p>
            <ul className='list-disc mb-6 ml-8'>
                <li><b>Visitor Visa: </b>NZD 165 to NZD 250 (depending on the duration of stay)</li>
                <li><b>Multiple Entry Visa: </b>NZD 300 to NZD 450</li>
                <li><b>Transit Visa: </b>NZD 50 to NZD 100</li>
               
            </ul>

            <h3 className='  text-black font-bold m-2  text-lg mb-6'>
            Processing Time</h3>
            
            <p className='mb-6'>Processing times for New Zealand Tourist Visas can vary based on the type of visa and the volume of applications being processed at the time. On average, processing times are as follows:</p>
            <ul className='list-decimal mb-6 ml-8'>
                <li><b>Visitor Visa:  </b>20 to 30 business days</li>
                <li><b>Multiple Entry Visa:  </b>30 to 45 business days</li>
                <li><b>Transit Visa:  </b>10 to 15 business days</li>

            </ul>
            <p className='mb-6'>Please note that applications submitted during peak travel seasons may experience longer processing times. To avoid any travel disruptions, we recommend applying at least 6 to 8 weeks before your planned departure.</p>

            <h3 className=' m-2 font-bold text-black text-lg mb-6'>Ready to Apply?</h3>
            <p className='mb-6'>Let VJC Overseas help you make your New Zealand adventure a reality. Whether you’re planning a short getaway or a longer stay, we’re here to ensure that your visa application is processed smoothly and efficiently.</p>
            <p className='mb-6'><b>Contact Us</b> today to begin your New Zealand Tourist Visa application. We’re here to assist you every step of the way!</p>
            </div>
    )
}

export default Newzetourist