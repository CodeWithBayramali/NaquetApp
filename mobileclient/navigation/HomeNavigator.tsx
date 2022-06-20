import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileHeader from '../components/Profile/ProfileHeader';
import CategoryBySellerScreen from '../screens/CategoryBySellerScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const colorSchema = useColorScheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: 30 }}>
                <View
                  style={{
                    backgroundColor: Colors[colorSchema].heartColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    padding: 1,
                    position: 'absolute',
                    right: 0,
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      color: Colors[colorSchema].badgeText,
                      fontSize: 8,
                    }}
                  >
                    2
                  </Text>
                </View>
                <AntDesign name="message1" size={28} color={Colors[colorSchema].text} />
              </View>

              <View>
                <View
                  style={{
                    backgroundColor: Colors[colorSchema].heartColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    padding: 1,
                    position: 'absolute',
                    right: 0,
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      color: Colors[colorSchema].badgeText,
                      fontSize: 8,
                    }}
                  >
                    19
                  </Text>
                </View>
                <Ionicons
                  name="notifications-outline"
                  size={28}
                  color={Colors[colorSchema].text}
                />
              </View>
            </View>
          ),
          headerLeft: () => (
            <Text
              style={{
                color: Colors[colorSchema].mainColor,
                fontWeight: '700',
                fontSize: 32,
              }}
            >
              Naquet
            </Text>
          ),
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CategoryBySeller"
        component={CategoryBySellerScreen}
        options={({route}) => ({title:route.params.catName,headerTitleAlign:'center'})}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
