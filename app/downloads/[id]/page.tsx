import { papersData } from "@/data/papers";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import IssuePaperSearch from "./IssuePaperSearch";

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

        <IssuePaperSearch papers={papers} />
      </div>
    </div>
  );
}
