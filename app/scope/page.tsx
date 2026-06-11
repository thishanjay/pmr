import React from "react";
import { BookOpen, CheckCircle2, Info } from "lucide-react";

export default function Scope() {
  const scopeAreas = [
    "Business Finance and Investment",
    "Marketing and Tourism",
    "Human Resource Management and Organizational Behavior",
    "Operations and Supply Chain Management",
    "Strategic Management and Entrepreneurship",
    "Information Systems and Technology Management",
    "Sustainability and Corporate Social Responsibility",
    "International Business and Economics",
  ];

  return (
    <div className="px-4 md:px-8 py-12 m-2">
      <div className="max-w-5xl mx-auto">
        {/* Main Scope Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-red-900">
          <div className="p-8 lg:p-14">
            {/* Header Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="text-red-900" size={28} />
                <span className="text-red-800 font-bold uppercase tracking-widest text-sm">
                  Journal Focus
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-red-900 tracking-tight">
                Scope of PMR
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                PMR welcomes management related research including
                interdisciplinary & multidisciplinary original
                Theoretical/applied research, concept papers, review articles,
                and book reviews in the following areas
              </p>
            </div>

            {/* Scope Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {scopeAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-hover hover:bg-red-50 hover:border-red-100 group"
                >
                  <CheckCircle2
                    className="text-red-900/40 group-hover:text-red-900 transition-colors"
                    size={24}
                  />
                  <span className="text-lg font-semibold text-gray-800">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
