import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Svg from '../Svg'


import './index.scss'

function Header() {
  const currentLocation = useLocation().pathname.slice(1)
  const history = useHistory()
  const [curRoute, setCurRoute] = useState(currentLocation)


  useEffect(() => {
    setCurRoute(currentLocation)
  }, [currentLocation])

  return (
    <AppBar id="header" position="sticky">
      <Toolbar>
        <div className="content">
          <div className="back" onClick={() => curRoute ? history.goBack() : false}>
            {/* home route is a empty string */}
            <Svg name={curRoute ? 'left' : 'menu-bar'} />
          </div>
          <p>KOJIRO Dessert</p>
          <i className="fas fa-search"></i>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
