import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option'

import './itemDetail.scss'

function ItemDetail(props) {
  return (
    <div id="item-detail" >
      <div className="img-wrapper">
        <img src="https://i.ibb.co/WKc1xbG/Wechat-IMG19771.jpg" alt={props.alt} />
      </div>
      <div className="content">
        <div className="title">
          <p className="name">Mike Cookie</p>
          <p className="price"><span>¥</span>20</p>
        </div>

        {/* size 和 taste 是一个组件 */}
        <div className="size">
          <Option />
        </div>
        <div className="taste"></div>
        
        {/* quantity 是一个组件 */}
        <div className="quantity"></div>
      </div>
      <div className="cart-button">

      </div>
    </div>
  )
}

ItemDetail.propTypes = {

}

export default ItemDetail

