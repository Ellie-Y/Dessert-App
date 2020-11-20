import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increaseOne, decreaseOne } from '../../redux/reducer/cartSlice';
import Svg from '../Svg'
import Snackbar from '../Tools/Snackbar'

import './quantity.scss'

function Quantity(props) {
  const dispatch = useDispatch();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const addCount = () => props.onChange('increase');
  
  const reduceCount = () => props.onChange('decrease');

  const addOne = () => dispatch(increaseOne(props.id));

  const reduceOne = () => props.count <= 1 
    ? setShowSnackbar(!showSnackbar)
    : dispatch(decreaseOne(props.id));

  const snackbarOff = () => setShowSnackbar(false);

  return (
    <> 
      <Snackbar msg="Too less quantity!" duration={2500} open={showSnackbar} timeout={snackbarOff} />

      {
        props.type === 'min'
          ?  // 当计数器在购物车页面的时候
          <div className="quantity mt-1">
            <div onClick={reduceOne} className="countBtn minus">
              <Svg name='minus' />
            </div>
            <div>{props.count}</div>
            <div onClick={addOne} className="countBtn plus">
              <Svg name='plus' />
            </div>
          </div>
          :
          <div className="quantity-wrapper">
            <p className="quantity-title">Quantity</p>
            <div className="quantity">
              <div onClick={reduceCount} className="countBtn minus">
                <Svg name='minus' />
              </div>
              <div className="number">{props.count}</div>
              <div onClick={addCount} className="countBtn plus">
                <Svg name='plus' />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Quantity
