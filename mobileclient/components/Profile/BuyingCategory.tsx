import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Box } from 'native-base';

const { width } = Dimensions.get('window');

const BuyingCategory = () => {
  const colorSchema = useColorScheme();

  return (
    <View style={{marginHorizontal: width * 0.03,marginTop: 30,}}>
    <Text style={{color:Colors[colorSchema].text,fontSize:20,fontWeight:'500'}}>Tercih Edilen Kategori</Text>
    <View
      style={{
          marginTop:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <Box
        shadow={1}
        style={{
          margin: 10,
          paddingHorizontal:10,
          paddingVertical:5,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors[colorSchema].whiteBackgroundCardColor,
        }}
      >
        <Text style={{ color: Colors[colorSchema].text, fontSize: 16 }}>Sebzeler</Text>
      </Box>

      <Box
        shadow={1}
        style={{
          paddingHorizontal:10,
          paddingVertical:5,
          margin: 10,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors[colorSchema].whiteBackgroundCardColor,
        }}
      >
        <Text style={{ color: Colors[colorSchema].text, fontSize: 16 }}>Kuru Yemiş</Text>
      </Box>

      <Box
        shadow={1}
        style={{
          paddingHorizontal:10,
          paddingVertical:5,
          margin:10,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors[colorSchema].whiteBackgroundCardColor,
        }}
      >
        <Text style={{ color: Colors[colorSchema].text, fontSize: 16 }}>Deniz Ürünleri</Text>
      </Box>
      <Box
        shadow={1}
        style={{
          paddingHorizontal:10,
          paddingVertical:5,
          margin: 10,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors[colorSchema].whiteBackgroundCardColor,
        }}
      >
        <Text style={{ color: Colors[colorSchema].text, fontSize: 16 }}>Deniz Ürünleri</Text>
      </Box>
    </View>
    </View>

   
  );
};

export default BuyingCategory;
