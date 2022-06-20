import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Box } from 'native-base';

const { width } = Dimensions.get('window');

const PrefferedCategory = () => {
  const colorSchema = useColorScheme();

  return (
    <View style={{ marginHorizontal: width * 0.03, marginTop: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ color: Colors[colorSchema].grayText, fontSize: 18, fontWeight: '700' }}
        >
          Tercih Edilen Kategori
        </Text>
        <TouchableOpacity>
          <Text style={{ color: Colors[colorSchema].tabIconSelected, fontSize: 15 }}>
            Düzenle
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
        <Box
          shadow={1}
          style={{
            padding: 3,
            backgroundColor: Colors[colorSchema].darkModeBackground,
            borderRadius: 50,
            paddingHorizontal: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: Colors[colorSchema].text }}>Hayvansal Gıda</Text>
        </Box>
        <Box
          shadow={1}
          style={{
            padding: 3,
            backgroundColor: Colors[colorSchema].darkModeBackground,
            borderRadius: 50,
            paddingHorizontal: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: Colors[colorSchema].text }}>Sebzeler</Text>
        </Box>
        <Box
          shadow={1}
          style={{
            padding: 3,
            backgroundColor: Colors[colorSchema].darkModeBackground,
            borderRadius: 50,
            paddingHorizontal: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: Colors[colorSchema].text }}>Deniz Ürünleri</Text>
        </Box>
        <Box
          shadow={1}
          style={{
            padding: 3,
            backgroundColor: Colors[colorSchema].darkModeBackground,
            borderRadius: 50,
            paddingHorizontal: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: Colors[colorSchema].text }}>Kuru Yemiş</Text>
        </Box>
      </View>
    </View>
  );
};

export default PrefferedCategory;
