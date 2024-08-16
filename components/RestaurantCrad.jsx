import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Foundation from '@expo/vector-icons/Foundation';
import Feather from '@expo/vector-icons/Feather';
import { themeColours } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
export default function RestaurantCrad({item}) {
    const navigation=useNavigation()
  return (
    <TouchableWithoutFeedback 
    onPress={()=>navigation.navigate('Restaurant', {...item})}>
      <View style={{
        shadowColor:themeColours.bgColor(0.5),
        shadowRadius:8
      }} className='mr-6 bg-white rounded-3xl shadow-lg'>
<Image className='h-36 w-64 rounded-t-3xl'  source={{ uri: urlFor(item.image).url() }}/>
<View className='px-3 pb-4 space-y-2'>
    <Text className='text-lg font-bold pt-2'>{item.name}</Text>
    <View className='flex-row items-center space-x-1'>
    <Foundation name="star" size={20} color="orange"/>
    <Text className='text-xs'>
        <Text className='text-green-700'>{item.stars}</Text>
        <Text className='text-gray-700'>
            ({item.review} reviews) <Text className='font-semibold'>{item?.type?.name}</Text></Text>
        </Text>
    </View>
    <View className='flex-row items-center space-x-1'>
    <Feather name="map-pin" size={20} color="gray" />
    <Text className='text-gray-700 text-xs'>Nearby. {item.address}</Text>
    </View>
</View>
      </View>
    </TouchableWithoutFeedback>
  )
}