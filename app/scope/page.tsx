import React from "react";
import { BookOpen, CheckCircle2, Info } from "lucide-react";

export default function Scope() {
  const scopeAreas = [
    "Accounting & Finance",
    "Human Resource Management",
    "Marketing Management",
    "Operations Management",
    "Organizational Management",
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
                Peradeniya Management Review (PMR) is committed to publishing high-quality research across key pillars of management:
              </p>
            </div>

            {/* Scope Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {scopeAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-hover hover:bg-red-50 hover:border-red-100 group"
                >
                  <CheckCircle2 className="text-red-900/40 group-hover:text-red-900 transition-colors" size={24} />
                  <span className="text-lg font-semibold text-gray-800">{area}</span>
                </div>
              ))}
              
              {/* Special Catch-all Case */}
              <div className="md:col-span-2 flex items-start gap-4 p-5 bg-red-900 text-white rounded-2xl shadow-md">
                <Info className="shrink-0 mt-1" size={24} />
                <p className="font-medium leading-relaxed">
                  Any other discipline or field of study adjudicated as relevant 
                  by the Editorial Board of the Journal.
                </p>
              </div>
            </div>

            {/* Closing Note / Editorial Philosophy */}
            <div className="bg-gray-100 p-8 rounded-2xl border-l-8 border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Editorial Philosophy</h3>
              <p className="text-gray-700 leading-relaxed italic">
                "The journal welcomes interdisciplinary research that contributes 
                to theoretical development and practical applications within the 
                broader field of Management and related disciplines."
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}