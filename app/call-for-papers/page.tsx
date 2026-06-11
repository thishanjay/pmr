import React from "react";
import { Megaphone, Calendar, Mail, FileText, Share2 } from "lucide-react";

export default function CallForPapers() {
  return (
    <div className="px-4 md:px-8 py-12 m-2">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Announcement Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-red-900">
          
          {/* Hero Header Section */}
          <div className="relative bg-red-900 px-8 py-16 text-center text-white overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                  <Megaphone size={32} className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
                Call for Papers
              </h1>
              <p className="text-red-100 text-lg font-medium tracking-widest uppercase">
                Peradeniya Management Review
              </p>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full" />
          </div>

          <div className="p-8 lg:p-14">
            
            {/* Volume & Date Highlight Box */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 -mt-20 relative z-20">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-900">
                  <FileText size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Future Issue</p>
                  <p className="text-xl font-bold text-gray-900">VOL. 05, ISSUE I</p>
                </div>
              </div>

              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-900">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Submission Date</p>
                  <p className="text-xl font-bold text-gray-900">June, 2024</p>
                </div>
              </div>
            </div>

            {/* Invitation Content */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                We are pleased to invite you to submit manuscripts for the upcoming issue of the 
                <span className="font-bold text-gray-900"> Peradeniya Management Review (PMR)</span>.
              </p>
              <div className="h-1 w-20 bg-red-900/20 mx-auto my-8 rounded-full" />
              <p className="text-gray-600 leading-relaxed text-lg">
                PMR is a bi-annual peer-reviewed journal published in English by the Faculty of 
                Management, University of Peradeniya. We welcome original research that pushes the 
                boundaries of management theory and practice.
              </p>
            </div>

            {/* CTA and Share Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
                    <Mail size={20} />
                    Direct Submission
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    For queries or direct manuscript submissions, contact the Co-editors.
                  </p>
                </div>
                <a 
                  href="mailto:pmr@mgt.pdn.ac.lk" 
                  className="inline-block text-center bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  pmr@mgt.pdn.ac.lk
                </a>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Share2 size={20} className="text-red-900" />
                    Share this Call
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Please refer to the official flyer for full details and share with your research network.
                  </p>
                </div>
                <button className="bg-white border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-bold py-3 px-6 rounded-xl transition-all active:scale-95">
                  Download Official Flyer
                </button>
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