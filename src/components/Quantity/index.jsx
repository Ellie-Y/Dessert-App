import React, { useState } from 'react'
import Svg from '../Svg'

import './quantity.scss'


function Quantity(props) {
  //todo 最终的数量要传给父组件
  const initNum = props.count;
  const [count, setCount] = useState(initNum);
  const addCount = () => setCount(count + 1);
  const reduceCount = () => count > 1 ? setCount(count - 1) : false;

  return (
    props.type === 'min'
      ?
      <div className="quantity mt-1">
        <div onClick={() => reduceCount()} className="countBtn minus">
          <Svg name='minus' />
        </div>
        <div>{count}</div>
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
          <div className="number">{count}</div>
          <div onClick={() => addCount()} className="countBtn plus">
            <Svg name='plus' />
          </div>
        </div>
      </div>
  )
}

export default Quantity
