import TopPageBlock from '../TopPageBlock';
import SimpleTitle from '../SimpleTitle';
import FormBlock from '../FormBlock';

const data = {
	top: {
		variant: 'simple',
		title: 'Software Solutions for B2B Companies',
		description:
			'Serve your business customers in the best possible way by adopting customized B2B software solutions.',
	},
	direction: {
		inversion: false,
		topTitle: {
			title: 'What is B2B',
		},
		subTitle: 'One of the most technologically advanced industries',
		text: 'Service delivery in a B2B environment presents a set of unique challenges. Longer closing cycles, more complex requirements, the need to maintain partnerships over an extended period of time, and so on. And most importantly, to be successful, you need to make your clients successful. Serve your business customers in the best possible way by helping them adjust their business process according to the needs of their customers with B2B software solutions. The IdeaSoft team is made up of first-class IT specialists driven by a passion for new tech ideas. Based on multi-domain expertise our developers will create a B2B software product in accordance with your unique workflow and business requirements. B2B software solutions are an effective way to transform your company into a digital reality. Reach high-profile business clients, drive cost-effectiveness, and become an industry leader with customized tech solutions for the B2B industry.',
		img1: '/assets/images/b2b-1.jpg',
		img2: '/assets/images/b2b-2.jpg',
	},
};

const IndustriesDirection = () => {
	return (
		<>
			<section className='bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-default'>
				<div className='custom-container py-12 sm:py-16 xl:py-21'>
					<SimpleTitle
						title={data.direction.topTitle.title}
						inversion={data.direction.inversion}
					/>
					<p className='text-xl sm:text-2 sm:leading-38 mb-9 text-black-900'>
						{data.direction.subTitle}
					</p>
					<div className='text-black-750'>{data.direction.text}</div>
					<div className='flex flex-col xl:flex-row justify-between mt-9 xl:mt-16'>
						<div className='mb-9 xl:mb-0 w-full xl:w-850 h-42 sm:h-97 lg:h-034.1 xl:h-030'>
							<img
								src={data.direction.img1}
								alt=''
								className='cover-img'
							/>
						</div>
						<div className='w-full xl:w-410 h-81 sm:h-051.2 lg:h-070 xl:h-030'>
							<img
								src={data.direction.img2}
								alt=''
								className='cover-img'
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<FormBlock />
			</section>
		</>
	);
};

export default IndustriesDirection;
