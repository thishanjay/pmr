import { papersData } from "@/data/papers";
import { notFound } from "next/navigation";
import { FileText, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function IssuePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // IMPORTANT: Next.js 15 requires awaiting params
  const { id } = await params;
  const papers = papersData[id];

  if (!papers) return notFound();

  return (
    <div className="px-4 md:px-8 py-12 m-2">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          href="/downloads"
          className="inline-flex items-center gap-2 text-red-900 font-bold mb-8 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to All Issues
        </Link>

        {/* Issue Title Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-red-900 p-8 md:p-12 mb-10">
          <h1 className="text-4xl font-extrabold text-red-900 tracking-tight capitalize">
            {id
              .replace("-", " ")
              .replace("v", "Volume ")
              .replace("i", "Issue ")}
          </h1>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm mt-2">
            Peradeniya Management Review • Published Papers
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-xl text-red-900 shrink-0">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 leading-tight">
                    {paper.title}
                  </h3>
                  <p className="text-gray-500 italic mt-2 text-sm font-medium">
                    By {paper.author}
                  </p>
                </div>
              </div>

              <a
                href={paper.link}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-800 transition-all shadow-md active:scale-95 whitespace-nowrap"
                download
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
