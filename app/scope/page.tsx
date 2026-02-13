export default function Scope() {
  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-900 mb-8">
        Scope of PMR
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-800 leading-relaxed mb-6">
        Peradeniya Management Review (PMR) publishes articles related to:
      </p>

      {/* Scope Areas */}
      <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg">
        <li>Accounting & Finance</li>
        <li>Human Resource Management</li>
        <li>Marketing Management</li>
        <li>Operations Management</li>
        <li>Organizational Management</li>
        <li>
          Any other discipline or field of study adjudicated as relevant 
          by the Editorial Board of the Journal
        </li>
      </ul>

      {/* Closing Note */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-sm">
        <p className="text-gray-800 leading-relaxed">
          The journal welcomes interdisciplinary research that contributes 
          to theoretical development and practical applications within the 
          broader field of Management and related disciplines.
        </p>
      </div>

    </div>
  );
}
