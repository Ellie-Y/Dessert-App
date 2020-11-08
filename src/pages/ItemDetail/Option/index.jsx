import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './option.scss'

Option.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired
}

function Option(props) {
  const options = props.options.split(',')
  const [clicked, setClick] = useState('');

  return (
    <div className="option">
      <div className="option-title">
        <p className="option-title-name">{props.name}</p>
      </div>
      <div className="option-group">
        {
          options.map((option, i) => (
            // click 函数要包一层才不会立即触发
            <div
              onClick={() => {
                console.log(option);
                setClick(option);
              }}    
              className={clicked === option ? `option-item item${i} clicked` : `option-item item${i}`}
              key={i} 
              >
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
  options: "Loading",
}

export default Option

