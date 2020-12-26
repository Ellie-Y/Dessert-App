import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Svg from '../Svg';
import Badge from '@material-ui/core/Badge';

import './index.scss'

function Footer(props) {
  const currentLocation = useLocation().pathname.slice(1)    // get current router
  const [curRoute, setCurRoute] = useState('')

  useEffect(() => {
    setCurRoute(currentLocation ? currentLocation : 'home')
  }, [currentLocation])

  const handleChange = (e, currentIcon) => {
    setCurRoute(currentIcon);
  };

  return (
    <BottomNavigation id="footer" value={curRoute} onChange={handleChange} >
      <BottomNavigationAction
        component={Link}
        to='/'
        value="home"
        icon={curRoute === 'home' ? <Svg name='home-click' /> : <Svg name='home' />}
      />
      <BottomNavigationAction
        component={Link}
        to='/category'
        value="category"
        icon={curRoute === 'category' ? <Svg name='category-click' /> : <Svg name='category' />}
      />
      <BottomNavigationAction
        component={Link}
        to='/cart'
        value="cart"
        icon={curRoute === 'cart'
          ? <Badge badgeContent={props.count} color="primary">
            <Svg name='cart-click' />
          </Badge>
          : <Badge badgeContent={props.count} color="primary">
            <Svg name='cart' />
          </Badge>}
      />

      <BottomNavigationAction
        component={Link}
        to='/profile'
        value="user"
        icon={curRoute === 'user' ? <Svg name='user-click' /> : <Svg name='user' />}
      />
    </BottomNavigation>
  )
}

export default Footer;

