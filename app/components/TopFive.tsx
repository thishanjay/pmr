import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { papersData } from "@/data/papers";

// Extract all papers and get the 5 most recent ones
const getAllPapers = () => {
  const allPapers: any[] = [];

  // Iterate through all volumes/issues in order and collect papers
  Object.entries(papersData).forEach(([volume, papers]) => {
    papers.forEach((paper) => {
      allPapers.push({
        title: paper.title,
        authors: paper.author,
        volume: `Volume ${volume.split("-")[0].substring(1)}`,
        link: paper.link,
      });
    });
  });

  // Return the first 6 papers (or 5 if you want exactly 5)
  return allPapers.slice(0, 6);
};

const recentArticles = getAllPapers();

// Get most read (first paper from the last volume with papers)
const mostRead = [getAllPapers()[0]].filter(Boolean);

// Get most cited (pick a notable paper, e.g., first paper overall)
const mostCited = [getAllPapers()[1]].filter(Boolean);

const PublishedArticles = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-red-900 p-3 rounded-xl text-white">
            <FileText size={24} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Recently Published Articles
            </h2>

            <div className="w-20 h-1 bg-blue-500 mt-3 rounded-full" />
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-x-10">
              {recentArticles.map((article, index) => (
                <div key={index} className="py-6 border-b border-gray-200">
                  <span className="inline-block text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 rounded mb-3">
                    Article
                  </span>

                  <Link href={article.link}>
                    <h3 className="text-lg font-bold text-blue-700 hover:text-blue-900 transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-blue-600 mt-2">
                    {article.authors}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    Journal Name, {article.volume}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Most Read */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Most Read
                  </h3>

                  <div className="w-16 h-1 bg-blue-500 mt-2 rounded-full" />
                </div>

                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  View all
                </button>
              </div>

              {mostRead.map((article, index) => (
                <div key={index}>
                  <span className="inline-block text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 rounded mb-3">
                    Article
                  </span>

                  <Link href={article.link}>
                    <h4 className="text-lg font-bold text-blue-700 hover:text-blue-900 transition-colors">
                      {article.title}
                    </h4>
                  </Link>

                  <p className="text-sm text-blue-600 mt-2">
                    {article.authors}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    Journal Name, {article.volume}
                  </p>
                </div>
              ))}
            </div>

            {/* Most Cited */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Most Cited
                  </h3>

                  <div className="w-16 h-1 bg-blue-500 mt-2 rounded-full" />
                </div>

                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  View all
                </button>
              </div>

              {mostCited.map((article, index) => (
                <div key={index}>
                  <span className="inline-block text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 rounded mb-3">
                    Article
                  </span>

                  <Link href={article.link}>
                    <h4 className="text-lg font-bold text-blue-700 hover:text-blue-900 transition-colors">
                      {article.title}
                    </h4>
                  </Link>

                  <p className="text-sm text-blue-600 mt-2">
                    {article.authors}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    Journal Name, {article.volume}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishedArticles;
