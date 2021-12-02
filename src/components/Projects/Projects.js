import TextCard from '../TextCard';
import BreadCrumbs from '../BreadCrumbs';
import ProjectsSlider from '../Slider/ProjectsSlider';
import FormBlock from '../FormBlock';
import Btn from '../Btn';
import SimpleTitle from '../SimpleTitle';

const data = {
	top: {
		variant: 'projects',
		title: 'VR Management System Development for Anova Games',
		description:
			'Powerful management system for booking and distributing VR games',
	},
	topList: [
		{
			title: 'Client',
			text: 'Anova Games',
		},
		{
			title: 'Services',
			text: 'Software, UX Design',
		},
		{
			title: 'Technologies',
			text: 'Angular, .Net, C++',
		},
		{
			title: 'Link',
			text: 'anovagames.com',
		},
	],
	projectdescription: {
		inversion: false,
		topTitle: {
			title: 'Project Description',
		},
	},
	targetaudience: {
		inversion: true,
		topTitle: {
			title: 'Target Audience',
		},
	},
	features: {
		inversion: false,
		topTitle: {
			title: 'Features',
		},
		subTitle: 'Combination of Software and Compatible Hardware',
		cells: [
			{
				title: 'Game booking',
				text: 'Users can register on the platform and book VR sessions by selecting the desired games, location, date, and time. Two-factor authentication is enabled to complete the booking.',
			},
			{
				title: 'Account',
				text: 'The personal account stores all information about a user’s bookings. There you can invite friends to the game or cancel a booking.',
			},
			{
				title: 'Wallet',
				text: 'Special game currency tokens are used to pay for games, which can be bought on the website or using the touch panel. These tokens are stored in the booking wallet.',
			},
			{
				title: 'Touch Panels',
				text: 'Touch panels installed at check-in counters and in VR arenas allow users to log in and play the desired game quickly.',
			},
			{
				title: 'Admin Panel',
				text: 'A multifunctional admin panel combines a personnel management system and a booking management system. There are several admin roles and detailed employee cards. The system is integrated with Workly and automatically calculates the time worked by an employee. ',
			},
			{
				title: 'Promo Codes',
				text: 'The platform implements a system of promo codes that admins can create. Users can use a promo code when booking a VR session directly on the website.',
			},
		],
	},
	otherCases: {
		inversion: true,
	},
};

