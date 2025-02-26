import React, { useEffect } from 'react';
import { useNavContext } from '../components/contexts/NavContext';

const Accomodation: React.FC = () => {
	const { setShowTitle, setShowAccount } = useNavContext();

	useEffect(() => {
		setShowTitle(true);
		setShowAccount(true);
	}, [setShowTitle, setShowAccount]);

    return (
        <div>
            <h1>Accomodation</h1>
            <p>This is the accomodation page where you can find places to stay.</p>
        </div>
    );
};

export default Accomodation;
