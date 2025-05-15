import { Metadata } from 'next';
import { Inter, PT_Serif, Playfair_Display } from 'next/font/google';
import Script from 'next/script'; // Import Next.js Script
import './globals.css';
import FloatingWhatsApp from '@/app/components/FloatingWhatsapp';
import Nav from '@/app/components/Nav';
import Header from '@/app/components/Header';
import TawkToChat from '@/app/components/TawkToChat';
import Popupform from '@/app/components/Popupform';
import EligibilityBanner from "@/app/components/EligibilityBanner";
// Load Google Fonts using next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'VJC Overseas – World`s Leading Immigration Consultants | 2025',
  description: 'VJC Overseas – World`s top immigration consultants for PR, study, work & investor visas in Canada, Germany, USA, & Australia. Get expert guidance today!',
  keywords: 'australia pr,best immigration consultants in Bangalore,best immigration consultants in Hyderabad,canada immigration,germany job seeker visa,immigration consultants,new zealand immigration,overseas education consultants,study abroad,study abroad consultants,uk visa,usa visa,visa consultant near me,work permit,work visa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ptSerif.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-587PFF4');
          `}
        </Script>
        {/* End Google Tag Manager */}

        
        

        {/* Facebook Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2003555746606868');
                fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'Times new roman' }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-587PFF4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* <Popupform/> */}

        <Nav />
        <EligibilityBanner />
        {/* <Header/> */}
        {children}
        <FloatingWhatsApp />
        <TawkToChat />

        {/* NoScript Pixel (For Users with JS Disabled) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2003555746606868&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
