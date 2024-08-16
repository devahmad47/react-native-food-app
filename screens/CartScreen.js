import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { features } from '../constants'
import { themeColours } from '../theme'
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeToCart, selectCart, selectCartTotal } from '../slices/cartSlice';
import { urlFor } from '../sanity';

export default function CartScreen() {
    const restaurant=useSelector(selectRestaurant);
    const navigation=useNavigation()
    const cartItems=useSelector(selectCart)
    const cartTotal=useSelector(selectCartTotal)
    const dispatch=useDispatch();
    let deliveryFee=20;
    const [groupItems, setGroupItems]=useState({});
    useEffect(() => {
        //adding items in cart by grouping id
     const item=cartItems.reduce((group,item)=>{
        if(group[item._id]){
            group[item._id].push(item)
        }else{
            group[item._id]=[item]
        }return group;
     },{})
     setGroupItems(item)
    }, [cartItems])
    
  return (
    <View className='bg-white flex-1 mt-1'>
    <StatusBar barStyle='dark-content'/>
    <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
         onPress={()=>navigation.goBack()}
          style={{backgroundColor:themeColours.bgColor(1)}} className="absolute z-10 p-1 rounded-full shadow top-5 left-2">
        <AntDesign
              name="arrowleft"
              size={22}
              color='white'
            />
        </TouchableOpacity>
        <View>
            <Text className='text-center font-bold text-xl'>Your Cart</Text>
            <Text className='text-center text-gray-500'>{restaurant.name}</Text>
        </View>
      </View> 
      <View style={{backgroundColor:themeColours.bgColor(0.4)}} className='flex-row items-center px-4'>
<Image className='w-20 h-20 rounded-full scale-x-[-1]' source={require('../assets/deliveryman.png')} />
<Text className='flex-1 text-center font-medium'>Deliver in 20-30 minutes</Text>
<TouchableOpacity>
    <Text className='font-bold' style={{color:themeColours.text}}>Change</Text>
</TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} 
      contentContainerStyle={{
        paddingBottom:50
      }} className='bg-white pt-5'>
{
   Object.entries(groupItems).map(([key,item])=>{
    let dish=item[0];
        return(
<View key={key} className='items-center flex-row space-x-3 py-3 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
    <Text className='font-bold' style={{color:themeColours.text}}>{item.length}</Text>
    <Image className='h-14 w-14 rounded-full' source={{ uri: urlFor(dish.image).url() }}/>
    <Text className='font-bold flex-1 text-gray-700'>{dish.name}</Text>
    <Text className='font-semibold text-base'>${dish.price}</Text>
<TouchableOpacity onPress={()=>dispatch(removeToCart({id:dish._id}))} className='p-1 rounded-full' style={{backgroundColor:themeColours.bgColor(1)}}>
<Entypo name="minus" size={24} color="white" />
</TouchableOpacity>
</View>
        )
})}
      </ScrollView>
      <View className='p-6 px-8 rounded-t-3xl space-y-4 ' style={{backgroundColor:themeColours.bgColor(0.4)}}>
        <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Subtotal</Text>
            <Text className='text-gray-700'>${cartTotal}</Text>
        </View>
        <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Delivery Fee</Text>
            <Text className='text-gray-700'>${deliveryFee}</Text>
        </View>
        <View className='flex-row justify-between'>
            <Text className='text-gray-700 font-extrabold'>Order Total</Text>
            <Text className='text-gray-700 font-extrabold'>${deliveryFee+cartTotal}</Text>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Order')}
         style={{backgroundColor:themeColours.bgColor(1)}} className='p-3 rounded-full'>
            <Text className='text-white text-center font-bold text-lg'>Place Order</Text>
        </TouchableOpacity>
      </View>

    </View>
   
  )
}