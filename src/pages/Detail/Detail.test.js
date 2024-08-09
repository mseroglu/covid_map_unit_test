import { render, screen } from "@testing-library/react";
import Detail from "."
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"
import { BrowserRouter } from "react-router-dom"
import { storeData } from "../../utils/constant";

// test ortamındaki store'un kurulumunu yap, projede thunk kullandığımız için onu da tanıtmamız gerekir
const mockStore = configureStore([thunk])

it("Yükleme durumunda loader bileşenleri ekrana basılır", () => {
   // loading durumunda store daki veriyi simüle ediyoruz
   const store = mockStore({
      covidReducer: {
         isLoading: true,
         error: null,
         data: null
      }
   })
   // ilk olarak bileşeni render et
   render(
      <Provider store={store} >
         <BrowserRouter>
            <Detail />
         </BrowserRouter>
      </Provider>
   )

   // bileşen içindeki elementleri al
   const header_loader = screen.getByTestId("header-loader")
   const card_loader = screen.getAllByTestId("card-loader")
})

it("Hata gelme durumunda error bileşeni ekrana basılır", () => {

   const store = mockStore({
      covidReducer: {
         isLoading: false,
         error: { message: "Bu bir hata mesajıdır" },
         data: null
      }
   })

   render(
      <Provider store={store}>
         <BrowserRouter>
            <Detail />
         </BrowserRouter>
      </Provider>
   )
   // Hata mesajını içeren bir element ekrana basıldı mı
   screen.getByText("Bu bir hata mesajıdır")

})

it("Veri gelmesi durumunda ülke bilgisi ve kartlar ekrana basılır", () => {

   const store = mockStore({
      covidReducer: {
         isLoading: false,
         error: null,
         data: storeData
      }
   })

   render(
      <Provider store={store}>
         <BrowserRouter>
            <Detail />
         </BrowserRouter>
      </Provider>
       )

      //* 1- Ülke detayları ekrana geliyor mu

      // ekrandaki resmi al
      const img = screen.getByRole("img")

      // resmin kaynağı datadaki resim url ile aynı mı
       expect(img).toHaveAttribute("src", storeData.country.flags.png)

       // ülke ismi ekrana gelir mi
       screen.getByText(storeData.country.altSpellings[1])
      
       //* 2- Kartlar ekrana geliyor mu?

       // nesneyi arraya dönüştür
       const dizi = Object.entries(storeData.covid)

       // dizideki bütün elemanların key ve value değerleri ekrana basılıyor mu
       dizi.forEach(i=>{
         // başlık ekrana geldi mi?
         screen.getByText(i[0].split("_").join(" "))

         // değer ekrana geldi mi, (Burda 0 gibi değerler birden fazla kere geldiğinden all kullanmak gerekiyor)
         screen.getAllByText(i[1])
         
       })
})

