import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { Users } from '../../models';
import { Box } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const { width } = Dimensions.get('window');

type userDataProps = {
  ListData: Users;
};

const MyListCard = ({ ListData }: userDataProps) => {
  const colorSchema = useColorScheme();
  return (
    <Box
      shadow={2}
      style={{
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: Colors[colorSchema].darkModeBackground,
        marginHorizontal: 10,
        borderRadius: 7,
      }}
    >
      {/* CARD IMAGE BLOCK */}
      <View>
        <Image source={{ uri: ListData.company.img }} style={{ width: 90, height: 90, borderRadius: 10 }} />
      </View>

      {/** CARD CONTENT BLOCK */}
      <View style={{ marginLeft: 20 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.63 }}
        >
          <Text style={{ color: Colors[colorSchema].text, fontSize: 16, fontWeight: 'bold' }}>{ListData.name}</Text>
          <AntDesign name="checkcircle" size={20} color={Colors[colorSchema].successTextColor} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: Colors[colorSchema].grayText }}>{ListData.address.suite}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.63,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{color:Colors[colorSchema].text}}>{ListData.company.name}</Text>
          <Text style={{ color: Colors[colorSchema].tabIconSelected, fontWeight: 'bold' }}>
            {ListData.address.geo.lng} <MaterialCommunityIcons name="weight-kilogram" size={18} color={Colors[colorSchema].mainColor} />
          </Text>
        </View>
      </View>
    </Box>
  );
};

export default MyListCard;
