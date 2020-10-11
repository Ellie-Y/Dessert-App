import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import getProductData from '../../../hooks/getProductData'

// Display hot cards as a group
function HotCardGroup() {
  const hotCards = getProductData('?type=sales&limit=4').data;

  const hotCardGroup = Object.keys(hotCards).map(i => (
    <SingleCard
      key={i}
      {...hotCards[i]}
    />
  ));

  return (
    <div className="sale-card-wrapper">
      <div className="sale-card-group">
        {hotCardGroup}
      </div>
    </div>
  )
}

export default HotCardGroup


