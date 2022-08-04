import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Link
} from '@mui/material'
import { StyledLogoimage } from './index.styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import React from 'react'
import { useAuthenticationProvider } from '../../../contexts/Auth/context'
import { DrawerLoggedItems, DrawerNotLoggedItems } from './data'

const Navbar = (): JSX.Element => {
  const container = window !== undefined ? () => window.document.body : undefined
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const [mobileOpen, setMobileOpen] = useState(false)

  const { authenticated } = useAuthenticationProvider()

  useEffect(() => {
    console.log(authenticated, 'upa')
  }, [authenticated])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const drawerWidth = 246

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {(authenticated ? DrawerLoggedItems : DrawerNotLoggedItems).map((item) => (
          <Box key={item.label + item.href}>
            <ListItem disablePadding>
              <Link
                underline='none'
                href={item.href}
                color={item.color}
                sx={() => ({
                  width: '100%'
                })}
              >
                <ListItemButton>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: '20px' }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  )

  const dropdown = (
    <Menu
      id='menu-appbar'
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
    >
      {(authenticated ? DrawerLoggedItems : DrawerNotLoggedItems).map((item) => (
        <Box key={item.label + item.href}>
          <MenuItem onClick={handleCloseNavMenu}>
            <Link href={item.href} underline='none' color={item.color}>
              {item.label}
            </Link>
          </MenuItem>
          <Divider />
        </Box>
      ))}
    </Menu>
  )

  return (
    <>
      <AppBar
        position='static'
        sx={(theme) => ({
          boxShadow: 'none',
          background: '#ffffff',
          [theme.breakpoints.up('sm')]: {
            background: theme.palette.secondary.main
          }
        })}
      >
        <Toolbar
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',

            [theme.breakpoints.up('sm')]: {
              padding: '12px 60px'
            }
          })}
        >
          <IconButton
            onClick={handleDrawerToggle}
            color='secondary'
            aria-label='open drawer'
            sx={(theme) => ({
              [theme.breakpoints.up('sm')]: {
                display: 'none'
              }
            })}
          >
            <MenuIcon sx={{ width: '40px', height: '40px' }} />
          </IconButton>
          <IconButton href='/'>
            <StyledLogoimage src='/assets/images/logo.svg' alt='Lepetinski Logo' />
          </IconButton>
          <Box
            component='div'
            sx={(theme) => ({
              width: '40px',
              height: '40px',
              cursor: 'none',
              pointerEvents: 'none',
              [theme.breakpoints.up('sm')]: {
                display: 'none'
              }
            })}
          />

          <Button
            variant='outlined'
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: {
                display: 'none'
              }
            })}
            onClick={handleOpenNavMenu}
          >
            INICIAR SESIÓN
          </Button>
          {dropdown}
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar
