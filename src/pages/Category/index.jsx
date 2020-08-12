import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';

import './category.scss'


const imageUrls = [
  'https://i.ibb.co/8bXCv6d/chocolate-cake.png',
  'https://i.ibb.co/yQks0y1/cookies.png',
  'https://i.ibb.co/c8RP5Cv/bakery.png'
];

function CategoryCard(props) {
  // NOTE 这里图片生成的名字是大写，但是原始文件的名字是小写
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

CategoryCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}


function Category() {
  return (
    <Container id="category">
      <div className="wrapper">
        <div className="title">
          <h1>Select</h1>
          <h1>product type</h1>
        </div>

        <div className="card-group">
          <CategoryCard url={imageUrls[0]} name='Cake' />
          <CategoryCard url={imageUrls[1]} name='Biscuit' />
          <CategoryCard url={imageUrls[2]} name="Bakery" />
        </div>
      </div>

    </Container>
  )
}

export default Category

