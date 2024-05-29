import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import React, {useState} from 'react';
import DayListItem from './src/components/core/DayListItem';


export default function App() {

  const days = Array.from({ length: 24 }, (_, i) => i+1);

  return (
    <View style={styles.container}>

      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={3}
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
    gap: 10
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
