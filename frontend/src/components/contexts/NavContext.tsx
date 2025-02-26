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
		setShowTitle(false);
		setShowAccount(false);
		setShowDrawer(false);
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