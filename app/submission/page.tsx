import React from "react";
import { Send, Mail, MapPin, CheckSquare, FileText, Download } from "lucide-react";

export default function Submission() {
  const checklistItems = [
    "Title of the article/review (max 10 words)",
    "Abstract (up to 100 words)",
    "Keywords (5–6 words)",
    "Full text (4,000–8,000 words)",
    "Book reviews (up to 3,000 words)",
    "Complete list of references",
    "Anonymized manuscript (no author IDs)",
    "Separate cover sheet with full details",
  ];

  return (
    <div className="px-4 md:px-8 py-12 m-2">
      <div className="max-w-5xl mx-auto">
        {/* Main Submission Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-red-900">
          <div className="p-8 lg:p-14">
            {/* Header Section */}
            <div className="mb-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <FileText className="text-red-900" size={28} />
                <span className="text-red-800 font-bold uppercase tracking-widest text-sm">
                  Author Submissions
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-red-900 tracking-tight">
                Manuscript Submission
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed border-l-4 border-red-900/20 pl-4 italic">
                "Manuscripts are accepted for consideration on the understanding
                that they are not being submitted elsewhere."
              </p>
            </div>

            {/* Submission Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                <Mail className="text-red-900 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Submission</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Send MS Word copies to:
                  </p>
                  <a
                    href="mailto:pmr@mgt.pdn.ac.lk"
                    className="text-lg font-bold text-blue-700 hover:underline"
                  >
                    pmr@mgt.pdn.ac.lk
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-center gap-4">
                <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-red-900 text-red-900 px-4 py-3 rounded-xl hover:bg-red-50 transition-all font-semibold hover:shadow-md">
                  <Download size={20} />
                  Author Guidelines
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-3 rounded-xl hover:bg-red-800 transition-all font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  <Download size={20} />
                  Author Information Sheet
                </button>
              </div>
            </div>

            {/* Checklist Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckSquare className="text-red-900" />
                Submission Checklist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {checklistItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 py-2 border-b border-gray-100"
                  >
                    <div className="h-2 w-2 rounded-full bg-red-900 mt-2 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Need help with your submission? Contact the editorial office at
            <a
              href="mailto:pmr@mgt.pdn.ac.lk"
              className="ml-1 font-semibold text-red-900 hover:underline"
            >
              pmr@mgt.pdn.ac.lk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
