import React, { useEffect } from 'react';
import { useNavContext } from '../components/contexts/NavContext';

const Board: React.FC = () => {
	const { setShowTitle, setShowAccount } = useNavContext();

	useEffect(() => {
		setShowTitle(true);
		setShowAccount(true);
	}, [setShowTitle, setShowAccount]);

    return (
        <div>
            <h1>Board</h1>
            <p>This is the board page where you can manage your trip plans.</p>
        </div>
    );
};

export default Board;
