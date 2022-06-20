import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import EntranceScreen from '../screens/EntranceScreen';
import RootNavigator from './RootNavigator';

const Stack = createNativeStackNavigator();

const EntranceNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name='EntranceScreen' component={EntranceScreen} />
        <Stack.Screen name='Root' component={RootNavigator} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default EntranceNavigator