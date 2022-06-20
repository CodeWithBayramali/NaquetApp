import { View, Text, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';

import Searchbar from '../components/Home/Searchbar';
import HomeCategoryList from '../components/Home/HomeCategoryList';
import PopularSeller from '../components/Home/PopularSeller';
import PopularSellerWholeSaler from '../components/Home/PopularWholeSaler';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularSeller } from '../redux/actions/sellerActions';
import { fetchSeller } from '../redux/actions/sellerActions';
import { Spinner } from 'native-base';

const HomeScreen = () => {
  const colorSchema = useColorScheme();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [refreshing,setRefreshing] = useState(false);
  const { popseller } = useSelector(state => state.seller);
  const { normseller } = useSelector(state => state.seller);

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(fetchPopularSeller());
    dispatch(fetchSeller());
    setRefreshing(false)
  }

  useEffect(() => {
    dispatch(fetchPopularSeller());
    dispatch(fetchSeller());
    setLoading(false);
  }, [dispatch]);

  return loading ? (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Spinner color={Colors[colorSchema].mainColor} size="lg" />
    </View>
  ) : (
    <ScrollView
    refreshControl={
      <RefreshControl tintColor={Colors[colorSchema].mainColor} refreshing={refreshing} onRefresh={onRefresh} />
    }
      bounces={true}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: Colors[colorSchema].background }}
    >
      <Searchbar />
      <HomeCategoryList />
      <PopularSeller normseller={normseller} />
      <PopularSellerWholeSaler popseller={popseller} />
    </ScrollView>
  );
};

export default HomeScreen;
