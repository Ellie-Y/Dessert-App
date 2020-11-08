import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import './singleCard.scss'

function SingCard(props) {
  return (
    <div className="basic-card">
      <Link to={`/item/${props.id}`}>
        <div className="image-wrapper">
          <img src={props.main_img} alt={props.alt}></img>
        </div>
      </Link>
      <div className="name">{props.name}</div>
      <div className="bottom">
        <p className="price">¥{props.price.split(',')[0]}</p>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  )
}

SingCard.defaultProps = {
  imageUrl: 'https://i.ibb.co/ZT4L6zs/default-Pic.jpg',
  name: 'No name yet',
  price: '999',
  alt: 'No description yet'
}

SingCard.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default SingCard

