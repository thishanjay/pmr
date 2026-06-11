import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

// 1. Updated Interface to include email
interface MemberCardProps {
  name: string;
  role?: string;
  link: string;
  image?: string;
  email: string; // Added email
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, link, image, email }) => (
  <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-[420px] border border-gray-100">
    
    {/* 70% Height - Image Section */}
    <div className="relative h-[70%] w-full overflow-hidden bg-gray-200">
      <Image
        src={image || "/person1.jpg"}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {role && (
        <div className="absolute top-4 left-4 bg-red-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          {role}
        </div>
      )}
    </div>

    {/* 30% Height - Info Section */}
    <div className="h-[30%] p-4 flex flex-col justify-between bg-white border-t-4 border-red-900">
      <div>
        <h3 className="text-md font-bold text-gray-900 truncate group-hover:text-red-900 transition-colors">
          {name}
        </h3>
        
        {/* Email Row */}
        <div className="flex items-center gap-2 mt-1 text-gray-500 hover:text-blue-600 transition-colors">
          <Mail size={14} className="shrink-0" />
          <a href={`mailto:${email}`} className="text-xs truncate font-medium">
            {email}
          </a>
        </div>
      </div>

      <a
        href={link}
        className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter text-gray-400 group-hover:text-red-900 transition-all"
      >
        <span>View Academic Profile</span>
        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

export default function EditorialBoard() {
  type Person = { name: string; link: string; role?: string; image: string; email: string };

  const coEditors: Person[] = [
    {
      name: "Prof. Richard Wickramaratne",
      role: "Co-Editor",
      link: "#",
      image: "/person1.jpg",
      email: "richardw@mgt.pdn.ac.lk"
    },
    {
      name: "Dr. W.M.H.U Wijethunga",
      role: "Co-Editor",
      link: "#",
      image: "/person1.jpg",
      email: "#"
    },
  ];

  const managingEditor: Person = {
    name: "Ms. R.M.C Kumari",
    role: "Managing Editor",
    link: "#",
    image: "/person1.jpg",
    email: "#"
  };

  const boardMembers: Person[] = [
    { name: "Dr. M.G.P.D. Menike", link: "#", image: "/person1.jpg", email: "#" },
    { name: "Mr .T.S.S.Fernando", link: "#", image: "/person1.jpg", email: "#" },
    { name: "Dr. Nagaraja Agilan", link: "#", image: "/person1.jpg", email: "#" },
    { name: "Ms. D.M.S.M. Dasanayake", link: "#", image: "/person1.jpg", email: "#" },
    { name: "Mr. Darshana Bandara", link: "#", image: "/person1.jpg", email: "#" },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="border-b-8 border-red-900 mb-12 pb-6">
        <h1 className="text-5xl font-extrabold text-red-900 tracking-tight">
          Editorial Board
        </h1>
        <div className="flex items-center gap-2 mt-2">
           <span className="h-1 w-12 bg-red-900/30"></span>
           <p className="text-gray-600 font-medium uppercase tracking-widest text-sm">Peradeniya Management Review</p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-2 h-8 bg-red-900 mr-3 rounded-full"></span>
          Executive Editorial Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coEditors.map((editor, index) => (
            <MemberCard key={index} {...editor} />
          ))}
          <MemberCard {...managingEditor} />
        </div>
      </section>

      {/* Board Members Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
           <span className="w-2 h-8 bg-red-900 mr-3 rounded-full"></span>
           Board Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}

//use cms?
//How to use cms