import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparing';
import Delivery from './screens/Delivery';
const Stack = createNativeStackNavigator();
export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={ResturantScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
        <Stack.Screen name="Order"  options={{presentation:'fullScreenModal'}} component={OrderPreparing} />
        <Stack.Screen name="Delivery"  options={{presentation:'fullScreenModal'}} component={Delivery} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};


