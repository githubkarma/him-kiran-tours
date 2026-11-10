import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted by Next at build time (replaces the Google Fonts @import in index.css)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

// ── Structured data (fixed from index.html) ──────────────────────────────────
// - @type: TravelAgency (TourOperator is not a schema.org type)
// - removed HTML comments and the markdown-link url that made the old JSON invalid
// - removed "offers": prices must match what the page shows, and the page says
//   "Contact Us For Price"
// - telephone matches Contact.jsx (the old JSON-LD had 89859, Contact has 89589)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Him Kiran Tours",
  description:
    "Trek and tour operator based in Haldwani, Uttarakhand specialising in Himalayan treks and all Uttarakhand packages. All India Tourist Permit holder.",
  url: "https://himkirantours.in",
  telephone: "+91-89589-53939",
  email: "info@himkirantours.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Haldwani Bus Stand",
    addressLocality: "Haldwani",
    addressRegion: "Uttarakhand",
    postalCode: "263139",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-19:00",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: "India",
  hasMap: "https://maps.google.com/?q=Haldwani,Uttarakhand",
  sameAs: ["https://instagram.com/himkirantours"],
  image:
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "w5dr5vezhd");`}
        </Script>
      </body>
    </html>
  );
}
