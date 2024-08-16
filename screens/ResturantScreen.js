import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themeColours } from "../theme";
import Foundation from "@expo/vector-icons/Foundation";
import Feather from "@expo/vector-icons/Feather";
import DishRow from "../components/dishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
import { urlFor } from "../sanity";
const ResturantScreen = () => {
  const { params } = useRoute();
  let item = params;
  // console.log("Restaurants", item)
  const navigation = useNavigation();
  const dispatch=useDispatch();
  useEffect(() => {
if(item && item._id){
    dispatch(setRestaurant({...item}))
}
}, [dispatch]);
  return (
    <View>
    <CartIcon/>
    <StatusBar style="dark-content" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72 rounded-t-xl" source={{ uri: urlFor(item.image).url() }} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-10 left-4 p-2 bg-gray-50 rounded-full shadow"
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={themeColours.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="-mt-12 bg-white pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1 ">
              <Foundation name="star" size={20} color="orange" />
              <Text className="text-xs">
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                  ({item.review} reviews){" "}
                  <Text className="font-semibold">{item?.type?.name}</Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Feather name="map-pin" size={20} color="gray" />
              <Text className="text-gray-700 text-xs">
                Nearby. {item.address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2"> {item.description}</Text>
        </View>
        </View>
        <View className='pb-36 bg-white'>
            <Text className='px-4 py-4 font-bold text-2xl'>Menu</Text>
            {
                item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index} />)
            }     
        </View>
      </ScrollView>
    </View>
  );
};
export default ResturantScreen;
