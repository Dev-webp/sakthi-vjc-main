import { GraduationCap, HandCoins, Globe } from 'lucide-react'; // Correct import of icons

const scholarships = [
  {
    icon: <GraduationCap className="text-blue-400 w-8 h-8" />,
    title: 'Merit-Based Scholarships',
    description: `Awarded to students with strong academics, leadership, or extracurriculars. Includes Chevening, GREAT, Rhodes, and university-specific awards.`,
  },
  {
    icon: <HandCoins className="text-blue-400 w-8 h-8" />,
    title: 'Need-Based Scholarships',
    description: `Designed for students who show financial need. Includes Charles Wallace Trust, university bursaries, and government-funded aid.`,
  },
  {
    icon: <Globe className="text-blue-400 w-8 h-8" />,
    title: 'Country-Specific Scholarships',
    description: `For Indian or South Asian students. Includes Commonwealth, Inlaks, and India Excellence Scholarships.`,
  },
];

export default function ScholarshipTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6 animate-slideUp">
          Study in UK Scholarships for Indian Students
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Make your dream of studying in the UK affordable with scholarships tailored to Indian students.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {scholarships.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-6 rounded-2xl hover:shadow-blue-100 transition-shadow duration-300 animate-fadeUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-blue-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
