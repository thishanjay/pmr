import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-red-900 p-6 mt-6 flex justify-between items-center">
      <ul className="flex gap-4 lg:gap-6 text-white font-medium text-xs md:text-sm lg:text-base">
        <li>
          <Link href="/" className="hover:text-gray-300 transition">
            PMR Home
          </Link>
        </li>

        <li>
          <Link href="/scope" className="hover:text-gray-300 transition">
            Scope of PMR
          </Link>
        </li>

        <li>
          <Link href="/submission" className="hover:text-gray-300 transition">
            Manuscript Submission
          </Link>
        </li>

        <li>
          <Link
            href="/editorial-board"
            className="hover:text-gray-300 transition"
          >
            Editorial Board
          </Link>
        </li>

        <li>
          <Link href="/downloads" className="hover:text-gray-300 transition">
            Download Articles
          </Link>
        </li>

        <li>
          <Link
            href="/call-for-papers"
            className="hover:text-gray-300 transition"
          >
            Call for Papers
          </Link>
        </li>

        <li>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact Information
          </Link>
        </li>
      </ul>

      <SearchBar />
    </nav>
  );
};

export default Navbar;
