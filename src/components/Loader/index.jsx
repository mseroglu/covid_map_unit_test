
const Loader = ({ type }) => {

  if (type === "header") return (
    <div data-testid="header-loader" className="flex items-center space-x-2 animate-pulse">
      <div className="w-[180px] h-[32px] lg:h-[36px] rounded-md bg-gray-400">
      </div>
      <div className="w-16 lg:w-24 h-[32px] lg:h-[36px] rounded-md bg-gray-400">
      </div>
    </div>
  )

  const dizi = new Array(16).fill("a")
  return (
    <div data-testid="card-loader" className="col-span-4 w-[70vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          dizi.map(i => (
            <div className=" flex flex-col gap-2 bg-gray-200 rounded-lg p-3 shadow-md md:w-60 animate-pulse select-none">
              <span className="text-transparent text-sm font-bold bg-gray-400 w-1/3">.</span>
              <span className="text-transparent bg-gray-300 w-2/3">.</span>
            </div>
          ))
        }
      </div>
    </div>

  );
};

export default Loader;