"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

interface Data {
  name: string
  path: string
}

export const navItems: Data[] = [
  {
    name: 'Mission',
    path: '/#mission'
  },
  {
    name: 'News',
    path: '/#news'
  },
  {
    name: 'Service',
    path: '/#service'
  },
  {
    name: 'Company',
    path: '/#company'
  },
  {
    name: 'Contact',
    path: 'https://docs.google.com/forms/d/1QePeicEse5fNfVTzg1RMpU5qvtTWA8zfTqbIW04oYSI/edit#settings'
  },
]

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{p:1}}>
      <Image 
              src={"/img/logo/logo.svg"} 
              alt="alto software logo"
              width={30} height={30}  />
      </Box>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.path}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },color:"black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Image 
              src={"/img/logo/logo.svg"} 
              alt="alto software logo"
              width={40} height={40}  />
          </Box>
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,index) => (
              <Link key={index} href={item.path}>
              <Button key={index} sx={{ color: 'black' }}>
                {item.name}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}