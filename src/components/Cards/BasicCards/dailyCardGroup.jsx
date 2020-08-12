import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import getDailyCards from '../../../services/getDailyCards'

//* Dislay Daily cards as a group
function DailyCardGroup() {
  const [dailyCardData, setDailyCardData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDailyCards();
      setDailyCardData(result);
    }

    fetchData();
  }, []);

  const dailyCardGroup = Object.keys(dailyCardData).map(i => (
    <SingleCard
      key={i}
      {...dailyCardData[i]}
    />
  ))

  return (
    <div className="sale-card-wrapper">
      <div className="sale-card-group">
        {dailyCardGroup}
      </div>
    </div>
  )
}

export default DailyCardGroup


