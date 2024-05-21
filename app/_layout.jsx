import React from 'react';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import EventDetails from './EventDetails';


const RootLayout = () => {
  return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="EventDetails" />
    </Stack>
  );
};

export default RootLayout

