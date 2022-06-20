import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useColorScheme from "../hooks/useColorScheme";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const colorSchema = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
