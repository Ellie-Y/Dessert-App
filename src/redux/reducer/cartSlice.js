import { createSlice } from '@reduxjs/toolkit'

function changeQuantity(type, state, action) {
  const itemIndex = state.findIndex(i => i.item.id === action.payload);
  let updateItem = null;
  state.forEach(i => {
    switch (type) {
      case 'increase':
        return i.item.id === action.payload ? updateItem = {item: i.item, count: i.count + 1} : i
      case 'decrease':
        return i.item.id === action.payload ? updateItem = {item: i.item, count: i.count - 1} : i
    }
  });
  state.splice(itemIndex, 1, updateItem);
  return state;
}

const cartSlice = createSlice({  // generated type {type: "shoppingCart/add"}
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    add: (state, action) => {   // payload is an item object
      const newItem = action.payload;
      const itemIndex = state.findIndex(i => i.item.id === newItem.item.id);
      if (itemIndex === -1) { 
        return [ ...state, newItem];
      }
      else {  // Item exists then change its quantity and delete the old item
        let changedItem = null;
        state.forEach(i => i.item.id === newItem.item.id ? changedItem = {item: newItem.item, count: newItem.count + i.count} : i);
        state.splice(itemIndex, 1, changedItem);
        return state;
      }
    },
    increaseOne: (state, action) => {  // payload is id
      return changeQuantity('increase', state, action);
    },
    decreaseOne: (state, action) => {
      return changeQuantity('decrease', state, action);
    },
    deleteItem: (state, action) => {
      state.splice(state.findIndex(i => i.item.id === action.payload), 1);
      return state;
    },
  }
});


export const { add, update, increaseOne, decreaseOne, deleteItem } = cartSlice.actions

export default cartSlice.reducer

