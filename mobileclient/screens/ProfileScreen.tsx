import React, { useEffect, useState } from 'react';
import { Box } from 'native-base';
import ProfileHeader from '../components/Profile/ProfileHeader';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import UserContent from '../components/Profile/UserContent';
import BuyingCategory from '../components/Profile/BuyingCategory';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode';

const ProfileScreen = () => {

  const colorSchema = useColorScheme()
  

  return (
    <Box style={{backgroundColor:Colors[colorSchema].background,height:'100%'}}>
        <ProfileHeader />
        <UserContent />
        <BuyingCategory />
    </Box>
  );
};

export default ProfileScreen;
