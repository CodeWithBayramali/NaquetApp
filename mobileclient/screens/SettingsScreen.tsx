import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Camera'  />
    </Stack.Navigator>
  )
}

export default SettingsScreen