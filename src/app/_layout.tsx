import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{}}>
        <Stack.Screen name='index' options={{title:"Devember"}}/>
    </Stack>
  )
}

export default RootLayout