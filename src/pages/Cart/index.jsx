import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Button } from '@material-ui/core'
import CartItem from './CartItem'

import './cart.scss'

function Cart() {
  const cartItem = useSelector(state => state.cart);
  let totalPrice = 0;
  let items = [];

  if (cartItem && cartItem.length !== 0) {
    items = cartItem.map(i => (
      <CartItem
        key={i.chosenItem.id}
        {...i.chosenItem}
        count={i.count}
      />
    ));

    cartItem.forEach(i => totalPrice += i.count * i.chosenItem.price);
  }

  return (
    <Container maxWidth="sm" id="shopping-cart">
      <h1>Your order</h1>
      {
        items.length === 0 
          ? <img src="https://i.loli.net/2020/10/18/OvYmx8X6q7ZVpHM.png" className="mt-5" alt="Empty shopping cart"></img>
          : <div className="item-group">
            {items}
          </div>
      }
      {/* Checkout section */}
      <div className="cartBtn-wrapper">
        <div className="total-amount">
          <p className="light">Total</p>
          <h2 className="bold">$ {totalPrice}</h2>
        </div>
        <Button color="primary" className="checkout-btn" variant="contained" disableElevation>Checkout</Button>
      </div>
    </Container>
  )
}

Cart.propTypes = {

}

export default Cart

