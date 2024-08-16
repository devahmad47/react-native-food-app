import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: null,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
  
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const selectRestaurant= state=>state.restaurant.restaurant;
export const { setRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer


