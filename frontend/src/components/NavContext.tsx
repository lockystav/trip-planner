import React, { createContext, ReactNode, useState } from "react";

interface NavContextProps {
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

	return (
		<NavContext.Provider value={{showTitle, setShowTitle, showAccount, setShowAccount, showDrawer, setShowDrawer}}>
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