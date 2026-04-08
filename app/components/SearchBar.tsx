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
    // Load Google CSE script dynamically
    if (!document.querySelector('script[src*="cse.google.com"]')) {
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=61fbe5b3199b3464d";
      script.async = true;
      document.head.appendChild(script);

      // Add custom styles after script loads
      script.onload = () => {
        const style = document.createElement("style");
        style.textContent = `
          .gsc-control-cse {
            background-color: transparent !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .gsc-input-box {
            border-radius: 8px !important;
            border: 2px solid #e5e7eb !important;
            overflow: hidden !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
            transition: border-color 0.2s ease !important;
          }
          .gsc-input-box:hover {
            border-color: #dc2626 !important;
          }
          .gsc-input input.gsc-input {
            padding: 12px 16px !important;
            font-size: 14px !important;
            border: none !important;
            outline: none !important;
            background: white !important;
            color: #374151 !important;
          }
          button.gsc-search-button {
            background-color: #dc2626 !important;
            border: none !important;
            border-radius: 6px !important;
            padding: 12px 16px !important;
            margin-left: 8px !important;
            color: white !important;
            font-weight: 600 !important;
            cursor: pointer !important;
            transition: background-color 0.2s ease !important;
          }
          button.gsc-search-button:hover {
            background-color: #b91c1c !important;
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
      <div
        className="gcse-searchbox-only"
        data-resultsurl="/search-results"
      ></div>
    </div>
  );
};

export default SearchBar;
