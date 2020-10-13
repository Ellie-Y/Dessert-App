import React, { useState } from 'react'
import Svg from '../Svg'

import './quantity.scss'


function Quantity(props) {
  const addCount = () => props.onChange('increase');
  const reduceCount = () => props.onChange('decrease');

  return (
    props.type === 'min'
      ?
      <div className="quantity mt-1">
        <div onClick={() => reduceCount()} className="countBtn minus">
          <Svg name='minus' />
        </div>
        <div>{props.count}</div>
        <div onClick={() => addCount()} className="countBtn plus">
          <Svg name='plus' />
        </div>
      </div>
      :
      <div className="quantity-wrapper">
        <p className="quantity-title">Quantity</p>
        <div className="quantity">
          <div onClick={() => reduceCount()} className="countBtn minus">
            <Svg name='minus' />
          </div>
          <div className="number">{props.count}</div>
          <div onClick={() => addCount()} className="countBtn plus">
            <Svg name='plus' />
          </div>
        </div>
      </div>
  )
}

export default Quantity
