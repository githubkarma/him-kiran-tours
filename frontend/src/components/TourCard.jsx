import React from "react";

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const WHATSAPP_NUMBER = "+917303422101"; // replace with your number

const TourCard = ({ tour }) => {
  const waMsg = encodeURIComponent(
    `Hello! I'm interested in the "${tour.title}" trek from Haldwani. Please share more details.`,
  );

  return (
    <div className="tour-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden h-52">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
        <span className="absolute top-3 left-3 bg-mountain-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tour.category}
        </span>
        <div className="absolute bottom-3 right-3 bg-white text-mountain-900 font-bold text-sm px-3 py-1.5 rounded-xl shadow-lg">
          {tour.price.toLocaleString("en-IN")}
          <span className="font-normal text-gray-500 text-xs"></span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-mountain-900 text-lg leading-snug">
            {tour.title}
          </h3>
          {/* <span
            className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${difficultyColors[tour.difficulty] || "bg-gray-100 text-gray-700"}`}
          >
            {tour.difficulty}
          </span> */}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {tour.duration}
          </span>
          {/* <span className="flex items-center gap-1">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            From {tour.origin.split(",")[0]}
          </span> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {tour.description}
        </p>
        {/* <div className="flex flex-wrap gap-1.5 mb-4">
          {tour.destinations.map((dest) => (
            <span
              key={dest}
              className="bg-blue-50 text-mountain-900 text-xs px-2 py-0.5 rounded-full border border-blue-100"
            >
              {dest}
            </span>
          ))}
        </div> */}
        {tour.highlights?.length > 0 && (
          <ul className="text-xs text-gray-500 space-y-1 mb-4">
            {tour.highlights.slice(0, 2).map((h) => (
              <li key={h} className="flex items-start gap-1.5">
                <span className="text-forest-700 mt-0.5">✓</span> {h}
              </li>
            ))}
          </ul>
        )}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mt-auto"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.997 0C5.374 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.825L.057 23.486a.75.75 0 00.917.917l5.68-1.482A11.942 11.942 0 0011.997 24C18.626 24 24 18.627 24 12.003 24 5.374 18.626 0 11.997 0zm0 21.818a9.81 9.81 0 01-5.003-1.368l-.36-.214-3.724.971.997-3.628-.234-.373a9.791 9.791 0 01-1.494-5.209c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.821-9.842 9.821z" />
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TourCard;
