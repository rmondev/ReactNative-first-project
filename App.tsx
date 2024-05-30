import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import DayListItem from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const days = Array.from({ length: 24 }, (_, i) => i+1);

export default function App() {

const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
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
    <View style={styles.container}>

      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item })=><DayListItem day={item}/>}
      />

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    marginTop: 48,
  },
  
  content:{
    //alignItems: 'center',
    //justifyContent: 'center',
    gap: 10,
    padding: 16,
    paddingTop: 48,
  },
  
  column:{
    gap: 10
  }

});
