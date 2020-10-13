import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Option from './Option'
import Quantity from '../../components/Quantity'
import getProductData from '../../hooks/getProductData'
import { CartContext } from '../../App'

import './itemDetail.scss'

function ItemDetail({ match }) {
  const item = getProductData(`/${match.params.id}`);  // 拿到item的 ID，然后发送请求拿到具体的信息
  const [count, setCount] = useState(1);
  const context = useContext(CartContext);

  const addToCart = () => {
    context.dispatch({
      type: "add",
      payload: {
        item,
        count,
      },
    });
  }

  const countChange = (value) => {
    if(value === 'increase') {
      setCount(count + 1);
    } 
    else if (value === 'decrease' && count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div id="item-detail" >
      <div className="img-wrapper">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="content-wrapper">
        <div className="content">
          {/* Title */}
          <div className="title">
            <p className="name">{item.name}</p>
            <p className="price"><span>¥</span>{item.price}</p>
          </div>

          <Option name='Size' options={['6寸', '8寸', '10寸']} />
          <Option />

          {/* 子组件是调用 onChange 函数，而 onChange 函数才来执行 countChange */}
          <Quantity count={count} onChange={countChange} />
        </div>
      </div>
      <div className="cartBtn-wrapper">
        <Button
          color="primary" className="cartBtn" variant="contained"
          disableElevation
          onClick={addToCart}
        >Add to cart</Button>
      </div>
    </div>
  )
}

ItemDetail.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
}

ItemDetail.defaultProps = {
  imgAlt: "Cookie image",
  name: "Cookie",
  price: 20,
  options: ['6寸', '8寸', '10寸']
}



export default ItemDetail

