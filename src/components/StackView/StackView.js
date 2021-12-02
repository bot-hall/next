import TopPageBlock from '../TopPageBlock';
import SimpleTitleBlock from '../SimpleTitleBlock';
import ProjectsSlider from '../Slider/ProjectsSlider';
import FormBlock from '../FormBlock';
import TextCard from '../TextCard';
import ImgCard from '../ImgCard';
import TeamBlockItem from '../TeamBlockItem';
import TeamBlockInteraction from '../TeamBlockInteraction';
import SimpleTitle from '../SimpleTitle/SimpleTitle';

const data = {
	// style: {
	// 	simpleContainer: 'flex flex-col justify-center h-full',
	// },
	top: {
		variant: 'simple',
		title: 'Angular Development',
		description:
			'Our developers build state-of-the-art web solutions based on the latest Angular technologies.',
	},

	services: {
		inversion: false,
		topTitle: {
			title: 'OUR SERVICES',
			text: 'We provide a wide variety of services during the course of collaboration with our customers',
		},
		cells: [
			{
				title: 'Custom Business Apps',
				text: 'Our core value: first, we always learn what a particular business needs and then offer the most suitable solutions. We can create any design, layout, logic on frontend combined with our customers unique business idea.',
			},
			{
				title: 'Complex Web-based applications',
				text: 'Enable your users to interact with a remote server through a web browser interface, even with such complex systems as an in-browser image editor.',
			},
			{
				title: 'Responsive Web Pages',
				text: 'We create responsive web pages that work well on any device - phone, tablet, desktop, or anything in between.',
			},
			{
				title: 'Master skill in JavaScript development',
				text: 'We can solve problems of any complexity. Our team has extensive experience in developing JavaScript.',
			},
			{
				title: 'Progressive Web Applications',
				text: 'With PWA, the customers smartphone immediately loads your whole website, the application works even in offline mode.',
			},
			{
				title: 'Master skill in JavaScript development',
				text: 'We can solve problems of any complexity. Our team has extensive experience in developing JavaScript.',
			},
		],
	},
	whyunitspace: {
		inversion: true,
		topTitle: {
			title: 'WHY Unit Space',
			text: 'Key strengths that our customers value the most while working with us.',
		},
		cells: [
			{
				title: 'We aim for the future',
				text: 'We differentiate ourselves by building strategic long-term relationships. Unit Space has proven to be a dependable partner that our clients can always rely on. On average, they have been with us for more than three years.',
			},
			{
				title: 'We are highly selective',
				text: 'More than half of our developers come from our Academy program, which has a 0.2% acceptance-to-hire rate. For each senior role we seek to fill, we evaluate hundreds of candidates to give you the finest engineers Ukraine has to offer.',
			},
			{
				title: 'We are committed',
				text: 'Our developers treat your project as their own and take great pride in its success - they are not afraid to speak their mind in order to build a better product. And theyre dedicated - on average, our developers stay on the same projects for 3-4 years.',
			},
			{
				title: 'We deliver results',
				text: 'With well over 40 projects completed, we maintain a solid reputation for getting things done, on time and to the highest standards. And with a 4.9 rating on Clutch.co, customers can rest assured that we are up to even the most challenging tasks.',
			},
		],
	},
	dedicateddevelopmentteam: {
		inversion: false,
		topTitle: {
			title: 'Dedicated Development Team',
			text: 'We build teams of truly amazing professionals to transform your ideas into advanced Angular applications with intuitive functionality. Our dedicated developers work exclusively for you, integrating themselves into your workflow as if they were local employees.',
		},
		teamTitles: {
			first: 'Rapidly Scale Your Development Team',
			second: 'Keep Full Control over Development Processes',
			third: 'Worry about Recruitment and HR',
		},
		cells: [
			{
				title: 'Extend a team effortlessly',
				text: 'Dont waste time on recruitment: increase your engineering capacity without being distracted from the project.',
				img: '/assets/images/team-1.jpg',
				list: [
					'Have your dedicated team assembled within weeks',
					'Seamlessly integrate new talents into your project and team',
					'Get direct access to all the team members & be in the loop of the development progress',
				],
			},
			{
				title: 'Enjoy the extra value',
				text: 'Once you have your dedicated team set up, you get not only access to the talent pool but also:',
				img: '/assets/images/team-2.jpg',
				list: [
					'Solid technology expertise accumulated over years',
					'Guidance on any aspect of the development process',
					'Continuous improvement, development & support of your application',
				],
			},
		],
	},
	customsoftwaredevelopment: {
		inversion: false,
		topTitle: {
			title: 'Custom Software Development',
			text: 'We turn your concepts and specifications into business-ready software that meets the highest quality standards. From first prototype to finished product, we take full responsibility for developing and managing the entire project.',
		},
		teamTitles: {
			first: 'Rapidly Scale Your Development Team',
			second: 'Keep Full Control over Development Processes',
			third: 'Worry about Recruitment and HR',
		},
		cells: [
			{
				title: 'Efficient Collaboration',
				text: 'We won’t bore you with more details than necessary. Get involved as much or as little as you want! We are ready to listen and willing to decide the details ourselves - whatever suits you better.',
				img: '/assets/images/software-1.jpg',
			},
			{
				title: 'Leverage Our Know-How',
				text: 'You need an app, but you don’t have the time or the skills to develop it yourself? Let us take care of it. We have more than ten years of experience and a great level of expertise in the efficient implementation of software projects. We follow many development best practices and write our code according to the highest quality standards.',
				img: '/assets/images/software-2.jpg',
			},
			{
				title: 'Agile Processes',
				text: 'We believe in agile and lean development methods and are very proficient in working with Scrum. This allows us to better integrate remote teams, deliver the highest-priority features first, receive timely feedback and facilitate problem resolution as issues arise.',
				img: '/assets/images/software-3.jpg',
			},
			{
				title: 'Focus On Your Business Goals',
				text: 'Free up time in your calendar and reduce time to market by handing over your software development to us. Finding and managing developers takes a lot of effort and so does structuring and supervising the implementation process. We can take care of all these steps as we turn your specifications into a fully working application. Of course, we welcome your input at any time - it’s up to you to involve yourself as much or as little as you like!',
				img: '/assets/images/software-4.jpg',
			},
		],
	},
	relatedCases: {
		inversion: true,
	},
};

