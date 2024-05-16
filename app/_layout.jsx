import React from 'react';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';

const RootLayout = () => {
  return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
    // <Slot/>
  );

      // <Stack>
      //   <Slot name="index" component={Logowanie} />
      //   <Slot name="main" component={Main} />
      // </Stack>




  
};

export default RootLayout

