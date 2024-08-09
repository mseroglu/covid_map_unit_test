import { IoWarning } from "react-icons/io5";

const Error = ({ message, retry }) => {

  return (
    <div className="col-span-4 flex flex-col gap-10">
      <div className="flex items-center gap-3 p-2 bg-red-600 h-[150px] w-full rounded-lg">
        <div className="w-1/6">
          <IoWarning className=" text-3xl text-white" />
        </div>

        <div className="text-white">
          <h2>Üzgünüm bir hata oluştu</h2>
          <p>{message}</p>
        </div>
      </div>

      <button
        onClick={retry}
        className="bg-gray-600 transition hover:bg-gray-700 text-white rounded-md py-2 px-3 w-fit self-center">Tekrar Dene</button>
    </div>
  );
};

export default Error;