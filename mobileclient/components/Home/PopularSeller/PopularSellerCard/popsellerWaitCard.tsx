import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { Box, Skeleton } from 'native-base'
import Colors from '../../../../constants/Colors';
import useColorScheme from '../../../../hooks/useColorScheme';

const {width} = Dimensions.get('screen');

const PopsellerWaitCard = () => {

    const colorSchema = useColorScheme()
    return (
    <Box
      shadow={3}
      style={{
        backgroundColor: Colors[colorSchema].darkModeBackground,
        padding: 7,
        width: width * 0.45,
        marginRight: 15,
        borderRadius: 5,
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            padding: 10,
          }}
        >
          <Skeleton
          borderColor="coolGray.200" endColor="warmGray.50"
            style={{
              width: width * 0.35,
              height: width * 0.35,
              borderRadius: width * 0.5,
              shadowOpacity: 3,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <Skeleton.Text />
        </View>
      </View>
    </Box>
  )
}

export default PopsellerWaitCard