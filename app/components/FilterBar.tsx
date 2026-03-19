"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Filter } from "lucide-react";

export default function FilterBar() {
  const router = useRouter();
  const [volume, setVolume] = useState("");
  const [issue, setIssue] = useState("");

  const handleFilter = () => {
    if (volume && issue) {
      // Constructs the URL based on your folder structure: /downloads/v1-i1
      router.push(`/downloads/v${volume}-i${issue}`);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 py-3 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
        
        <div className="flex items-center gap-2 text-red-900 font-bold mr-4">
          <Filter size={18} />
          <span className="text-sm uppercase tracking-wider">Quick Filter</span>
        </div>

        {/* Volume Select */}
        <div className="relative">
          <select 
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-40 p-2.5 pr-8"
          >
            <option value="">Select Volume</option>
            <option value="1">Volume 1</option>
            <option value="2">Volume 2</option>
            <option value="3">Volume 3</option>
            <option value="4">Volume 4</option>
          </select>
          <ChevronDown className="absolute right-2 top-3 text-gray-400 pointer-events-none" size={16} />
        </div>

        {/* Issue Select */}
        <div className="relative">
          <select 
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-40 p-2.5 pr-8"
          >
            <option value="">Select Issue</option>
            <option value="1">Issue 1</option>
            <option value="2">Issue 2</option>
          </select>
          <ChevronDown className="absolute right-2 top-3 text-gray-400 pointer-events-none" size={16} />
        </div>

        {/* Action Button */}
        <button 
          onClick={handleFilter}
          disabled={!volume || !issue}
          className="bg-red-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Go to Issue
        </button>
      </div>
    </div>
  );
}