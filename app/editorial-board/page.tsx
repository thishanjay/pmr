export default function EditorialBoard() {
  const coEditors = [
    { name: "Professor Richard Wickramaratne", link: "#" },
    { name: "Dr. S. Maheshwaran", link: "#" },
  ];

  const managingEditor = { name: "Dr. W.M.H.U Wijethunga", link: "#" };

  const boardMembers = [
    { name: "Dr. Nagaraja Agilan", link: "#" },
    { name: "Ms. Wathsala Priyadharshani", link: "#" },
    { name: "Dr. Anushka Hewa Heenipellage", link: "#" },
    { name: "Ms. Subagya Dasanayake", link: "#" },
    { name: "Ms. Niwarthana", link: "#" },
  ];

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-900 mb-8">
        Editorial Board
      </h1>

      {/* Co-Editors */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-900 mb-4">Co-Editors</h2>
        <ul className="list-disc pl-8 space-y-2 text-gray-700">
          {coEditors.map((editor, index) => (
            <li key={index}>
              <a
                href={editor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-red-900"
              >
                {editor.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Managing Editor */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-900 mb-2">
          Managing Editor
        </h2>
        <p>
          <a
            href={managingEditor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-red-900"
          >
            {managingEditor.name}
          </a>
        </p>
      </div>

      {/* Editorial Board Members */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-900 mb-4">
          Editorial Board Members
        </h2>
        <ul className="list-disc pl-8 space-y-2 text-gray-700">
          {boardMembers.map((member, index) => (
            <li key={index}>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-red-900"
              >
                {member.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
