import { createStore } from 'redux'
import actionType from './actionType'

// const store = createStore(reducer, []);  // store 里的值默认为空数组

/**
 * @param state 之前仓库中的状态
 * @param action 约定格式 {type: 'type', payload: data}
 */
function reducer(state, action) {
  switch(action.type) {
    case actionType.Add:
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
    case 'update':
      return state;
    case "delete":
      return { count: state.quantity + 1 };
    default:
      return state;
  }
}