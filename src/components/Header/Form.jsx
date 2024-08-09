import { CiSearch } from "react-icons/ci";

const Form = () => {

  return (
    <div className="flex items-center border rounded ">
      <input type="text" className="bg-transparent text-lg px-2 md:px-4 outline-none font-bold" />
      <button className="bg-green-500 p-[6px] text-xl w-full h-full rounded transiton hover:bg-green-600">
         <CiSearch className="text-xl" />
      </button>
    </div>
  );
};

export default Form;