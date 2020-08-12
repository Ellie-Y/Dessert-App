import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import getHotCards from '../../../services/getHotCards'

//* Dislay hot cards as a group
export default function HotCardGroup() {
  const [HotCardData, setHotCardData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHotCards();
      setHotCardData(result);
    }

    fetchData();
  }, []);

  const hotCardGroup = Object.keys(HotCardData).map(i => (
    <SingleCard
      key={i}
      {...HotCardData[i]}
    />
  ))

  return (
    <div className="sale-card-wrapper">
      <div className="sale-card-group">
        {hotCardGroup}
      </div>
    </div>
  )
}


