"use client";

import React, { useState } from "react";
import TourCard from "./TourCard";

const CATEGORIES = ["All", "Sacred Circuit", "Alpine Adventure"];

const ToursSection = ({ tours }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? tours
      : tours.filter((t) => t.category === activeCategory);
  const sacred = filtered.filter((t) => t.category === "Sacred Circuit");
  const alpine = filtered.filter((t) => t.category === "Alpine Adventure");
  // const chardham = filtered.filter((t) => t.category === "CharDham");

  return (
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

        {(activeCategory === "All" || activeCategory === "Alpine Adventure") &&
          alpine.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-forest-700 rounded-full" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900">
                    Munsyari Base Trek (Alpine Adventure)
                  </h3>
                  <p className="text-gray-500 text-sm">
                    High-altitude treks — Munsyari · Bankathiya · Milam Glacier
                    · Khaliya · Nanda devi (East Trek) · Nagni Dhura(Unexplored)
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

        {/* {(activeCategory === "All" || activeCategory === "CharDham") &&
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
          )} */}
      </div>
    </section>
  );
};

export default ToursSection;
