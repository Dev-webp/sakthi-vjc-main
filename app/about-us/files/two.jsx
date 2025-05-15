import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const FeatureItem = ({ id, title, description, advantages, icon, image }) => {
    return (
        <div className={`flex flex-col md:items-center gap-10 lg:gap-14 ${id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-4 space-y-8">
                <div className="space-y-4">
                    <span className="p-2 rounded-md bg-gray-100 text-orange-500 flex w-max">
                        {icon}
                    </span>
                    <h2 className="text-2xl font-semibold text-gray-900 uppercase">
                        {title}
                    </h2>
                    <p className="text-gray-700">
                        {description}
                    </p>
                </div>
                <ul role="list" className="space-y-5 children:flex children:items-center children:gap-4 children:text-gray-600">
                    {
                        advantages.map(advantage => (
                            <li key={advantage.id} className="flex items-center text-base">
                            <FaCheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                            {advantage.text}
                          </li>
                        ))
                    }
                </ul>

            </div>
            <div className="flex-1 relative bg-gradient-to-tr from-orange-100 to-orange-300 
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
                <Image src={image} alt="illustration" width={1800} height={1000} className="w-full h-auto rounded-lg" />
            </div>
        </div>
    )
}
import { FaGlobe, FaFileAlt, FaHandsHelping } from 'react-icons/fa';

const features = [
    {
        id: 1,
        title: "Permanent Residency Visas:",
        icon: <FaGlobe className="h-10 w-10" />,
        description: "We expertise in processing Permanent Residency Visa services to individuals and families seeking to establish long-term residency in countries such as Canada, Australia, and New Zealand. ",
        advantages: [
            { id: 1, text: "We guide you through the entire process, from eligibility assessment to documentation submission. " },
            { id: 2, text: "Ensuring that your application stands the best chance of success. " },
            { id: 3, text: "Our team stays updated with the latest immigration policies and provides personalised advice to help you make informed decisions.." }
        ],
        image: "/b1.webp"
    },
    {
        id: 2,
        title: "Student Visas:",
        icon: <FaFileAlt className="h-10 w-10" />,
        description: "At VJC Overseas, we specialise in assisting students who wish to pursue education abroad. Our Student Visa services cover a range of destinations, including the United States, Canada, Australia, the UK, and more. ",
        advantages: [
            { id: 1, text: "We provide guidance on university selection, visa documentation, and interview preparation " },
            { id: 2, text: "Ensure a smooth transition from application to arrival at your chosen educational institution." },
            { id: 3, text: "Our focus on client satisfaction has earned us the trust of hundreds of students and professionals who have successfully achieved their goals abroad." }
        ],
        image: "/b2.webp"
    },
    {
        id: 3,
        title: "Recognised Excellence",
        icon: <FaHandsHelping className="h-10 w-10" />,
        description: "Our services don’t stop once your visa is approved. We provide assistance with your relocation and settlement, ensuring a smooth transition to your new country.",
        advantages: [
            { id: 1, text: "Our commitment to excellence has been recognised through numerous awards. " },
            { id: 2, text: "These accolades reflect our unwavering dedication to providing the best service to our clients." },
            { id: 3, text: "In 2022, 2023, and 2024, we were honoured with the title of India’s Most Trusted Brand of the Year, awarded to us consecutively in Delhi and Bengaluru. " }
        ],
        image: "/b3.webp"
    }
];

const Features = () => {
    return (
        <section className="py-12 relative  md:mt-0 lg:mt-0">
            {/* Background image using Next.js Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/comp-1.webp" // Replace with the actual path to your image
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={75} // Adjust quality for performance
                    priority // Ensures the image loads quickly
                />
            </div>
            <div className="max-w-7xl mx-auto px-5 -mt-0 md:-mt-0 sm:px-0 md:px-12 lg:px-5">
                <div className="flex flex-col  space-y-16">
                    <div className="flex flex-col justify-center text-center  mx-auto md:max-w-4xl space-y-5">
                        <h1 className="text-3xl font-semibold text-orange-500 md:text-4xl xl:text-5xl leading-tight uppercase">
                        Our Services
                        </h1>

                        <p className="text-gray-700 max-w-xl mx-auto">
                        At VJC Overseas, we offer a wide range of services designed to support individuals and businesses in achieving their international goals. Our expertise and experience in immigration, travel, and financial services allow us to provide comprehensive solutions for those looking to explore new opportunities abroad. Here&apos;s a breakdown of our key services:
                        </p>

                    </div>
                    <div className="grid divide-y divide-gray-300/60 gap-12 children:py-5 first:pt-0 last:pb-0">
                        {
                            features.map(feature => (
                                <FeatureItem key={feature.id} {...feature} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
