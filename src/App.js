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

//* Hook reducer
const CartContext = React.createContext();
const initCart = [];
const initCart2 = [
  {
    id: "",
    name: "",
    imgUrl: "",
    price: "",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.quantity - 1 };
    case "increase":
      return { count: state.quantity + 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initCart);
  const { id, name, imgUrl, price, quantity } = state;

  return (
    <CartContext.Provider value={dispatch}>
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
