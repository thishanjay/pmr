import React from "react";
import { Send } from "lucide-react"; // Matching your icon set

const CallForArticles = () => {
  return (
    <div className="bg-white mt-6 p-8 rounded-3xl shadow-xl border-t-6 border-red-900 transition-all hover:shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold text-red-900 mb-2 tracking-tight">
            Call For Articles
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Submit your original research articles, reviews, and scholarly work 
            for consideration in upcoming <span className="font-semibold text-gray-800">PMR publications</span>. 
            We welcome contributions from researchers globally.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-red-900 text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-red-800 active:scale-95 shadow-lg shrink-0">
          <Send size={18} />
          Submit Now
        </button>
      </div>
    </div>
  );
};

export default CallForArticles;