const StackView = () => {
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
					<SimpleTitleBlock
						topTitle={data.whyunitspace.topTitle}
						inversion={data.whyunitspace.inversion}
					/>
					<div className='grid gap-x-7.8 gap-y-6 sm:gap-y-11 xl:gap-y-14 xl:grid-cols-2 grid-cols-1'>
						{data.whyunitspace.cells.map((i, index) => {
							return (
								<TextCard
									key={index}
									content={i}
									number={index}
									inversion={data.whyunitspace.inversion}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className='bg-default'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.customsoftwaredevelopment.topTitle}
						inversion={data.customsoftwaredevelopment.inversion}
					/>
					<TeamBlockInteraction
						title={data.customsoftwaredevelopment.teamTitles}
					/>
					<div className='grid gap-y-6 sm:gap-y-11 xl:gap-y-14 grid-cols-1'>
						{data.customsoftwaredevelopment.cells.map(
							(i, index) => {
								return (
									<ImgCard
										key={index}
										content={i}
										number={index}
									/>
								);
							}
						)}
					</div>
				</div>
			</section>
			<section className='bg-default'>
				<div className='xl:pb-21 sm:pb-16 pb-7.8 pt-12 sm:pt-16 xl:pt-22'>
					<div className='custom-container'>
						<SimpleTitle title={'Related cases'} />
					</div>
					<div className='fraction-container'>
						<ProjectsSlider
							inversion={data.relatedCases.inversion}
						/>
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<FormBlock />
			</section>
		</>
	);
};

export default StackView;
