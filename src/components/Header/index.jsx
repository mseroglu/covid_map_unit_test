import { FaVirusCovid } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./Form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {

   return (
      <header className="flex bg-zinc-900 text-white p-4 md:px-20 items-center justify-between max-h-[80px]">
         <Link to="/" className="flex items-center gap-4 text-green-500 text-xl ">
            <FaVirusCovid />
            <h2 className="whitespace-nowrap">COVID Takip</h2>
         </Link>

         <Form />

         <div className="flex items-center gap-3 max-md:hidden">
            <p className="flex flex-col items-center">
               <span className="text-md font-bold whitespace-nowrap">Bugün Aşı Olanlar</span>
               <span className="text-md">(33,222)</span>
            </p>
            <TbVaccine className="text-2xl text-green-500" />
         </div>
      </header>
   );
};

export default Header;