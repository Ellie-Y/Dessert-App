import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
// 一定要有 Route 不然 Link 会失效
import { BrowserRouter as Route, Link, useRouteMatch } from "react-router-dom" 

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
  let { url } = useRouteMatch();
  const type = ['Cake', 'Biscuit', 'Bakery'];
  const categoryCards = type.map((val, i) => (
    <Link to={`${url}/${val}`} key={i} >
      <CategoryCard url={imageUrls[i]} name={`${val}`} key={i} />
    </Link>
  ));

  return (
    <Container id="category">
      <div className="wrapper">
        <div className="title">
          <h1>Select</h1>
          <h1>product type</h1>
        </div>
        <div className="card-group">
          {categoryCards}
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

