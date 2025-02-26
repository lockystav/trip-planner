import React, { createContext, ReactNode, useState } from "react";

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
	const [showAccount, setShowAccount] = useState(true);
	const [showDrawer, setShowDrawer] = useState(true);
	const [title, setTitle] = useState('Trip Planner');


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