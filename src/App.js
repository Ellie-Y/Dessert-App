import React from "react";
import { useSelector } from "react-redux";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ItemDetail from "./pages/ItemDetail";
import Profile from "./pages/Profile";
import AllProducts from './pages/AllProducts';

import "./App.scss";

function App() {
  const cartItemCount = useSelector((state) => state.cart).length;

  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' exact component={Category} />
        <Route path='/category/:type' component={AllProducts} />
        <Route path='/cart' component={Cart} />
        <Route path='/item/:id' component={ItemDetail} />
        <Route path='/profile' component={Profile} />

        {/* 可以作为 page not found 页面 */}
        {/* <Route component={PageNotFound}/> */}
      </Switch>

      <Footer count={cartItemCount} />
    </Router>
  );
}

export default hot(module)(App);
