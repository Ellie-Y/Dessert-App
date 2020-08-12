import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';

import './category.scss'

function CategoryCard(props) {
  // NOTE 这里图片生成的名字是大写，但是原始文件的名字是小写
  const icon = `./icons/category/${props.name}.svg`
  return (
    <div id="category-card" className={props.name} >
      <div className="card-wrapper">
        <div className="img-wrapper">
          <img src={icon} alt={props.name} />
        </div>
        <h2 className="name">{props.name}</h2>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired
}


function Category(props) {
  return (
    <Container id="category">
      <div className="wrapper">
        <div className="title">
          <h1>Select</h1>
          <h1>product type</h1>
        </div>

        <div className="card-group">
          <CategoryCard name='Cake' />
          <CategoryCard name='Biscuit' />
          <CategoryCard name="Bakery" />
        </div>
      </div>

    </Container>
  )
}

export default Category

