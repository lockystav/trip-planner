import { useState } from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HotelIcon from '@mui/icons-material/Hotel';
import PollIcon from '@mui/icons-material/Poll';

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
	<BottomNavigation
		value={value}
		onChange={(event, newValue) => {
			setValue(newValue);
		}}
		style={{ position: 'fixed', bottom: 0, width: '100%' }}
	>
		<BottomNavigationAction 
			label="Home"
			icon={<HomeIcon />}
			component={Link}
			to='/'
		/>
		<BottomNavigationAction
			label="Board"
			icon={<DashboardIcon />}
			component={Link}
			to="/board"
		/>
		<BottomNavigationAction
			label="Accomodation"
			icon={<HotelIcon />}
			component={Link}
			to="/accomodation"
		/>
		<BottomNavigationAction
			label="Polls"
			icon={<PollIcon />}
			component={Link}
			to="/polls"
		/>
	</BottomNavigation>
  );
}