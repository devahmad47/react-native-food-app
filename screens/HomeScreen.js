import React, { useState, useEffect } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { themeColours } from '../theme';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import { features } from '../constants';
import { selectRestaurant } from '../slices/restaurantSlice';
import { useSelector } from 'react-redux';
import { getFeaturedRestaurants } from '../api';
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featureRestaurants, setFRestaurants]=useState([])
    useEffect(() => {
     getFeaturedRestaurants().then(data=>{
     setFRestaurants(data)
     })
 
    }, [])
    
  return (
    <SafeAreaView className="bg-white">
    <StatusBar barStyle='dark-content'/>
    <View className="flex-row items-center space-x-2 px-4 pb-2">
<View className='flex-row flex-1 p-3 rounded-full border border-gray-300'>
<Feather name="search" size={25} color="gray" />
<TextInput placeholder='search' className='ml-2 flex-1' />
<View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300'>
<Feather name="map-pin" size={20} color="gray" />
<Text className='text-gray-600'>New York,NYC</Text>
</View>
</View>
<View style={{backgroundColor:themeColours.bgColor(1)}} className='p-3 rounded-full'>
<Feather name="sliders" size={24} color="white"  />
</View>
    </View>
     {/* categories main */}
     <ScrollView showsVerticalScrollIndicator={false} 
     contentContainerStyle={{
        paddingBottom:20}}

     >
     {/* categories */}
        <Categories />
        {/* features */}
        <View className='mt-5'>
        {

featureRestaurants.map((item,index)=>{
return (
    <FeatureRow 
key={index}
title={item.name}
restaurants={item.restaurants}
description={item.description}
    />
)
}) 

        }
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

