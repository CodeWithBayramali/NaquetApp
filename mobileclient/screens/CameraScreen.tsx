import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const CameraScreen = ({route}) => {
  const navigation = useNavigation();
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const snap = async () => {
    // const {base64} = await cameraRef.current.takePictureAsync({base64:true});
    const photo = await cameraRef.current.takePictureAsync()
    navigation.navigate('MainSellScreen',{image1:photo.uri})
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef} >
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <FontAwesome name='photo' size={38} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={snap}>
            <FontAwesome name='camera' size={52} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name='camera-reverse-outline' size={52} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      justifyContent:'space-around',
      backgroundColor: 'transparent',
      flexDirection: 'row',
      marginBottom: 60,
    },
    button: {
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
  });

export default CameraScreen;
