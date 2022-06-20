import { View, Text } from "react-native";
import { Box, ScrollView, Select } from "native-base";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import WholeSalerCard from "./WholeSalerCard";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

const PopularSellerWholeSaler = ({popseller}) => {
  const colorSchema = useColorScheme();
  

  return (
    <Box style={{marginBottom:50}}>
      <Text
        style={{
          color: Colors[colorSchema].text,
          fontWeight: "500",
          fontSize: 23,
          marginBottom: 20,
          marginLeft: 10,
        }}
      >
        Popüler Toptancılar
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{padding:10}}
      >
        {popseller.map((item, index) => {
          return <WholeSalerCard key={index} wholeSeller={item} />
        })}
      </ScrollView>
    </Box>
  );
};

export default PopularSellerWholeSaler;
