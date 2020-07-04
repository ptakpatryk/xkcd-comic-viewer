import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import ComicsList from './components/ComicsList/ComicsList';
import ComicDetails from './components/ComicDetails/ComicDetals';

const Stack = createStackNavigator();
const headerNavigationOConfig = {
  title: 'Comic Reader',
  headerStyle: {
    backgroundColor: '#121212',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',
};
const interpolatorConfig = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={ComicsList}
          options={{
            ...headerNavigationOConfig,
            ...interpolatorConfig,
          }}
        />
        <Stack.Screen
          name='ComicDetails'
          component={ComicDetails}
          options={{
            ...headerNavigationOConfig,
            ...interpolatorConfig,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
