import { View, Text, Dimensions, Platform,Image,KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button, FormControl, Heading, Icon, Input, WarningOutlineIcon } from 'native-base';
import { Formik } from 'formik';
import { loginFormValidation } from '../utils/formValidate';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';

const { width } = Dimensions.get('screen');

const LoginScreen = ({ navigation }) => {
  const colorSchema = useColorScheme();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const _handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    dispatch(login(values));
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding':'height'}>
    <View style={{ backgroundColor: Colors[colorSchema].mainColor, height: '100%' }}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={28}
        color={Colors[colorSchema].badgeText}
        style={{ position: 'absolute', zIndex: 1, marginTop: 55, left: 30 }}
      />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={_handleSubmit}
        validationSchema={loginFormValidation}
      >
        {({ values, errors, handleChange, touched, handleSubmit }) => (
          <View
            style={{ paddingHorizontal: width * 0.03, justifyContent: 'center', alignItems: 'center', height: '100%' }}
          >
            <Image source={require('../assets/images/naquetlogo.png')} style={{ width: 300, height: 200 }} />
            <FormControl isInvalid={errors.email && touched.email} marginY={Platform.OS === 'ios' ? '3' : '1'} mb="10">
              <Input
                type="text"
                style={{color:'#fff'}}
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                onChangeText={handleChange('email')}
                value={values.email}
                color={Colors[colorSchema].text}
                size={'xl'}
                height={'12'}
                placeholder="Email"
              />
              {errors.email && (
                <FormControl.ErrorMessage
                  style={{ position: 'absolute', top: 45 }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.email}
                </FormControl.ErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={errors.password && touched.password}
              marginY={Platform.OS === 'ios' ? '3' : '1'}
              mb="10"
            >
              <Input
                type="password"
                InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />}
                onChangeText={handleChange('password')}
                value={values.password}
                style={{color:'#fff'}}
                color={Colors[colorSchema].text}
                size={'xl'}
                height={'12'}
                placeholder="Parola"
              />
              {errors.password && (
                <FormControl.ErrorMessage
                  style={{ position: 'absolute', top: 45 }}
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.password}
                </FormControl.ErrorMessage>
              )}
            </FormControl>

            <Button
              onPress={handleSubmit}
              isLoading={loading}
              size="lg"
              isDisabled={errors.email && errors.password}
              isLoadingText="Giriş Yapılıyor"
              colorScheme={'success'}
              w={'full'}
            >
              Giriş
            </Button>
          </View>
        )}
      </Formik>
    </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
