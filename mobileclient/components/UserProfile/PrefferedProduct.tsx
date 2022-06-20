import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import useColorSchema from '../../hooks/useColorScheme';
import { Box } from 'native-base';

const { width } = Dimensions.get('window');

const PrefferedProduct = () => {
  const colorSchema = useColorSchema();

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: Colors[colorSchema].grayText,
            fontSize: 18,
            fontWeight: '700',
            paddingHorizontal: width * 0.03,
          }}
        >
          Tercih Edilen Ürünler
        </Text>
        <TouchableOpacity style={{ paddingHorizontal: width * 0.03 }}>
          <Text style={{ color: Colors[colorSchema].tabIconSelected, fontSize: 15 }}>
            Düzenle
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingBottom: 10, paddingHorizontal: width * 0.03 }}
        >
          <Box
            shadow={2}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              backgroundColor: Colors[colorSchema].darkModeBackground,
              marginRight: width * 0.07,
            }}
          >
            <Image
              source={{
                uri: 'https://cdn.webtekno.com/media/cache/content_detail_v2/article/111724/27-meyve-ve-sebzenin-acik-alanda-satisi-yasaklaniyor-1624965600.jpg',
              }}
              style={{ width: 80, height: 80, borderRadius: width * 0.5 }}
            />
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: Colors[colorSchema].text,
              }}
            >
              Pırasa
            </Text>
          </Box>
          <Box
            shadow={2}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              backgroundColor: Colors[colorSchema].darkModeBackground,
              marginRight: width * 0.07,
            }}
          >
            <Image
              source={{
                uri: 'https://cdn.webtekno.com/media/cache/content_detail_v2/article/111724/27-meyve-ve-sebzenin-acik-alanda-satisi-yasaklaniyor-1624965600.jpg',
              }}
              style={{ width: 80, height: 80, borderRadius: width * 0.5 }}
            />
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: Colors[colorSchema].text,
              }}
            >
              Beyaz Dut
            </Text>
          </Box>
          <Box
            shadow={2}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              backgroundColor: Colors[colorSchema].darkModeBackground,
              marginRight: width * 0.07,
            }}
          >
            <Image
              source={{
                uri: 'https://cdn.webtekno.com/media/cache/content_detail_v2/article/111724/27-meyve-ve-sebzenin-acik-alanda-satisi-yasaklaniyor-1624965600.jpg',
              }}
              style={{ width: 80, height: 80, borderRadius: width * 0.5 }}
            />
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: Colors[colorSchema].text,
              }}
            >
              Yaban Mersini
            </Text>
          </Box>
          <Box
            shadow={2}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              backgroundColor: Colors[colorSchema].darkModeBackground,
              marginRight: width * 0.07,
            }}
          >
            <Image
              source={{
                uri: 'https://cdn.webtekno.com/media/cache/content_detail_v2/article/111724/27-meyve-ve-sebzenin-acik-alanda-satisi-yasaklaniyor-1624965600.jpg',
              }}
              style={{ width: 80, height: 80, borderRadius: width * 0.5 }}
            />
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: Colors[colorSchema].text,
              }}
            >
              Yaban Mersini
            </Text>
          </Box>
        </ScrollView>
      </View>
    </View>
  );
};

export default PrefferedProduct;
