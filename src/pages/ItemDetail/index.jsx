import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/reducer/cartSlice'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Option from './Option'
import Quantity from '../../components/Quantity'
import getProductData from '../../hooks/getProductData'

import './itemDetail.scss'

function ItemDetail({ match }) {
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(1)
  const itemRef = useRef()

  const item = getProductData(`/${match.params.id}`);  // 拿到item的 ID，然后发送请求拿到具体的信息
  const { main_img, name, size, taste } = item

  useEffect(() => {
    console.log('useEffect Parent!')
    itemRef.current = item
    // 当得到了数据后，初始化的 item.data 就会被数据覆盖，这时再获取就是 undefined
    item.data ? setPrice(0) : setPrice(item.price.split(',')[0])
  }, [item])

  //默认选中第一个属性，然后价格设置为第一个属性的价格
  const sizeChange = (i, item) => {
    if (itemRef.current.price) {
      let newPrice = itemRef.current.price.split(',')[i]
      setPrice(newPrice)
    }
    console.log(item)
  }

  const tasteChange = (i, item) => console.log(item);

  const countChange = (value) => {
    if(value === 'increase') {
      setCount(count + 1);
    } 
    else if (value === 'decrease' && count > 1) {
      setCount(count - 1);
    }
  }

  const dispatch = useDispatch()
  const addToCart = () => dispatch( add({item, count}) );

  return (
    <div id="item-detail" >
      <div className="img-wrapper">
        <img src={main_img} alt={name} />
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div className="title">
            <p className="name">{name}</p>
            <p className="price"><span>¥</span>{price}</p>
          </div>

          <Option name="Size" options={size} sizeChange={sizeChange} />
          <Option name="Taste" options={taste} tasteChange={tasteChange} />

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
  price: 999,
  options: ['6寸', '8寸', '10寸']
}



export default ItemDetail

