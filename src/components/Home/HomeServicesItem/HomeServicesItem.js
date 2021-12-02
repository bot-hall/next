import Development from '../../Icons/Development';
import Team from '../../Icons/Team';

const HomeServicesItem = () => {
	return (
		<div className='flex justify-center sm:justify-between sm:flex-row flex-col'>
			<div className='sm:max-w-29.5 xl:max-w-2xl px-4 xl:px-16 xl:pt-9 py-9 xl:pb-11 xl:hover:bg-alabaster-100 xl:abaster-100 bg-alabaster-100 xl:bg-transparent group cursor-pointer mr-0 sm:mr-6 xl:mr-0 mb-6 sm:mb-0'>
				<div className='flex justify-between items-center xl:flex-row flex-col'>
					<div className='max-w-xxs order-1 xl:order-0'>
						<div className='flex items-center mt-3 mb-5'>
							<div className='bg-alabaster-500 rounded h-2.5 w-2.5'></div>
							<div className='h-px w-full bg-alabaster-400'></div>
						</div>
						<h5 className='text-xl sm:text-2 sm:leading-9 xl:text-left text-center'>
							Dedicated Development Team
						</h5>
					</div>
					<div className='flex-shrink-0'>
						<Team clazz={'w-21 xl:w-32/7 h-21 xl:h-32/7'} />
					</div>
				</div>
				<p className='text-alabaster-400 text-xl mt-3 sm:mt-4 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 ease-in-out xl:text-left text-center'>
					Work with our outstanding engineers and integrate them into
					your processes
				</p>
			</div>
			<div className='sm:max-w-29.5 xl:max-w-2xl px-4 xl:px-16 xl:pt-9 py-9 xl:pb-11 flex flex-col xl:justify-end xl:hover:bg-alabaster-100 bg-alabaster-100 xl:bg-transparent group cursor-pointer'>
				<div className='flex justify-between items-center xl:flex-row flex-col'>
					<div className='flex-shrink-0'>
						<Development
							clazz={'w-32.1 xl:w-52/2 h-21 xl:h-28/8 xl:mr-8'}
						/>
					</div>
					<div className='max-w-xxs'>
						<div className='flex items-center mt-3 mb-5'>
							<div className='bg-alabaster-500 rounded h-2.5 w-2.5'></div>
							<div className='h-px w-full bg-alabaster-400'></div>
						</div>
						<h5 className='text-xl sm:text-2 sm:leading-9 xl:text-left text-center'>
							Custom Software Development
						</h5>
					</div>
				</div>
				<p className='text-alabaster-400 text-xl mt-3 sm:mt-4 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 ease-in-out xl:text-left text-center'>
					Work with our outstanding engineers and integrate them into
					your processes
				</p>
			</div>
		</div>
	);
};

export default HomeServicesItem;
