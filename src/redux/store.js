import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducer/cartSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
  }
})
