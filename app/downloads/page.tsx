import Image from "next/image";

export default function DownloadArticles() {
  const volumes = [
    {
      volume: "Volume 1",
      image: "/volume/volume1.jpg",
      issues: [
        { name: "Issue 1", link: "#" },
        { name: "Issue 2", link: "#" },
      ],
    },
    {
      volume: "Volume 2",
      image: "/volume/volume1.jpg",
      issues: [
        { name: "Issue 1", link: "#" },
        { name: "Issue 2", link: "#" },
      ],
    },
    {
      volume: "Volume 3",
      image: "/volume/volume1.jpg",
      issues: [
        { name: "Issue 1", link: "#" },
        { name: "Issue 2", link: "#" },
      ],
    },
    {
      volume: "Volume 4",
      image: "/volume/volume1.jpg",
      issues: [
        { name: "Issue 1", link: "#" },
        { name: "Issue 2", link: "#" },
      ],
    },
  ];

  return (
    <div className="px-8 py-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-900 mb-10">
        Download Articles
      </h1>

      {/* Volume Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {volumes.map((vol, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <Image 
              src={vol.image}
              alt={vol.volume}
              width={200}
              height={300}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold text-red-900 mb-4">
              {vol.volume}
            </h2>

            <div className="flex flex-col gap-3">
              {vol.issues.map((issue, i) => (
                <a
                  key={i}
                  href={issue.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700 text-center"
                >
                  {issue.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
