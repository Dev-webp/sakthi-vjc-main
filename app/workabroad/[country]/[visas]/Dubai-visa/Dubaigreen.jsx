import React from "react";
import Image from "next/image";

const DubaiGreenVisa = () => {
  return (
    <div className="font-[Times New Roman] p-5 mt-6 leading-relaxed">
      <h1 className="text-2xl font-bold text-center mb-4 text-black">
        Dubai Green Visa – <span className="text-green-600">Unlock a New Future in the UAE with VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row md:items-start md:gap-6 mb-4">
        <div className="flex-1">
          <p>
            Are you an Indian professional, investor, or skilled freelancer looking to live and work in Dubai
            without the need for a local sponsor? The Dubai Green Visa is your gateway to long-term residency and
            career growth in the UAE's most dynamic city. At <strong>VJC Overseas</strong>, we help you understand the
            Green Visa process and guide you at every step — from eligibility to settlement.
          </p>
        </div>
        <Image
          src="/dubaigreenvisa.jpg"
          alt="Dubai Green Visa"
          width={300}
          height={200}
          className="rounded-md shadow-lg mt-4 md:mt-0"
        />
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">🌱 What is the Dubai Green Visa?</h2>
      <p>
        The Dubai Green Visa is a long-term residency visa introduced by the UAE government to attract skilled
        professionals, entrepreneurs, investors, and freelancers. Unlike traditional employment visas, the Green Visa
        offers independence from employer sponsorship, giving you greater freedom and flexibility in your
        professional journey.
      </p>
      <p className="mt-2">
        This visa is part of the UAE’s visionary effort to diversify its economy and empower a global talent pool. It is
        valid for 5 years, with easy renewal options.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">🎯 Who is Eligible for the Dubai Green Visa?</h2>
      <ul className="list-disc pl-6">
        <li>Skilled professionals with a valid employment contract and a minimum salary of AED 15,000 per month</li>
        <li>Freelancers with relevant qualifications and UAE-recognized permits</li>
        <li>Investors or partners in commercial activities</li>
        <li>Entrepreneurs with proven business records or start-up potential</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">✅ Top Benefits of the Dubai Green Visa for Indians</h2>
      <ul className="list-disc pl-6">
        <li>No Local Sponsor Required – Enjoy freedom from employer restrictions.</li>
        <li>5-Year Validity – Greater stability for professionals and families.</li>
        <li>Family Sponsorship – Bring spouse, children (up to age 25), and parents.</li>
        <li>Business & Freelance Flexibility – Legally register and operate businesses or freelance.</li>
        <li>Access to UAE’s Top Services – Healthcare, education, banking, and real estate.</li>
        <li>Renewable & Upgradable – Extend or transition to other long-term residencies.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">💰 Cost of Living in Dubai for Indian Expats (on Green Visa)</h2>
      <div className="border border-green-400 rounded-lg p-4 bg-green-50">
        <ul className="list-disc pl-6">
          <li><strong>Accommodation:</strong> ₹75,000 – ₹1,50,000 (1BHK to 2BHK in expat areas)</li>
          <li><strong>Groceries & Food:</strong> ₹15,000 – ₹25,000 (Indian groceries easily available)</li>
          <li><strong>Transportation:</strong> ₹5,000 – ₹10,000 (Public + ride-hailing)</li>
          <li><strong>Health Insurance:</strong> ₹10,000 – ₹20,000 (Mandatory)</li>
          <li><strong>Schooling:</strong> ₹25,000 – ₹70,000 (Indian curriculum schools)</li>
        </ul>
        <p className="mt-2 text-sm text-green-800 font-semibold">
          💡 Tip: Indian communities thrive in areas like Bur Dubai, Karama, and Al Nahda — great for networking & cultural comfort.
        </p>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">🌍 Why Choose Dubai as Your Career Destination?</h2>
      <ul className="list-disc pl-6">
        <li>Tax-Free Income: 0% personal income tax</li>
        <li>Global Business Hub: Over 200 nationalities and Fortune 500 firms</li>
        <li>World-Class Infrastructure: Best-in-class airports, education & lifestyle</li>
        <li>Safe & Secure: One of the safest cities globally</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">🚀 Apply for Dubai Green Visa with VJC Overseas – Your Trusted UAE Visa Experts</h2>
      <p>
        With over a decade of expertise, <strong>VJC Overseas</strong> simplifies your Dubai Green Visa application journey:
      </p>
      <ul className="list-disc pl-6">
        <li>Free Eligibility Check</li>
        <li>Document Assistance & Government Approvals</li>
        <li>Business/Freelance Setup Guidance</li>
        <li>Family Visa Processing</li>
        <li>Post-Arrival Assistance in Dubai</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">📞 Ready to Move to Dubai on a Green Visa?</h2>
      <p>
        Let’s build your dream in Dubai — on your terms. Contact VJC Overseas today for a free consultation and
        discover how you can thrive with the Dubai Green Visa.
      </p>
      <p className="mt-2">
        📞 <strong>Call:</strong> +91-9160449000 <br />
        📩 <strong>Email:</strong> info@vjcoverseas.com <br />
        🌐 <strong>Visit:</strong> www.vjcoverseas.com
      </p>
    </div>
  );
};

export default DubaiGreenVisa;
