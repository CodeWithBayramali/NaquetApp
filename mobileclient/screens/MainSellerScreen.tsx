import {
  View,
  Text,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import {
  Box,
  Select,
  CheckIcon,
  Input,
  FormControl,
  WarningOutlineIcon,
  Button,
  useToast,
  FlatList
} from 'native-base';
import { Formik } from 'formik';
import { sellerFormValidate } from '../utils/formValidate';
import { useNavigation } from '@react-navigation/native';
import sellList from '../utils/sellList.json';
import categories from '../utils/categories.json'
import {useDispatch} from 'react-redux';
import { createProduct } from '../redux/actions/productActions';
import decode from 'jwt-decode'
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';


const { width, height } = Dimensions.get('screen');

const MainSellerScreen = (props) => {
  const colorSchema = useColorScheme();
  const dispatch = useDispatch()
  const toast = useToast();
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const [photo, setPhoto] = useState();
  const [token,setToken] = useState();
  const [priValue,setPriValue] = useState()

  const getToken = async() => {
    const accestoken= await AsyncStorageLib.getItem('token')
    setToken(decode(accestoken))
  }

  const getByCategoryProduct = catId => {
    const data = sellList.filter(item => item.categoryId === catId);
    setProduct(data);
  };

  const _handleSubmit = async (values, { resetForm }) => {
    await dispatch(createProduct({...values,userName:token.username,imgURL:photo}))
    resetForm();
    setPhoto(null)
    toast.show({
      placement:'top',
      render: () => {
        return <Box bg="emerald.500" px="2" py="2" rounded="md" mt={'16'}>
                <Text style={{color:Colors[colorSchema].badgeText,fontSize:16}}>Ürününüz başarıyla yayınlandı</Text>
              </Box>;
      }
    });
  };

  useEffect(() => {
    getToken()
    if(photo !== null){
      setPhoto(props.route.params.image1)
    }
  },[]);

  return (
    <View style={{ height: '100%',backgroundColor:Colors[colorSchema].darkModeBackground}}>
      <Formik
        initialValues={{
          productId: '',
          categoryId: '',
          productName: '',
          description: '',
          kg: '',
          price: '',
          imgURL: '',
        }}
        onSubmit={_handleSubmit}
        validationSchema={sellerFormValidate}
      >
        {({ values, errors, handleChange, touched, handleSubmit, setFieldTouched }) => (
          <View>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position':'height'}
            shouldRasterizeIOS={true}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10: 0}
              >
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: width * 0.03, height: '100%' }}>
                <View>
                  {/** PHOTO BOX VIEW */}
                  <View
                    style={{
                      marginTop: 12,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SellCamera')}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: Colors[colorSchema].borderColor,
                        width: 100,
                        height: 100,
                        borderRadius: width * 0.02,
                      }}
                    >
                      {photo ? (
                        <Image
                          source={{uri:photo}}
                          style={{ width: 98, height: 98, resizeMode: 'cover', borderRadius: width * 0.02 }}
                        />
                      ) : (
                        <AntDesign name="plus" size={15} color={Colors[colorSchema].grayText} />
                      )}
                    </TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: 10, color: Colors[colorSchema].grayText, marginTop: 9 }}>
                    Müşterilerin ürününü görmesi için net fotoğraflar yükle
                  </Text>

                  {/** INFORMATION BODY */}
                  <Box>
                    <FormControl
                      isInvalid={errors.categoryId && touched.categoryId}
                      marginY={Platform.OS === 'ios' ? '3' : '1'}
                    >
                      <FormControl.Label fontSize={'2xl'} >Kategori <Text style={{color:'red'}}>*</Text></FormControl.Label>
                      <Select
                        onValueChange={handleChange('categoryId')}
                        defaultValue={values.categoryId}
                        size={'xl'}
                        color={Colors[colorSchema].text}
                        variant="filled"
                        height={'12'}
                        accessibilityLabel="Choose Service"
                        placeholder="Kategori Seç"
                        borderWidth={0}
                        backgroundColor={Colors[colorSchema].inputColor}
                      >
                        {
                          categories.map((item,index)=> (
                            <Select.Item key={index} onTouchStart={() => getByCategoryProduct(item.id)} label={item.name} value={item.id} />
                          )
                          )
                        }
                      </Select>
                      {errors.categoryId && (
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                          {errors.categoryId}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>

                    <FormControl
                      isDisabled={!product && 'true'}
                      isInvalid={errors.productId && touched.productId}
                      marginY={Platform.OS === 'ios' ? '3' : '1'}
                    >
                      <FormControl.Label>Ürün <Text style={{color:'red'}}>*</Text></FormControl.Label>
                      <Select
                        onValueChange={handleChange('productId')}
                        defaultValue={values.productId}
                        size={'xl'}
                        color={Colors[colorSchema].text}
                        variant="filled"
                        height={'12'}
                        placeholder="Ürün Seç"
                        borderWidth={0}
                        backgroundColor={Colors[colorSchema].inputColor}
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size="5" />,
                        }}
                      >
                         {
                           product.map((item,index)=> (
                            <Select.Item key={index} label={item.name} value={item.id} />
                          ))
                         }
                      </Select>
                      {errors.productId && (
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                          {errors.productId}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>

                    <FormControl
                      isInvalid={errors.productName && touched.productName}
                      marginY={Platform.OS === 'ios' ? '3' : '1'}
                    >
                      <FormControl.Label>Başlık <Text style={{color:'red'}}>*</Text></FormControl.Label>
                      <Input
                        onChangeText={handleChange('productName')}
                        value={values.productName}
                        color={Colors[colorSchema].text}
                        size={'xl'}
                        height={'12'}
                        borderWidth={0}
                        backgroundColor={Colors[colorSchema].inputColor}
                        placeholder="Ürün başlığı"
                      />
                      {errors.productName && (
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                          {errors.productName}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>
                  </Box>

                  {/** PRICE AND KG INPUT */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <FormControl isInvalid={errors.kg && touched.kg} width={'2/5'}>
                      <FormControl.Label>Kilogram <Text style={{color:'red'}}>*</Text></FormControl.Label>
                      <TextInputMask
                        onChangeText={handleChange('kg')}
                        type={'only-numbers'}
                        value={values.kg}
                        keyboardType={'decimal-pad'}
                        placeholder="0"
                        style={{borderWidth:0,height:45,backgroundColor:Colors[colorSchema].inputColor,borderRadius:5,fontSize:18,padding:7}}
                      />
                      <Box style={{position:'absolute',right:8,top:38}}>
                      <MaterialCommunityIcons name="weight-kilogram" size={20} />
                      </Box>
                      {errors.kg && (
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                          {errors.kg}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>

                    <FormControl isInvalid={errors.price && touched.price} width={'2/5'}>
                      <FormControl.Label>Fiyat <Text style={{color:'red'}}>*</Text></FormControl.Label>
                      <TextInputMask
                      options={{ unit:'',precision:2 }}
                        keyboardType="numeric"
                        type={'money'}
                        onChangeText={handleChange('price')}
                        value={values.price}
                        placeholder='0.00'
                        style={{borderWidth:0,height:45,backgroundColor:Colors[colorSchema].inputColor,borderRadius:5,fontSize:18,padding:7}}
                      />
                      <Box style={{position:'absolute',right:8,top:38}}>
                      <FontAwesome name="turkish-lira" size={20} color="black" />
                      </Box>
                      {errors.price && (
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                          {errors.price}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>
                  </View>
                  {/** PRICE AND KG FINISH */}

                  <View>
                    <FormControl
                      isInvalid={errors.description && touched.description}
                      marginY={Platform.OS === 'ios' ? '3' : '1'}
                    >
                      <FormControl.Label>Açıklama <Text style={{color:'red'}}>*</Text></FormControl.Label>
                      <TextInput
                        onChangeText={handleChange('description')}
                        value={values.description}
                        color={Colors[colorSchema].text}
                        numberOfLines={7}
                        placeholder="Ürün Açıklaması giriniz"
                        borderWidth={0}
                        multiline={true}
                        disableFullscreenUI={true}
                        style={{borderWidth:0,height:100,flexGrow:1,backgroundColor:Colors[colorSchema].inputColor,borderRadius:5,fontSize:18,padding:7}}
                      />
                      {errors.description && (
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                          {errors.description}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>
                  </View>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
            <View
              style={{
                bottom: 0,
                width: '100%',
                position: 'absolute',
                height: height * 0.1,
                shadowColor: 'gray',
                backgroundColor: Colors[colorSchema].darkModeBackground,
                shadowOpacity: 0.2,
                padding: width * 0.03,
              }}
            >
              <Button onPress={handleSubmit} size="lg">
                YAYINLA
              </Button>
            </View>
          </View>
        )}
      </Formik>

      {/** SEND COMPONENT */}
    </View>
  );
};

export default MainSellerScreen;
