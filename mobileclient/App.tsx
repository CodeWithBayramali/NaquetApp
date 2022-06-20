import { DarkTheme, DefaultTheme, NavigationContainer,useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "./utils/navigationService";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import RootNavigator from "./navigation/RootNavigator";
import {NativeBaseProvider} from 'native-base';

import {Provider} from 'react-redux'
import store from "./redux";
import EntranceNavigator from "./navigation/EntranceNavigator";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

import decode from 'jwt-decode'



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [token,setToken] = useState()

  const getToken = async() => {
    const accestoken= await AsyncStorageLib.getItem('token')
    setToken(accestoken)
  }

  useEffect(()=> {
      getToken()
  },[token])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <NativeBaseProvider>
            <Provider store={store}>
              {
                !token ? <EntranceNavigator />: <RootNavigator />
              }
            </Provider>
          </NativeBaseProvider>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
