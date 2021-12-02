import TopPageBlock from '../TopPageBlock';
import TextCardLink from '../TextCardLink';
import SimpleTitleBlock from '../SimpleTitleBlock';
import FormBlock from '../FormBlock';

const data = {
	top: {
		variant: 'simple',
		title: 'Industries We Serve',
		description:
			'Our rich experience of working with various industries has helped us create a unique expertise for serving different business domains.',
	},
	industries: {
		inversion: false,
		topTitle: {
			title: 'Industries we work with',
			text: 'Get an advanced software solution tailored to your specific market needs. We bring improvement and growth through a fast, precise, and high-quality execution.',
		},
		cells: [
			{
				title: 'Fintech',
				text: 'Transform your financial system and deliver outstanding services with IdeaSoft software solutions. We have a great expertise in developing Fintech software products.',
				link: '',
			},
			{
				title: 'Agtech',
				text: 'Introduce technologies that will help your agribusiness reduce costs, becoming more efficient and profitable.',
				link: '',
			},
			{
				title: 'B2B',
				text: 'Get innovative B2B software solutions which will help you beat your competitors and take your business to the next level.',
				link: '',
			},
			{
				title: 'Smart City',
				text: 'We can provide you with a wide range of solutions to make your city smart. Get current information about the state of the city and predict its future behavior.',
				link: '',
			},
			{
				title: 'Telecom',
				text: 'We offer solutions to a number of tasks related to telecommunications, taking into account the needs of telecom operators and telecommunication challenges in other industries.',
				link: '',
			},
			{
				title: 'Healthcare',
				text: 'Provide exceptional medical services using modern equipment, mobile applications, CRM, data management solutions and other software products.',
				link: '',
			},
			{
				title: 'Social Media',
				text: 'Whatever you need, a social media app or a social networking platform, IdeaSoft experts will create for you a software product that best suits your requirements.',
				link: '',
			},
			{
				title: 'B2G',
				text: 'The software can help the government become more efficient and meet the needs of citizens. Solve your digital challenges with IdeaSoft support.',
				link: '',
			},
			{
				title: 'Retail',
				text: 'Increase sales, improve customer engagement and make your business more efficient with technology. Our experience allows us to create advanced software products for the retail sector.',
				link: '',
			},
			{
				title: 'Logistics',
				text: 'Technologies like cloud computing, CRM, ERP and AI/ML-based solutions can help you reduce costs and optimize business logistics with guaranteed data protection.',
				link: '',
			},
		],
	},
};

const Industries = () => {
	return (
		<>
			<section className='bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-default'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.industries.topTitle}
						inversion={data.industries.inversion}
					/>
					<div className='grid gap-x-7.8 gap-y-6 sm:gap-y-11 xl:gap-y-14 xl:grid-cols-2 grid-cols-1'>
						{data.industries.cells.map((i, index) => {
							return (
								<TextCardLink
									key={index}
									content={i}
									number={index}
									inversion={data.industries.inversion}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<FormBlock />
			</section>
		</>
	);
};

export default Industries;
