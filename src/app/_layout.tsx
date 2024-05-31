import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { Stack } from 'expo-router'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"
import { NotoSerifDisplay_700Bold} from "@expo-google-fonts/noto-serif-display"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
        NotoSerifDisplayBold: NotoSerifDisplay_700Bold
    }); 
    
    
    useEffect(() => {
      if (fontsLoaded || fontError) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);
    
    if (!fontsLoaded && !fontError) {
      return null;
    }
  return (
    <Stack screenOptions={{}}>
        <Stack.Screen name='index' options={{title:"Devember"}}/>
    </Stack>
  )
}

export default RootLayout