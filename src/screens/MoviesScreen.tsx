import React, { FC, useEffect, useState } from 'react';
import {
  FlatList, SafeAreaView, StyleSheet,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMovies } from '../store/slices/movieSlice';
import MovieListItem from '../components/MovieListItem';

const MoviesScreen: FC = () => {
  const { movies } = useAppSelector((state) => state.movieReducer);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getMovies(page));
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieListItem item={item} key={item.id} />}
        keyExtractor={(item) => `${item.id}`}
        onEndReached={loadMore}
      />

    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MoviesScreen;
