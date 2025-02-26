import React, { useEffect } from 'react';
import { useNavContext } from '../components/contexts/NavContext';
import HeroBanner from '../components/HeroBanner';

const Home: React.FC = () => {
	const { setShowDrawer, setShowAccount } = useNavContext();

	useEffect(() => {
		setShowDrawer(true);
		setShowAccount(true);
	}, [setShowDrawer, setShowAccount]);

    return (
        <div>
            <HeroBanner />
            <h1>Welcome to the Trip Planner</h1>
            <p>This is the home page. Start planning your trip now!</p>
        </div>
    );
};

export default Home;