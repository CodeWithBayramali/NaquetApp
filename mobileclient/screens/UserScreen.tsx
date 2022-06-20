import { ScrollView,Dimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import UserHeader from '../components/UserProfile/UserHeader'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { Divider } from 'native-base'
import PrefferedCategory from '../components/UserProfile/PrefferedCategory'
import PrefferedProduct from '../components/UserProfile/PrefferedProduct'
import decode from 'jwt-decode'
import AsyncStorageLib from '@react-native-async-storage/async-storage'
import { getUserInfo } from '../redux/actions/userActions'

const {width} = Dimensions.get('window')

const UserScreen = () => {

    const colorSchema = useColorScheme()
    const dispatch = useDispatch()
    const {userInfo} = useSelector((state) => state.user)
    const [id,setId] = useState()

  const getUser = async () => {
    const userInfo = await AsyncStorageLib.getItem('token')
    const {userId} = decode(userInfo)
    setId(userId)
  }

  useEffect(()=> {
      getUser()
      dispatch(getUserInfo(id))
  },[])

  return (
    <ScrollView style={{backgroundColor:Colors[colorSchema].background}}>
        <UserHeader user={userInfo} />
        <View style={{marginHorizontal:width*0.1}}>
        <Divider my={3}  />
        </View>

        <PrefferedCategory />
        <PrefferedProduct />
    </ScrollView>
  )
}

export default UserScreen