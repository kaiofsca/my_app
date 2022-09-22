import { useState } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen) // o "!" inverte o valor... se estiver true vai pra false e vice-versa
  }

  const handleMenuClick = route => {
    history.push(route)
    handleToggleMenu()
  }

  console.log(history)

  return (
    <>
      <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleToggleMenu()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/customers')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Lista de clientes</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/customers/add')}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
