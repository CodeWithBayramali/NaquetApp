import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from 'react-native';
import MyListScreen from '../screens/MyListScreen';

const Stack = createNativeStackNavigator();

const MyListNavigator = () => {
  const colorSchema = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyListScreen}
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
                <Ionicons name="notifications-outline" size={28} color={Colors[colorSchema].text} />
              </View>
            </View>
          ),
          headerLeft: () => (
            <Text
              style={{
                color: Colors[colorSchema].text,
                fontWeight: 'bold',
                fontSize: 24,
              }}
            >
              İşlemlerim
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MyListNavigator;
