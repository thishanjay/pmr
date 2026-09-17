"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

interface EditorialMember {
  id?: number;
  name: string;
  email: string;
  category: string;
  image_url?: string;
  link?: string;
}

interface EditorialResponse {
  data?: {
    co_editors?: EditorialMember[];
    managing_editor?: EditorialMember | null;
    board_members?: EditorialMember[];
  };
}

interface MemberCardProps {
  name: string;
  role?: string;
  link?: string;
  image?: string;
  email: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, link, image, email }) => (
  <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-[420px] border border-gray-100">
    {/* Image Section */}
    <div className="relative h-[70%] w-full overflow-hidden bg-gray-200">
      <Image
        src={image && image.trim() !== "" ? image : "/person1.jpg"}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {role && (
        <div className="absolute top-4 left-4 bg-red-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          {role}
        </div>
      )}
    </div>

    {/* Info Section */}
    <div className="h-[30%] p-4 flex flex-col justify-between bg-white border-t-4 border-red-900">
      <div>
        <h3 className="text-md font-bold text-gray-900 truncate group-hover:text-red-900 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-1 text-gray-500 hover:text-blue-600 transition-colors">
          <Mail size={14} className="shrink-0" />
          <a href={`mailto:${email}`} className="text-xs truncate font-medium">
            {email || "N/A"}
          </a>
        </div>
      </div>

      <a
        href={link || "#"}
        className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter text-gray-400 group-hover:text-red-900 transition-all"
      >
        <span>View Academic Profile</span>
        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

export default function EditorialBoardPage() {
  const [coEditors, setCoEditors] = useState<EditorialMember[]>([]);
  const [managingEditor, setManagingEditor] = useState<EditorialMember | null>(null);
  const [boardMembers, setBoardMembers] = useState<EditorialMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/v1/editorial.php", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch editorial board");
        return res.json() as Promise<EditorialResponse>;
      })
      .then((response) => {
        const data = response.data;
        setCoEditors(data?.co_editors ?? []);
        setManagingEditor(data?.managing_editor ?? null);
        setBoardMembers(data?.board_members ?? []);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error(err);
        setError(err instanceof Error ? err.message : "Unable to load editorial board");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center min-h-screen">Loading Editorial Board...</div>;
  if (error) return <div className="p-8 text-center text-red-500 min-h-screen">Error: {error}</div>;

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="border-b-8 border-red-900 mb-12 pb-6">
        <h1 className="text-5xl font-extrabold text-red-900 tracking-tight">
          Editorial Board
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="h-1 w-12 bg-red-900/30"></span>
          <p className="text-gray-600 font-medium uppercase tracking-widest text-sm">
            Peradeniya Management Review
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-2 h-8 bg-red-900 mr-3 rounded-full"></span>
          Executive Editorial Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coEditors.map((editor) => (
            <MemberCard
              key={editor.id || editor.name}
              name={editor.name}
              email={editor.email}
              role="Co-Editor"
              image={editor.image_url}
              link={editor.link}
            />
          ))}
          {managingEditor && (
            <MemberCard
              name={managingEditor.name}
              email={managingEditor.email}
              role="Managing Editor"
              image={managingEditor.image_url}
              link={managingEditor.link}
            />
          )}
        </div>
      </section>

      {/* Board Members Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-2 h-8 bg-red-900 mr-3 rounded-full"></span>
          Board Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member) => (
            <MemberCard
              key={member.id || member.name}
              name={member.name}
              email={member.email}
              image={member.image_url}
              link={member.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}