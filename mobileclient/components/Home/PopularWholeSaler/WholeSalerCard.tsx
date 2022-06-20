import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Box } from 'native-base';
import { Users } from '../../../models';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { AntDesign, Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type wholeSellerProps = {
  wholeSeller: Users;
};

const WholeSalerCard = ({ wholeSeller }: wholeSellerProps) => {
  const colorSchema = useColorScheme();
  const navigation = useNavigation();
  return (
    <Box
      shadow={3}
      style={{
        backgroundColor: Colors[colorSchema].darkModeBackground,
        width: width * 0.5,
        marginRight: 10,
        margin: 2,
        marginBottom: 10,
        borderRadius: 10,
        shadowOffset: {
          width: 0,
          height: 5,
        },
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            padding: 10,
          }}
        >
          <Image
            source={{
              uri: wholeSeller.imgURL,
            }}
            style={{
              width: width * 0.35,
              height: width * 0.35,
              borderRadius: width * 0.5,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors[colorSchema].text,
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {wholeSeller.userName}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRightColor: Colors[colorSchema].borderColor,
              borderRightWidth: 1,
            }}
          >
            <Entypo name="star" size={18} color={Colors[colorSchema].starColor} />
            <Text style={{ color: Colors[colorSchema].text, paddingHorizontal: 8 }}>4.5</Text>
          </View>
          <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name="flower-tulip-outline" size={20} color={Colors[colorSchema].successTextColor} />
        <Text style={{color:Colors[colorSchema].successTextColor}}>{wholeSeller.popularPoint}</Text>
        </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 11,
          }}
        >
          <Text style={{ color: Colors[colorSchema].text, fontWeight: 'bold' }}>{wholeSeller.address.city}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={{
              padding: 7,
              margin: 10,
              borderRadius: 50,
              backgroundColor: Colors[colorSchema].successTextColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AntDesign name="message1" size={24} style={{ color: Colors[colorSchema].badgeText }} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> navigation.navigate('Profile') }
            style={{
              padding: 7,
              margin: 10,
              borderRadius: 50,
              backgroundColor: Colors[colorSchema].mainColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AntDesign name="login" size={24} color={Colors[colorSchema].badgeText} />
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
};

export default WholeSalerCard;
