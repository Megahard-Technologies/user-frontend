import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="Profile" options={{headerShown: false}}/>
        <Stack.Screen name="ToDo" options={{headerShown: false}}/>
        <Stack.Screen name="Friends" options={{headerShown: false}}/>
        <Stack.Screen name="Wydarzenia" options={{headerShown: false}}/>
        <Stack.Screen name="EventDetails" options={{headerShown: false}} />
    </Stack>
  );
};

export default RootLayout