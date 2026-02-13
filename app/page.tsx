import Updates from "./components/Updates";

export default function Home() {
  return (
    <>
      <div>
        <Updates />
      </div>
      <div className="px-8 py-12 max-w-6xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-red-900 mb-6">
          Peradeniya Management Review (PMR)
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Peradeniya Management Review (PMR) is the journal of the
          <span className="font-semibold">
            {" "}
            Faculty of Management, University of Peradeniya, Sri Lanka.
          </span>
        </p>

        {/* About Section */}
        <div className="space-y-4 text-gray-800">
          <ul className="list-disc pl-6 space-y-2">
            <li>Published bi-annually.</li>
            <li>Covers Management and Accounting & Finance.</li>
            <li>
              Publishes:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Research articles (theoretical and applied)</li>
                <li>Review articles</li>
                <li>Book reviews</li>
              </ul>
            </li>
            <li>Open to researchers from Sri Lanka and overseas.</li>
            <li>
              Articles from Economics and other Social Sciences are accepted if
              clearly linked to Management or Accounting & Finance.
            </li>
            <li>
              Selection is based on theoretical significance and practical
              relevance.
            </li>
            <li>Available in both print and online formats.</li>
            <li>The online version is freely accessible to all readers.</li>
          </ul>
        </div>

        {/* SLJOL Section */}
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-red-900 mb-3">
            Sri Lanka Journals OnLine (SLJOL)
          </h2>
          <p className="text-gray-700 mb-3">
            SLJOL provides access to Sri Lankan published research and increases
            worldwide visibility of indigenous scholarship.
          </p>
          <p className="text-gray-700">
            SLJOL is a database of journals published in Sri Lanka covering a
            wide range of academic disciplines, aiming to enhance the visibility
            of journals and the research they publish.
          </p>
        </div>

        {/* Journal Info */}
        <div className="mt-8 border-t pt-6">
          <p className="text-gray-800">
            <span className="font-semibold">ISSN:</span> 2673-1207
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Available at:</span>{" "}
            <a
              href="https://pmr.sljol.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://pmr.sljol.info/
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
