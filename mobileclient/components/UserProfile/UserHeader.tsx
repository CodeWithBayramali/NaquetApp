import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const UserHeader = ({user}) => {
  const colorScheme = useColorScheme();
  const {data} =user
  
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: width * 0.04 }}>
      <Image
        source={{ uri: 'https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.png' }}
        style={{ width: width*0.4, height: width*0.4, borderRadius: width * 0.5 }}
      />
      <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: Colors[colorScheme].text, fontSize: 32, fontWeight: '500' }}>{data.firstName} {data.lastName}</Text>
        <Text style={{ color: Colors[colorScheme].grayText, fontSize: 17, marginTop: 15 }}>
          {data.address.city}, {data.address.street}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <MaterialCommunityIcons name="flower-tulip-outline" size={20} color={Colors[colorScheme].successTextColor} />
          <Text style={{ color: Colors[colorScheme].successTextColor }}>{data.popularPoint}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;
