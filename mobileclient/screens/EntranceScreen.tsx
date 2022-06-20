import { View, Text, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Button } from 'native-base';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const FadeInView = props => {
  const spinValue = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing:Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [spinValue]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: spinValue, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const EntranceScreen = () => {
  const colorSchema = useColorScheme();
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: Colors[colorSchema].mainColor,
      }}
    >
      <FadeInView>
        <Image source={require('../assets/images/naquetlogo.png')} style={{ width: 400, height: 300 }} />
      </FadeInView>

      <Button mb={'10'} w={'96'} colorScheme={'lime'} size="lg" onPress={() => navigation.navigate('LoginScreen')}>
        Giriş Yap
      </Button>
      <Button w={'96'} size="lg" colorScheme={'fuchsia'}>
        Kayıt Ol
      </Button>
    </View>
  );
};

export default EntranceScreen;
