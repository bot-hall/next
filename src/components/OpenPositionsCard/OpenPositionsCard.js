import Link from 'next/dist/client/link';
import ArrowFill from '../Icons/ArrowFill';

const OpenPositionsCard = ({ positionItem }) => {
	const { position, placeEmployment, opened, typeEmployment, link } =
		positionItem;
	return (
		<div className='border-b border-alabaster-250 py-6 lg:py-12.1'>
			<p className='text-default mb-4 lg:mb-9 text-xl sm:text-2 leading-7 sm:leading-38'>
				{position}
			</p>
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10'>
				<div className='flex flex-col justify-between'>
					<span className='block text-alabaster-300 mb-1.5 lg:leading-7 leading-5'>
						Place of employment:
					</span>
					<span className='block text-default lg:leading-7 leading-5'>
						{placeEmployment}
					</span>
				</div>
				<div className='flex flex-col justify-between'>
					<span className='block text-alabaster-300 mb-1.5 lg:leading-7 leading-5'>
						Application opened:
					</span>
					<span className='block text-default lg:leading-7 leading-5'>
						{opened}
					</span>
				</div>
				<div className='flex flex-col justify-between'>
					<span className='block text-alabaster-300 mb-1.5 lg:leading-7 leading-5'>
						Type of employment:
					</span>
					<span className='block text-default lg:leading-7 leading-5'>
						{typeEmployment}
					</span>
				</div>
				<Link href='/'>
					<a className='flex items-center lg:self-end lg:justify-self-end group'>
						<p className='text-sm lg:leading-7 leading-5 uppercase text-default group-hover:opacity-75 transition-opacity'>
							learn more
						</p>
						<ArrowFill
							clazz={
								'w-3 h-2 ml-4 mb-0.5 group-hover:opacity-75 transition-opacity'
							}
							fill={'#FAFAFA'}
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default OpenPositionsCard;
