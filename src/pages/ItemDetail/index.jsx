import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import Option from './Option'
import Quantity from './Quantity'

import './itemDetail.scss'

function ItemDetail(props) {
  return (
    <div id="item-detail" >
      <div className="img-wrapper">
        <img src="https://i.ibb.co/WKc1xbG/Wechat-IMG19771.jpg" alt={props.alt} />
      </div>
      <div className="content-wrapper">
        <div className="content">
          {/* Title */}
          <div className="title">
            <p className="name">Mike Cookie</p>
            <p className="price"><span>¥</span>20</p>
          </div>
          <Option name='Size' options={['6寸', '8寸', '10寸']} />
          <Option />
          <Quantity count={1} />
        </div>
      </div>
      <div className="cartBtn-wrapper">
        <Button className="cartBtn" variant="contained" disableElevation>Add to cart</Button>
      </div>
    </div>
  )
}

ItemDetail.propTypes = {

}

export default ItemDetail

