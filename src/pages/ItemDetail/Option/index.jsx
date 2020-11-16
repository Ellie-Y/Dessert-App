import React, { useState, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import './option.scss'

Option.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired
}

function Option(props) {
  const [clickedOption, setClickedOption] = useState('')

  // 不使用 memo 那么每次点击 size 后 options 都不一样，会导致 useEffect 一直重新渲染
  const options = useMemo(() => props.options.split(','), [props])

  useEffect(() => {
    console.log('useEffect!', props)
    // if (props.options !== 'Loading' && props.name !== 'Taste') {
    //   setClickedOption(options[0])
    // }
    if (props) {
      setClickedOption(props.options.split(',')[0])

    }
  }, [])

  const onSizeChange = (item, i) => {
    props.name === 'Size' ? props.sizeChange(i, item) : props.tasteChange(i, item)
    setClickedOption(item)
  }

  const optionGroup = options.map((item, i) => (
    <div
      className={item === clickedOption ? "option-item clicked" : "option-item"}
      onClick={onSizeChange.bind(null, item, i)}   // NOTE 传过去的是新函数会重新渲染
      key={i} >
      <p className="item-name">{item}</p>
    </div >
  ))

  return (
    <div className="option">
      <div className="option-title">
        <p className="option-title-name">{props.name}</p>
      </div>
      <div className="option-group">
        {optionGroup}
      </div>
    </div>
  )
}

Option.defaultProps = {
  name: 'Taste',
  options: "Loading",
}

export default Option

