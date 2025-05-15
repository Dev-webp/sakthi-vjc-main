const CtaSection = () => {
    return (
        <section className="py-6">
            <div className="max-w-6xl mx-auto px-5 sm:px-10 md:px-12 lg:px-2">
                <div className="p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 flex flex-col space-y-6 relative">
                    <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-orange-600 to-orange-500 blur-2xl z-10 -top-7 -left-7 opacity-40">
                    </div>
                    <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-orange-600 to-orange-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40">
                    </div>
                    <div className="lg:h-full flex flex-col items-center text-center justify-center space-y-8 mx-auto max-w-5xl">
                        <h1 className="font-bold text-gray-900 text-4xl uppercase">
                            Join over <span className="text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 to-orange-400">Thousand&apos;s</span> of successful clients
                        </h1>
                        <p className="text-gray-700 text-center max-w-xl">
                            Our expert team is dedicated to helping you navigate the UK visa and immigration process smoothly, ensuring a hassle-free experience every step of the way.
                        </p>

                        <form className="w-full flex flex-col sm:items-center sm:flex-row gap-y-3 gap-x-4 max-w-lg mx-auto">
                            <input type="email" placeholder="johndoe@gmail.com" className="py-3 px-5 rounded-lg text-gray-800 bg-gray-200 outline-none w-full placeholder:text-gray-600" />
                            <button className="py-3 rounded-lg px-6 bg-orange-500 text-white font-medium text-base w-full sm:w-max flex justify-center">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-[0rem] lg:-bottom-[115rem] left-[4rem] w-56 h-56 bg-orange-600 rounded-full opacity-20"></div> */}
        </section>
    )
}

export default CtaSection;
