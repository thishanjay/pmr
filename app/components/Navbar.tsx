"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Scope", href: "/scope" },
    { name: "Submissions", href: "/submission" },
    { name: "Editorial Board", href: "/editorial-board" },
    { name: "Downloads", href: "/downloads" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-red-900 p-4 lg:p-6">
      {/* 1. Main Container: Handles the horizontal layout on desktop */}
      <div className="mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center">
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
        <div
          className={`
          ${isOpen ? "flex" : "hidden"} 
          lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto gap-6 mt-4 lg:mt-0
        `}
        >
          {/* flex flex-col lg:flex-row gap-6 lg:gap-8 text-white font-medium text-sm lg:text-base */}
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-18 text-white">
            {navLinks.map((link) => (
              <li key={link.href} className="px-2 lg:px-0">
                <Link
                  href={link.href}
                  className={`hover:text-gray-300 transition block py-1 lg:py-0 whitespace-nowrap ${
                    pathname === link.href
                      ? "border-b-2 border-red-950 pb-2"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* <div className="w-full lg:w-64">
            <SearchBar articles={[]} />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
