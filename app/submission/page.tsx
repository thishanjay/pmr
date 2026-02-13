export default function Submission() {
  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-900 mb-8">
        Manuscript Submission
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-800 leading-relaxed mb-6">
        Manuscripts are accepted for consideration on the understanding that 
        they are not being submitted elsewhere.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Three copies of the article/paper should be sent to the Co-editors, 
        Peradeniya Management Review, Faculty of Management, University of 
        Peradeniya, Peradeniya 20400, Sri Lanka.
      </p>

      <p className="text-gray-800 leading-relaxed mb-8">
        Alternatively, a soft copy (MS Word/PDF) may be emailed to{" "}
        <a
          href="mailto:editorpmr@gmail.com"
          className="text-blue-600 underline"
        >
          editorpmr@gmail.com
        </a>.
        Manuscripts must be prepared according to the guidelines specified 
        in the Author Guidelines.
      </p>

      {/* Submission Checklist */}
      <h2 className="text-2xl font-semibold text-red-900 mb-4">
        Submission Checklist
      </h2>

      <ul className="list-disc pl-8 space-y-3 text-gray-700 leading-relaxed">
        <li>Title of the article/review (not more than 10 words)</li>
        <li>Abstract (up to 100 words)</li>
        <li>Keywords (up to 5–6 words)</li>
        <li>
          Full text (as a guide, 4,000–8,000 words; review articles/book reviews up to 3,000 words)
        </li>
        <li>Complete list of references</li>
        <li>
          Separate cover sheet with author details: full name, affiliation, 
          correspondence address, telephone/fax numbers, e-mail address, 
          and acknowledgement (if any). For multiple authors, indicate the 
          corresponding author.
        </li>
        <li>
          Ensure manuscript is anonymized (do not identify authors within the article).
        </li>
      </ul>

      {/* Hard Copy Address */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-red-900 mb-3">
          Send Hard Copies To:
        </h3>
        <p className="text-gray-800 leading-relaxed">
          Co-editors, Peradeniya Management Review <br />
          Faculty of Management <br />
          University of Peradeniya <br />
          Peradeniya 20400 <br />
          Sri Lanka
        </p>
      </div>

    </div>
  );
}
