import { Inter } from "next/font/google";
import "../globals.css"; // Import global styles

import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Free Immigration Assessment | VJC Overseas Visa Experts",
  description: "Get expert visa & immigration help with VJC Overseas. Take our free assessment to explore top opportunities and start your global journey today.",
  keywords:"work permit, canada immigration, new zealand, singapore visa, permanent residency, visa for united states, permanent residency usa, canada visa, visa uk visa, usa visa application, visa appointment us, visa schengen visa, usa visa, visa application for us visa, visit visa uae dubai"
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
     {/* Navbar is now included globally */}
      <main>{children}</main> {/* This renders all child pages */}
      <Footer/>

    </div>
  );
}
