import Image from 'next/image'
import Link from 'next/link'
import { FaUniversity, FaRegHandshake, FaGlobeAmericas, FaFileInvoice } from 'react-icons/fa';

export default function compFour() {
    return (
        <>
            <section className="py-8 bg-cover bg-center" style={{ backgroundImage: "url('/comp-21.webp')" }}>
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="mx-auto text-center max-w-xl">
                        <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-orange-500 uppercase">
                            Your Gateway to a Successful Life Abroad
                        </h1>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
                        <div className="space-y-3 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="font-display font-semibold text-2xl md:text-3xl text-orange-500 uppercase">
                                Expert Visa Services Tailored to Your Global Goals
                            </h1>
                            <div className="text-gray-700 space-y-2 mx-auto max-w-2xl lg:max-w-none text-justify">
                                <p>
                                    We offer expert visa and immigration services to help you embark on your journey to a better future. Our consultants are here to guide you every step of the way, ensuring a smooth and successful process.
                                </p>
                                <p>
                                    Whether you&apos;re looking to study, work, or settle in a new country, we provide tailored solutions to make your dreams of living abroad a reality. Let us help you navigate the complexities of international immigration with ease.
                                </p>
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <Link href="#" className="px-6 h-11 flex items-center rounded-lg bg-orange-500 text-white text-sm transition ease-linear hover:bg-gray-900">Consult Now</Link>
                            </div>
                            <div className="grid grid-cols-3 w-full italic">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800">15years</h2>
                                    <span className="text-gray-600">Experience</span>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800">+10000</h2>
                                    <span className="text-gray-600">Projects</span>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800">95%</h2>
                                    <span className="text-gray-600">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-10">
                            <div className="max-w-full relative">
                                <span className="absolute inset-x-0 top-0 bottom-0 rounded-lg scale-[1.04] bg-gradient-to-b from-gray-200" />
                                <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100" />
                                <Image src="/2.webp" width={1240} height={1376} alt="Developer with laptop smile" className="relative w-full h-auto max-h-96 lg:max-h-[26rem] rounded-lg" />
                            </div>
                        </div>
                        <div className="space-y-3 lg:space-y-3">
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-3 bg-orange-50 border border-gray-100/80 rounded-lg">
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 border border-gray-100/70">
                                    <FaUniversity className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg ">Study Abroad Opportunities</span>
                                    <p className="text-gray-700 text-justify">
                                        We offer expert guidance to help you pursue your education overseas.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-orange-50 border border-gray-100/80 rounded-lg">
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 border border-gray-100/70">
                                    <FaRegHandshake className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg">Work Opportunities Abroad</span>
                                    <p className="text-gray-700 text-justify">
                                        Explore job opportunities with our professional visa services and support.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-orange-50 border border-gray-100/80 rounded-lg">
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 border border-gray-100/70">
                                    <FaGlobeAmericas className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg">Immigration Support</span>
                                    <p className="text-gray-700 text-justify">
                                        We offer full immigration assistance to help you settle in your new country.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-orange-50 border border-gray-100/80 rounded-lg">
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 border border-gray-100/70">
                                    <FaFileInvoice className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg">Visa Processing</span>
                                    <p className="text-gray-700 text-justify">
                                        Our team helps process your visa application swiftly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
