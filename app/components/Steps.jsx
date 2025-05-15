import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CompFour() {
    const services = [
        { 
            id: 1, 
            title: 'Counselling & Consultation', 
            icon: '/1.png', // PNG icon
            image: '/2.webp',
            description: 'Expert guidance tailored to your specific needs to ensure a smooth visa process.' 
        },
        { 
            id: 2, 
            title: 'Eligibility Check', 
            icon: '/2.png', // PNG icon
            image: '/22.jpg',
            description: 'Comprehensive evaluation of your qualifications and documentation.' 
        },
        { 
            id: 3, 
            title: 'Documents Preparation', 
            icon: '/3.png', // PNG icon
            image: '/25.jpg',
            description: 'Thorough assistance in preparing all necessary documents for your application.' 
        },
        { 
            id: 4, 
            title: 'Submission of Application', 
            icon: '/4.png', // PNG icon
            image: '/23.jpg',
            description: 'Ensure your application is submitted accurately and on time.' 
        },
        { 
            id: 5, 
            title: 'Interview Preparation', 
            icon: '/5.png', // PNG icon
            image: '/24.jpg',
            description: 'Mock interviews and tips to confidently handle visa interviews.' 
        },
        { 
            id: 6, 
            title: 'Visa Approval & Departure', 
            icon: '/6.png', // PNG icon
            image: '/26.jpg',
            description: 'Step-by-step support until you successfully embark on your journey.' 
        },
    ];

    const [selectedImage, setSelectedImage] = useState(services[0].image); // Default to the first service image
    const [selectedService, setSelectedService] = useState(services[0].id); // Default to the first service id

    const handleImageChange = (imageSrc, service) => {
        setSelectedImage(imageSrc);
        setSelectedService(service);
    };

    return (
        <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/comp-21.webp')" }}>
            <div className="mx-auto lg:max-w-7xl px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="relative font-bold text-5xl sm:text-6xl text-orange-500 uppercase tracking-wide">
                        Easy Visa Process
                    </h1>
                    <p className="text-lg text-gray-700 mt-4">Your Roadmap to Getting a Visa Successfully</p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Service Column 1 */}
                    <div className="space-y-8">
                        {services.slice(0, 3).map((service) => (
                            <motion.div
                                key={service.id}
                                onClick={() => handleImageChange(service.image, service.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center justify-between gap-6 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                                    selectedService === service.id
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-white border border-gray-200 shadow-md hover:bg-orange-100'
                                }`}
                            >
                                <div className={`flex items-center gap-4`}>
                                    <div className={`p-4 rounded-full ${
                                        selectedService === service.id ? 'bg-white' : 'bg-orange-100'
                                    }`}>
                                        <Image 
                                            src={service.icon} 
                                            alt={`${service.title} Icon`} 
                                            width={40} 
                                            height={40} 
                                        />
                                    </div>
                                    <span className="font-medium text-xl">{service.title}</span>
                                </div>
                                {selectedService === service.id && (
                                    <span className="text-2xl font-bold text-white">→</span>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Image & Content */}
                    <div className="flex flex-col items-center">
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-96 h-60 rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={selectedImage}
                                width={400}
                                height={300}
                                alt="Selected Service"
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                        {selectedService && (
                            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-center max-w-lg">
                                <h2 className="text-2xl font-semibold text-orange-500">
                                    {services.find(service => service.id === selectedService)?.title}
                                </h2>
                                <p className="text-gray-700 mt-4 text-base leading-relaxed">
                                    {services.find(service => service.id === selectedService)?.description}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Service Column 2 */}
                    <div className="space-y-8">
                        {services.slice(3).map((service) => (
                            <motion.div
                                key={service.id}
                                onClick={() => handleImageChange(service.image, service.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center justify-between gap-6 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                                    selectedService === service.id
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-white border border-gray-200 shadow-md hover:bg-orange-100'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-4 rounded-full ${
                                        selectedService === service.id ? 'bg-white' : 'bg-orange-100'
                                    }`}>
                                        <Image 
                                            src={service.icon} 
                                            alt={`${service.title} Icon`} 
                                            width={40} 
                                            height={40} 
                                        />
                                    </div>
                                    <span className="font-medium text-xl">{service.title}</span>
                                </div>
                                {selectedService === service.id && (
                                    <span className="text-2xl font-bold text-white">←</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
