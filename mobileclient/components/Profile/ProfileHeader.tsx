import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
  const colorSchema = useColorScheme();
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors[colorSchema].mainColor,
        height: '25%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
      }}
    >
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={28}
        color={Colors[colorSchema].badgeText}
        style={{position:'absolute',zIndex:1, marginTop: 55, left: 30 }}
      />
      <View style={{ marginTop: 55, alignItems: 'flex-end', marginRight: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 30 }}>
            <View
              style={{
                backgroundColor: Colors[colorSchema].heartColor,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                padding: 1,
                position: 'absolute',
                right: 0,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  color: Colors[colorSchema].badgeText,
                  fontSize: 8,
                }}
              >
                2
              </Text>
            </View>
            <AntDesign name="message1" size={28} color={Colors[colorSchema].badgeText} />
          </View>

          <View>
            <View
              style={{
                backgroundColor: Colors[colorSchema].heartColor,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                padding: 1,
                position: 'absolute',
                right: 0,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  color: Colors[colorSchema].badgeText,
                  fontSize: 8,
                }}
              >
                19
              </Text>
            </View>
            <Ionicons name="notifications-outline" size={28} color={Colors[colorSchema].badgeText} />
          </View>
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://images.dog.ceo/breeds/appenzeller/n02107908_5378.jpg' }}
          style={{
            width: 170,
            height: 170,
            borderRadius: 100,
            marginTop: 35,
            borderColor: Colors[colorSchema].background,
            borderWidth: 7,
          }}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
