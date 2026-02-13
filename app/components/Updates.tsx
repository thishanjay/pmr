"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const updates = [
  {
    title: "New Issue Published – Jan 2026",
    description: "The latest PMR journal issue is now available for download.",
    image: "/updates/fom_uop_sl_cover.jpeg",
    link: "/downloads",
  },
  {
    title: "Manuscript Submission Open",
    description: "Authors can now submit manuscripts for the upcoming issue.",
    image: "/updates/images.jpeg",
    link: "/submission",
  },
];

const Updates = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % updates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto mt-10">
      <Link href={updates[current].link}>
        <div
          className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-cover bg-center flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${updates[current].image})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 text-white text-center px-6">
            <h2 className="text-3xl font-bold mb-3">
              {updates[current].title}
            </h2>
            <p className="text-lg">{updates[current].description}</p>
          </div>
        </div>
      </Link>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {updates.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              index === current ? "bg-red-900 scale-110" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Updates;
