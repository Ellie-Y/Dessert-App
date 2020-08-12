import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './index.scss'

export default function header() {
  return (
      <AppBar id="header" position="sticky">
        <Toolbar>
          <div className="content">
            <img className="icon" src="./icons/menu-bar.svg" alt="Menu Bar"/>
            <p>KOJIRO Dessert</p>
            <i className="fas fa-search"></i>
          </div>
        </Toolbar>
      </AppBar>
  )
}
