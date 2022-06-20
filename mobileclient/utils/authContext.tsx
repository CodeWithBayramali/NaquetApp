import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { HStack, Progress, Spinner } from 'native-base';
import React, { useState, createContext, useEffect, useContext } from 'react';
import EntranceNavigator from '../navigation/EntranceNavigator';
import RootNavigator from '../navigation/RootNavigator';

export const AuthenticationContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthenticationContext)
}

export const AuthenticationContextProvider = ({ children }) => {

  const [token,setToken] = useState();

  const getToken = async () => {
    await AsyncStorageLib.getItem('token')
  }

  useEffect(()=> {
    getToken()
  },[token])

  return (
        <AuthenticationContext.Provider value={[token,setToken]}>
          {children}
        </AuthenticationContext.Provider>
  );
};
