import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import store from '../../redux/store'
import { Container, Button } from '@material-ui/core'
import CartItem from './CartItem'

import './cart.scss'

function Cart() {
  const cartData = store.getState().cart;
  let items = [];
  if (cartData && cartData.length !== 0) {
    items = cartData.map(i => (
      <CartItem 
        key={i.item.id} 
        {...i.item}
        count={i.count}
      />
    ));
  }

  return (
    <Container maxWidth="sm" id="shopping-cart">
      <h1>Your order</h1>
      {items}

      <div className="cartBtn-wrapper">
        <div className="total-amount">
          <p className="light">Total</p>
          <h3 className="bold">$ 220.3</h3>
        </div>
        <Button color="primary" className="checkout-btn" variant="contained" disableElevation>Checkout</Button>
      </div>
    </Container>
  )
}

Cart.propTypes = {

}

export default Cart

