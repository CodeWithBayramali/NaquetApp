import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import categories from '../../../utils/categories.json';

const { width, height } = Dimensions.get('window');

const HomeCategoryList = () => {
  //const { categories } = useSelector(state => state.category);
  const colorSchema = useColorScheme();
  const navigation = useNavigation();

  return (
    <Box style={styles.categoryContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('CategoryBySeller', { id: item.id, catName: item.name })}
          >
            <View
              key={index}
              style={{
                flexDirection: 'column',
                marginHorizontal: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                shadow={2}
                style={{
                  width: 80,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors[colorSchema].darkModeBackground,
                  borderRadius: 8,
                  marginBottom: 15,
                }}
              >
                <Image source={{ uri: item.img }} style={{ width: 60, height: 60, borderRadius: 6 }} />
              </Box>
              <Text style={{ color: Colors[colorSchema].text }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
};

export default HomeCategoryList;
