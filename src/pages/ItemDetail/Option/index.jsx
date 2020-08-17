import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './option.scss'

Option.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

function Option(props) {
  const options = props.options;
  const [clicked, setClick] = React.useState(options[0]);  //首选项默认选中

  return (
    <div id="option">
      <div className="option-title">
        <p className="option-title-name">{props.name}</p>
      </div>
      <div className="option-group">
        {
          options.map((option, i) => (
            <div
              onClick={() => setClick(option)}
              className={clicked === option ? `option-item item${i} clicked` : `option-item item${i}`}
              key={i} >
              <p className="item-name">{option}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

Option.defaultProps = {
  name: 'Taste',
  options: ['草莓', '花生', '抹茶']
}

export default Option

