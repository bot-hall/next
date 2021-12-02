import TopPageBlock from '../TopPageBlock';
import SimpleTitleBlock from '../SimpleTitleBlock';
import ContactForm from '../ContactForm';
import Planets from '../Icons/Planets';
import Btn from '../Btn';
import ImgCard from '../ImgCard';
import TeamBlockItem from '../TeamBlockItem';

const data = {
	top: {
		variant: 'simple',
		title: 'Dedicated Development Team',
		description:
			'We take the pain out of hiring and managing top notch software engineers. Set up a dedicated software development team in weeks and integrate new resources into your in-house team as if they were full-time, on-site employees.',
	},
	dedicateddevelopmentteam: {
		inversion: false,
		topTitle: {
			title: 'AMAZING DEDICATED TALENT AT YOUR FINGERTIPS',
			text: 'This form of cooperation is perfect if you are working with an in-house development team that you want to extend with additional skills or resources. Ideally, you are looking for a team member to work in the context of a larger project.',
		},
		teamTitles: {
			first: 'Rapidly Scale Your Development Team',
			second: 'Keep Full Control over Development Processes',
			third: 'Worry about Recruitment and HR',
		},
		cells: [
			{
				title: 'Rapid access to talent',
				text: 'With offices in Lviv and Kyiv, and thus a fast access to Ukraine’s largest talent pools, we are able to assemble an effective dedicated team in weeks.',
				img: '/assets/images/team-1.jpg',
			},
			{
				title: 'Enjoy the extra value',
				text: 'You communicate directly with the developers, assign tasks and choose the tools and processes to work with. You can integrate our engineers into your existing team structures and let them join your meetings over video conferences. You can also invite them to visit you in person, which can be a great way to improve your cooperation over the long term.',
				img: '/assets/images/team-2.jpg',
			},
			{
				title: 'Long-term Partnership',
				text: 'Your dedicated development team members work for you full-time. As part of our long-term cooperation, you will form personal connections and strong working relationships. As our developers get to know you and your business better, you will be able to leverage their skills even more efficiently and in a wider context.',
				img: '/assets/images/team-1.jpg',
			},
			{
				title: 'Continuous Learning',
				text: 'At Binary Studio, we deeply believe in expanding our knowledge and sharing it with others. We run our own summer academy to educate computer science graduates and support our employees’ continuous learning through regular trainings, development programs and a company library. We also host frequent professional events.',
				img: '/assets/images/team-2.jpg',
			},
		],
	},
};

const HowWeWorkTeam = () => {
	return (
		<>
			<section className='bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-default'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.dedicateddevelopmentteam.topTitle}
						inversion={data.dedicateddevelopmentteam.inversion}
					/>
					<TeamBlockItem
						title={data.dedicateddevelopmentteam.teamTitles}
					/>
					<div className='grid gap-y-6 sm:gap-y-11 xl:gap-y-14 grid-cols-1'>
						{data.dedicateddevelopmentteam.cells.map((i, index) => {
							return (
								<ImgCard
									key={index}
									content={i}
									number={index}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='custom-container section-container'>
					<div className='border-b border-default pb-6 mb-9 sm:mb-12 xl:mb-16'>
						<h5 className='uppercase font-bold text-1.3 sm:text-5xl text-default'>
							Lets Create something together
						</h5>
						<Btn
							clazz={'block sm:hidden w-full'}
							text={'get in touch'}
						/>
					</div>
					<div className='hidden sm:flex justify-between pt-3'>
						<div className='xl:mr-33 w-full'>
							<ContactForm />
						</div>
						<div className='hidden xl:block'>
							<Planets
								clazz={'opacity-10 w-520 h-508'}
								fill={'#FAFAFA'}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HowWeWorkTeam;
