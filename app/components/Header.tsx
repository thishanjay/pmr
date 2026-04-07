import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    //  mt-10
    <div className="">
      {/* flex flex-col md:flex-row items-center md:justify-between ml-4 md:ml-10 gap-4 text-center md:text-left */}
      <div className="flex flex-col md:flex-row items-center md:justify-between ml-4 md:ml-10 gap-4 text-center md:text-left">
        <Image src="/uop_crest.png" alt="uop crest" width={200} height={200} className="md:w-[120px] md:h-[120px]"/>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
            Peradeniya Management Review (PMR)
          </h1>
          <h3 className="text-sm md:text-lg font-semibold italic">
            Join the Faculty of Management
          </h3>
        </div>
        
        {/* Added 'hidden md:block' to control visibility */}
        <div className="hidden md:block">
          <Image src="/moon-stone.png" alt="uom logo" width={80} height={80} />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;