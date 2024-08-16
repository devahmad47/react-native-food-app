import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { features } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColours } from '../theme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';
export default function Delivery() {
    const restaurant=useSelector(selectRestaurant);
    const navigation=useNavigation();
    const dispatch=useDispatch()
    const cancelOrder =()=>{
        navigation.navigate('Home')
        dispatch(emptyCart())
    }
  return (
    <View className='flex-1'>
    <MapView initialRegion={{
        longitude:restaurant.lng,
        latitude:restaurant.lat,
        latitudeDelta:0.01,
        longitudeDelta:0.01,
    }} className='flex-1' mapType='standard'>
        <Marker coordinate={{
 longitude:restaurant.lng,
 latitude:restaurant.lat,
        }}
        title={restaurant.name} 
            description={restaurant.description}
            pinColor={themeColours.bgColor(1)}
        />
    </MapView>
    <View className='rounded-t-3xl -mt-12 bg-white relative'>
        <View className='flex-row justify-between px-5 pt-10'>
            <View>
                <Text className='text-lg text-gray-700 font-semibold'>Estimated Arrival</Text>
                <Text className='text-3xl text-gray-700 font-extrabold'>20-30 minutes</Text>
                <Text className='mt-2 text-gray-700 font-semibold'>Your Order is on its way!</Text>
            </View>
            <Image source={require('../assets/map.gif')} className='h-28 w-28'/>
        </View>
        <View className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2' style={{backgroundColor:themeColours.bgColor(0.8)}}>
            <View className='p-1 rounded-full' style={{backgroundColor:"rgba(255,255,255,0.8)"}}>
                <Image source={require('../assets/bikebuy.png')} className='h-16 w-16 rounded-full' />
            </View>
            <View className='flex-1 ml-3'>
                <Text className='text-lg font-bold text-white'>John Doe</Text>
                <Text className=' font-semibold text-white'>Your Rider</Text>
            </View>
            <View className='flex-row items-center space-x-3 mr-3'>
                <TouchableOpacity className='bg-white rounded-full p-2'>
                <FontAwesome6 name="phone" size={28} color={themeColours.bgColor(1)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={cancelOrder} className='bg-white rounded-full p-2'>
                <Entypo name="cross" size={28}  color='red' />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </View>
  )
}