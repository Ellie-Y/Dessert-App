import React from 'react'
import { hot } from "react-hot-loader"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'
import ItemDetail from './pages/ItemDetail'


import './App.scss'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/cart" component={Cart} />

        {/* FIXME 在具体的商品里面刷新 icon 不显示是因为文件路径不一样，item 多了一层了路径了 */}
        <Route path="/item/:id" component={ItemDetail} />

      </Switch>
     
      <Footer />
    </Router>


  );
}

export default hot(module)(App);
