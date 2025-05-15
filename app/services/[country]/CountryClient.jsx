"use client";
 
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Two from "./Two";
import Footer from "./Footer";
import { notFound } from "next/navigation";
 
const metaData = {
    "passport-services": { },
  "air-ticketing": { },
  "forex-services": { },
  "free-assessment":{ },
  "free-counselling":{ },
 
 
};
 
export default function CountryClient({ country }) {
  const [meta, setMeta] = useState(null);
 
  useEffect(() => {
    const data = metaData[country?.toLowerCase()];
    if (!data) {
      notFound(); // trigger 404
    } else {
      setMeta(data);
    }
  }, [country]);
 
  if (!meta) return null;
 
  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>
 
     
        {/* Additional Sections */}
     
        <Two />
        <Footer />
     
    </>
  );
}