import React, { FC } from 'react';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { useNavigation } from '@react-navigation/native';
import { IMovie } from '../models/interfaces/movieInterface';
import { imageUrl } from '../configs/urls';
import { RootStackParams } from '../models/types/navigationStackTypes';
import { windowSize } from '../configs/dimensions';

const MovieListItem: FC<{item: IMovie}> = ({ item }) => {
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity onPress={() => navigate.navigate('Movie', { movieId: item.id })}>
      <View style={style.container}>

        <Image source={{ uri: `${imageUrl}/${item.poster_path}` }} style={style.image} />
        <View style={style.text}>
          <Text style={style.title}>{item.title}</Text>
          <Text>
            Rate:
            {' '}
            {item.vote_average}
            {' '}
            / 10 (
            {item.vote_count}
            )
          </Text>
        </View>
      </View>
    </TouchableOpacity>

  );
};

const style = StyleSheet.create({
  container: {
    width: windowSize.width - 10,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.11)',
    borderWidth: 1,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,

  },
  image: {
    width: windowSize.width / 3,
    height: windowSize.height / 4,
  },
  text: {
    height: windowSize.height / 4,
    width: (windowSize.width * 2) / 3,
    flex: 1,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24 * windowSize.fontScale,
  },

});

export default MovieListItem;
