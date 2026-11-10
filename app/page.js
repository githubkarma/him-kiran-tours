import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ToursSection from "../components/ToursSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// ── SEO (replaces the <head> tags from public/index.html) ────────────────────
export const metadata = {
  title: "Him Kiran Tours | Himalayan Treks from Haldwani",
  description:
    "Best tour operator in Haldwani, Uttarakhand. Adi Kailash, Om Parvat, Milam Glacier, Munsyari, Khaliya Top packages. All India Tourist Permit holder. Book via WhatsApp.",
  keywords:
    "Haldwani trek, Kumaon trek, Adi Kailash yatra, Om Parvat trek, Milam glacier trek, Munsyari tour package, Uttarakhand tour operator, Haldwani travel agent, Khaliya top trek, Darma valley trek, Kedarnath yatra, Badrinath yatra, Yamunotri yatra, Gangotri yatra, best travel agent Haldwani, Kumaon travel, himalayan trek Haldwani",
  authors: [{ name: "Him Kiran Tours, Haldwani" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Him Kiran Tours",
    title: "Him Kiran Tours | Himalayan Treks",
    description:
      "Trek and tour operator based in Haldwani, Uttarakhand. Specialising in Adi Kailash, Milam Glacier, Munsyari and all Uttarakhand packages. All India Tourist Permit holder.",
    url: "https://himkirantours.in",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Himalayan peaks — Him Kiran Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Him Kiran Tours | Himalayan Treks from Haldwani",
    description:
      "Trek and tour operator in Haldwani, Uttarakhand. Adi Kailash, Milam Glacier and more.",
    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
    ],
  },
  other: { "geo.placename": "Haldwani, Uttarakhand, India" },
};

export const viewport = { themeColor: "#1e40af" };

