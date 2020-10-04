import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Option from './Option'
import Quantity from '../../components/Quantity'
import getProducts from '../../services/getProducts'


import './itemDetail.scss'

function ItemDetail( { match }) {
  const [item, setItem] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts(`/${match.params.id}`);
      setItem(result.data);
      console.log(result.data);
    }

    fetchData();
  }, []);
  console.log(match.params);  //TODO 拿到item的 ID，然后发送请求拿到具体的信息
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
          <Quantity count={1} />
        </div>
      </div>
      <div className="cartBtn-wrapper">
        <Button color="primary" className="cartBtn" variant="contained" disableElevation>Add to cart</Button>
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

