import CallForArticles from "./components/CallForArticles";
import RecentArticles from "./components/RecentArticles";
import TopFive from "./components/TopFive";
import Updates from "./components/Updates";

export default function Home() {
  return (
    <>
      <div>
        <Updates />
      </div>
      <div className="px-8 py-12 m-2 rounded-2xl bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Styled PMR Info */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex-1 border-t-8 border-red-900">
            <div className="p-8 lg:p-14">
              {/* Header Section */}
              <div className="text-center mb-10">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-red-900 tracking-tight">
                  Peradeniya Management Review
                </h1>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-red-900/20"></span>
                  <span className="text-red-800 font-medium tracking-[0.2em] uppercase text-sm">
                    PMR Journal
                  </span>
                  <span className="h-px w-12 bg-red-900/20"></span>
                </div>
              </div>

              <p className="text-xl text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
                The premier peer-reviewed journal of the
                <span className="font-bold text-gray-900">
                  {" "}
                  Faculty of Management, University of Peradeniya, Sri Lanka.
                </span>
              </p>

              {/* Info Grid - Replacing plain bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-none w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-900 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Frequency & Scope
                      </h3>
                      <p className="text-gray-600">
                        Published bi-annually. Covers Management, Accounting,
                        and Finance disciplines.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-none w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-900 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Publication Types
                      </h3>
                      <p className="text-gray-600">
                        Theoretical/applied research, comprehensive review
                        articles, and insightful book reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-none w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-900 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Open Access</h3>
                      <p className="text-gray-600">
                        Available in print and online. The online version is
                        freely accessible to global readers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-none w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-900 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Inclusivity</h3>
                      <p className="text-gray-600">
                        Welcoming local and overseas researchers.
                        Interdisciplinary work (Economics/Social Science) is
                        accepted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selection Criteria Banner */}
              <div className="mt-12 p-4 bg-red-900 rounded-xl text-white text-center text-sm font-medium">
                Selection is strictly based on theoretical significance and
                practical relevance.
              </div>
            </div>
          </div>

          {/* Card 2 - Recent Articles */}
          <div className="bg-white p-6 rounded-3xl shadow-xl lg:w-[400px] shrink-0 self-start">
            <RecentArticles />
          </div>
        </div>

        {/* Card 3: SLJOL Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden border-t-6 border-red-900">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Content Side */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-1 bg-red-900 rounded-full" />
                  <h2 className="text-2xl font-bold text-red-900 tracking-tight">
                    Sri Lanka Journals OnLine (SLJOL)
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-medium text-gray-900">
                    PMR is proudly indexed and hosted on the SLJOL platform.
                  </p>
                  <p>
                    SLJOL provides access to Sri Lankan published research and
                    increases worldwide visibility of indigenous scholarship. It
                    is a comprehensive database covering a wide range of
                    academic disciplines.
                  </p>
                </div>
              </div>

              {/* Technical Info Side / Metadata */}
              <div className="w-full md:w-auto shrink-0 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">
                    Registered ISSN
                  </span>
                  <p className="text-lg font-mono font-bold text-gray-800">
                    2673-1207
                  </p>
                </div>

                <div className="h-px w-full bg-gray-200" />

                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-2">
                    Official Repository
                  </span>
                  <a
                    href="https://pmr.sljol.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-red-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-800 transition-all shadow-md active:scale-95"
                  >
                    Visit PMR on SLJOL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call for articles */}
        <div>
          <CallForArticles />
        </div>
        {/* Top 5 researches */}
        <div className="bg-white mt-6 p-8 border-t-6 border-red-900 rounded-3xl">
          <div>
            <TopFive />
          </div>
        </div>
      </div>
    </>
  );
}
