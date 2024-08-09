import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../utils/constant";


const getData = createAsyncThunk("covid/getData", async ({ code }) => {

   const params = { iso: code }
   const options = { params, headers }

   // iso code göre ülkenin covid bilgilerini al
   const req1 = axios.get("https://covid-19-statistics.p.rapidapi.com/reports", options);

   // iso code göre ülkenin detay verilerini al
   const req2 = axios.get(`https://restcountries.com/v3.1/alpha/${code}`)

   // her iki api isteğini aynı anda gönder
   const responses = await Promise.all([req1, req2])

   // verileri flat yaptık, yani düzleştirdik
   const covid = {
      ...responses[0].data.data[0],
      ...responses[0].data.data[0].region,
   }
   // gereksiz verileri siliyoruz
   delete covid.region
   delete covid.cities

   // return edilen aksiyonun payloadı dır
   return { covid, country: responses[1].data[0]}
})

export default getData