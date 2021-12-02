import User from '../Icons/User';
import ArrowLeftRight from '../Icons/ArrowLeftRight';
import Checkbox from '../Icons/Checkbox';
import Cross from '../Icons/Cross';
import UserFill from '../Icons/UserFill';
import Plus from '../Icons/Plus';

const TeamBlockInteraction = ({ title }) => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center sm:items-start xl:items-stretch mb-12 sm:mb-16 xl:mb-17'>
			<div className='xl:border-0 border-b border-black-900 pb-6 flex-shrink-0 xl:flex-shrink xl:pr-8 md:pr-10 md:mr-10 md:w-auto w-full md:mb-0 mb-9'>
				<div className='flex lg:h-36 lg:flex-row flex-col w-56.8 lg:w-auto'>
					<div className='flex items-start'>
						<div className=''>
							<p className='text-base text-center text-black-750 mb-1 sm:mb-3 md:mb-4'>
								Client
							</p>
							<UserFill
								clazz={'w-9 lg:w-12 h-9 lg:h-12'}
								fill={'#404040'}
							/>
						</div>
						<div className='mx-6 md:mt-12 mt-9'>
							<ArrowLeftRight
								clazz={'lg:w-9 lg:h-9 w-6 h-6'}
								fill={'#404040'}
							/>
						</div>
						<div className='flex flex-col items-center'>
							<p className='text-base text-center font-bold mb-1 sm:mb-3 md:mb-4'>
								PM
							</p>
							<UserFill
								clazz={'w-9 lg:w-12 h-9 lg:h-12'}
								fill={'#000000'}
							/>
							<Plus
								clazz={'mt-5 w-3.5 h-3.5 lg:w-5/37 lg:h-5/37'}
								fill={'#404040'}
							/>
						</div>
					</div>
					<div className='mt-2.5 lg:mt-auto lg:ml-6 ml-auto lg:w-auto w-37 mr-0 md:mr-7 lg:mr-0'>
						<p className='text-base text-center font-bold mb-1 sm:mb-3 md:mb-4'>
							UnitSpace engineer
						</p>
						<div className='grid grid-cols-3 gap-x-6 lg:gap-x-9'>
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
			</div>
			<div className='xl:border-b border-black-900 w-full max-w-48.1'>
				<div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-x-12 gap-y-5 sm:gap-y-6 md:gap-y-7.8 xl:gap-y-7.8 pb-3 xl:w-630 ml-auto max-w-27.8 xl:max-w-none w-100%'>
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

export default TeamBlockInteraction;
