import React, { useState } from "react";
import Hero from "../components/Hero";
import TourCard from "../components/TourCard";
import Contact from "../components/Contact";

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
    duration: "5 Days / 4 Nights",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      'Embark on a divine pilgrimage to Adi Kailash, the earthly abode of Lord Shiva. Witness the sacred Om Parvat — a natural snow formation of the holy "ॐ" symbol — as you traverse stunning high-altitude valleys and ancient trade routes.',
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774966813/adikalash_hr8feu.jpg",
    highlights: [
      "Natural snow ॐ symbol on Om Parvat",
      "Parvati Sarovar sacred lake at 18,000 ft",
    ],
  },
  {
    id: 2,
    title: "Om Parvat",
    category: "Sacred Circuit",
    // destinations: ["Pithoragarh", "Darma Valley", "Om Parvat Base"],
    duration: "5 Days / 4 Nights",
    // difficulty: "Hard",
    price: "Contact Us For Price",
    description:
      "Combine the mystical Om Parvat darshan with an exploration of the pristine Darma Valley — one of the most secluded valleys in the Kumaon Himalayas, home to ancient Bhotiya villages and rare Himalayan flora.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774966813/omparvat1_tcauk3.jpg",
    highlights: [
      "Views of Panchachuli peaks",
      "Cultural interaction with Bhotiya communities",
    ],
  },
  {
    id: 3,
    title: "Darma Valley Cultural Trek",
    category: "Sacred Circuit",
    // destinations: ["Dharchula", "Sobla", "Thal", "Darma Valley"],
    duration: "5 Days / 4 Nights",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      "A soul-stirring journey through Darma Valley dotted with apple orchards, ancient monasteries, and villages that have preserved centuries-old Tibetan-influenced culture. Opens to panoramic views of the Panchachuli and Chhanguch ranges.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774944945/darma_valley_3_g9imzt.jpg",
    highlights: [
      "Apple orchards and village homestays",
      "Ancient monasteries and prayer flags",
    ],
  },
  {
    id: 4,
    title: "Bankatiya — The Glacier Gateway",
    category: "Alpine Adventure",
    // destinations: ["Haldwani", "Munsyari", "Bankatiya Base Camp", "Milam Gateway"],
    duration: "5 Days / 4 Nights",
    // difficulty: "Moderate to Challenging",
    price: "Contact Us For Price",
    description:
      "A professional-grade expedition starting from Munsyari into the heart of the Johar Valley. Bankatiya serves as the crucial base camp for the Milam Glacier trek, offering a raw, high-altitude experience surrounded by the towering peaks of the Nanda Devi biosphere.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774944946/bankathiya_trek_zglfxz.jpg",
    highlights: [
      "Base camp experience at the edge of the Milam route",
      "Traditional Johar Valley hospitality in remote hamlets",
      "Panoramic views of the Hardeol and Trishuli peaks",
    ],
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
    duration: "5 Days / 4 Nights",
    // difficulty: "Hard",
    price: "Contact Us For Price",
    description:
      "One of the most rewarding high-altitude treks in Kumaon, following the ancient trade route to Tibet along the Goriganga river. The Bankathiya campsite offers jaw-dropping views of some of the most remote peaks in India.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774944945/milam-glacier_rb1f0s.jpg",
    highlights: [
      "Milam Glacier at 13,000+ ft",
      "Ancient India-Tibet trade route",
    ],
  },
  {
    id: 6,
    title: "Khaliya Top Trek",
    category: "Alpine Adventure",
    // destinations: ["Munsyari", "Khaliya Top (3500m)"],
    duration: "5 Days / 4 Nights",
    // difficulty: "Moderate",
    price: "Contact Us For Price",
    description:
      "A short but spectacular trek to Khaliya Top at 3,500m offering a panoramic canvas of Panchachuli, Rajrambha, Nanda Kot, and Trishul peaks. Perfect for first-time trekkers who want maximum views with manageable effort.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774944945/khaliya_esp613.jpg",
    highlights: [
      "360° view of 5 major Himalayan peaks",
      "Ideal for first-time trekkers",
    ],
  },
  // ... existing tours 1-6 ...
  {
    id: 7,
    title: "Yamunotri — The Source",
    category: "CharDham",
    // duration: "2 Days / 1 Night",
    price: "Contact Us For Price",
    description:
      "The first stop of the Char Dham yatra. High in the Garhwal Himalayas, trek to the crystal-clear source of the Yamuna River. Dip in the Surya Kund's thermal springs and seek blessings at the silver idol of Goddess Yamuna.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968086/Yamunotri_Temple_View_vkkevk.jpg",
    highlights: ["Divya Shila sacred rock", "Thermal spring 'Surya Kund'"],
  },
  {
    id: 8,
    title: "Gangotri — Descent of Ganga",
    category: "CharDham",
    // duration: "2 Days / 1 Night",
    price: "Contact Us For Price",
    description:
      "Surrounded by deodar and pine forests, Gangotri is where Heaven met Earth. Visit the white granite temple of Goddess Ganga and witness the Bhagirathi river gushing through the rocky Shivalik ranges.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968073/gangotridham_rk3awc.jpg",
    highlights: ["Bhagirath Shila stone", "Gauri Kund waterfalls"],
  },
  {
    id: 9,
    title: "Kedarnath — Lord of the North",
    category: "CharDham",
    // duration: "3 Days / 2 Nights",
    price: "Contact Us For Price",
    description:
      "The most remote of the Char Dhams, situated at 11,755 ft against the backdrop of the Kedarnath peak. A 16km trek leads you to one of the 12 Jyotirlingas, standing as a testament to eternal faith and resilience.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968088/kedarnath1_uycpgb.jpg",
    highlights: ["Ancient 8th-century temple", "Mandakini river views"],
  },
  {
    id: 10,
    title: "Badrinath — The Abode of Vishnu",
    category: "CharDham",
    // duration: "2 Days / 1 Night",
    price: "Contact Us For Price",
    description:
      "Guarded by the Nar and Narayan peaks, Badrinath is the final destination. Bathe in the Tapt Kund before entering the brightly painted facade of the temple, where Lord Vishnu meditates in the Padmasana posture.",
    imageUrl:
      "https://res.cloudinary.com/dmf3brw0e/image/upload/v1774968073/badrinath_i5mbas.jpg",
    highlights: ["Neelkanth Peak sunrise", "Mana — The Last Indian Village"],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Sacred Circuit", "Alpine Adventure", "CharDham"];
const AboutSection = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-mountain-900 text-xs font-semibold uppercase tracking-widest">
            About Us
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            Born in the Foothills,
            <br />
            Called to the Peaks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Him Kiran Tour was established to bring a new level of professional
            standards to the Kumaon Himalayas. While many travel agencies cover
            the entire country, we choose to do one thing perfectly: curate
            exceptional journeys through the unspoiled landscapes of Kumaon,
            Uttarakhand.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We operate as a dedicated bridge between the modern traveler and the
            deep, spiritual heritage of the mountains. By combining local
            logistical expertise with a commitment to seamless service, we
            ensure every tour is safe, authentic, and professionally managed
            from start to finish.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=85"
            alt="Himalayan landscape"
            className="rounded-2xl w-full h-96 object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-mountain-900 text-white rounded-2xl p-5 shadow-xl">
            <p className="font-display font-semibold text-lg">
              Starting from Haldwani
            </p>
            <p className="text-blue-200 text-sm mt-1">Uttarakhand, India</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? TOURS
      : TOURS.filter((t) => t.category === activeCategory);
  const sacred = filtered.filter((t) => t.category === "Sacred Circuit");
  const alpine = filtered.filter((t) => t.category === "Alpine Adventure");
  const chardham = filtered.filter((t) => t.category === "CharDham");
  return (
    <>
      <Hero />
      <AboutSection />

      <section id="tours" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-mountain-900 text-xs font-semibold uppercase tracking-widest">
              Our Packages
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-4">
              Himalayan Trek Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              All treks depart from Haldwani. Choose your adventure — a sacred
              pilgrimage circuit or a high-altitude alpine challenge.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-mountain-900 text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-mountain-900 hover:text-mountain-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {(activeCategory === "All" || activeCategory === "Sacred Circuit") &&
            sacred.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-mountain-900 rounded-full" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900">
                      The Sacred Circuit (Dharchula)
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Pilgrimages — Adi Kailash · Om Parvat · Darma Valley
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sacred.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              </div>
            )}

          {(activeCategory === "All" ||
            activeCategory === "Alpine Adventure") &&
            alpine.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-forest-700 rounded-full" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900">
                      The Alpine Adventure (Munsyari)
                    </h3>
                    <p className="text-gray-500 text-sm">
                      High-altitude treks — Munsyari · Milam Glacier · Khaliya
                      Top
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {alpine.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              </div>
            )}

          {(activeCategory === "All" || activeCategory === "CharDham") &&
            chardham.length > 0 && (
              <div className="mb-16" id="chardham">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-amber-600 rounded-full" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900">
                      The Holy Char Dham
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Garhwal Pilgrimage — Yamunotri · Gangotri · Kedarnath ·
                      Badrinath
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chardham.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              </div>
            )}
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Home;
