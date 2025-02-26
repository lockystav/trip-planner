import React, { useEffect } from 'react';
import { useNavContext } from '../components/contexts/NavContext';

const Polls: React.FC = () => {
	const { setShowTitle, setShowAccount } = useNavContext();

	useEffect(() => {
		setShowTitle(true);
		setShowAccount(true);
	}, [setShowTitle, setShowAccount]);

    return (
        <div>
            <h1>Polls</h1>
            <p>This is the polls page where you can participate in trip-related polls.</p>
        </div>
    );
};

export default Polls;
