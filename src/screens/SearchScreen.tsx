import React, { FC, useEffect, useState } from 'react';
import {
  TextInput, SafeAreaView, StyleSheet, FlatList,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { searchByQuery } from '../store/slices/movieSlice';
import MovieListItem from '../components/MovieListItem';

const SearchScreen: FC = () => {
  const { searchResults } = useAppSelector((state) => state.movieReducer);
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    dispatch(searchByQuery(query.split(' ').join('%20')));
  }, [query]);
  return (
    <SafeAreaView style={style.container}>
      <TextInput style={style.input} value={query} placeholder="Search..." onChangeText={setQuery} />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <MovieListItem item={item} key={item.id} />}
        keyExtractor={(item, index) => `${item.id}:${index}`}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    marginBottom: 10,
  },
});

export default SearchScreen;
