import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const topFive = [
  {
    title: "Impact of Digital Marketing on Consumer Behavior",
    description: "An empirical study focusing on the retail sector in Sri Lanka during 2025.",
    backgroundImage: "/research/digital-marketing.jpg",
    link: "/research/1",
  },
  {
    title: "Financial Literacy Among SMEs",
    description: "Exploring the correlation between financial knowledge and business sustainability.",
    backgroundImage: "/research/sme-finance.jpg",
    link: "/research/2",
  },
  {
    title: "Sustainable Supply Chain Management",
    description: "A review of green logistics practices in the South Asian manufacturing industry.",
    backgroundImage: "/research/supply-chain.jpg",
    link: "/research/3",
  },
  {
    title: "Human Resource Management in Remote Work",
    description: "Analyzing employee engagement strategies in post-pandemic work environments.",
    backgroundImage: "/research/remote-hr.jpg",
    link: "/research/4",
  },
  {
    title: "Corporate Governance and Firm Performance",
    description: "Evidence from listed companies in the Colombo Stock Exchange.",
    backgroundImage: "/research/corporate-gov.jpg",
    link: "/research/5",
  },
];

const TopFive = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header Style matching your PMR Main Card */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
          <div className="bg-red-900 p-2 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Top 5 Researches
          </h2>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topFive.map((research, index) => (
            <div 
              key={index} 
              className="group relative h-[350px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${research.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-red-950 via-red-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative p-6 text-white z-10">
                <span className="text-red-300 font-mono text-sm mb-2 block font-bold uppercase tracking-widest">
                  Research #0{index + 1}
                </span>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-red-100 transition-colors">
                  {research.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {research.description}
                </p>
                
                <Link 
                  href={research.link} 
                  className="inline-flex items-center gap-2 bg-white text-red-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors"
                >
                  Read More
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFive;