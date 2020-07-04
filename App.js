import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ComicsList from './components/ComicsList/ComicsList';
import ComicDetails from './components/ComicDetails/ComicDetals';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={ComicsList}
          options={{ title: 'Comic Reader' }}
        />
        <Stack.Screen name='ComicDetails' component={ComicDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
