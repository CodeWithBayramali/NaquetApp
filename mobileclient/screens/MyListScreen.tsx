import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Spinner } from 'native-base';
import MyListSearchBar from '../components/MyList/MyListSearchBar';

import user from '../assets/data/users';
import { Users } from '../models/index';
import MyListCard from '../components/MyList/MyListCard';

const MyListScreen = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    setUsers(user);
    return () => {
      setUsers([]);
    };
  });

  return (
    <View style={{ marginBottom: 80 }}>
      <MyListSearchBar />
      {
        !users ? (
          <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Spinner color='#e74d36' />
          </View>
        ):
        <FlatList
        showsVerticalScrollIndicator={false}
        bounces={true}
        data={users}
        renderItem={({ item, index }) => <MyListCard key={index} ListData={item} />}
      />
      }
      
    </View>
  );
};

export default MyListScreen;
