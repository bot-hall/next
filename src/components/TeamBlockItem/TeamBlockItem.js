import User from '../Icons/User';
import ArrowLeftRight from '../Icons/ArrowLeftRight';
import Checkbox from '../Icons/Checkbox';
import Cross from '../Icons/Cross';

const TeamBlockItem = ({ title }) => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-start xl:items-stretch mb-12 sm:mb-16 xl:mb-17'>
			<div className='flex items-end lg:items-center justify-between w-full md:w-auto xl:mr-8 md:mr-20 xl:border-0 border-b border-black-900 pb-6 xl:pb-0 mb-9 md:mb-0'>
				<div className='md:w-24.2 lg:w-33 flex flex-col items-center'>
					<p className='text-base mb-1 sm:mb-3 xl:mb-4 text-black-750 text-center max-w-9.75'>
						Client’s&nbsp;team
					</p>
					<div className='grid grid-cols-2 gap-x-6 xl:gap-x-9 gap-y-3 lg:gap-y-6'>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12 opacity-50'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12 opacity-50'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12 opacity-50'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12 opacity-50'}
							fill={'#000000'}
						/>
					</div>
				</div>
				<div className='mx-2.5 lg:mx-6 md:mt-12 lg:mb-0 mb-8'>
					<ArrowLeftRight
						clazz={'lg:w-9 lg:h-9 w-6 h-6'}
						fill={'#404040'}
					/>
				</div>
				<div className='md:w-33 lg:w-53 flex flex-col items-center'>
					<p className='text-base mb-1 sm:mb-3 xl:mb-4 text-center font-bold max-w-9.75 md:max-w-none'>
						UnitSpace integrated team
					</p>
					<div className='grid grid-cols-3 gap-x-6 xl:gap-x-9 gap-y-3 lg:gap-y-6'>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12'}
							fill={'#000000'}
						/>
						<User
							clazz={'w-9 lg:w-12 h-9 lg:h-12'}
							fill={'#000000'}
						/>
					</div>
				</div>
			</div>
			<div className='xl:border-b border-black-900 w-full max-w-48.1'>
				<div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-x-12 gap-y-5 sm:gap-y-6 md:gap-y-7.8 xl:gap-y-7.8 pb-3 xl:w-630 ml-auto max-w-27.8 xl:max-w-none'>
					<div className='xl:w-44 xl:ml-auto'>
						<div className='mx-2 pb-4 md:pb-5 lg:pb-7'>
							<Checkbox clazz={'w-4'} fill={'#000000'} />
						</div>
						<p>{title.first}</p>
					</div>
					<div className='xl:w-44 xl:ml-auto'>
						<div className='mx-2 pb-4 md:pb-5 lg:pb-7'>
							<Checkbox clazz={'w-4'} fill={'#000000'} />
						</div>
						<p>{title.second}</p>
					</div>
					<div className='xl:w-44 xl:ml-auto'>
						<div className='mx-2 pb-4 md:pb-5 lg:pb-7'>
							<Cross clazz={'w-3.5 h-3.5'} fill={'#000000'} />
						</div>
						<p>{title.third}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamBlockItem;
