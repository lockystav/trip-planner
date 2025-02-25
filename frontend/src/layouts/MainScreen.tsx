import { Outlet } from "react-router";
import BottomNav from "../components/BottomNav";

export default function MainScreenLayout() {
	return (
		<>
			<Outlet />
			<BottomNav />
		</>
	)
}