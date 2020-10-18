import React from "react";
import { useSelector } from 'react-redux'
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { objectEquals } from "object-equals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ItemDetail from "./pages/ItemDetail";

import "./App.scss";

function App() {
  const cartItem = useSelector(state => state.cart);
  const cartItemCount = cartItem.length;
  

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/item/:id" component={ItemDetail} />
      </Switch>

      <Footer count={cartItemCount} />
    </Router>
  );
}

export default hot(module)(App);
