import React, { useEffect } from 'react';
import { useNavContext } from '../components/contexts/NavContext';
import HeroBanner from '../components/HeroBanner';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider } from '@mui/material';
import { Margin, PlaceOutlined } from '@mui/icons-material';

const Home: React.FC = () => {
	const { setShowDrawer, setShowAccount } = useNavContext();

	useEffect(() => {
		setShowDrawer(true);
		setShowAccount(true);
	}, [setShowDrawer, setShowAccount]);

  return (
    <div>
		<HeroBanner />
		<div className="pt-5 px-[10%] flex justify-between flex-col items-center">
			{/* Date */}
			<div className="max-w-[1200px] w-full">
				<div className="uppercase font-semibold">
					<h2 className="text-3xl tracking-widest mb-5">
						Dates:
					</h2>
					<div className="text-2xl flex px-9 items-center justify-evenly max-w-[900px] mx-auto">
						<div className="flex flex-col items-center mx-2">
							<div>25th</div>
							<div>September</div>
						</div>
						<ArrowForwardIosIcon sx={{ fontSize: 35 }} className="mx-2" />
						<div className="flex flex-col items-center mx-2">
							<div>7th</div>
							<div>October</div>
						</div>
					</div>
				</div>
				<Divider variant='fullWidth' sx={{ marginBlock: '30px', bgcolor: 'grey' }} />
			</div>

			{/* Location */}
			<div className="max-w-[1200px] w-full">
				<div className="uppercase font-semibold">
					<h2 className="text-3xl tracking-widest mb-5">
						Location:
					</h2>
					<div className="text-2xl flex items-center justify-center max-w-[900px] mx-auto">
						<PlaceOutlined sx={{marginRight: '10px'}} fontSize='large'/>
						Rye
					</div>
				</div>
			<Divider variant='fullWidth' sx={{ marginBlock: '30px', bgcolor: 'grey' }} />
			</div>

			{/* Info */}
			<div className="max-w-[1200px] w-full">
				<div className="uppercase font-semibold">
					<h2 className="text-3xl tracking-widest mb-5">
						Info:
					</h2>
					<div className="text-large font-normal normal-case flex items-center justify-center max-w-[900px] mx-auto">
					Lorem ipsum dolor sit amet consectetur. Sed placerat semper lorem maecenas cras odio aliquet mattis nunc. Vitae egestas aliquet vestibulum congue scelerisque nec. Orci scelerisque massa quam tincidunt sed congue nulla. Maecenas quam egestas at in accumsan. Amet quis sit leo varius dolor ipsum at cras sodales.
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Home;