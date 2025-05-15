import React from 'react';

export const benefits = [
  {
    id: "0",
    title: "Check Eligibility: ",
    text: "Make sure that you qualify (6 points) with respect to educational background, work experience and language skills to meet Germany Opportunity Card Eligibility criteria.",
  },
  {
    id: "1",
    title: "Gather Documents: ",
    text: "Get your qualification documents, language certificates, work experience details and proof of financial support.",
  },
  {
    id: "2",
    title: "Complete Application :",
    text: "Fill in the application form online or at the German embassy. You will need to provide personal and professional information.",
  },
  {
    id: "3",
    title: "Submit the Application: ",
    text: "Submit your application at the German Embassy/ Consulate or Foreigners’ Registration Office, if you are already in Germany. Be sure to check the expected Germany Opportunity Card Processing Time to anticipate any delays.",
  },
  {
    id: "4",
    title: "Wait for Processing: ",
    text: "Your application will be processed, this can take a couple of weeks to do be prepared for your biometrics appointment.",
  },
  {
    id: "5",
    title: "Receive Opportunity Card: ",
    text: "When successful, you will obtain your Opportunity Card which enables you to stay in Germany for one year to look for work.",
  },
  {
    id: "6",
    title: "Find Employment : ",
    text: "Use your time in Germany to find a job, and if successful you can transform your Opportunity card visa into a work visa or EU Blue Card Visa",
  },
  {
    id: "7",
    title: "Apply for Permanent Residency: ",
    text: "Once you have secured full time work, you can either transfer to a long term work permit or apply for permanent residency.",
  }
];

const StepByStepGuide = () => {
  return (
    <>
      <div className="mt-4">
        <div
          className="flex flex-col lg:flex-row justify-center items-center w-full h-[90rem] md:h-[40rem] lg:h-[48rem] tablet:h-[56rem] relative bg-cover bg-center"
          style={{
            backgroundImage: `url('/germany opportunity card apply.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-75"></div>

          {/* Content */}
          <section className="relative p-8 max-w-6xl mx-auto mb-4">
            <h2 className="text-[2.50rem] font-bold text-center text-black uppercase">
              <span className="text-saffron text-[2.70rem]">Step-By-Step Guide</span> <br /> to Applying for Germany Opportunity Card 
            </h2>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200">
              {benefits.map((item, index) => (
                <div key={item.id} className="">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black text-left">{item.title}</h3>
                      <p className="text-gray-800 text-sm">{item.text}</p>
                    </div>
                  </div>
                  {/* Divider line - hidden for the last item */}
                  {index < benefits.length - 1 && (
                    <hr className="my-3 border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default StepByStepGuide;
