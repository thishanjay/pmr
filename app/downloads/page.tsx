import Image from "next/image";
import Link from "next/link"; // Better for Next.js routing
import FilterBar from "../components/FilterBar";

export default function DownloadArticles() {
  const volumes = [
    { title: "Volume 1 - Issue 1", image: "/volume/volume1.jpg", link: "/downloads/v1-i1" },
    { title: "Volume 1 - Issue 2", image: "/volume/volume1.jpg", link: "/downloads/v1-i2" },
    { title: "Volume 2 - Issue 1", image: "/volume/volume1.jpg", link: "/downloads/v2-i1" },
    { title: "Volume 2 - Issue 2", image: "/volume/volume1.jpg", link: "/downloads/v2-i2" },
    { title: "Volume 3 - Issue 1", image: "/volume/volume1.jpg", link: "/downloads/v3-i1" },
    { title: "Volume 3 - Issue 2", image: "/volume/volume1.jpg", link: "/downloads/v3-i2" },
    { title: "Volume 4 - Issue 1", image: "/volume/volume1.jpg", link: "/downloads/v4-i1" },
  ];

  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <FilterBar />
      </div>
      <div className="flex items-center gap-3 mb-10">
        <div className="h-10 w-1.5 bg-red-900 rounded-full" />
        <h1 className="text-4xl font-bold text-red-900 tracking-tight">Download Articles</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {volumes.map((vol, idx) => (
          <div key={idx} className="group bg-white shadow-md hover:shadow-2xl rounded-3xl p-5 border border-gray-100 transition-all duration-300 flex flex-col">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl shadow-inner bg-gray-100">
              <Image src={vol.image} alt={vol.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">{vol.title}</h2>
            <Link 
              href={vol.link} 
              className="mt-auto w-full py-3 bg-red-900 text-white text-center font-bold rounded-xl hover:bg-red-800 transition-colors shadow-lg active:scale-95"
            >
              View Papers
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}