const Projects = () => {
	return (
		<>
			<section className='projects-section bg-black-900'>
				<div className='border-t border-alabaster-100 max-w-screen-2xl mx-auto h-full'>
					<div className='custom-container text-default flex flex-col justify-between h-full'>
						<BreadCrumbs />
						<div className='flex flex-col justify-center h-full'>
							<div className='w-full max-w-46 mb-0 sm:mb-88 lg:mb-28 xl:mt-18 lg:mt-0 sm:mt-64 mt-0 sm-land:mb-20 sm-land:mt-20 2xl-land:mb-36 2xl-land:mt-36'>
								<div className='max-w-44 h-first-section sm:h-auto flex flex-col justify-center'>
									<h1 className='text-1.7 leading-8 sm:text-5.5xl sm:leading-66 uppercase mb-6'>
										{data.top.title}
									</h1>
									<p className='mb-9 sm:mb-6 xl:mb-12 leading-6 sm:leading-7 text-alabaster-400'>
										{data.top.description}
									</p>
									<div className='border-b border-alabaster-500 pb-6 xl:pb-12'>
										<Btn
											clazz={'min-w-11'}
											text={'get in touch'}
										/>
									</div>
								</div>
							</div>
							<div className='grid lg:grid-cols-4 grid-cols-1 gap-7.8 lg:gap-4 pb-32 sm:pb-56 lg:pb-88 xl:pb-96'>
								{data.topList.map((i) => {
									return (
										<div className='text-default'>
											<div className='flex items-center mb-4'>
												<p className='border-t border-alabaster-400 w-6 mb-2 mr-2'></p>
												<p className='text-alabaster-400 text-xl'>
													{i.title}
												</p>
											</div>
											<p className='text-1.3 leading-6'>
												{i.text}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-default'>
				<div className='mx-auto max-w-screen-xl px-0 md:px-8 w-full'>
					<div className='relative pt-40 sm:pt-68 lg:pt-88 xl:pt-036.1'>
						<div className='absolute -top-55 xl:-top-32.7 left-0 w-full h-54 sm:h-82 lg:h-030.6 xl:h-037.5'>
							<img
								src='/assets/images/anova.jpg'
								alt=''
								className='cover-img'
							/>
						</div>
					</div>
				</div>
				<div className='custom-container'>
					<SimpleTitle
						title={data.projectdescription.topTitle.title}
					/>
				</div>
				<div className='custom-container pb-32 sm:pb-52 lg:pb-64 xl:pb-32'>
					<p className='text-xl sm:text-2 sm:leading-38 mb-9 text-black-900'>
						ANOVA One-stop VR Management&nbsp;System
					</p>
					<div className='text-black-750'>
						The adoption of virtual reality always requires
						additional software tools. And if you work closely with
						VR games, you will need a feature-rich VR content,
						booking, and customer relationship management system.
						ANOVA decided to create such a platform to make the VR
						experience more accessible for its customers while
						providing reliable and straightforward management of the
						company’s core processes. ANOVA is a complex multi-tool
						system that addresses a wide range of tasks from booking
						VR games to personnel management within a company. The
						platform has a convenient VR game booking system for
						customers, as well as an extended admin panel for
						managing the company’s internal processes. We also
						developed software for touch panels located directly in
						VR game venues for quick and easy game selection.
						Players can use a special game currency called tokens to
						pay for games. These tokens can be bought on the website
						or through touch panels. ANOVA also helps track the
						company’s financial performance and employee
						productivity with the help of an advanced admin panel. A
						team of 14 specialists worked on the project, including
						PM, business analyst, front-end and back-end developers,
						UX designer, DevOps, and QA. The technology stack was
						based on Angular and .Net, which made it possible to
						create a dynamic and efficient system. Integration with
						Steam is also done using C ++.
					</div>
				</div>
			</section>
			<section className='text-default bg-black-900'>
				<div className='mx-auto max-w-screen-2xl px-0 md:px-8 xl:px-0 w-full'>
					<div className='relative pt-40 sm:pt-68 lg:pt-88 xl:pt-0'>
						<div className='absolute -top-60 left-0 w-full h-54 sm:h-82 lg:h-030.6 xl:h-048.2 xl:relative xl:top-0'>
							<img
								src='/assets/images/anova-2.jpg'
								alt=''
								className='cover-img'
							/>
						</div>
					</div>
				</div>
				<div className='custom-container xl:pt-32'>
					<SimpleTitle
						title={data.targetaudience.topTitle.title}
						inversion={data.targetaudience.inversion}
					/>
				</div>
				<div className='custom-container  pb-32 sm:pb-52 lg:pb-64 xl:pb-32'>
					<p className='text-xl sm:text-2 sm:leading-38 mb-9 text-default'>
						Free-roam VR Experience with Proper&nbsp;Management
					</p>
					<div className='mb-9'>
						<p className='text-base sm:text-1.3 sm:leading-5 mb-7.8 sm:mb-8'>
							For users
						</p>
						<div className='text-alabaster-400'>
							ANOVA is a user-friendly platform that allows you to
							book team VR games for corporate events, children’s
							parties, or other celebrations in a few clicks.
							Users can create their accounts where all their
							bookings will be stored.
						</div>
					</div>
					<div>
						<p className='text-base sm:text-1.3 sm:leading-5 mb-7.8 sm:mb-8'>
							For franchisee
						</p>
						<div className='text-alabaster-400'>
							By purchasing the ANOVA franchise, franchisees
							receive a complete software package for managing VR
							content, booking, and delivery team. This will help
							them get started quickly.
						</div>
					</div>
				</div>
			</section>
			<section className='bg-default'>
				<div className='mx-auto max-w-screen-2xl px-0 md:px-8 xl:px-0 w-full'>
					<div className='relative pt-40 sm:pt-68 lg:pt-88 xl:pt-0'>
						<div className='absolute -top-60 left-0 w-full h-54 sm:h-82 lg:h-030.6 xl:h-048.2 xl:relative xl:top-0'>
							<img
								src='/assets/images/anova-3.jpg'
								alt=''
								className='cover-img'
							/>
						</div>
					</div>
				</div>
				<div className='custom-container xl:pb-21 sm:pb-16 pb-7.8 xl:pt-32'>
					<SimpleTitle title={data.features.topTitle.title} />
					<p className='text-xl sm:text-2 sm:leading-38 mb-9 text-black-900'>
						{data.features.subTitle}
					</p>
					<div className='grid gap-x-7.8 gap-y-6 sm:gap-y-11 xl:gap-y-14 xl:grid-cols-2 grid-cols-1'>
						{data.features.cells.map((i, index) => {
							return (
								<TextCard
									key={index}
									content={i}
									number={index}
									inversion={data.features.inversion}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className='bg-default'>
				<div className='xl:pb-21 sm:pb-16 pb-7.8 pt-12 sm:pt-16 xl:pt-22'>
					<div className='custom-container'>
						<SimpleTitle title={'Other cases'} />
					</div>
					<div className='fraction-container'>
						<ProjectsSlider inversion={data.otherCases.inversion} />
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<FormBlock />
			</section>
		</>
	);
};

export default Projects;
