"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "PMR Home", href: "/" },
    { name: "Scope of PMR", href: "/scope" },
    { name: "Manuscript Submission", href: "/submission" },
    { name: "Editorial Board", href: "/editorial-board" },
    { name: "Download Articles", href: "/downloads" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Contact Information", href: "/contact" },
  ];

  return (
    <nav className="bg-red-900 p-4 lg:p-6 mt-6">
      {/* 1. Main Container: Handles the horizontal layout on desktop */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* 2. Header: Logo and Mobile Toggle */}
        <div className="flex justify-between items-center">
          
          <button 
            className="text-white lg:hidden text-2xl focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* 3. Links and SearchBar Wrapper */}
        <div className={`
          ${isOpen ? "flex" : "hidden"} 
          lg:flex flex-col lg:flex-row lg:items-center 
          w-full lg:w-auto gap-6 mt-4 lg:mt-0
        `}>
          
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-white font-medium text-sm lg:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="hover:text-gray-300 transition block py-1 lg:py-0 whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-full lg:w-64">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;