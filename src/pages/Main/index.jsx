import { useState } from "react";
import { Link } from "react-router-dom";
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup } from "react-simple-maps";


const Main = () => {
   const [selectedGeo, setSelectedGeo] = useState(null)

   const geoUrl =
      "https://ismailarilik.com/react-covid-maps/geo.json"

   return (
      <main className="bg-zinc-800 text-white h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col justify-center items-center wrapper pt-10 ">
         <h1 className="mb-5" >Detay Görüntüle: {selectedGeo?.properties.name} </h1>
         <ComposableMap height={1000} projectionConfig={{
            scale: 350

         }}>
            <ZoomableGroup >

               <Graticule stroke="gray" strokeWidth={.3} />
               <Sphere stroke="gray" strokeWidth={.3} />

               <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                     geographies.map((geo) => (
                        <Link key={geo.id} to={`/detail?code=${geo.id}`}>
                           <Geography key={geo.rsmKey} geography={geo} style={{
                              default: {
                                 fill: "#EEE"
                              },
                              hover: {
                                 fill: "rgb(54 197 94)"
                              }
                           }}
                              onMouseEnter={() => setSelectedGeo(geo)}
                              onMouseLeave={() => setSelectedGeo(null)} />
                        </Link>
                     ))
                  }
               </Geographies>
            </ZoomableGroup>
         </ComposableMap>
      </main>
   );
};

export default Main;