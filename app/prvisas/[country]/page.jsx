import CountryClient from "./CountryClient";

// Metadata map
const metaData = {
  usagreencard: {
    title: "USA Green Card PR Visa | Apply with VJC Overseas Experts",
    description: "Begin your USA Green Card PR Visa journey with VJC Overseas. Get expert advice, quick processing & end-to-end support from consultation to approval.  ",
    keywords:" us permanent residency, green card application, green card process, employment based green card, family based green card, eb 2 visa, eb 3 visa, green card america, us green card application, green card in usa,green card eligibility, best immigration consultants in bangalore, best immigration consultants in hyderabad, green card visa usa, immigration consultants.",
  },
  canadapr: {
    title: "Canada PR Visa | Apply with VJC Overseas Immigration Experts",
    description: "Apply for Canada Permanent Residency with VJC Overseas. Get expert help on PR eligibility, Express Entry, PNP pathways, required documents, and visa process.",
    keywords: " canada permanent residency, canada pr visa, express entry canada, canada pr, canada pr process, canada pr eligibility,canada, apply for canada pr, canada immigration, permanent resident canada requirements, canada immigration consultants, permanent visa canada, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, immigration consultants",
  },
  ukpr: {
    title: "UK Permanent Residency Visa 2025 | VJC Overseas Experts",
    description: "Apply for UK Permanent Residency Visa with VJC Overseas. Get expert advice, personalized support, and a smooth process from consultation to approval.",
    keywords: "uk pr visa, settle in uk, uk pr requirements, uk immigration, uk permanent residence process, uk immigration services, uk permanent residency, immigration consultants, uk residency visa, dependent visa uk student, uk student visa, study visa in uk, immigration uk student visa, best immigration consultants in Hyderabad, best immigration consultants in Bangalore.",
  },
  australiapr: {
    title: "Australia PR Visa | Apply with VJC Overseas Immigration Experts",
    description: "Get Australia Permanent Residency with VJC Overseas. Learn about PR eligibility, points system, visa process, and skilled migration pathways for Australia.",
    keywords: "australia pr visa, australia permanent residency, australia immigration, australia pr process, apply for pr in australia, australian pr eligibility, australia pr requirements, australia pr, family visa australia, australia work permit, immigration australia, immigration consultants, best immigration consultants in bangalore, best immigration consultants in hyderabad, apply for australia pr, green card australia.",
  },
  germanybluecard: {
    title: "Germany Blue Card Visa | Apply with VJC Overseas Support",
    keywords:"EU Blue Card Germany, Germany work visa, Blue Card requirements, Migrate to Germany, German residence permit, Germany work permit, Germany work visa requirements, Job search visa Germany, Blue Card visa Germany, Immigration to Germany, Germany work visa apply, Work permit Germany requirements, Blue Card eligibility, Best immigration consultants in Hyderabad, Best immigration consultants in Bangalore.",
    description: "Apply for Germany Blue Card PR Visa with expert support from VJC Overseas. Fast process, job search help & full guidance. Start your journey today!",
  },
  newzealandpr: {
    title: "New Zealand PR Visa – Apply Easily with VJC Overseas ",
    keywords:"new zealand pr visa, new zealand permanent residency,new zealand residency visa,apply for new zealand visa, immigrate to new zealand, new zealand pr, new zealand immigration visa, new zealand visa process, working visa nz, new zealand visa consultants, nz immigration visa, new zealand migrant visa, new zealand immigration, best immigration consultants in hyderabad, best immigration consultants in bangalore",
    description: "Apply for a New Zealand PR Visa with VJC Overseas. Get expert advice, fast processing, and end-to-end support to make your immigration journey smooth. ",
  },
};

export async function generateMetadata({ params }) {
  const country = params.country.toLowerCase();
  const data = metaData[country];

  return {
    title: data?.title || "Study Abroad – Explore Global Education Paths | VJC Overseas",
    description: data?.description || "Get expert guidance to study abroad with VJC Overseas. Explore top universities, countries, scholarships & student visa options. Begin your journey now!",
    keywords: data?.keywords || "study abroad consultants, overseas education consultants, study abroad with scholarship, study abroad, abroad education consultants, foreign study consultancy, overseas study consultants, abroad for studies, study in UK, study in Canada, study in Australia, study in Germany",
  };
}


export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}