import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {useDispatch} from 'react-redux'
import { logout } from '../redux/actions/userActions';
import EntranceNavigator from './EntranceNavigator';
import EntranceScreen from '../screens/EntranceScreen';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    const dispatch = useDispatch();
    const colorSchema = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfile"
        component={UserScreen}
        options={{
          headerStyle:{backgroundColor:Colors[colorSchema].darkModeBackground},
          headerTitle:'',
          headerLeft:()=>(
            <Ionicons onPress={()=> dispatch(logout())} name="ios-settings-outline" size={28} color={Colors[colorSchema].text} />
          ),
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
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
