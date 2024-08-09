import { render } from "@testing-library/react"
import Detail from "."
import { Provider } from "react-redux"
import { configureStore } from "redux-mock-store"
import { thunk } from "redux-thunk"
import { BrowserRouter } from "react-router-dom"

// test ortamındaki store'un kurulumunu yap, projede thunk kullandığımız için onu da tanıtmamız gerekir
const mockStore = configureStore([thunk])

it("Yükleme durumunda loader bileşenleri ekrana basılır", () => {
   // loading durumunda store daki veriyi simüle ediyoruz
   const store = mockStore({covidReducer:{
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
   
   
   //const card_loader = screen.getByTestId("card-loader")
})