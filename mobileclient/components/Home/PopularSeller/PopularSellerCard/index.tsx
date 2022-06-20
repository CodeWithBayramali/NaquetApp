import { View, Text, Dimensions, Image } from 'react-native';
import { Box, Center, Skeleton, Spinner, VStack } from 'native-base';
import React, { useEffect } from 'react';
import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import useColorScheme from '../../../../hooks/useColorScheme';
import { Seller } from '../../../../models';

const { width, height } = Dimensions.get('window');

type popularDataProps = {
  popSeller: Seller;
};


const PopularSellerCard = ({ popSeller }: popularDataProps) => {
  const colorSchema = useColorScheme();

  return (
    // Main Card START -------------------------
      <Box
      shadow={3}
      style={{
        backgroundColor: Colors[colorSchema].darkModeBackground,
        padding: 7,
        width: width * 0.45,
        marginRight: 15,
        borderRadius: 5,
        marginBottom: 10,
      }}
    >
      <Ionicons
        name="ios-heart"
        size={18}
        color={Colors[colorSchema].heartColor}
        style={{ position: 'absolute', right: 5, top: 5 }}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            padding: 10,
          }}
        >
          <Image
            source={{
              uri: popSeller.imgURL,
            }}
            style={{
              width: width * 0.35,
              height: width * 0.35,
              borderRadius: width * 0.5,
              shadowColor: Colors[colorSchema].mainColor,
              shadowOpacity: 3,
            }}
          />
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
          <Text style={{ color: Colors[colorSchema].mainColor }}>
            {popSeller.userName}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="flower-tulip-outline"
            size={20}
            color={Colors[colorSchema].successTextColor}
          />
          <Text style={{ color: Colors[colorSchema].successTextColor }}>
            {popSeller.kg}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: Colors[colorSchema].text }}>4.5</Text>
            <View style={{ flexDirection: 'row', marginLeft: 8, alignItems: 'center' }}>
              <Entypo name="star" size={10} color={Colors[colorSchema].starColor} />
              <Entypo name="star" size={10} color={Colors[colorSchema].starColor} />
              <Entypo name="star" size={10} color={Colors[colorSchema].starColor} />
              <Entypo name="star" size={10} color={Colors[colorSchema].starColor} />
              <Entypo name="star" size={10} color={Colors[colorSchema].starColor} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.06,
              height: width * 0.06,
              backgroundColor: Colors[colorSchema].borderColor,
              borderRadius: width * 0.5,
            }}
          >
            <FontAwesome name="send" size={12} color={Colors[colorSchema].text} />
          </View>
        </View>
      </View>
    </Box>
  );
};

export default PopularSellerCard;
