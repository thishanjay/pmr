import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" mt-10 items-center">
      <div className="flex justify-between ml-10">
        <Image src="/uop_crest.png" alt="uop crest" width={100} height={100} />
        <div>
          <h1 className="text-4xl font-bold">
            Peradeniya Management Review (PMR)
          </h1>
          <h3 className="font-semibold italic">
            Join the Faculty of Management
          </h3>
        </div>
        <Image src="/moon-stone.png" alt="uom logo" width={50} height={50} />
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
