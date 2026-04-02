import React from "react";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div
      className="absolute inset-0 hero-bg"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=90')`,
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      {/* Trust badges row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Starting from Haldwani, Uttarakhand
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
        Him Kiran
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
          Tours
        </span>
      </h1>

      <p className="text-white/80 text-lg md:text-2xl font-light tracking-wide mb-4">
        Your Gateway from Haldwani to the Himalayas
      </p>
      <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
        Himalayan treks · Char Dham Yatra · Uttarakhand tours
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/#tours"
          className="bg-mountain-900 hover:bg-mountain-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1"
        >
          Explore Tours
        </a>
        <a
          href="https://wa.me/+917303422101?text=Hello!%20I'm%20interested%20in%20a%20tour.%20Please%20share%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-forest-700 hover:bg-forest-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.997 0C5.374 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.825L.057 23.486a.75.75 0 00.917.917l5.68-1.482A11.942 11.942 0 0011.997 24C18.626 24 24 18.627 24 12.003 24 5.374 18.626 0 11.997 0zm0 21.818a9.81 9.81 0 01-5.003-1.368l-.36-.214-3.724.971.997-3.628-.234-.373a9.791 9.791 0 01-1.494-5.209c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.821-9.842 9.821z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase"></span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </div>
  </section>
);

export default Hero;
