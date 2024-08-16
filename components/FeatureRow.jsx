import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColours } from '../theme'
import { ScrollView } from 'react-native'
import RestaurantCrad from './RestaurantCrad'

export default function FeatureRow({title, description, restaurants}) {
  return (
    <View >
    <View className='flex-row justify-between items-center px-4'>
        <View >
            <Text className='font-bold text-lg'>{title}</Text>
            <Text className='text-gray-500 text-xs'>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColours.text}} className='font-semibold'>See All</Text>
        </TouchableOpacity>
    </View>
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:15}}
    className='overflow-visible py-10'
    >
{
    restaurants.map((restaurant, index)=>{
        return (
           <RestaurantCrad 
            item={restaurant}
            key={index}
           /> 
        )
    })
}
    </ScrollView>
    </View>
  )
}