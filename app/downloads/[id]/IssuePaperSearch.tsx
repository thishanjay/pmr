"use client";

import { useMemo, useState } from "react";
import { FileText, Download, Search } from "lucide-react";
import Link from "next/link";
import type { Paper } from "@/data/papers";

interface IssuePaperSearchProps {
  papers: Paper[];
}

export default function IssuePaperSearch({ papers }: IssuePaperSearchProps) {
  const [query, setQuery] = useState("");

  const filteredPapers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return papers;

    return papers.filter((paper) => {
      const title = paper.title.toLowerCase();
      const author = paper.author.toLowerCase();
      return title.includes(normalized) || author.includes(normalized);
    });
  }, [query, papers]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
        <label
          htmlFor="issue-search"
          className="block text-sm font-semibold text-gray-700 mb-3"
        >
          Search published papers
        </label>
        <div className="relative">
          <Search
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-red-900/70"
          />
          <input
            id="issue-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by author name or topic"
            className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-gray-900 shadow-sm outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/20"
          />
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Filter the issue by author names or paper titles (topics).
        </p>
      </div>

      <div className="space-y-6">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-xl text-red-900 shrink-0">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 leading-tight">
                    {paper.title}
                  </h3>
                  <p className="text-gray-500 italic mt-2 text-sm font-medium">
                    By {paper.author}
                  </p>
                </div>
              </div>

              <a
                href={paper.link}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-800 transition-all shadow-md active:scale-95 whitespace-nowrap"
                download
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          ))
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-gray-600 text-center">
            No matching papers found. Try a different author name or topic.
          </div>
        )}
      </div>
    </div>
  );
}
