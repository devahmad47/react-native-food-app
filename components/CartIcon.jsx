import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColours } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCart, selectCartTotal } from '../slices/cartSlice'

export default function CartIcon() {
    const navigation=useNavigation()
    const cartItems=useSelector(selectCart);
    const cartTotal=useSelector(selectCartTotal)
    if (cartItems.length)
  return (
    <View className="absolute z-50 w-full bottom-5">
      <TouchableOpacity className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg' 
      onPress={()=>navigation.navigate('Cart')}
      style={{backgroundColor:themeColours.bgColor(1)}}>
      <View className='p-2 px-4 rounded-full' style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
      <Text className='text-white font-extrabold text-lg'>{cartItems.length}</Text>
       </View>
       <Text className='font-extrabold text-lg flex-1 text-center text-white'
       >View Cart</Text>
       <Text className='font-extrabold text-white text-lg'>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}