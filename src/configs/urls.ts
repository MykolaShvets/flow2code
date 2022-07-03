export const baseURL = 'https://api.themoviedb.org/3';

export const apiKey = '?api_key=7bcb3f83266edcacc79217173b064e2d';

export const imageUrl = 'https://image.tmdb.org/t/p/original';

export const urls = {
  allGenres: `/genre/movie/list${apiKey}`,
  allMovies: `/discover/movie${apiKey}`,
  singleMovie: '/movie',
  search: `/search/movie${apiKey}`,
};
