import React from "react";

// ── EDIT THESE WITH YOUR REAL DETAILS ────────────────────────
const INFO = {
  whatsapp: "+917303422101", // country code + number, no spaces
  phone: "+918958953939",
  email: "info@himkirantours.in",
  //   instagram: "Himkirantours", // just the handle, no @
  instagram: "himkirantours",
  address:
    "Near Haldwani Bus Stand, Haldwani, Nainital District, Uttarakhand — 263139",
};
// ─────────────────────────────────────────────────────────────

const waMsg = encodeURIComponent(
  "Hello! I'm interested in a Himalayan trek from Haldwani. Please share more details.",
);

const cards = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Call Us",
    value: INFO.phone,
    href: `tel:${INFO.phone.replace(/\s/g, "")}`,
    color: "bg-amber-500",
    hover: "hover:bg-amber-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.997 0C5.374 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.825L.057 23.486a.75.75 0 00.917.917l5.68-1.482A11.942 11.942 0 0011.997 24C18.626 24 24 18.627 24 12.003 24 5.374 18.626 0 11.997 0zm0 21.818a9.81 9.81 0 01-5.003-1.368l-.36-.214-3.724.971.997-3.628-.234-.373a9.791 9.791 0 01-1.494-5.209c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.821-9.842 9.821z" />
      </svg>
    ),
    label: "WhatsApp",
    value: INFO.whatsapp,
    sub: "Tap to open chat",
    href: `https://wa.me/${INFO.whatsapp}?text=${waMsg}`,
    color: "bg-green-500",
    hover: "hover:bg-green-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: INFO.email,
    sub: "We reply within 24 hrs",
    href: `mailto:${INFO.email}`,
    color: "bg-mountain-900",
    hover: "hover:bg-mountain-700",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    value: `@${INFO.instagram}`,
    sub: "Follow for trek updates",
    href: `https://instagram.com/${INFO.instagram}`,
    color: "bg-pink-500",
    hover: "hover:bg-pink-600",
  },
];

const Contact = () => (
  <section id="contact" className="py-24 bg-mountain-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">
          Reach Us
        </span>
        <h2 className="font-display text-4xl font-bold text-white mt-3 mb-4">
          Plan Your Himalayan Journey
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
          Drop us a message on any platform — we are always happy to help you
          find the right trek.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-7xl mx-auto">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`group flex flex-col items-center text-center gap-3 p-6 rounded-2xl ${c.color} ${c.hover} transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="w-12 h-12 bg-white/20 group-hover:bg-white/30 rounded-xl flex items-center justify-center text-white transition-colors">
              {c.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{c.label}</p>
              <p className="text-white/90 text-sm mt-0.5">{c.value}</p>
              <p className="text-white/60 text-xs mt-1">{c.sub}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
