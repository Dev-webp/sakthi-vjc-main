"use client";

import { useState } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Two from "./Two";
import Footer from "./Footer";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>Best Immigration Visa Consultants in Hyderabad Bangalore | PR Visa | Study Visa | Job Seeker Visa</title>
        <meta
          name="description"
          content="Best Immigration Visa Consultants in Hyderabad and Bangalore. We assist with PR Visa, Study Visa, Job Seeker Visa, Visit Visa, Investor Visa, Tourist Visa, Dependent Visa, and Work Permit Visa. Get expert guidance for a better future abroad. Contact us for a free assessment."
        />
        <meta
          name="keywords"
          content="Best Immigration Visa Consultants in Hyderabad, Best Immigration Visa Consultants in Bangalore, Visa Consultants, PR Visa, Permanent Residency Visa, Germany Opportunity Card, Study Visa, Job Seeker Visa, Work Permit Visa"
        />
        <meta name="author" content="VJC Overseas" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Navbar */}
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>

      {/* Other Sections */}
      <Two />
      <Footer />
    </>
  );
};

export default ContactPage;
