import React, { FC, useEffect } from 'react';
import {
  Text, Image, View, StyleSheet, ScrollView, SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

import { RootStackParams } from '../models/types/navigationStackTypes';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMovieById } from '../store/slices/movieSlice';
import { imageUrl } from '../configs/urls';

type MovieProps = NativeStackScreenProps<RootStackParams, 'Movie'>

const MovieScreen: FC<MovieProps> = ({ route }) => {
  const { movie } = useAppSelector((state) => state.movieReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieById(route.params.movieId));
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Image
        source={{ uri: `${imageUrl}/${movie?.poster_path}` }}
        style={style.poster}
      />
      <View style={style.description}>
        <ScrollView style={style.scrollView}>
          <Text style={style.title}>{movie?.title}</Text>
          <Text style={style.overview}>{movie?.overview}</Text>
          <Text style={style.rate}>
            Rate:
            {' '}
            {movie?.vote_average}
            {' '}
            (
            {movie?.vote_count}
            )
          </Text>
          <View style={style.infoList}>
            <Text style={style.infoTitle}>Genres:</Text>
            {movie?.genres
                 && movie.genres.map((genre) => (
                   <Text style={style.infoItem}>
                     {genre.name}
                     ;
                   </Text>
                 ))}
          </View>
          <View style={style.infoList}>
            <Text style={style.infoTitle}>Production companies:</Text>
            {movie?.production_companies
              && movie.production_companies
                .map((company) => (
                  <Text style={style.infoItem}>
                    {company.name}
                    ;
                  </Text>
                ))}
          </View>
          <View style={style.infoList}>
            <Text style={style.infoTitle}>Production Countries:</Text>
            {movie?.production_countries
              && movie.production_countries
                .map((country) => (
                  <Text style={style.infoItem}>
                    {country.name}
                    ;
                  </Text>
                ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  scrollView: {
    height: '100%',
  },
  poster: {
    flex: 1,
    width: 200,
  },
  description: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
  },
  overview: {
    marginBottom: 15,
  },
  infoList: {
    flex: 1,
    flexDirection: 'row',
  },
  infoTitle: {
    fontWeight: '600',
  },
  infoItem: {
    marginLeft: 3,
  },
  rate: {
    marginBottom: 15,
  },

});

export default MovieScreen;
