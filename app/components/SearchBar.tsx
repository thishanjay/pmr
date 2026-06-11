"use client";

import { useEffect } from "react";

type Article = {
  id: number;
  title: string;
};

type SearchBarProps = {
  articles: Article[];
};

const SearchBar = ({ articles }: SearchBarProps) => {
  useEffect(() => {
    if (!document.querySelector('script[src*="cse.google.com"]')) {
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=61fbe5b3199b3464d";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const style = document.createElement("style");
        style.textContent = `
          .gsc-control-cse {
            background-color: transparent !important;
            border: none !important;
            padding: 0 !important;
          }
          /* Full rounded corners and reduced height */
          .gsc-input-box {
            border-radius: 9999px !important;
            border: 1px solid #e5e7eb !important;
            padding: 0 12px !important;
            height: 36px !important; 
            display: flex !important;
            align-items: center !important;
          }
          .gsc-input input.gsc-input {
            padding: 0 8px !important;
            height: 100% !important;
            font-size: 13px !important;
          }
          /* Compact button styling */
          button.gsc-search-button {
            background-color: #dc2626 !important;
            border-radius: 9999px !important;
            padding: 0 16px !important;
            height: 28px !important;
            margin-left: 4px !important;
            font-size: 12px !important;
            color: white !important;
          }
          .gsc-clear-button, .gsc-branding {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
      };
    }
  }, []);

  return (
    <div className="w-full">
      <div className="gcse-searchbox-only" data-resultsurl="/search-results"></div>
    </div>
  );
};

export default SearchBar;