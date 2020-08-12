import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link, useLocation } from 'react-router-dom';


import './index.scss'

function iconClicked(name) {
  const iconSrc = `./icons/clicked/${name}.svg`;
  return (
    <img className="icon" src={iconSrc} />
  )
}

function icon(name) {
  const iconSrc = `./icons/${name}.svg`;
  return (
    <img className="icon" src={iconSrc} />
  )
}

function Footer() {
  const currentLocation = useLocation().pathname.slice(1);    // get current location
  const [value, setValue] = React.useState(currentLocation === '' ? 'home' : currentLocation);   // Set current location as the active one
  
  const handleChange = (e, currentIcon) => {
    setValue(currentIcon);
  };

  return (
    <BottomNavigation id="footer" value={value} onChange={handleChange} >
      <BottomNavigationAction
        component={Link}
        to='/'
        value="home"
        icon={value === 'home' ? iconClicked('home-click') : icon('home')}
      />
      <BottomNavigationAction
        component={Link}
        to='/category'
        value="category"
        icon={<img src="./icons/category.svg" />}
        icon={value === 'category' ? iconClicked('category-click') : icon('category')}
      />
      <BottomNavigationAction
        component={Link}
        to='/cart'
        value="cart"
        icon={<img src="./icons/cart.svg" />}
        icon={value === 'cart' ? iconClicked('cart-click') : icon('cart')}
      />
      <BottomNavigationAction
        component={Link}
        to='/profile'
        value="user"
        icon={<img src="./icons/user.svg" />}
        icon={value === 'user' ? iconClicked('user-click') : icon('user')}
      />
    </BottomNavigation>
  )
}

export default Footer;

