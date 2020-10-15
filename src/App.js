import React, { useReducer } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { objectEquals } from 'object-equals'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ItemDetail from "./pages/ItemDetail";

import "./App.scss";

export const CartContext = React.createContext();  //* Context 要导出
const initCart = [];

//* Hook reducer
function reducer(state, action) {
  switch (action.type) {
    case "add":
      const newItem = action.payload;
      const hasItem = state.some(i => i.item.id === newItem.item.id);  //TODO id 有时候判断错误
      // const hasItem = state.some(i => {
      //   if (i.item.id === newItem.item.id) {
      //     console.log(i.item.id, newItem.item.id);
      //   }
      //   else {
      //     console.log(i.item.id, newItem.item.id);
      //     return false;
      //   }
      // });
      if (!hasItem) {  // 没有就直接添加
        return [ ...state, newItem];
      }
      else if (hasItem) {  // 有物品，在旧物品的基础上添加上新的数量，插入新对象并把旧物品删除
        console.log('has item!');
        const changedItem = state.map(i => i.item.id === newItem.item.id ? {item: newItem.item, count: newItem.count + i.count} : i);
        // const oldItemIndex = state.findIndex(i => objectEquals(i, newItem));
        const oldItemIndex = state.findIndex(i => i.item.id === newItem.item.id);
        state.splice(oldItemIndex, 1, changedItem[0]);
        return state;
      }
    case 'update':
      return state;
    case "delete":
      return { count: state.quantity + 1 };
    case "decrease":
      return { count: state.quantity - 1 };
    case "increase":
      return { count: state.quantity + 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initCart);

  return (
    <CartContext.Provider value={{
      state: state,
      dispatch: dispatch,
    }}>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/item/:id" component={ItemDetail} />
        </Switch>

        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default hot(module)(App);