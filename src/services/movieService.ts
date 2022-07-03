import { axiosService } from './axiosService';
import { apiKey, urls } from '../configs/urls';
import { IMovie, IMovieList } from '../models/interfaces/movieInterface';

export const movieService = {
  getAll: (page: number) => axiosService.get<IMovieList>(`${urls.allMovies}&page=${page}`),
  getById: (id: number) => axiosService.get<IMovie>(`${urls.singleMovie}/${id}${apiKey}`),
  searchByQuery: (query: string) => axiosService.get<IMovieList>(`${urls.search}&query=${query}&page=1`),
};
