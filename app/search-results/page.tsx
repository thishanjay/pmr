"use client";

import { useEffect } from "react";

export default function SearchResults() {
  useEffect(() => {
    // Ensure Google CSE script is loaded
    if (!document.querySelector('script[src*="cse.google.com"]')) {
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=61fbe5b3199b3464d";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-red-900 tracking-tight mb-4">
          Search Results
        </h1>
        <p className="text-gray-600">
          Search results will appear here when you use the search bar in the
          navigation.
        </p>
      </div>

      {/* Google CSE Results Container */}
      <div className="gcse-searchresults-only"></div>
    </div>
  );
}
