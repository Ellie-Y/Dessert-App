import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import getProducts from '../../../services/getProducts'
// import getHotCards from '../../../services/getHotCards'

// Dislay hot cards as a group
function HotCardGroup() {
  const [HotCardData, setHotCardData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts('?type=sales&limit=4');
      setHotCardData(result.data.data);
      // console.log(result.data.data);
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

export default HotCardGroup


