import CountryClient from "./CountryClient";

// Metadata map
const metaData = {
  usa: {
    title: "Study in USA – Top Universities & Visa Support | VJC Overseas",
    description: "Get expert guidance to study in the USA. Explore top universities, scholarships, courses & student visa options with VJC Overseas. Start today!",
    keywords:" study abroad, usa visa, abroad education consultants, visa for united states, golden visa, study abroad consultants, usa visa application, overseas study consultants, foreign study consultancy, abroad for studies, best immigration consultants in hyderabad, best immigration consultants in bangalore, foreign study consultancy, foreign education consultants, study in usa",
  },
  canada: {
    title: "Study in Canada – Top Universities & Visa Support | VJC",
    description: "Explore studying in Canada with VJC Overseas. Get expert support on top universities, scholarships, visa process & PR pathways. Start your journey now!",
    keywords: " abroad education consultants, foreign education consultants, study in canada, canada student visa, study abroad, best immigration consultants in bangalore, best immigration consultants in hyderabad, canada visa application, canada immigration, express entry canada, study abroad consultants, overseas education consultants, canada education visa, study abroad consultants near me,canada visa",
  },
  uk: {
    title: "Study in UK – Top Universities & Visa Guidance | VJC Overseas",
    description: "Study in the UK with VJC Overseas. Explore top universities, scholarships, visa process & post-study work options. Get expert guidance and support today.",
    keywords: "study in uk, uk student visa, uk study visa, uk study visa fees, requirements for uk study visa, best universities in uk, top universities in uk, uk student visa fees, study abroad, study abroad consultants, abroad education consultants, overseas education consultants, study abroad consultants near me, foreign education consultants, foreign study consultancy",
  },
  australia: {
    title: "Study in Australia – Top Universities & Visa Support | VJC",
    description: "Study in Australia with VJC Overseas. Get expert guidance on top universities, scholarships, visa process & post-study work opportunities. Start now!",
    keywords: "student visa australia, study abroad australia, apply for student visa australia, australia study, student visas australia, immigration consultants, australia immigration, australia permanent residency, australia pr visa, australia work visa, australia job visa, australia work permit, australia visit visa, australia visa work permit, immigration australia",
  },
  germany: {
    title: "Study in Germany – Top Universities & Visa Help | VJC Overseas",
    keywords:"study in germany, immigration consultants, germany study visa, germany study abroad, top universities in germany, top universities in germany, best universities in germany, masters in germany, student visa in germany, top rated universities in germany, germany visa for students, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, germany visa, germany opportunity card, germany study visa",
    description: "Start your study journey in Germany with VJC Overseas. Get expert help with top universities, study visa process, scholarships & PR opportunities.",
  },
  italy: {
    title: "Study in Italy | Best Italy Education Consultant in India	",
    keywords:"best universities in Europe,Italy university,university Italy,top universities in Europe,study in Europe,university of Europe,university in Italy,europe university ,study in Italy,best universities in italy,abroad education consultants,study abroad consultants,best immigration consultants in Hyderabad,best immigration consultants in Bangalore,immigration consultants",
    description: "Study in Italy with VJC Overseas – trusted consultants in India for 2025 admissions, scholarships, top universities, and complete visa support.",
  },
  france: {
    title: "Study in France | VJC Overseas – Top Consultants in India",
    description: "Study in France with VJC Overseas – expert help for 2025 admissions, top universities, courses, scholarships & visa support. Talk to our Experts.",
    keywords: "study in France, France student visa, top universities in France, France education consultants, masters in France, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, France student visa requirements, France study visa process, study abroad in France, study bachelor in France, courses in France for international students, best universities in France, schengen visa, uniform schengen visa",
  },
  ireland: {
    title: "Study Abroad in Ireland | VJC Overseas – Expert Education Guide",
    description: "VJC Overseas provides expert support to study in Ireland. Get help with university selection, visas, scholarships, and smooth application assistance.",
    keywords: "study abroad consultants near me, study abroad consultants, study in europe, foreign education consultants, ireland universities, study in ireland, study abroad ireland, masters in ireland, scholarship for ireland, ireland study visa, ireland student visa, ireland visa application, ireland visa, best immigration consultants in Hyderabad, best immigration consultants in Bangalore",
  },
  singapore: {
    title: "Study in Singapore: Guide for Indian Students | VJC Overseas",
    description: "Study in Singapore with VJC Overseas. Discover how to study in Singapore, explore top universities, courses, and scholarships for your educational journey.",
    keywords: "best immigration consultants in Hyderabad, immigration consultants, best immigration consultants in bangalore, best university in Singapore, universities in Singapore, top universities in Singapore, singapore study visa, study in Singapore, study visa Singapore, singapore visa, singapore student visa, evisa, master degree Singapore, study mba in Singapore, foregin educational consultants",
  },
  malaysia: {
    title: "Study in Malaysia 2025: Guide for Students | VJC Overseas",
    description: "Study in Malaysia 2025 with VJC Overseas. Explore top universities, courses, scholarships, and how to apply. Begin your Malaysia journey today.",
    keywords: "study in Malaysia, malaysia student visa, top universities in Malaysia, malaysia education consultants, masters in Malaysia, malaysia student visa requirements, study masters in Malaysia, malaysia visa, study visa Malaysia, best universities Malaysia, malaysia visa for Indians, malaysia e visa, best immigration consultants in Hyderabad, immigration consultants, best immigration consultants in bangalore",
  },
  southafrica: {
    title: "Study in South Africa 2025 | Guide by VJC Overseas",
    description: "Study in South Africa with VJC Overseas. Explore top universities, courses, scholarships, and how to apply. Start your study in South Africa journey today.",
    keywords: "best immigration consultants in Hyderabad, immigration consultants, best immigration consultants in bangalore, best university in South Africa, universities in South Africa, top universities in South Africa, South Africa study visa, study in South Africa, study visa South Africa, South Africa visa, South Africa student visa, evisa, master degree South Africa, study mba in South Africa, South Africa visa for indians",
  },
  newzealand: {
    title: "Study in New Zealand | VJC Overseas - Your Trusted Study Abroad",
    description: "Begin your study abroad journey in New Zealand with VJC Overseas. Expert guidance on top universities, visas, scholarships, and admission support.",
    keywords: "best immigration consultants in hyderabad, immigration consultants, best immigration consultants in bangalore, new zealand study visa, study abroad new zealand, study in new zealand, new zealand pr, study abroad consultants,newzealand visa ,immigration new zealand, new zealand entry visa, new zealand university,best university in new zealand, abroad education consultants,study abroad consultants near me",
  },
  philippines: {
    title: "Study Abroad in the Philippines | VJC Overseas – Expert Guidance",
    description: "Start your study abroad journey in the Philippines with VJC Overseas. Get expert help on top universities, student visas, admissions, and scholarships.",
    keywords: "study abroad philippines, study in philippines, study abroad consultants, abroad consultants near me, philippines visa, philippines university, best abroad education consultants, best immigration consultants in hyderabad, best immigration consultants in bangalore, immigration consultants, philippines education system, mbbs in philippines,philippnes entry visa,Philippines study visa,Philippines",
  },
  poland: {
    title: "Study in Poland with VJC Overseas | Trusted Study Abroad Experts",
    description: "Begin your study abroad journey in Poland with VJC Overseas. Get expert guidance on top universities, student visas, scholarships, and admissions process.",
    keywords: "study abroad poland ,study in poland,poland student visa,poland universities,best universities in poland,, abroad education consultants, foreign education consultants,national visa, schengen visa, schengen visa application, poland immigration,polish universities,best immigration consultants in Hyderabad,best immigration consultants in Bangalore, immigration consultants",
  },
  denmark: {
    title: "Study Abroad in Denmark | VJC Overseas – Trusted Visa Experts",
    description: "Explore world-class education in Denmark through VJC Overseas. Get expert help with university selection, student visas, scholarships, and easy admissions",
    keywords: "denmark universities, study in denmark, denmark student visa, study abroad consultants, abroad consultancy near me, europe student visa, best immigration consultants in hyderabad, best immigration consultants in bangalore,immigration consultants, schengen visa, schengen visa application, denmark study abroad, bachelor in denmark, masters in denmark, denmark study visa requirements",
  },
  spain: {
    title: "Study Abroad in Spain | VJC Overseas – Trusted Global Experts",
    description: "Explore world-class education in Spain through VJC Overseas. Get expert help with universities, visa process, scholarships, and smooth application support.",
    keywords: "study abroad consultants, immigration consultant near me, foreign education consultants, immigration consultants, spain universities, spain student visa, study in spain, study in europe, schengen visa, spain visa, d type visa, best immigration consultants in bangalore, best immigration consultants in hyderabad, bachelors in spain, masters in spain",
  },

  hongkong: {
    title: "Study in Hong Kong 2025 for Indian Students | VJC Overseas",
    description: "Study in Hong Kong with VJC Overseas. Explore top universities, courses, scholarships, visa process, and how to start your study in Hong Kong journey.",
    keywords: "best immigration consultants in Hyderabad, immigration consultants, best immigration consultants in bangalore, hongkong study visa, study in hongkong, hongkong study abroad programs, f1 visa hong kong, hongkong student visa, study visa for hongkong, indian students in hong kong, study in hongkong for indian students, study abroad hongkong, study in hongkong 2025, hongkong universities, top ranked universities in hongkong",
  },

  uae: {
    title: "Study in UAE 2025 | Top Universities & Guide | VJC Overseas",
    description: "Study in UAE with VJC Overseas. Discover top universities, courses, scholarships, and how to apply. Begin your study in UAE journey with expert support.",
    keywords: "university in uae, international university in uae, uae study abroad, Study in UAE, Study in UAE 2025, Study in UAE for Indian students, Study abroad UAE, UAE study visa, Dubai visa, best immigration consultants in Hyderabad, immigration consultants, best immigration consultants in bangalore, Study MBA in UAE, UAE study abroad consultants, Best universities to study in UAE",
  },

  sweden: {
    title: "Study in Sweden 2025 | Schengen Access | VJC Overseas",
    description: "Study in Sweden with VJC Overseas. Explore top universities, scholarships, and visa benefits. Enjoy Schengen access while you study in Sweden in 2025.",
    keywords: "schengen visa, sweden universities, study visa Sweden, study in Sweden, study abroad Sweden, study masters in Sweden, best immigration consultants in Hyderabad, immigration consultants, best immigration consultants in bangalore, best universities in Sweden, sweden student visa, apply sweden universities, sweden study visa, best immigration consultancy, easy visa process for sweden",
  },

  norway: {
    title: "VJC Overseas | Study in Norway – Your Global Study Partner",
    description: "Explore higher education in Norway through VJC Overseas. We provide expert help with universities, visa process, scholarships, and full admission support.",
    keywords: "study abroad norway, study in norway, norway student visa, norway universities, study in europe, europe university, university of oslo norway, scholarships in norway, norway study visa, norway education visa, norway for study, norge university, mba norway, best immigration consultants in hyderabad, best immigration consultants in bangalore",
  },
  netherlands: {
    title: "Netherlands Study Visa & Universities – Apply Now with VJC",
    description: "Explore study opportunities in the Netherlands with VJC Overseas. Get expert help on top universities, student visa process, scholarships & more.",
    keywords: "universities in netherlands, study abroad consultants, netherlands student visa, study in netherlands, netherlands study visa, netherlands universities, holland university, universities in holland, schengen visa, schengen visa application, europe visa, abroad education consultants, foreign education consultants, best immigration consultants in bangalore, best immigration consultants in hyderabad"
  },
  switzerland: {
    title: "Study in Switzerland – Universities, Scholarships & Visa | VJC",
    description: "Start your study journey in Switzerland with VJC Overseas. Get expert help with top universities, scholarships, student visa process & application guidance.",
    keywords: "study in switzerland, universities in switzerland, top universities in switzerland, scholarships in switzerland, masters in switzerland, bachelors in switzerland, study abroad consultants, best immigration consultants in bangalore, foreign education consultants, best immigration consultants in hyderabad, abroad education consultants, swiss visa, switzerland student visa, swiss student visa, switzerland visa appointment"
  }
  

  

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