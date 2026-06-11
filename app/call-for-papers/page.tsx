import React from "react";
import { Megaphone, Calendar, FileText, Mail, Download } from "lucide-react";

export default function CallForPapers() {
  return (
    <div className="px-4 md:px-8 py-12 m-2">
      <div className="max-w-5xl mx-auto">
        {/* Main Call for Papers Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-red-900">
          <div className="p-8 lg:p-14">
            
            {/* Header Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Megaphone className="text-red-900" size={28} />
                <span className="text-red-800 font-bold uppercase tracking-widest text-sm">
                  Submissions Open
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-red-900 tracking-tight">
                Call for Papers
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                We are pleased to invite researchers, academics, and practitioners to 
                submit original manuscripts for the upcoming issue of the 
                <span className="font-bold text-gray-900"> Peradeniya Management Review (PMR)</span>.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <FileText className="text-red-900" size={28} />
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Future Issue</p>
                  <p className="text-lg font-bold text-gray-800">Vol. 05, Issue I</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Calendar className="text-red-900" size={28} />
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Submission Deadline</p>
                  <p className="text-lg font-bold text-gray-800">June, 2024</p>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">Ready to submit?</h3>
                <p className="text-gray-700">Download the official guidelines or contact our editorial team for queries.</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="/guidelines.pdf" 
                  className="flex items-center gap-2 bg-white text-red-900 px-6 py-3 rounded-xl font-bold border border-red-200 hover:bg-red-100 transition-colors"
                >
                  <Download size={20} />
                  Guidelines
                </a>
                <a 
                  href="mailto:pmr@mgt.pdn.ac.lk" 
                  className="flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-800 transition-colors whitespace-nowrap"
                >
                  <Mail size={20} />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Institutional Footer */}
        <p className="mt-8 text-center text-gray-400 text-sm font-medium">
          University of Peradeniya • Faculty of Management • ISSN: 2673-1207
        </p>
      </div>
    </div>
  );
}