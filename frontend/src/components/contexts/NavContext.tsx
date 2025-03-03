import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router";

interface NavContextProps {
	title: string;
	setTitle: (title: string) => void;
	showTitle: boolean;
	setShowTitle: (showTitle: boolean) => void;
	showAccount: boolean;
	setShowAccount: (showAccount: boolean) => void;
	showDrawer: boolean;
	setShowDrawer: (showDrawer: boolean) => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider: React.FC<{children: ReactNode}> = ({children}) => {
	const [showTitle, setShowTitle] = useState(false);
	const [showAccount, setShowAccount] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);
	const [title, setTitle] = useState('Trip Planner');
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setShowDrawer(true);
				setShowAccount(true);
				setShowTitle(false);
				break;
			case '/board':
				setShowTitle(true);
				setShowAccount(true);
				setShowDrawer(false);
				break;
			case '/accomodation':
				setShowTitle(true);
				setShowAccount(true);
				setShowDrawer(false);
				break;
			case '/polls':
				setShowTitle(true);
				setShowAccount(true);
				setShowDrawer(false);
				break;
			default:
				setShowDrawer(true);
				setShowAccount(true);
				setShowTitle(false);
				break;
		}
	}, [location]);


	return (
		<NavContext.Provider value={{title, setTitle, showTitle, setShowTitle, showAccount, setShowAccount, showDrawer, setShowDrawer}}>
			{children}
		</NavContext.Provider>
	)
}

export const useNavContext = () => {
	const context = React.useContext(NavContext);
	if (!context) {
		throw new Error("useNavContext must be used within a NavProvider");
	}
	return context;
}