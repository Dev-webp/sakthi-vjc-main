"use client";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          How to Apply for a Canada PR Card: Step-by-Step Guide (2025)
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Applying for a Canadian Permanent Resident (PR) card is a crucial step
          for new immigrants and current PRs needing renewal or replacement.
          Follow this step-by-step guide to ensure a smooth application process
          and avoid common mistakes.
        </motion.p>

        <motion.ol
          className="list-decimal list-inside space-y-6  text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "Check Your Eligibility",
              content:
                "Before applying, confirm your eligibility using our Canada PR Eligibility Calculator. Your score is determined by age, education, work experience, language proficiency (IELTS), and adaptability factors.",
            },
            {
              title: "Choose the Right Immigration Program",
              content:
                "Canada offers several pathways to permanent residency, including:",
              subpoints: [
                "Express Entry (Federal Skilled Worker, Canadian Experience Class, Federal Skilled Trades)",
                "Provincial Nominee Programs (PNP)",
                "Family Sponsorship",
              ],
              conclusion:
                "Select the program that best matches your profile and goals.",
            },
            {
              title: "Create and Submit Your Express Entry Profile",
              content:
                "If you qualify, create an Express Entry profile on the Government of Canada website. Enter accurate details about your education, work experience, and language scores. Your Comprehensive Ranking System (CRS) score will determine your ranking in the pool.",
            },
            {
              title: "Receive an Invitation to Apply (ITA)",
              content:
                "If your CRS score meets the cut-off in an Express Entry draw, you’ll receive an ITA. This allows you to submit a complete PR application.",
            },
            {
              title: "Gather and Submit Required Documents",
              content: "Prepare and upload all necessary documents, such as:",
              subpoints: [
                "Passport and identification",
                "IELTS language test results",
                "Educational Credential Assessment (ECA)",
                "Work experience letters",
                "Proof of funds",
                "Medical exam results",
                "Police clearance certificates",
              ],
              conclusion:
                "Ensure all documents are accurate and translated if not in English or French.",
            },
            {
              title: "Pay Application Fees",
              content:
                "Pay the required PR application fees online through the IRCC portal. Upload your payment receipt with your application.",
            },
            {
              title: "Complete Biometrics and Medical Examination",
              content:
                "Attend your biometrics appointment and complete a medical exam at an IRCC-approved panel physician.",
            },
            {
              title: "Submit Your PR Application",
              content:
                "Submit your application and supporting documents online via the IRCC portal. Double-check for completeness and accuracy to avoid delays.",
            },
            {
              title: "Get PR Approval and Confirmation of Permanent Residence (COPR)",
              content:
                "After review, you’ll receive a Confirmation of Permanent Residence (COPR) and, if outside Canada, a PR visa. Land in Canada as a permanent resident.",
            },
            {
              title: "Receive Your PR Card",
              content:
                "Once you arrive and provide your Canadian address and photo, your first PR card will be mailed to you automatically. If you did not submit your address or photo within 180 days, you must apply for your PR card separately using the online PR portal (IMM 5444 form).",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <strong className="text-blue-700">{item.title}:</strong>{" "}
              {item.content}
              {item.subpoints && (
                <ul className="list-disc list-inside ml-5 mt-2">
                  {item.subpoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
              {item.conclusion && <p className="mt-1">{item.conclusion}</p>}
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </section>
  );
};

export default Section6;
