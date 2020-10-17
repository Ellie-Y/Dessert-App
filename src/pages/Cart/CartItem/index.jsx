import React from 'react'
import Quantity from '../../../components/Quantity'
import Svg from '../../../components/Svg'

import './cartItem.scss'


function CartItem(props) {
  return (
    <div className="cart-item mt-2">
      <div className="image-wrapper">
        <img src={props.imageUrl} alt={props.name}></img>
      </div>
      <div className="item-desc">
        <p className="item-title">{props.name}</p>
        <p className="item-price">¥<span>{props.price}</span></p>
        <p className="item-detail">
          <span>Matcha</span>
          <span>, 6 inch</span>
        </p>
        <Quantity type="min" count={props.count} />
      </div>
      <div className="delete">
        <Svg name='bin' />
      </div>
    </div>
  )
}

export default CartItem
