import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import getData from "../../redux/actions";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import InfoCard from "./InfoCard";

const Detail = () => {
  const { data, error, isLoading } = useSelector(store => store.covidReducer)

  const [params] = useSearchParams()

  const dispatch = useDispatch()

  const code = params.get("code")

  useEffect(() => {
    dispatch(getData({ code }))
  }, [])

  const covidArr = Object.entries(data?.covid || {})

  return (
    <div className="bg-zinc-800 text-white h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col justify-center items-center wrapper p-6 max-lg:h-fit">
      <div className="min-h-[80vh] bg-white text-black p-8 rounded-lg shadow-lg ">
        
        {/* Üst kısım */}
        <div className="flex gap-5 justify-between items-center mb-6">
          <Link to="/" className="bg-gray-700 py-2 px-3 rounded-md hover:bg-gray-800 font-bold text-white cursor-pointer">
            Geri
          </Link>

          <div className="flex items-center space-x-2">
            {isLoading ? <Loader type="header" /> : !error && (
              <>
                <h1 className="text-xl md:text-3xl font-bold">
                  {data.country.altSpellings[1]}
                </h1>
                <img className="w-16 md:w-24 rounded-md shadow shadow-black" src={data.country.flags.png} alt={data.country.flags.alt} />
              </>
            )}
          </div>

        </div>

        {/* ALT KISIM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
          isLoading
            ? <Loader type="" />
            : error
              ? <Error message={error.message} retry={()=> dispatch(getData({ code }))} />
              : covidArr.map((item, key) => (
                <InfoCard key={key} item={item} />
              ))
          }
        </div>

      </div>
    </div>
  );
};

export default Detail;