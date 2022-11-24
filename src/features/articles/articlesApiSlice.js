import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//move key to env
const API_KEY = '26e9382884c83cb85bf6760c490ac6bf';
const BASE_URL = `http://api.mediastack.com/v1/news?access_key=${API_KEY}`;
//'http://api.mediastack.com/v1/news?access_key=26e9382884c83cb85bf6760c490ac6bf&categories=business'
export const ariclesApiSlice = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchArticles: builder.query({
        query: category => `&categories=${category}`,
      }),
    };
  },
});

export const {useFetchArticlesQuery} = ariclesApiSlice;
