import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import DayListItem from '@components/core/DayListItem';



const days = Array.from({ length: 24 }, (_, i) => i+1);

export default function Home() {





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
