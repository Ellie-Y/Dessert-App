import React from 'react'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Svg from '../../components/Svg'

import './profile.scss'

function Profile() {
  return (
    <Container id="profile">
      <div className="profile-info mt-2">
        <Avatar alt="avatar" className="avatar">E</Avatar>
        <h2 className="name mt-1">Ellie Ye</h2>
      </div>

      <div className="nav-operations mt-5">
        <Divider />
        <List component="nav" aria-label="profile operations primary">
          <NavItem title='Order History' />
        </List>

        <Divider />
        <List component="nav" aria-label="profile operations secondary">
          <NavItem title='Address' />
          <NavItem title='Personal Details' />
          <NavItem title='Privacy Security' />
        </List>
        <Divider />

        <List component="nav" aria-label="profile operations logout">
          <NavItem title='Log out' />
        </List>
      </div>
    </Container>
  )
}

function NavItem(props) {
  const title = props.title
  const svgName = title.split(' ')[0].toLowerCase()
  return (
    <ListItem button alignItems='center'>
      <Avatar sizes='m' className="icon-wrapper">
        <Svg name={svgName} />
      </Avatar>
      <ListItemText primary={title} />
      <Svg name='right-arrow' />
    </ListItem>
  )
}

export default Profile
