import TopPageBlock from '../TopPageBlock';
import SimpleTitleBlock from '../SimpleTitleBlock';
import FormBlock from '../FormBlock';
import ImgCard from '../ImgCard';
import TeamBlockInteraction from '../TeamBlockInteraction';

const data = {
	top: {
		variant: 'simple',
		title: 'Custom Software Development',
		description:
			'We turn your concepts and specifications into business-ready software that meets the highest quality standards. From first prototype to finished product, we take full responsibility for developing and managing the entire project.',
	},
	cooperation: {
		inversion: false,
		topTitle: {
			title: 'WHY THIS FORM OF COOPERATION?',
			text: 'Custom Software Development model works best if you have a clear vision of your app and you look for a dependable partner to take care of the actual implementation. ',
		},
		teamTitles: {
			first: 'Turn your visions into products',
			second: 'Concentrate on business goals',
			third: 'Manage software developers',
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
};

const HowWeWork = () => {
	return (
		<>
			<section className='bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-default'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.cooperation.topTitle}
						inversion={data.cooperation.inversion}
					/>
					<TeamBlockInteraction title={data.cooperation.teamTitles} />
					<div className='grid gap-y-6 sm:gap-y-11 xl:gap-y-14 grid-cols-1'>
						{data.cooperation.cells.map((i, index) => {
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
				<FormBlock />
			</section>
		</>
	);
};

export default HowWeWork;
