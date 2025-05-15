import React from 'react';
import { Image } from 'lucide-react';
const Canadapr = () =>{
    return (
        <section
          style={{
            position: "relative",
            padding: "50px",
            boxSizing: "border-box",
            backgroundColor: "white",
            fontFamily: "Times New Roman",
            overflow: "hidden",
          }}
        >
            <div style={{ marginBottom: "40px" }}>
            <h3 className="text-2xl font-semibold text-black text-center">
            Canada Permanent Residence Visa: Your Pathway to a New Life in Canada - <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
            </h3>
          </div>
         
          <article>
            <section style={{ marginBottom: "30px" }}>
              <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
                Why Choose Canada for Permanent Residency?
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Canada is renowned for its strong economy, political stability, and
                diverse, inclusive culture. As a permanent resident, you’ll enjoy
                access to world-class healthcare, education, and social services.
                Whether you’re seeking better career opportunities, a high standard
                of living, or a safe environment to raise your family, Canada offers
                all that and more.
              </p>
            </section>
    
            <section style={{ marginBottom: "30px" }}>
              <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
                Living Expenses and Lifestyle in Canada
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Canada’s living costs can vary significantly depending on the
                province and city. On average, you can expect to pay:
              </p>
              <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">

  <div className="flex-shrink-0 mx-auto lg:mx-0">
    <Image
      src="/canadaimg3.jpg"
      alt="Image description"
      width={500} // Replace with your image's actual width
      height={300}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg" 
    />
  </div>
              
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
                <li>
                  <strong>Housing:</strong> Monthly rent for a one-bedroom apartment
                  can range from CAD 1,200 to CAD 2,500 in major cities like Toronto
                  and Vancouver. Smaller cities or towns may offer more affordable
                  options.
                </li>
                <li>
                  <strong>Groceries:</strong> A monthly grocery bill for a single
                  person is typically CAD 300 to CAD 500.
                </li>
               
              </ul>
              </div>
              <li>
                  <strong>Transportation:</strong> Public transport costs range from
                  CAD 100 to CAD 150 per month in urban areas. Alternatively, owning
                  a car can cost around CAD 500 to CAD 700 monthly, including
                  insurance and fuel.
                </li>
                <li>
                  <strong>Utilities:</strong> Utilities (electricity, heating, water,
                  garbage) average CAD 150 to CAD 250 per month.
                </li>
              <p style={{ marginBottom: "20px" }}>
                Canada also offers a balanced work-life culture with plenty of
                opportunities for outdoor activities like skiing, hiking, and
                cycling, which is perfect for those who enjoy a healthy and active
                lifestyle.
              </p>
            </section>
    
            <section style={{ marginBottom: "30px" }}>
              <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
                Processing Time for Canada PR Visa
              </h2>
              <p style={{ marginBottom: "20px" }}>
                The processing time for a Canada Permanent Residence visa can vary
                depending on the immigration program you apply under (Express Entry,
                Provincial Nominee Program, Family Sponsorship, etc.). Typically,
                Express Entry applications are processed in approximately 6 to 8
                months, while other pathways like the Provincial Nominee Program may
                take around 12 to 18 months. However, processing times can be
                affected by various factors such as your country of origin and
                application completeness. VJC Overseas ensures that your application
                is handled efficiently, helping you navigate all the necessary steps
                and paperwork.
              </p>
            </section>
    
            <section style={{ marginBottom: "30px" }}>
              <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
                Visa Fees
              </h2>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
                <li>
                  <strong>Principal applicant fee:</strong> CAD 1,365
                </li>
                <li>
                  <strong>Spouse or common-law partner fee:</strong> CAD 1,365
                </li>
                <li>
                  <strong>Dependent child fee:</strong> CAD 230 per child
                </li>
              </ul>
              <p style={{ marginBottom: "20px" }}>
                Additional costs may include medical exams, police certificates, and
                biometrics, which vary by individual circumstances. At VJC Overseas,
                we provide transparent and accurate estimates to ensure you are
                prepared for all costs involved.
              </p>
            </section>
    
            <section>
              <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
                Get Started with VJC Overseas
              </h2>
              <p>
                The process of applying for a Canada PR visa can be complex, but with
                the expert guidance of VJC Overseas, you can streamline your
                application and maximize your chances of success. Our experienced
                consultants provide tailored advice and support, helping you
                understand your eligibility, navigate the paperwork, and ensure that
                your application is submitted correctly and on time.
              </p>
              <p>
                Are you ready to begin your journey to Canada? Contact VJC Overseas
                today to start your application process and take the first step
                toward making Canada your new home!
              </p>
            </section>
          </article>
        </section>
      );

};
export default Canadapr;