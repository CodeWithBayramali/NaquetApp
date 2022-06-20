import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Box } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeNavigator from './HomeNavigator';
import MyListNavigator from './MyListNavigator';
import SellNavigator from './SellNavigator';
import UserNavigator from './UserNavigator';

const BottomTab = createBottomTabNavigator();

function RootNavigator() {
  const colorScheme = useColorScheme();
    return (
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors[colorScheme].mainColor,
          tabBarShowLabel: false,
        }}
      >
        <BottomTab.Screen
          name="TabHome"
          component={HomeNavigator}
          options={() => ({
            title: 'Tab One',
            tabBarIcon: ({ color }) => <AntDesign name="home" size={32} color={color} />,
          })}
        />
  
        <BottomTab.Screen
          name="TabSearch"
          component={HomeNavigator}
          options={() => ({
            title: 'Tab One',
            tabBarIcon: ({ color }) => <MaterialIcons name="search" size={32} color={color} />,
          })}
        />
  
        <BottomTab.Screen
          name="Sell"
          component={SellNavigator}
          options={() => ({
            tabBarIcon: ({ color }) => (
              <Box
                shadow={2}
                style={{
                  marginTop: -40,
                  borderRadius: 50,
                  width: 65,
                  height: 65,
                  backgroundColor: Colors[colorScheme].mainColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  
                  
                }}
              >
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="flower-tulip-outline" size={28} color={Colors[colorScheme].background} />
                  <Text style={{ color: Colors[colorScheme].background, fontSize: 15, fontWeight: '500' }}>Sat</Text>
                </View>
              </Box>
            ),
          })}
        />
  
        <BottomTab.Screen
          name="MyList"
          component={MyListNavigator}
          options={() => ({
            title: 'Tab One',
            tabBarIcon: ({ color }) => <Ionicons name="list-outline" size={32} color={color} />,
          })}
        />
  
        <BottomTab.Screen
          name="User"
          component={UserNavigator}
          options={() => ({
            title: 'Tab One',
            tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={30} color={color} />,
          })}
        />
      </BottomTab.Navigator>
    );
}

export default RootNavigator;
