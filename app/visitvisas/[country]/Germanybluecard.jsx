"use client";

import React from "react";
import { motion } from "framer-motion";

const Germany = () => {
  return (
    <motion.div
      className="text-gray-800 text-lg space-y-6 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold">
        Germany Blue Card Visa: Your Path to Work and Live in Germany
      </h2>

      <p>
        Germany, a global leader in innovation, technology, and culture, attracts skilled professionals from around the world. The <strong>Germany Blue Card</strong> is a special residence permit designed for highly qualified workers who wish to live and work in Germany. If you are looking to advance your career, experience rich cultural heritage, and enjoy an excellent quality of life — this visa is your gateway.
      </p>

      <h3 className="text-xl font-semibold">What is the Germany Blue Card Visa?</h3>
      <p>
        The Germany Blue Card is a work and residence permit for highly skilled non-EU nationals. It’s tailored for professionals in engineering, IT, healthcare, research, and more. It also provides benefits like family reunification and a path to permanent residency in as little as 21–33 months.
      </p>

      <h3 className="text-xl font-semibold">Key Benefits of the Germany Blue Card</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Work and Live in Germany:</strong> Enjoy high standards of living, infrastructure, and opportunities.</li>
        <li><strong>Family Reunification:</strong> Your spouse and children can join you under Blue Card provisions.</li>
        <li><strong>Pathway to Permanent Residency:</strong> Apply after 33 months, or just 21 months with German proficiency.</li>
        <li><strong>Career Opportunities:</strong> Especially strong in engineering, IT, healthcare, and research fields.</li>
      </ul>

      <h3 className="text-xl font-semibold">Eligibility Criteria</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Job Offer:</strong> A valid job offer or contract relevant to your qualifications.</li>
        <li><strong>Higher Education Qualification:</strong> Recognized university degree or equivalent qualification.</li>
        <li><strong>Salary Requirement:</strong> Minimum salary is approx €56,400/year, or €43,992/year for shortage occupations (e.g., IT, engineering, healthcare).</li>
        <li><strong>Health Insurance:</strong> Proof of valid health insurance is mandatory.</li>
      </ul>

      <h3 className="text-xl font-semibold">Processing Time</h3>
      <p>
        Processing usually takes <strong>4 to 12 weeks</strong>, depending on application volume and personal circumstances. Apply early to avoid delays.
      </p>

      <h3 className="text-xl font-semibold">Germany Blue Card Visa Fees</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Initial Application:</strong> Approx €100</li>
        <li><strong>Visa Extension:</strong> Typically around €100</li>
        <li><strong>Family Reunification:</strong> €75 to €100 per family member</li>
      </ul>

      <h3 className="text-xl font-semibold">Living Expenses in Germany</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Rent:</strong> €800–€1,500/month in major cities, lower in smaller towns</li>
        <li><strong>Utilities:</strong> €150–€250/month</li>
        <li><strong>Groceries:</strong> €200–€300/month</li>
        <li><strong>Transport:</strong> €70–€100/month (public transport)</li>
        <li><strong>Health Insurance:</strong> €100–€800/month depending on coverage</li>
        <li><strong>Miscellaneous:</strong> €200–€300/month (entertainment, dining, etc.)</li>
      </ul>

      <h3 className="text-xl font-semibold">Lifestyle in Germany</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Work-Life Balance:</strong> Generous vacation days and strong employee rights</li>
        <li><strong>Education & Healthcare:</strong> High-quality and mostly free public services</li>
        <li><strong>Social Security:</strong> Access to pension, unemployment insurance, and more</li>
        <li><strong>Culture & Recreation:</strong> Museums, festivals, outdoor adventures, and more</li>
      </ul>

      <h3 className="text-xl font-semibold">
        How <span className="text-orange-600 font-semibold">VJC Overseas</span> Can Help
      </h3>
      <p>
        With years of experience and a team of experts,{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span> simplifies your Germany Blue Card application. From document checks to submission and follow-ups, we offer end-to-end support.
      </p>

      <h3 className="text-xl font-semibold">
        Contact <span className="text-orange-600 font-semibold">VJC Overseas</span>
      </h3>
      <p>
        📞 <strong>+91-9160449000</strong><br />
        ✉️ <strong>info@vjcoverseas.com</strong>
      </p>

      <p className="text-sm text-gray-600 italic">
        *Information is subject to change based on German immigration policies. Always verify with official sources or consult our team.
      </p>
    </motion.div>
  );
};

export default Germany;
