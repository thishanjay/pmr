"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const Articles = [
  {
    title: "Volume 1 - Issue 1",
    description: "First edition of the PMR journal.",
    image: "/articles/volume1.jpg",
    link: "/downloads",
  },
  {
    title: "Volume 2 - Issue 1",
    description: "Latest research and management reviews.",
    image: "/articles/volume1.jpg",
    link: "/downloads",
  },
];

const RecentArticles = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % Articles.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? Articles.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="flex flex-col h-full">
      {/* Matching Header Style */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-red-900 tracking-tight">
          Recent Articles
        </h2>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-red-900/20"></span>
          <BookOpen size={14} className="text-red-800/60" />
          <span className="h-px w-8 bg-red-900/20"></span>
        </div>
      </div>

      <div className="relative group flex flex-col items-center flex-1">
        {/* Carousel Image Container */}
        <div className="relative w-full max-w-[260px] aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border border-gray-100 transition-all duration-500">
          <Link href={Articles[current].link}>
            <Image
              src={Articles[current].image}
              alt={Articles[current].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Article Details - Styled like the main card info */}
        <div className="text-center mt-6 px-2 min-h-[90px]">
          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
            {Articles[current].title}
          </h3>
          <p className="text-sm text-gray-600 italic leading-relaxed">
            {Articles[current].description}
          </p>
        </div>

        {/* Navigation Arrows - Using a cleaner style */}
        <button
          onClick={prevSlide}
          className="absolute top-1/3 -left-2 lg:-left-6 p-2 bg-white/90 backdrop-blur-sm shadow-md rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 border border-gray-100"
          aria-label="Previous Article"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/3 -right-2 lg:-right-6 p-2 bg-white/90 backdrop-blur-sm shadow-md rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 border border-gray-100"
          aria-label="Next Article"
        >
          <ChevronRight size={20} />
        </button>

        {/* Matching Pagination Style (Expanding Dot) */}
        <div className="flex justify-center gap-2 mt-auto pt-4">
          {Articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-red-900" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom CTA to match the "Selection Criteria" banner style */}
      <Link 
        href="/downloads" 
        className="mt-6 text-center py-2 bg-gray-50 border border-gray-200 rounded-xl text-red-900 text-xs font-bold uppercase tracking-widest hover:bg-red-50 transition-colors"
      >
        View All Issues
      </Link>
    </div>
  );
};

export default RecentArticles;