import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({  // generated type {type: "shoppingCart/add"}
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      const hasItem = state.some(i => i.item.id === newItem.item.id);  //TODO id 有时候判断错误
      if (!hasItem) {  // 没有就直接添加
        return [ ...state, newItem];
      }
      else if (hasItem) {  // 有物品，在旧物品的基础上添加上新的数量，插入新对象并把旧物品删除
        const changedItem = state.map(i => i.item.id === newItem.item.id ? {item: newItem.item, count: newItem.count + i.count} : i);
        const oldItemIndex = state.findIndex(i => i.item.id === newItem.item.id);
        state.splice(oldItemIndex, 1, changedItem[0]);
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

