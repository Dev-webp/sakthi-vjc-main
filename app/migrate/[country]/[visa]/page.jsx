import { visaMetaData } from "../../visaMetaData";
import Two from "./Two";
import Footer from "./Footer";

export async function generateMetadata({ params }) {
  const country = params?.country?.toLowerCase();
  const visa = params?.visa?.toLowerCase();

  const visaData = visaMetaData[country]?.[visa];

  return {
    title: visaData?.title || "Explore Visa Options | VJC Overseas",
    description: visaData?.description || "Start your immigration journey with VJC Overseas.",
    keywords: visaData?.keywords || "visa, immigration, study abroad, work visa, VJC Overseas",
  };
}

const VisaPage = () => {
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

export default VisaPage;
