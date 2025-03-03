import React from "react";
import { Outlet } from "react-router";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { NavProvider, useNavContext } from "../components/contexts/NavContext";

const MainScreenLayout: React.FC = () => {
	const {title, showTitle, showAccount, showDrawer} = useNavContext();
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<TopNav title={title} showTitle={showTitle} showAccount={showAccount} showDrawer={showDrawer}/>
			<div style={{ flex: 1, overflowY: 'auto', marginBottom: '56px' /* height of BottomNav */ }}>
				<Outlet />
			</div>
			<BottomNav />
		</div>
	)
}

const MainScreenLayoutWrapper: React.FC = () => (
	<NavProvider>
		<MainScreenLayout />
	</NavProvider>
)

export default MainScreenLayoutWrapper;