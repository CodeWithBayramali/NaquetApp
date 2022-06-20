import { Text, FlatList, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, Image } from 'native-base';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const { width } = Dimensions.get('screen');

const CategoryBySellerList = () => {
  const { categoryById } = useSelector(state => state.category);
  const colorSchema = useColorScheme();
  const [categoriesItem, setCategoriesItem] = useState([]);
  useEffect(() => {
    setCategoriesItem(categoryById);
    return () => {
      setCategoriesItem([]);
    };
  }, []);

  return (
    <FlatList
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'column',
        padding: width * 0.02,
        justifyContent: 'space-between',
      }}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      data={categoryById}
      renderItem={({ item, index }) => (
        <TouchableOpacity>
          <Box
            shadow={3}
            ml={'2'}
            style={{ width: width * 0.45, marginVertical: 10, height: width * 0.5, borderRadius: 10 }}
          >
            <Image
              borderRadius={10}
              source={{ uri: item.imgURL }}
              alt="image"
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
            <View
              style={{
                backgroundColor: '#171717',
                opacity: 0.6,
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: width * 0.12,
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
              }}
            ></View>
            <View style={{ zIndex: 12, bottom: width * 0.1, left: 7 }}>
              <Text style={{ color: '#fff' }}>{item.productName.substring(0, 27) + '...'}</Text>

              <View
                style={{ bottom: 1, flexDirection: 'row', marginTop: width * 0.01, justifyContent: 'space-around' }}
              >
                <Text style={{ color: Colors[colorSchema].mainColor }}>{item.kg} kg</Text>
                <View style={{ backgroundColor: Colors[colorSchema].mainColor, padding: 2, borderRadius: width * 0.5 }}>
                  <Text style={{ color: '#fff', fontSize: 11 }}>{item.price} ₺</Text>
                </View>
              </View>
            </View>
          </Box>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryBySellerList;
