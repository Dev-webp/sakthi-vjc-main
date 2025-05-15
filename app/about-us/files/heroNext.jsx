import { FaPassport, FaChalkboardTeacher, FaClipboardCheck, FaBriefcase, FaGraduationCap, FaHome } from "react-icons/fa";
const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
            <span className="p-2 rounded-md bg-gray-200 text-gray-700 flex w-max">
                {icon}
            </span>
            <h2 className="text-black text-xl font-semibold">
                {title}
            </h2>
            <p className="text-gray-700 mx-auto max-w-md">
                {description}
            </p>
        </div>
    );
};

const features = [
    {
        id: 1,
        title: "Comprehensive Visa Guidance",
        description: "Get expert advice and step-by-step assistance for all types of visas, ensuring a seamless application process.",
        icon: <FaPassport className="w-6 h-6 text-orange-600" />,
    },
    {
        id: 2,
        title: "Immigration Consultation",
        description: "Tailored solutions to help individuals and families achieve their immigration goals with ease and confidence.",
        icon: <FaChalkboardTeacher className="w-6 h-6 text-orange-600" />,
    },
    {
        id: 3,
        title: "Document Preparation",
        description: "Ensure all your documents are accurately prepared and submitted on time to meet immigration requirements.",
        icon: <FaClipboardCheck className="w-6 h-6 text-orange-600" />,
    },
    {
        id: 4,
        title: "Job Search Assistance",
        description: "Support for skilled professionals in finding employment opportunities abroad that match their qualifications.",
        icon: <FaBriefcase className="w-6 h-6 text-orange-600" />,
    },
    {
        id: 5,
        title: "Student Visa Support",
        description: "Guiding students to secure admissions in the top universities and successfully apply for study visas in desired universities.",
        icon: <FaGraduationCap className="w-6 h-6 text-orange-600" />,
    },
    {
        id: 6,
        title: "Post-Landing Services",
        description: "Help clients settle in their new country with services like accommodation, networking, and local guidance.",
        icon: <FaHome className="w-6 h-6 text-orange-600" />,
    },
];


const Features = () => {
    return (
        <section className="py-8">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col space-y-16">
                    <div className="flex flex-col justify-center text-center mx-auto md:max-w-3xl space-y-5">
                        {/* <span className="mx-auto w-max pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-orange-700 text-orange-600">
                            Features
                        </span> */}
                        <h1 className="text-3xl font-semibold text-orange-600 uppercase md:text-4xl xl:text-5xl leading-tight">
                            Keep your business on growing
                        </h1>
                        <p className="text-gray-700 max-w-lg mx-auto">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae odio consequatur aliquam ratione quod iusto aspernatur.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 sm:gap-x-12">
                        {features.map((feature) => (
                            <FeatureCard key={feature.id} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
