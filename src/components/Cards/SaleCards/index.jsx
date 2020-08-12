import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import getSaleCards from '../../../services/getSaleCards'

import './index.scss'

function SaleCard(props) {
  return (
    <div id="sale-card" key={props.itemId}>
      <Link to={`/item/${props.itemId}`}>
        <img src={props.imageUrl} alt={props.alt}></img>
      </Link>
    </div>

  )
}

SaleCard.defaultProps = {
  imageUrl: 'https://i.ibb.co/bzQBHHJ/dessert.jpg',
  itemId: 1,
  alt: 'Sale Card'
}

SaleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  itemId: PropTypes.number,
  alt: PropTypes.string.isRequired
}


function SaleCardGroup() {
  const [cardsData, setCardsData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSaleCards();
      setCardsData(result);
    }

    fetchData();

  }, []);

  const SaleCards = Object.keys(cardsData).map(i => (
    <SaleCard
      key={i}
      // imageUrl={cardsData[i].imageUrl}
      // itemId={cardsData[i].itemId}
      // alt={cardsData[i].alt}
      {...cardsData[i]}   // * 可以结构，只要参数名字对得上就行
    />
  ));

  return (
    <div className="sale-card-wrapper">
      <div className="sale-card-group">
        {SaleCards}
      </div>
    </div>
  )
}


export default SaleCardGroup;