// ── YOUR TOUR DATA ────────────────────────────────────────────────────────────
// To edit a tour: change values below and save. No database needed.
// imageUrl: paste your Cloudinary URL, or use "/images/photo.jpg" for local files
// ─────────────────────────────────────────────────────────────────────────────
const TOURS = [
  {
    id: 1,
    title: "Adi Kailash Yatra",
    category: "Sacred Circuit",
    // destinations: ["Dharchula", "Gunji", "Adi Kailash", "Om Parvat"],
    duration: "Customized Itinerary ",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      " Adi Kailash (5,945 m) in Uttarakhand's Pithoragarh district is a deeply sacred Himalayan pilgrimage. Surrounded by serene alpine lakes and majestic snow-capped peaks, it offers breathtaking spiritual vistas, ancient lore, and unforgettable high-altitude adventure.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1781180663/adikailashwide_1_1_hdfjab.png",
    // highlights: [
    //   "Natural snow ॐ symbol on Om Parvat",
    //   "Parvati Sarovar sacred lake at 18,000 ft",
    // ],
  },
  {
    id: 2,
    title: "Om Parvat",
    category: "Sacred Circuit",
    // destinations: ["Pithoragarh", "Darma Valley", "Om Parvat Base"],
    duration: "Customized Itinerary",
    // difficulty: "Hard",
    price: "Contact Us For Price",
    description:
      "Combine the mystical Om Parvat darshan with an exploration of the pristine Darma Valley — one of the most secluded valleys in the Kumaon Himalayas, home to ancient Bhotiya villages and rare Himalayan flora.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1781179115/omparvat_w7wohj.jpg",
    // highlights: [
    //   "Views of Panchachuli peaks",
    //   "Cultural interaction with Bhotiya communities",
    // ],
  },
  {
    id: 3,
    title: "Darma Valley Cultural Trek",
    category: "Sacred Circuit",
    // destinations: ["Dharchula", "Sobla", "Thal", "Darma Valley"],
    duration: "Customized Itinerary",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      "A soul-stirring journey through Darma Valley dotted with apple orchards, ancient monasteries, and villages that have preserved centuries-old Tibetan-influenced culture. Opens to panoramic views of the Panchachuli and Chhanguch ranges.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1781178181/darma_kxba7o.jpg",
    // highlights: [
    //   "Apple orchards and village homestays",
    //   "Ancient monasteries and prayer flags",
    // ],
  },
  {
    id: 4,
    title: "Bankatiya — The Glacier Gateway",
    category: "Alpine Adventure",
    // destinations: ["Haldwani", "Munsyari", "Bankatiya Base Camp", "Milam Gateway"],
    duration: "Customized Itinerary",
    // difficulty: "Moderate to Challenging",
    price: "Contact Us For Price",
    description:
      "A professional-grade expedition starting from Munsyari into the heart of the Johar Valley. Bankatiya serves as the crucial base camp for the Milam Glacier trek, offering a raw, high-altitude experience surrounded by the towering peaks of the Nanda Devi biosphere.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1781178181/bankathiya_k56aau.jpg",
    // highlights: [
    //   "Base camp experience at the edge of the Milam route",
    //   "Traditional Johar Valley hospitality in remote hamlets",
    //   "Panoramic views of the Hardeol and Trishuli peaks",
    // ],
  },
  {
    id: 5,
    title: "Milam Glacier Trek",
    category: "Alpine Adventure",
    // destinations: [
    //   "Munsyari",
    //   "Lilam",
    //   "Bugdiyar",
    //   "Milam Glacier",
    //   "Bankathiya",
    // ],
    duration: "Customized Itinerary",
    // difficulty: "Hard",
    price: "Contact Us For Price",
    description:
      "One of the most rewarding high-altitude treks in Kumaon, following the ancient trade route to Tibet along the Goriganga river. The Bankathiya campsite offers jaw-dropping views of some of the most remote peaks in India.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774944945/milam-glacier_rb1f0s.jpg",
    // highlights: [
    //   "Milam Glacier at 13,000+ ft",
    //   "Ancient India-Tibet trade route",
    // ],
  },
  {
    id: 6,
    title: "Khaliya Top Trek",
    category: "Alpine Adventure",
    // destinations: ["Munsyari", "Khaliya Top (3500m)"],
    duration: "Customized Itinerary",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      "A short but spectacular trek to Khaliya Top at 3,500m offering a panoramic canvas of Panchachuli, Rajrambha, Nanda Kot, and Trishul peaks. Perfect for first-time trekkers who want maximum views with manageable effort.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774944945/khaliya_esp613.jpg",
    // highlights: [
    //   "360° view of 5 major Himalayan peaks",
    //   "Ideal for first-time trekkers",
    // ],
  },
  {
    id: 7,
    title: "Nanda Devi (East Trek)",
    category: "Alpine Adventure",
    // destinations: ["Munsyari", "Khaliya Top (3500m)"],
    duration: "Customized Itinerary",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      "The Nanda Devi East Trek (also known as the Nanda Devi East Base Camp Trek) is a demanding yet breathtaking adventure in the Kumaon region of Uttarakhand. Beginning in the picturesque hamlet of Munsiyari, this journey takes you through dense bamboo forests, deep gorges, and rustic villages, culminating in front of the majestic 7,434-meter Nanda Devi East peak.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1781178180/nandadevi_syzrqp.jpg",
    // highlights: [
    //   "360° view of 5 major Himalayan peaks",
    //   "Ideal for first-time trekkers",
    // ],
  },
  {
    id: 8,
    title: "Nagni Dhura (Unexplored)",
    category: "Alpine Adventure",
    // destinations: ["Munsyari", "Khaliya Top (3500m)"],
    duration: "Customized Itinerary",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      "The Nagni Dhura Trek is a hidden, offbeat alpine trail located in the Munsiyari block of the Pithoragarh district in Uttarakhand. Far less crowded than other commercial Himalayan paths, this moderate-to-hard trek serves as a pristine alternative for travelers seeking raw, untouched wilderness, expansive meadow tops, and dramatic snow-capped vistas.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1781178179/nagnidhura_1_cwjmzv.png",
    // highlights: [
    //   "360° view of 5 major Himalayan peaks",
    //   "Ideal for first-time trekkers",
    // ],
  },
  // ... existing tours 1-6 ...
  // {
  //   id: 7,
  //   title: "Yamunotri — The Source",
  //   category: "CharDham",
  //   // duration: "2 Days / 1 Night",
  //   price: "Contact Us For Price",
  //   description:
  //     "The first stop of the Char Dham yatra. High in the Garhwal Himalayas, trek to the crystal-clear source of the Yamuna River. Dip in the Surya Kund's thermal springs and seek blessings at the silver idol of Goddess Yamuna.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968086/Yamunotri_Temple_View_vkkevk.jpg",
  //   // highlights: ["Divya Shila sacred rock", "Thermal spring 'Surya Kund'"],
  // },
  // {
  //   id: 8,
  //   title: "Gangotri — Descent of Ganga",
  //   category: "CharDham",
  //   // duration: "2 Days / 1 Night",
  //   price: "Contact Us For Price",
  //   description:
  //     "Surrounded by deodar and pine forests, Gangotri is where Heaven met Earth. Visit the white granite temple of Goddess Ganga and witness the Bhagirathi river gushing through the rocky Shivalik ranges.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968073/gangotridham_rk3awc.jpg",
  //   // highlights: ["Bhagirath Shila stone", "Gauri Kund waterfalls"],
  // },
  // {
  //   id: 9,
  //   title: "Kedarnath — Lord of the North",
  //   category: "CharDham",
  //   // duration: "3 Days / 2 Nights",
  //   price: "Contact Us For Price",
  //   description:
  //     "The most remote of the Char Dhams, situated at 11,755 ft against the backdrop of the Kedarnath peak. A 16km trek leads you to one of the 12 Jyotirlingas, standing as a testament to eternal faith and resilience.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968088/kedarnath1_uycpgb.jpg",
  //   // highlights: ["Ancient 8th-century temple", "Mandakini river views"],
  // },
  // {
  //   id: 10,
  //   title: "Badrinath — The Abode of Vishnu",
  //   category: "CharDham",
  //   // duration: "2 Days / 1 Night",
  //   price: "Contact Us For Price",
  //   description:
  //     "Guarded by the Nar and Narayan peaks, Badrinath is the final destination. Bathe in the Tapt Kund before entering the brightly painted facade of the temple, where Lord Vishnu meditates in the Padmasana posture.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968073/badrinath_i5mbas.jpg",
  //   // highlights: ["Neelkanth Peak sunrise", "Mana — The Last Indian Village"],
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ToursSection tours={TOURS} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
