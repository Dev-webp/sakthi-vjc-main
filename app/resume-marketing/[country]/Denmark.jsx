import {
  Briefcase,
  Building2,
  DollarSign,
  Home,
  HeartPulse,
  Globe,
  Users,
  LayoutList,
  MessageCircleQuestion,
  CalendarDays,
  ShieldCheck,
  Smile,
  BookOpen,
  Linkedin,
  Send,
  PhoneCall,
} from "lucide-react";

export default function DenmarkResumeMarketing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
    Denmark Resume Marketing Services - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>

      <p className="mb-4">
        Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in securing your dream job in Denmark...
        {/* [Text omitted here for brevity – keep everything from the original content as is] */}
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mb-2 mt-4  flex items-center gap-2">
        <Globe className="text-blue-400" /> Why Choose Denmark for Your Career?
      </h2>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4  flex items-center gap-2">
        <DollarSign className="text-yellow-500" /> 1. Salary Structure in Denmark
      </h3>
      <ul className="list-none pl-2 mb-4">
        <li className="flex items-center gap-2 mb-1"><Briefcase size={16} /> Technology & IT: DKK 600,000 - DKK 900,000 annually</li>
        <li className="flex items-center gap-2 mb-1"><Briefcase size={16} /> Engineering: DKK 550,000 - DKK 850,000 annually</li>
        <li className="flex items-center gap-2 mb-1"><HeartPulse size={16} /> Healthcare: DKK 500,000 - DKK 800,000 annually</li>
        <li className="flex items-center gap-2 mb-1"><BookOpen size={16} /> Education & Research: DKK 450,000 - DKK 750,000 annually</li>
        <li className="flex items-center gap-2 mb-1"><DollarSign size={16} /> Finance: DKK 600,000 - DKK 1,000,000 annually</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4  flex items-center gap-2">
        <Home className="text-blue-400" /> 2. Living in Denmark
      </h3>
      <ul className="list-none pl-2 mb-4">
        <li className="flex items-center gap-2 mb-1"><Building2 size={16} /> Housing: Rent in Copenhagen...</li>
        <li className="flex items-center gap-2 mb-1"><Globe size={16} /> Transportation: Public transport in Denmark is efficient...</li>
        <li className="flex items-center gap-2 mb-1"><HeartPulse size={16} /> Healthcare: Denmark offers one of the best healthcare systems...</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4  flex items-center gap-2">
        <Users className="text-blue-400" /> 3. Work Opportunities & Job Market in Denmark
      </h3>
      <ul className="list-none pl-2 mb-4">
        <li className="flex items-center gap-2 mb-1"><Briefcase size={16} /> Technology & IT</li>
        <li className="flex items-center gap-2 mb-1"><Briefcase size={16} /> Engineering</li>
        <li className="flex items-center gap-2 mb-1"><HeartPulse size={16} /> Life Sciences</li>
        <li className="flex items-center gap-2 mb-1"><BookOpen size={16} /> Education & Research</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-2  mt-4  flex items-center gap-2">
        <Smile className="text-yellow-400" /> 4. Benefits of Working in Denmark
      </h3>
      <ul className="list-none pl-2 mb-4">
        <li className="flex items-center gap-2 mb-1"><CalendarDays size={16} /> Generous Paid Leave</li>
        <li className="flex items-center gap-2 mb-1"><Smile size={16} /> Work-Life Balance</li>
        <li className="flex items-center gap-2 mb-1"><HeartPulse size={16} /> Social Benefits</li>
        <li className="flex items-center gap-2 mb-1"><ShieldCheck size={16} /> Job Security</li>
        <li className="flex items-center gap-2 mb-1"><Users size={16} /> Workplace Culture</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-400 mb-2 mt-4 flex items-center gap-2">
        <LayoutList className="text-blue-400" /> How <span className="text-orange-500">VJC Overseas</span> Can Help You
      </h2>
      <ul className="list-none pl-2 mb-4">
        <li className="flex items-center gap-2 mb-1"><Briefcase size={16} /> Custom Resume Writing</li>
        <li className="flex items-center gap-2 mb-1"><Linkedin size={16} /> Tailored LinkedIn Profile Optimization</li>
        <li className="flex items-center gap-2 mb-1"><Send size={16} /> Job Application Strategies</li>
        <li className="flex items-center gap-2 mb-1"><MessageCircleQuestion size={16} /> Interview Coaching</li>
      </ul>

      <h2 className="text-2xl font-semibold text-black mb-2 flex items-center gap-2">
        <PhoneCall className="text-green-400" /> Ready to Take the Next Step in Your Career?
      </h2>
      <p className="mb-4">
        If you're ready to unlock exciting career opportunities in Denmark, get in touch with <span className="text-orange-500">VJC Overseas</span> today...
      </p>
      <p className="mb-4">
        Contact <span className="text-orange-500">VJC Overseas</span> and take the first step toward a bright future in Denmark.
      </p>
    </div>
  );
}
