import React from 'react'
import Quantity from '../../../components/Quantity'
import Svg from '../../../components/Svg'

import './cartItem.scss'

// * 需要有个公共的对象来存放产品，其他页面能拿到且添加修改这个对象
function CartItem() {
  return (
    <div className="cart-item mt-2">
      <div className="image-wrapper">
        <img src="https://i.ibb.co/4Pjhwr0/Wechat-IMG19765.jpg" alt=""></img>
      </div>
      <div className="item-desc">
        <p className="item-title">Cup Cake</p>
        <p className="item-price">¥30</p>
        <p className="item-detail">Matcha</p>
        <Quantity type="min" count={1} />
      </div>
      <div className="delete">
        <Svg name='bin' />
      </div>
    </div>
  )
}

export default CartItem
