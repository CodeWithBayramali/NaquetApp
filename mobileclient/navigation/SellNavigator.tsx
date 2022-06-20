import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainSellerScreen from '../screens/MainSellerScreen';
import { MaterialIcons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import CameraScreen from '../screens/CameraScreen';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const SellNavigator = ({ navigation }) => {
  const colorSchema = useColorScheme();

  const goBackSellButton = async () => {
    await AsyncStorageLib.multiRemove(['img1', 'img2', 'img3']);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
  });

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SellCamera"
        component={CameraScreen}
        options={{
          title: 'Ürün Satışı',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <MaterialIcons
              name="cancel"
              style={{ marginLeft: 12 }}
              size={24}
              color={Colors[colorSchema].text}
              onPress={goBackSellButton}
            />
          ),
        }}
      />

      <Stack.Screen
        name="MainSellScreen"
        component={MainSellerScreen}
        options={{
          title: 'Ürün Satışı',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <MaterialIcons
              name="cancel"
              style={{ marginLeft: 12 }}
              size={24}
              color={Colors[colorSchema].text}
              onPress={goBackSellButton}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SellNavigator;
