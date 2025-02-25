import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { AccountCircleOutlined, Inbox } from '@mui/icons-material';

export default function TopNav() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const toggleDrawer = (open: boolean) => () => {
		setDrawerOpen(open);
	};

	const DrawerInside = (
		<Box sx={{ width: '45vw'}}>
			<Typography variant="h6" align="center" sx={{ my: 2 }}>
				Manage Trip
			</Typography>
			<Divider variant='middle' sx={{ bgcolor: 'grey' }} />
			<ListItem disablePadding sx={{ justifyContent: 'flex-end' }}>
				<ListItemButton>
					<ListItemText primary="Edit Trip" sx={{ textAlign: 'right' }} />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding sx={{ justifyContent: 'flex-end' }}>
				<ListItemButton>
					<ListItemText primary="Travelers" sx={{ textAlign: 'right' }} />
				</ListItemButton>
			</ListItem>
		</Box>
	)

  return (
	<>
	<AppBar sx={{ backgroundColor: 'white', color: 'black' }} position="static">
		<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
				<MenuIcon />
			</IconButton>
			<Typography variant="h5" sx={{ flexGrow: 1 }}>
				
			</Typography>
			<IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ fontSize: 30 }} // Increase the size of the icon
              >
                <AccountCircleOutlined fontSize="inherit" />
              </IconButton>
		</Toolbar>
	</AppBar>
	<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
		{DrawerInside}
	</Drawer>
</>
  );
}