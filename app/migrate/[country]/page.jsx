import { metaData } from "../metaData"; // Adjust path if needed
import Two from "./Two";
import Footer from "./Footer";

// Dynamic metadata for each country
export async function generateMetadata({ params }) {
  const country = params.country?.toLowerCase();
  const data = metaData[country];

  return {
    title: data?.title || "Migrate Abroad – Explore Global Opportunities | VJC Overseas",
    description: data?.description || "Expert migration services to work, study, or settle abroad.",
    keywords: data?.keywords || "study abroad, work visa, PR, VJC Overseas, global education",
  };
}

const ContactPage = () => {
  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        {/* Optional Nav */}
      </div>
      <Two />
      <Footer />
    </>
  );
};

export default ContactPage;
