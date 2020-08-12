import React from 'react'
import PropTypes from 'prop-types'

import './itemDetail.scss'

function ItemDetail(props) {
  return (
    <div id="item-detail" >
      <div className="img-wrapper">
        <img src="https://i.ibb.co/WKc1xbG/Wechat-IMG19771.jpg" alt={props.alt} />
      </div>
    </div>
  )
}

ItemDetail.propTypes = {

}

export default ItemDetail

