import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducer/cartSlice'

export default configureStore({   // including create store
  reducer: {
    cart: cartSlice,
  }
})
