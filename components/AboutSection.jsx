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

export default AboutSection;
