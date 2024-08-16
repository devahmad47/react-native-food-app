import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparing() {
    const navigation=useNavigation()
useEffect(() => {
setTimeout(() => {
    navigation.navigate('Delivery')
}, 3000);
 
}, [])

  return (
    <View className='flex-1 justify-center items-center bg-white'>
<Image source={require('../assets/Illustration.gif')} className='h-80 w-80' />
    </View>
  )
}