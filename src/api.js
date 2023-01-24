import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

export const fetchTrendFilms = async() => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
}

export const fetchFilmInfo = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
  return response.data;
};

export const fetchRequestedFilm = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}`,
  );
  return response.data.results;
};

export const fetchFilmCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
  );
  return response.data;
};
