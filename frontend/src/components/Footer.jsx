import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-950 text-white/60 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold font-display text-sm">
                HK
              </span>
            </div>
            <span className="text-white font-display font-semibold">
              Him Kiran Tours
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Licensed tour operator based in Haldwani, Uttarakhand. Specialising
            in Himalayan treks, Char Dham Yatra and all-India travel.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-300 text-xs px-3 py-2 rounded-lg">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            All India Tourist Permit
          </div>
        </div>

        {/* Haldwani Treks */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Haldwani Treks
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Adi Kailash Yatra",
              "Om Parvat & Darma Valley",
              "Bankatiya Base Camp",
              "Milam Glacier Trek",
              "Khaliya Top Trek",
            ].map((t) => (
              <li key={t}>
                <a
                  href="/#tours"
                  className="hover:text-white transition-colors"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Char Dham */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Char Dham Yatra
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Yamunotri Yatra",
              "Gangotri Yatra",
              "Kedarnath Yatra",
              "Badrinath Yatra",
              "Complete Circuit",
            ].map((t) => (
              <li key={t}>
                <a
                  href="/#chardham"
                  className="hover:text-white transition-colors"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Uttarakhand */}
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p>© {new Date().getFullYear()} Him Kiran Tour. All rights reserved.</p>
        <p>Made with love in Haldwani, Uttarakhand</p>
      </div>
    </div>
  </footer>
);

export default Footer;
