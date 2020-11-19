import { createSlice } from '@reduxjs/toolkit'

function getIndex(arr, id) {
  return arr.findIndex((i) => i.chosenItem.id === id);
}

const cartSlice = createSlice({  // generated type {type: "shoppingCart/add"}
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    add: (state, action) => {   // payload is an item object
      const item = action.payload;
      const index = getIndex(state, item.chosenItem.id);
      if (index === -1) {   // No item exists
        state.push(item);
      }
      else {  // Item exists then change its quantity
        state[index].count += item.count;
        //  no mutate state way
        // const changedItem = state.map(i => i.item.id === newItem.id ? i.count += newItem.count : i);
      }
    },
    increaseOne: (state, action) => {  // payload is id
      const index = getIndex(state, action.payload);
      state[index].count ++;
    },
    decreaseOne: (state, action) => {
      const index = getIndex(state, action.payload);
      state[index].count --;
    },
    deleteItem: (state, action) => {
      const index = getIndex(state, action.payload);
      state.splice(index, 1);
    },
  }
});


export const { add, update, increaseOne, decreaseOne, deleteItem } = cartSlice.actions

export default cartSlice.reducer

