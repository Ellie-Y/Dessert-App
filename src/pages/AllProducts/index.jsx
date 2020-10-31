import React from 'react'
import Container from '@material-ui/core/Container'
import SingleCard from '../../components/Cards/BasicCards/SingleCard'

import './allProducts.scss'

function AllProducts(type) {
  return (
    <Container id="all-products" className="global-width">
      <div className="products-wrapper">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </Container>
  )
}

export default AllProducts
