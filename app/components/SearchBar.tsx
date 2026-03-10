"use client";
import { useState } from "react";

type Article = {
  id: number;
  title: string;
};

type SearchBarProps = {
  articles: Article[];
};

const SearchBar = ({ articles }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const results = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log(results);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white border px-4 py-2 rounded-md w-64"
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;