import React, { useReducer } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      if (state.indexOf(newItem) === -1) {
        return [ ...state, newItem];
      } else {
        return state;
      }
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