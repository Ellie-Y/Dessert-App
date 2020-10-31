import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Switch, Route, Link, useRouteMatch } from "react-router-dom"
import AllProducts from '../AllProducts'

import './category.scss'

const imageUrls = [
  'https://i.ibb.co/8bXCv6d/chocolate-cake.png',
  'https://i.ibb.co/yQks0y1/cookies.png',
  'https://i.ibb.co/c8RP5Cv/bakery.png'
];

function CategoryCard(props) {
  return (
    <div id="category-card" className={props.name} >
      <div className="card-wrapper">
        <div className="img-wrapper">
          <img src={props.url} alt={props.name} />
        </div>
        <h2 className="name">{props.name}</h2>
      </div>
    </div>
  )
}

function Category() {
  let { path, url } = useRouteMatch();

  return (
    <Container id="category">
      <div className="wrapper">
        <div className="title">
          <h1>Select</h1>
          <h1>product type</h1>
        </div>

        <div className="card-group">
          <Link to={`${url}/cake`}>
            <CategoryCard url={imageUrls[0]} name='Cake' />
          </Link>
          <CategoryCard url={imageUrls[1]} name='Biscuit' />
          <CategoryCard url={imageUrls[2]} name="Bakery" />
        </div>
      </div>
    </Container>
  )
}

CategoryCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Category

