import { View, Text, TextInput,Platform } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from '../Home/Searchbar/styles'

const MyListSearchBar = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.searchIcon} size={24} color={Colors[colorScheme].maincolortSearchBar} />
      <TextInput
      placeholderTextColor={
        Platform.OS === 'android' && Colors[colorScheme].borderColor
      }
        style={{
          height: 55,
          borderRadius: 5,
          paddingLeft: 60,
          fontSize: 18,
          backgroundColor: Colors[colorScheme].darkModeBackground,
          width: "100%",
        }}
        placeholder="Satıcı yada ürün bul"
      />
      <Ionicons name="ios-filter" size={24} color={Colors[colorScheme].maincolortSearchBar} style={styles.filteringIcon} />
    </View>
  );
};

export default MyListSearchBar;
