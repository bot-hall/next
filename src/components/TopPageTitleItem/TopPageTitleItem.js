import Btn from '../Btn';

const TopPageTitleItem = ({ data }) => {
	return (
		<div className='w-full max-w-46 mb-0 sm:mb-96 lg:mb-28 xl:mt-18 lg:mt-0 sm:mt-64 mt-0 sm-land:mb-52 sm-land:mt-40 2xl-land:mb-28 2xl-land:mt-18'>
			<div className='max-w-44 h-first-section sm:h-auto flex flex-col justify-center'>
				<h1 className='text-1.7 leading-8 sm:text-5.5xl sm:leading-66 uppercase mb-6'>
					{data.title}
				</h1>
				<p className='mb-9 sm:mb-6 xl:mb-12 leading-6 sm:leading-7 text-alabaster-400'>
					{data.description}
				</p>
				<div className='border-b border-alabaster-500 pb-6 xl:pb-12'>
					<Btn clazz={'min-w-11'} text={'get in touch'} />
				</div>
			</div>
		</div>
	);
};
export default TopPageTitleItem;
