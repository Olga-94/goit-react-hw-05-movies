import axios from 'axios';
import { API } from '../services/Constants';

axios.defaults.baseURL = API.BASE_URL;

export async function fetchTrandingMovies(page) {
  const url = `/trending/movie/week?api_key=${API.KEY}&page=${page}`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchSearchMovies(seacrhQuery, page) {
  const url = `/search/movie?api_key=${API.KEY}&query=${seacrhQuery}&page=${page}&language=en-US&include_adult=false`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchMovieInformation(movieId) {
  const url = `/movie/${movieId}?api_key=${API.KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchCastInformation(movieId) {
  const url = `/movie/${movieId}/credits?api_key=${API.KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return data.cast;
}

export async function fetchReviews(movieId) {
  const url = `/movie/${movieId}/reviews?api_key=${API.KEY}&language=en-US&page=1`;
  const { data } = await axios.get(url);
  return data.results;
}

export async function fetchGenresList() {
  const url = `/genre/movie/list?api_key=${API.KEY}`;
  const { data } = await axios.get(url);

  return data.genres;
}
