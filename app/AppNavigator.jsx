import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Wydarzenia from './wydarzenia';
import EventDetails from './EventDetails';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Wydarzenia">
      <Stack.Screen name="Wydarzenia" component={Wydarzenia} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
