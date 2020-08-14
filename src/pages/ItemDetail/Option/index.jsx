import React from 'react'
import PropTypes from 'prop-types'

import './option.scss'

function Option(props) {
  return (
    <div id="option">
      <div className="option-title">
        <p className="option-title-name">Size</p>
      </div>
      <div className="option-group">
        <div className="option-item item1 clicked">
          <p className="item-name">6寸</p>
        </div>
        <div className="option-item item2">
          <p className="item-name">8寸</p>
        </div>
        <div className="option-item item3">
          <p className="item-name">10寸</p>
        </div>
      </div>

    </div>
  )
}

Option.propTypes = {

}

export default Option

