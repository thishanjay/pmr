"use client";

import Script from "next/script";

type Article = {
  id: number;
  title: string;
};

type SearchBarProps = {
  articles: Article[];
};

const SearchBar = ({ articles }: SearchBarProps) => {
  return (
    <div className="w-full min-w-[300px] min-h-[40px]">
      {/* 1. Next.js optimized Script loading */}
      <Script 
        src="https://cse.google.com/cse.js?cx=61fbe5b3199b3464d" 
        strategy="beforeInteractive" 
      />

      {/* 2. The Google Search Element */}
      <div className="gcse-search"></div>

      {/* 3. CSS Overrides to make it look modern */}
      <style jsx global>{`
        /* Remove the white background and borders from the container */
        .gsc-control-cse {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        /* Style the input box to match your design */
        .gsc-input-box {
          border-radius: 6px !important;
          border: 1px solid #ddd !important;
          overflow: hidden !important;
        }

        /* Style the Search Button */
        button.gsc-search-button-v2 {
          background-color: #000000 !important;
          border: none !important;
          border-radius: 6px !important;
          margin-left: 4px !important;
          padding: 10px 16px !important;
        }

        /* Hide the Google Branding if you want a cleaner look */
        .gcsc-branding {
          display: none !important;
        }
          
        /* Align the "X" clear button */
        .gsst_a {
          padding-top: 8px !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;