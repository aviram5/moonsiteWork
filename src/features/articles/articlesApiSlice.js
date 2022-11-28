import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, BASE_URL} from 'src/config/apiConfig';

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
        transformResponse: response => {
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
