import TopPageBlock from '../TopPageBlock';
import SimpleTitle from '../SimpleTitle';
import TextCard from '../TextCard';
import OpenPositionsCard from '../OpenPositionsCard';

const data = {
	top: {
		variant: 'simple',
		title: 'Careers',
		description:
			'Find your dream job at Ideasoft. New career opportunities with heart-warming traditions.',
	},
	careers: {
		inversion: false,
		topTitle: {
			title: 'Our Core values',
		},
		cells: [
			{
				title: 'Respect',
				text: 'We value everyones time and effort and treat our colleagues, clients and customers with courtesy. By interacting and collaborating, we empower the other person to succeed in their work by providing the support they need and trusting them to make informed decisions.',
			},
			{
				title: 'Team Spirit',
				text: 'In both a professional and personal capacity, we offer help and bring out the best in each other. We develop a diverse and inclusive community in which we are encouraged to be ourselves.',
			},
			{
				title: 'Responsibilities',
				text: 'We are responsible and fulfill our obligations. We pride ourselves on delivering quality work on time. As a result, we adhere to high standards of accountability, integrity and a willingness to do whatever it takes to deliver the best possible solutions to our clients and customers.',
			},
			{
				title: 'Communication',
				text: 'Important issues and changes within the organization are delivered at a high level. When communicating with each other, we are attentive and open to feedback.',
			},
			{
				title: 'Innovation',
				text: 'The pursuit of efficiency, effectiveness and excellence determines what we do, how we do it, and the goals we set. We encourage each other to continue to improve, even if it requires taking conscious risks.',
			},
		],
	},
	openpositions: {
		inversion: true,
		topTitle: {
			title: 'Open positions',
		},
		cells: [
			{
				position: 'Middle+/Senior Node.js Backend Engineer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'Middle React.js Developer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'EOS Blockchain Engineer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'Middle+/Senior Devops Engineer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'Middle+ Angular Frontend Engineer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'Middle+/Senior Automation QA Engineer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'Middle IOS Developer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
			{
				position: 'Middle Android Developer',
				placeEmployment: 'Remote',
				opened: 'Jul 15, 2021',
				typeEmployment: 'Full-time employment',
				link: '',
			},
		],
	},
};

const Careers = () => {
	return (
		<>
			<section className='bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-default'>
				<div className='custom-container py-12 sm:py-16 xl:py-21'>
					<SimpleTitle
						title={data.careers.topTitle.title}
						inversion={data.careers.inversion}
					/>
					<div className='grid gap-x-7.8 gap-y-6 sm:gap-y-11 xl:gap-y-14 xl:grid-cols-2 grid-cols-1'>
						{data.careers.cells.map((i, index) => {
							return (
								<TextCard
									key={index}
									content={i}
									number={index}
									inversion={data.careers.inversion}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='custom-container section-container'>
					<SimpleTitle
						title={data.openpositions.topTitle.title}
						inversion={data.openpositions.inversion}
					/>
					<div className='border-t border-alabaster-250'>
						{data.openpositions.cells.map((i, index) => {
							return (
								<OpenPositionsCard
									key={index}
									positionItem={i}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Careers;
