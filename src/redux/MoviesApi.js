import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  tagTypes: ['TrendMovies'],
  endpoints: builder => ({
    getTrendFilms: builder.query({
      query: () => `trending/movie/day?api_key=${KEY}`,
      providesTags: ['TrendMovies'],
    }),
    getRequestedMovies: builder.query({
      query: query =>
        `search/movie?api_key=${KEY}&language=en-US&query=${query}`,
      providesTags: ['RequestedMovies'],
    }),
    getFilmInfo: builder.query({
      query: movieId => `movie/${movieId}?api_key=${KEY}&language=en-US`,
      providesTags: ['FilmInfo'],
    }),
    getFilmVideos: builder.query({
      query: movieId => `movie/${movieId}/videos?api_key=${KEY}&language=en-US`,
      providesTags: ['FilmInfo'],
    }),
    getFilmCast: builder.query({
      query: movieId =>
        `movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
      providesTags: ['FilmCast'],
    }),
    getPersonDetails: builder.query({
      query: personId => `person/${personId}?api_key=${KEY}&language=en-US`,
      providesTags: ['PersonDetails'],
    }),
    getPersonImages: builder.query({
      query: personId =>
        `person/${personId}/images?api_key=${KEY}&language=en-US`,
      providesTags: ['PersonImages'],
    }),
    getFilmReviews: builder.query({
      query: movieId =>
        `movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
      providesTags: ['FilmReviews'],
    }),
  }),
});

export const {
  useGetTrendFilmsQuery,
  useGetRequestedMoviesQuery,
  useGetFilmInfoQuery,
  useGetFilmVideosQuery,
  useGetFilmCastQuery,
  useGetFilmReviewsQuery,
  useGetPersonDetailsQuery,
  useGetPersonImagesQuery
} = moviesApi;
