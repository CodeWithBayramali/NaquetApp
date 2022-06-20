import { View, Text, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import PopularSellerCard from './PopularSellerCard';
import PopsellerWaitCard from './PopularSellerCard/popsellerWaitCard';

const { width, height } = Dimensions.get('window');

const PopularSeller = ({normseller}) => {
  const colorSchema = useColorScheme();
  const [waitCount,setWaitCount] = useState([1,2])

  return (
    <View style={{ marginTop: 20, width: width * 1, paddingHorizontal: 10 }}>
      <Text style={{ color: Colors[colorSchema].text, fontSize: 23, fontWeight: '500' }}>
        Haftanın En Çok Satanları
      </Text>
      {
        !normseller.length && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} style={{paddingVertical:10}}>
        {
          waitCount.map((item, index) => {
            return (
            <PopsellerWaitCard key={index} />
            )
          })
        }
      </ScrollView>
        )
      }
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} style={styles.popularCard}>
        {
          normseller.map((item, index) => {
            return (
            <PopularSellerCard key={index} popSeller={item} />
            )
          })
        }
      </ScrollView>
    </View>
  );
};

export default PopularSeller;
