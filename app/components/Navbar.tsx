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
    <nav className="bg-red-900 p-4 shadow-md">
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
          lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto gap-6 mt-4 lg:mt-0
        `}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href} className="px-2 lg:px-0">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-2 py-2 lg:py-1 transition-all duration-200 whitespace-nowrap font-bold
                      ${
                        isActive
                          ? "text-white border-b-2 border-white"
                          : "text-red-200 hover:text-white"
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
          <div className="lg:ml-8 w-full lg:w-64">
            <SearchBar articles={[]} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
