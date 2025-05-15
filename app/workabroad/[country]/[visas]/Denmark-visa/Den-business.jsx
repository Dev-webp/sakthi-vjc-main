import React from 'react';
import Image from 'next/image';


const Denbusiness = () => {
    return (
        <div className="m-2 p-2" style={{
            fontFamily: "Times New Roman", backgroundColor: 'white', position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{ marginBottom: '5%' }}>
                <h3 className="text-2xl mt-4 font-semibold text-black text-center">
                    Denmark Business Visa  - VJC Overseas<span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
                </h3>
            </div>
            <p className='mb-6'>
                Are you planning to explore business opportunities in Denmark? Whether you are attending meetings, conferences, negotiations, or expanding your business network, a <b>Denmark Business Visa</b> is your gateway to engaging with Denmark’s vibrant economy. At VJC Overseas, we simplify the process of obtaining a business visa for Denmark, ensuring a smooth and hassle-free experience.
            </p>

            <div className="flex mb-6 flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <Image
                        src="/assets/Denbusiness.png"
                        alt="Australia Business Visa"
                        width={500} // Replace with your image's actual width
                        height={300}

                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-full lg:h-60 object-contain shadow-lg rounded-lg"
                    />
                </div>

                <div>
                    <h4 className="mb-6  text-sky-700">Why Choose Denmark for Business?</h4>

                    <p className="mb-6">Denmark is one of Europe’s most attractive business destinations, known for its innovation-driven economy, strong business infrastructure, and a thriving start-up ecosystem. With a strategic location within the European Union and a favourable business environment, Denmark is the perfect place to establish connections and explore new business ventures.</p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="mb-6  text-sky-700">Types of Denmark Business Visas</h2>

                <p className='mb-6'>Depending on the purpose and length of your stay, there are different types of Denmark Business Visas available:</p>

                <ul className='ml-8 list-disc mb-6'>
                    <li><b>1.	Short-term Business Visa (Schengen Visa) </b> For business visits up to 90 days within a 180-day period.</li>
                    <li><b>2.	Long-term Business Visa </b>For business stays exceeding 90 days, often linked with specific business projects or assignments.</li>

                </ul>

                <p className="mb-6">Whether you’re looking to attend a conference, meet clients, or establish a new business relationship, we can help you choose the right visa category for your needs.</p>

                <h4 className="mb-6  text-sky-700">Requirements for Denmark Business Visa</h4>

                <p className="mb-6">To apply for a Denmark Business Visa, applicants must meet specific requirements, including:</p>
                <ul className='list-disc mb-6 ml-8'>
                    <li>A valid passport with at least 3 months validity beyond the planned stay.</li>
                    <li>Completed visa application form.</li>
                    <li>Passport-sized photographs meeting Schengen standards.</li>
                    <li>Proof of financial stability (bank statements, salary slips, etc.).</li>
                    <li>Invitation letter from a Danish company, detailing the purpose and duration of your visit.</li>
                    <li>Travel itinerary, including flight bookings and hotel accommodation.</li>
                    <li>Proof of business ties, such as business registration documents, prior correspondence, or contracts.</li>
                    <li>Health insurance covering the entire stay in Denmark (minimum coverage of 30,000 EUR).</li>
                </ul>

                <h4 className="mb-6 text-sky-700">Denmark Business Visa Processing Time</h4>
                <p>The processing time for a Denmark Business Visa typically takes <b>10 to 15 working days</b>. However, it is advisable to apply at least <b>3 to 4 weeks</b> before your intended travel date to avoid any last-minute delays, especially during peak application seasons. In certain cases, the processing time may vary based on your nationality, application volume, and the completeness of your documents.</p>
            </div>

            <div className="mb-6">
                <h4 className="mb-6 text-sky-700">Denmark Business Visa Fees</h4>
                <p className='mb-6'>The visa fees for a Denmark Business Visa are as follows:</p>
                <ul className='ml-8 mb-6 list-disc'>
                    <li><b>Short-term Schengen Business Visa (up to 90 days): </b>  €80 (approx. INR 7,000)</li>
                    <li><b>Long-term Business Visa (over 90 days): </b> Fees may vary depending on the nature of the business visit and visa type. Please contact us for an accurate quote.</li>

                </ul>
                <p className='mb-6'>For children between the ages of 6 and 12, a reduced fee of €40 may apply. Children under the age of 6 are usually exempt from visa fees.</p>
                <p className='mb-6'>Please note that these fees are subject to change based on consular rules, and additional service fees may apply when using our visa services.</p>

                <h4 className="mb-6 text-sky-700">Why Choose VJC Overseas for Your Denmark Business Visa?</h4>

                <p className="mb-6">At VJC Overseas, we are committed to providing professional visa assistance with a focus on accuracy, transparency, and efficiency. Our experienced team will guide you through the entire application process, ensuring that you meet all necessary requirements for a successful visa outcome.</p>

                <ul className='ml-8 mb-6 list-disc'>
                    <li><b>Expert Guidance: </b> We’ll help you complete your application correctly and prepare all necessary documents.</li>
                    <li><b>Fast Processing: </b> We prioritize time-sensitive applications and help expedite the process where possible.</li>
                    <li><b>End-to-End Support:</b> From filling out the visa form to booking appointments, we handle every step for you.</li>
                </ul>

                <h4 className='mb-6 text-sky-700'>Get Started Today</h4>

                <p className="mb-6">If you’re ready to take your business to Denmark, our team is here to assist you. Contact us today to begin your <b>Denmark Business Visa application</b> and explore the endless opportunities waiting for you in one of Europe’s leading business hubs.</p>

                <p className='font-bold mb-6'>For more information or to schedule a consultation, contact VJC Overseas at +91-9160449000.</p>

                <hr style={{ borderColor: 'black' }} className="mb-6" />

                <p>Please remember that visa rules and fees are subject to change, so it’s always best to consult with us or the relevant consulate for the latest updates before proceeding with your application.</p>
            </div>
        </div>
    );
}

export default Denbusiness;
