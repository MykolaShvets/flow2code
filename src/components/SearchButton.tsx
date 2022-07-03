import React, { FC } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RootStackParams } from '../models/types/navigationStackTypes';

const SearchButton: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Button onPress={() => navigation.navigate('Search')} title="Search" />
  );
};

export default SearchButton;
