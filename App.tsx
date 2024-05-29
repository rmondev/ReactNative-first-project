import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Hello World</Text>
      <Text style={styles.textHeader}>#rmon.dev Hello</Text>
      <TextInput 
      placeholder='Enter First Name' 
      style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, margin: 10, padding :8}}
      defaultValue={firstName}
      onChangeText={text => setFirstName(text)}
      />
      <TextInput 
      placeholder='Enter Last Name' 
      style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, margin: 10, padding :8}} 
      defaultValue={lastName}
      onChangeText={text => setLastName(text)}
      
      />

      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    fontSize: 24,
    fontWeight: 'bold',
  }
});
