import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducer/cartSlice'

export default configureStore({   // Including create store
  reducer: {
    cart: cartSlice,
  }
})
