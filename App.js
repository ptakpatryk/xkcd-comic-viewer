import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComicsList from './components/ComicsList/ComicsList';
import ComicDetails from './components/ComicDetails/ComicDetals';

const Stack = createStackNavigator();
const headerNavigationOptions = {
  title: 'Comic Reader',
  headerStyle: {
    backgroundColor: '#121212',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={ComicsList}
          options={headerNavigationOptions}
        />
        <Stack.Screen
          name='ComicDetails'
          component={ComicDetails}
          options={headerNavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
