export default function CallForPapers() {
  return (
    <div className="px-8 py-12 max-w-4xl mx-auto">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-900 mb-8">
        Call for Papers
      </h1>

      {/* Journal Issue Info */}
      <p className="text-lg text-gray-800 mb-6">
        <span className="font-semibold">Peradeniya Management Review</span><br/>
        <span className="font-semibold">VOL. 05, ISSUE I (June, 2024)</span>
      </p>

      {/* Invitation Text */}
      <p className="text-gray-800 leading-relaxed mb-6">
        We are pleased to invite you to submit manuscripts for the VOL. 05, ISSUE I (June, 2024) of the 
        Peradeniya Management Review (PMR), the bi-annual peer-reviewed journal of the Faculty of 
        Management, University of Peradeniya, published in English.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Please refer to the flyer attached for more details and kindly share with interested parties.
      </p>

      {/* Contact */}
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-sm">
        <p className="text-gray-800">
          For queries or submissions, please contact the Co-editors directly via:{" "}
          <a 
            href="mailto:editorpmr@gmail.com" 
            className="text-blue-600 underline hover:text-red-900"
          >
            editorpmr@gmail.com
          </a>
        </p>
      </div>

    </div>
  );
}
