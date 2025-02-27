import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';

interface TopNavProps {
	title: string;
	showTitle: boolean;
	showAccount: boolean;
	showDrawer: boolean;
}

const TopNav: React.FC<TopNavProps> = ({title, showTitle, showAccount, showDrawer}) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	
	const toggleDrawer = (open: boolean) => () => {
		setDrawerOpen(open);
	};

	const DrawerInside = (
		<Box sx={{ width: '45vw', maxWidth: '360px' }}>
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
			{/* Left side of the nav bar */}
			{showDrawer && (
				<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
					<MenuIcon fontSize='large'/>
				</IconButton>
			)}
			{showTitle && (
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						{title}
					</Typography>
			)}

			<Typography variant="h5" sx={{ flexGrow: 1 }}>
			</Typography>

			{showAccount && (
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					color="inherit"
					sx={{ fontSize: 30 }}
				>
					<AccountCircleOutlined fontSize="large" />
				</IconButton>
			)}
		</Toolbar>
	</AppBar>
	<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
		{DrawerInside}
	</Drawer>
</>
  );
}

export default TopNav;