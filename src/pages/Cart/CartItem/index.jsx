import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../../redux/reducer/cartSlice';
import Quantity from '../../../components/Quantity'
import Svg from '../../../components/Svg'

import './cartItem.scss'

function CartItem(props) {
  const dispatch = useDispatch();
  const deleteProduct = () => dispatch(deleteItem(props.id));

  return (
    <div className="cart-item mt-2">
      <div className="image-wrapper">
        <img src={props.main_img} alt={props.name}></img>
      </div>
      <div className="item-desc">
        <p className="item-title">{props.name}</p>
        <p className="item-price">¥<span>{props.price}</span></p>
        <p className="item-detail">
          <span>Matcha</span>
          <span>, 6 inch</span>
        </p>
        <Quantity type="min" count={props.count} id={props.id} />
      </div>
      <div className="delete" onClick={deleteProduct}>
        <Svg name='bin' />
      </div>
    </div>
  )
}

export default CartItem
