import React, { useState }from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Svg from '../Svg';
import Badge from '@material-ui/core/Badge';

import './index.scss'

function Footer(props) {
  const currentLocation = useLocation().pathname.slice(1);    // get current router
  const [value, setValue] = useState(currentLocation === '' ? 'home' : currentLocation);   // Set current location as the active one

  const handleChange = (e, currentIcon) => {
    setValue(currentIcon);
  };

  return (
    <BottomNavigation id="footer" value={value} onChange={handleChange} >
      <BottomNavigationAction
        component={Link}
        to='/'
        value="home"
        icon={value === 'home' ? <Svg name='home-click' /> : <Svg name='home' />}
      />
      <BottomNavigationAction
        component={Link}
        to='/category'
        value="category"
        icon={value === 'category' ? <Svg name='category-click' /> : <Svg name='category' />}
      />
      <BottomNavigationAction
        component={Link}
        to='/cart'
        value="cart"
        icon={value === 'cart'
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
        icon={value === 'user' ? <Svg name='user-click' /> : <Svg name='user' />}
      />
    </BottomNavigation>
  )
}

export default Footer;

