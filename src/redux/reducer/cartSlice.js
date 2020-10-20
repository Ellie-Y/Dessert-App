import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({  // generated type {type: "shoppingCart/add"}
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      const itemIndex = state.findIndex(i => i.item.id === newItem.item.id);
      if (itemIndex === -1) {  // 没有就直接添加
        return [ ...state, newItem];
      }
      else {  // 有物品，在旧物品的基础上添加上新的数量，插入新对象并把旧物品删除
        let changedItem = null;
        state.forEach(i => i.item.id === newItem.item.id ? changedItem = {item: newItem.item, count: newItem.count + i.count} : i);
        state.splice(itemIndex, 1, changedItem);
        return state;
      }
    },

    updateItem: (state, action) => {
      [...state, 1];
    },

    deleteItem: (state, action) => {
      state - 1;
    },
  }
})


export const { add, updateItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer

