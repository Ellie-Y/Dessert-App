import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Svg from '../Svg'

import './index.scss'

export default function header() {
  return (
      <AppBar id="header" position="sticky">
        <Toolbar>
          <div className="content">
            <Svg name="menu-bar" />
            <p>KOJIRO Dessert</p>
            <i className="fas fa-search"></i>
          </div>
        </Toolbar>
      </AppBar>
  )
}
