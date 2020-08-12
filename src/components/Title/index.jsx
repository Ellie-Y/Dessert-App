import React from 'react'

import './index.scss'

export default function Title(props) {
  return (
    <div id="title">
      <div className="wrapper">
        <p className="title-text">
          {props.title}
        </p>
        <div className="more">
          <p>More</p>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}

Title.defaultProps = {
  title: 'Give a title!'
}
