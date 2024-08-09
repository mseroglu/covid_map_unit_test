
const InfoCard = ({ item }) => {

   return (
      <div className="flex flex-col
       bg-gray-200 p-3 rounded-lg shadow-md text-gray-600 md:w-60">
         <span className="text-sm font-bold capitalize">
            {item[0].split("_").join(" ")}</span>
         <span>{item[1]}</span>
      </div>
   );
};

export default InfoCard;