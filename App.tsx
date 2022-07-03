import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { RootStackParams } from './src/models/types/navigationStackTypes';
import MoviesScreen from './src/screens/MoviesScreen';
import MovieScreen from './src/screens/MovieScreen';
import { setupStore } from './src/store/store';
import SearchScreen from './src/screens/SearchScreen';
import SearchButton from './src/components/SearchButton';

const store = setupStore();
const RootStack = createNativeStackNavigator<RootStackParams>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Movies">
          <RootStack.Screen name="Movies" component={MoviesScreen} options={{ headerRight: () => <SearchButton /> }} />
          <RootStack.Screen name="Movie" component={MovieScreen} />
          <RootStack.Screen name="Search" component={SearchScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
