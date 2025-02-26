import { Outlet } from "react-router";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { NavProvider, useNavContext } from "../components/NavContext";
import React from "react";

const MainScreenLayout: React.FC = () => {
	const {showTitle, showAccount, showDrawer} = useNavContext();
	return (
		<>
			<TopNav showTitle={showTitle} showAccount={showAccount} showDrawer={showDrawer}/>
				<Outlet />
			<BottomNav />
		</>
	)
}

const MainScreenLayoutWrapper: React.FC = () => (
	<NavProvider>
		<MainScreenLayout />
	</NavProvider>
)

export default MainScreenLayoutWrapper;