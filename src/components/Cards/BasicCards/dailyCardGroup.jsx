import React from 'react'
import SingleCard from './SingleCard'
import getProductData from '../../../hooks/getProductData'

// Dislay Daily cards as a group
function DailyCardGroup() {
  const dailyCardData = getProductData('?limit=4').data;

  const dailyCardGroup = Object.keys(dailyCardData).map(i => (
    <SingleCard
      key={i}
      {...dailyCardData[i]}
    />
  ));

  return (
    <div className="sale-card-wrapper">
      <div className="sale-card-group">
        {dailyCardGroup}
      </div>
    </div>
  )
}

export default DailyCardGroup


