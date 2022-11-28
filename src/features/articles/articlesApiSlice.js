import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//move key to env
const API_KEY = '26e9382884c83cb85bf6760c490ac6bf';
const BASE_URL = `http://api.mediastack.com/v1/`;

export const ariclesApiSlice = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchArticles: builder.query({
        query: category => ({
          url: `news`,
          params: {
            categories: category,
            access_key: API_KEY,
          },
        }),
        transformResponse: (response, meta, arg) => {
          return response.data.map(item => ({
            ...item,
            key: `${Math.random() * 1000}`,
            isFavorite: false,
          }));
        },
      }),
    };
  },
});

export const {useFetchArticlesQuery} = ariclesApiSlice;
