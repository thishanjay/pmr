import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    //  mt-10
    <div className="">
      <div className="flex flex-col md:flex-row items-center md:justify-between ml-4 md:ml-10 gap-4 text-center md:text-left">
        <Image
          src="/uop_crest.png"
          alt="uop crest"
          width={200}
          height={200}
          className="md:w-[120px] md:h-[120px]"
        />
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Peradeniya Management Review (PMR)
          </h1>
          <h3 className="text-lg md:text-2xl font-semibold italic">
            The premier peer-reviewed journal of the Faculty of Management
          </h3>
        </div>

        {/* Added 'hidden md:block' to control visibility */}
        <div className="hidden md:block">
          <Image src="/moon-stone.png" alt="uom logo" width={100} height={100} />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
