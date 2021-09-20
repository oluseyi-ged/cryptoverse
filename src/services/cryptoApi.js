import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "ec0284e450msh9ca244cc076a311p1e44e9jsn9e4a2becf7da",
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("./coins"),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi
