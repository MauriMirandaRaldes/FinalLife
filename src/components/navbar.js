import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
/*My imports*/
import heart from "../assets/heart2.png"
import {Link as Linkrouter} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import userActions from "../redux/actions/userActions"
import CustomizedSnackbars from './snackbar';

const pages = ["home", "games", "contact"];

const ResponsiveAppBar = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [boolean, setBoolean] = React.useState(false);
  
  const {user, messageSignOut} = useSelector(store => store.userReducer)

  const logOut = ()=> {
    dispatch(userActions.signOut_user(user.firstname))
    setBoolean(true)
    setTimeout(() => {
      setBoolean(false)
    }, 5000);
  }
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{visibility: props.visibility}}>
      <Container className='custom-container-nav' maxWidth="xl">
        <Toolbar disableGutters>
            <img className='custom-img-navbar' src={heart} />
          <Typography
            className="custom-typography"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FinalLife
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {/*Map Pages*/}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Linkrouter className={`linkrouter-nav linkrouter-nav-${page}`} to={`/${page}`} >{page}</Linkrouter>
              </Button>
            ))}

          </Box>

          <Box sx={{ flexGrow: 0, position:"relative" }}>
            {boolean? messageSignOut? <p className="userDisconected" >{messageSignOut}</p> : null : null}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user? <img className="userImg" src={user.photoURL}/> : <img className="userImg" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"  /> }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {!user? <MenuItem onClick={handleCloseUserMenu}>
                      <Linkrouter to={`/registration`} ><Typography textAlign="center">Log In</Typography></Linkrouter>
                      </MenuItem>
                      :
                      <MenuItem className="menuItem" onClick={handleCloseUserMenu}>
                      <Typography onClick={()=> navigate("/myAccount")}>My Account</Typography>
                      <Typography onClick={logOut}>Log Out</Typography>
                      </MenuItem>
                     }
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
