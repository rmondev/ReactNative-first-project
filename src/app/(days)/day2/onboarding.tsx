import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';

const OnBoardingScreen = () => {
  return (
    <View style={styles.page}>
        <Stack.Screen options={{headerShown: false}}/>
        <FontAwesome6 name="people-arrows" size={24} color="#FDFDFD" />
        <Text style={styles.title}>Track Every Transaction</Text>
        <Text style={styles.description}>Monitor your spending and contributions, ensuring pennies align with 
            your families aspirations
            </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
        padding: 20
    },
    title:{
        color: '#FDFDFD',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'InterSemi',
        letterSpacing: 1.3,
    },
    image:{
    },
    description:{
      color: 'gray', 
    },

})

export default OnBoardingScreen