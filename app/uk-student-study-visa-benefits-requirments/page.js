import HeroSection from './HeroSection';
import CTASection from './CTASection';
import Nav from './Nav';
import Footer from './Footer';
import Studyinuk from './Studyinuk';
import StudentCounselling from './StudentCounselling';
import UKAdmissionProcess from './UKAdmissionProcess';
import ScholarshipUK from './ScholarshipUK';
import GuidanceSection from './GuidanceSection';
import ScholarshipOverview from './ScholarshipOverview';
import WhyVJC from './WhyVJC';
export default function StudyInUKPage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ScholarshipUK />
      <StudentCounselling />
      <Studyinuk />
      <UKAdmissionProcess />
      
      <ScholarshipOverview />
      <WhyVJC />
      <CTASection />
      <GuidanceSection />
      
      <Footer />
    </>
  );
}
