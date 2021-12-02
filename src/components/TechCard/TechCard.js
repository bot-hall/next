import Link from 'next/link';

const TechCard = ({ text }) => {
	const renderSwitch = (icon) => {
		switch (icon) {
			case 'React':
				return (
					<div className='overflow-hidden h-15 xl:h-20.7 w-17 xl:w-25 mr-2 sm:mr-3 xl:mr-7.8 flex-shrink-0 mt-2 sm:mt-0 lg:mt-3 xl:mt-0 flex justify-center items-center'>
						<img
							src='/assets/icons/react.svg'
							className='w-auto object-cover h-full'
							alt=''
						/>
					</div>
				);

			case 'Angular':
				return (
					<div className='overflow-hidden h-15 xl:h-20.7 w-17 xl:w-25 mr-2 sm:mr-3 xl:mr-7.8 flex-shrink-0 mt-2 sm:mt-0 lg:mt-3 xl:mt-0 flex justify-center items-center'>
						<img
							src='/assets/icons/angular.svg'
							className='w-auto object-cover h-full'
							alt=''
						/>
					</div>
				);

			case 'Vue':
				return (
					<div className='overflow-hidden h-15 xl:h-20.7 w-17 xl:w-25 mr-2 sm:mr-3 xl:mr-7.8 flex-shrink-0 mt-2 sm:mt-0 lg:mt-3 xl:mt-0 flex justify-center items-center'>
						<img
							src='/assets/icons/vue.svg'
							className='w-auto object-cover h-full'
							alt=''
						/>
					</div>
				);
			default:
				return <div></div>;
		}
	};

	return (
		<div className='flex items-start sm:items-center lg:items-start xl:items-center border border-alabaster-500 py-6 px-4 sm:px-10 w-full'>
			{renderSwitch(text.stack)}
			<div className='flex flex-col justify-between'>
				<p className='text-base text-alabaster-400 mb-4 lg:mb-5 line-clamp-4'>
					<span className='font-semibold text-base text-alabaster-500'>
						{text.stack}
					</span>{' '}
					{text.description}
				</p>
				<Link href='/'>
					<a className='flex items-center w-max'>
						<p className='uppercase text-sm mr-2'>learn more</p>
						<div className='before-arrow -rotate-90'></div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default TechCard;
