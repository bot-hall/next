import BreadCrumbs from '../BreadCrumbs';
import TopPageTitleItem from '../TopPageTitleItem';
import TechCard from '../TechCard';

const TopPageBlock = ({ data, style }) => {
	const variant = (variants) => {
		switch (variants) {
			case 'simple':
				return;
			case 'cards':
				return (
					<div className=''>
						<p className='text-base sm:text-1.3 mb-6 lg:mb-9'>
							Main technologies
						</p>
						<div className='grid gap-7.8 lg:gap-6 lg:grid-cols-3 grid-cols-1 mb-21 md:mb-16 lg:mb-12'>
							{data.tech.text.map((i, index) => {
								return <TechCard key={index} text={i} />;
							})}
						</div>
					</div>
				);
			// case 'projects':
			// 	return (
			// 		<div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
			// 			{data.topList.map((i) => {
			// 				return (
			// 					<div className='text-default'>
			// 						<div className='flex items-center mb-4'>
			// 							<p className='border-t border-alabaster-400 w-6 mb-2 mr-2'></p>
			// 							<p className='text-alabaster-400'>
			// 								{i.title}
			// 							</p>
			// 						</div>
			// 						<p className='text-1.3 leading-6'>
			// 							{i.text}
			// 						</p>
			// 					</div>
			// 				);
			// 			})}
			// 		</div>
			// 	);
		}
	};
	return (
		<div className='border-t border-alabaster-100 max-w-screen-2xl mx-auto h-full'>
			<div className='custom-container text-default flex flex-col justify-between h-full'>
				<BreadCrumbs />
				<div className='flex flex-col justify-center h-full'>
					<TopPageTitleItem data={data.top} />
					{variant(data.top.variant)}
				</div>
			</div>
		</div>
	);
};

export default TopPageBlock;
