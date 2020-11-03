import React from 'react'
import Container from '@material-ui/core/Container'
import SingleCard from '../../components/Cards/BasicCards/SingleCard'
import getProductData from '../../hooks/getProductData'

import './allProducts.scss'

function AllProducts({ match }) {
  const type = match.params.type;
  const result = getProductData('?type=' + type).data;
  const allItemByType = result.map(i => (
    <SingleCard
      key={i.id}
      {...i}
    />
  ));

  return (
    <Container id="all-products" className="global-width">
      <div className="products-wrapper">
        {allItemByType}
      </div>
    </Container>
  )
}

export default AllProducts
