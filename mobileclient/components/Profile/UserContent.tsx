import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Box, Text, VStack } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const {width,height} = Dimensions.get('window')

const UserContent = () => {
  const colorSchema = useColorScheme();

  return (
    <View style={{ marginTop: '20%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center',marginVertical:height*0.03, marginHorizontal: '3%', padding: 3 }}>
        <Text fontSize={'3xl'} fontWeight={'medium'} color={Colors[colorSchema].mainColor}>
          Caroline Steele
        </Text>
        <Text style={{ color: Colors[colorSchema].grayText, fontWeight: '300', fontSize: 16, marginTop: 1 }}>
          Paragrapher and Artist
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 40 }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors[colorSchema].mainColor,
              marginHorizontal: 20,
              borderRadius: 50,
              width: 100,
              padding: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: Colors[colorSchema].badgeText, fontWeight: 'bold' }}>FOLLOW</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: Colors[colorSchema].mainColor,
              borderWidth: 1,
              padding: 8,
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              marginHorizontal: 20,
              borderRadius: 50,
            }}
          >
            <Text style={{ color: Colors[colorSchema].mainColor, fontWeight: 'bold' }}>MESSAGE</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30,width:'100%' }}>
          <View
            style={{
              borderRightColor: Colors[colorSchema].mainColor,
              borderRightWidth: 1,
              justifyContent:'center',
              alignItems:'center',
              width:width*0.35
            }}
          >
            <Text style={{ color: Colors[colorSchema].grayText,fontSize:20,fontWeight:'500' }}>99</Text>
            <Text style={{ color: Colors[colorSchema].grayText }}>Takip Edilen</Text>
          </View>

          <View
          style={{
            justifyContent:'center',
            alignItems:'center',
            borderRightWidth:1,
            borderRightColor:Colors[colorSchema].mainColor,
            width:width*0.35
          }}
          >
            <Text style={{ color: Colors[colorSchema].grayText,fontSize:20,fontWeight:'500' }}>50.5 K</Text>
            <Text style={{ color: Colors[colorSchema].grayText }}>Takipçi</Text>
          </View>

          <View style={{paddingHorizontal:30,width:width*0.35,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ color: Colors[colorSchema].grayText,fontSize:20,fontWeight:'500' }}>9</Text>
            <Text style={{ color: Colors[colorSchema].grayText }}>Puan</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserContent;
