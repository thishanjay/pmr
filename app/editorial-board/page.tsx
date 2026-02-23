import Image from "next/image";

// 1. Updated Interface to include image
interface MemberCardProps {
  name: string;
  role?: string;
  link: string;
  image?: string; // Optional image path
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, link, image }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-6 bg-white border-t-4 border-red-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col justify-between h-80"
  >
    <div>
      <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-gray-100 group-hover:border-red-900 transition-colors">
        <Image
          // Use the dynamic image prop, or the placeholder if not provided
          // IMPORTANT: Remove "public/" from the path
          src={image || "/person1.jpg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-900 transition-colors leading-tight">
        {name}
      </h3>
      {role && (
        <p className="text-xs text-red-800 font-semibold uppercase tracking-wider mt-2">
          {role}
        </p>
      )}
    </div>

    <div className="mt-4 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
      View Profile →
    </div>
  </a>
);

export default function EditorialBoard() {
  // 3. Added image field to data (Update these paths to your actual images in /public)
  type Person = { name: string; link: string; role?: string; image: string };

  const coEditors: Person[] = [
    {
      name: "Professor Richard Wickramaratne",
      role: "Co-Editor",
      link: "#",
      image: "/person1.jpg",
    },
    {
      name: "Dr. S. Maheshwaran",
      role: "Co-Editor",
      link: "#",
      image: "/person1.jpg",
    },
  ];

  const managingEditor: Person = {
    name: "Dr. W.M.H.U Wijethunga",
    role: "Managing Editor",
    link: "#",
    image: "/person1.jpg",
  };

  const boardMembers: Person[] = [
    { name: "Dr. Nagaraja Agilan", link: "#", image: "/images/agilan.jpg" },
    {
      name: "Ms. Wathsala Priyadharshani",
      link: "#",
      image: "/person1.jpg",
    },
    {
      name: "Dr. Anushka Hewa Heenipellage",
      link: "#",
      image: "/person1.jpg",
    },
    { name: "Ms. Subagya Dasanayake", link: "#", image: "/person1.jpg" },
    { name: "Ms. Niwarthana", link: "#", image: "/person1.jpg" },
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="border-b-2 border-red-900 mb-10 pb-4 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-red-900">
          Editorial Board
        </h1>
        <p className="text-gray-600 mt-2">Peradeniya Management Review (PMR)</p>
      </div>

      {/* Leadership Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center md:justify-start">
          <span className="hidden md:block w-8 h-1 bg-red-900 mr-3"></span>
          Executive Editorial Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coEditors.map((editor, index) => (
            <MemberCard key={index} {...editor} />
          ))}
          <MemberCard {...managingEditor} />
        </div>
      </section>

      {/* Board Members Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center md:justify-start">
          <span className="hidden md:block w-8 h-1 bg-red-900 mr-3"></span>
          Board Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}
