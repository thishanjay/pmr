"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {
  House,
  Telescope,
  SendHorizontal,
  User,
  Download,
  NotebookText,
  Headset,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <House size={18} /> },
    { name: "Scope", href: "/scope", icon: <Telescope size={18} /> },
    {
      name: "Submissions",
      href: "/submission",
      icon: <SendHorizontal size={18} />,
    },
    {
      name: "Editorial Board",
      href: "/editorial-board",
      icon: <User size={18} />,
    },
    { name: "Downloads", href: "/downloads", icon: <Download size={18} /> },
    {
      name: "Call for Papers",
      href: "/call-for-papers",
      icon: <NotebookText size={18} />,
    },
    { name: "Contact Us", href: "/contact", icon: <Headset size={18} /> },
  ];

  return (
    <nav className="bg-red-900 py-2 px-4 shadow-md">
      <div className="mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center">
        {/* Mobile Toggle Button */}
        <div className="flex justify-between items-center lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Links and SearchBar Wrapper */}
        <div
          className={`
          ${isOpen ? "flex" : "hidden"}
          lg:flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-7xl
        `}
        >
          <ul className="flex flex-col lg:flex-row gap-1 lg:gap-2 xl:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-2 py-3 lg:py-2 px-4 lg:px-3 xl:px-4 transition-all duration-200 whitespace-nowrap font-bold rounded-lg lg:rounded-none
                      ${
                        isActive
                          ? "text-white border-b-2 border-white lg:bg-white/10"
                          : "text-red-200 hover:text-white hover:bg-white/5 lg:hover:bg-transparent"
                      }
                    `}
                  >
                    {/* The icon inherits the color from the parent text class */}
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search Bar Section */}
          <div className="w-full lg:w-50 xl:w-60 lg:shrink-0 mt-4 lg:mt-0">
            <SearchBar articles={[]} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
