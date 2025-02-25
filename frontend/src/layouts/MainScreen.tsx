import { Outlet } from "react-router";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

export default function MainScreenLayout() {
	return (
		<>
			<TopNav />
			<Outlet />
			<BottomNav />
		</>
	)
}