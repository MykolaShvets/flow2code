import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovie } from '../../models/interfaces/movieInterface';
import { movieService } from '../../services/movieService';

interface IInitialState {
    movie: IMovie | null;
    movies: IMovie[] | null;
    searchResults: IMovie[] | null;

}

const initialState: IInitialState = {
  movie: null,
  movies: null,
  searchResults: null,
};

export const getMovies = createAsyncThunk(
  'movieSlice/getMovies',
  async (page: number, { dispatch }) => {
    try {
      const { data } = await movieService.getAll(page);
      dispatch(SET_MOVIES({ movies: data.results }));
    } catch (e) {
      console.log(e.message);
    }
  },
);

export const getMovieById = createAsyncThunk(
  'movieSlice/getMovieById',
  async (id: number, { dispatch }) => {
    try {
      const { data } = await movieService.getById(id);
      dispatch(SET_MOVIE({ movie: data }));
    } catch (e) {
      console.log(e.message);
    }
  },
);

export const searchByQuery = createAsyncThunk(
  'movieSlice/searchByQuery',
  async (query: string, { dispatch }) => {
    try {
      const { data } = await movieService.searchByQuery(query);
      dispatch(SET_SEARCH_RESULTS({ searchResults: data.results }));
    } catch (e) {
      console.log(e.message);
    }
  },
);

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    SET_MOVIES: (state, action: PayloadAction<{movies: IMovie[]}>) => {
      if (state.movies) {
        state.movies = [...state.movies, ...action.payload.movies];
      } else {
        state.movies = action.payload.movies;
      }
    },
    SET_MOVIE: (state, action: PayloadAction<{movie: IMovie}>) => {
      state.movie = action.payload.movie;
    },
    SET_SEARCH_RESULTS: (state, action: PayloadAction<{searchResults: IMovie[]}>) => {
      state.searchResults = action.payload.searchResults;
    },
  },
});

export const movieReducer = movieSlice.reducer;

export const { SET_MOVIES, SET_MOVIE, SET_SEARCH_RESULTS } = movieSlice.actions;
