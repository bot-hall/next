import TopPageBlock from '../TopPageBlock';
import TextCard from '../TextCard';
import SimpleTitleBlock from '../SimpleTitleBlock';
import ProjectsSlider from '../Slider/ProjectsSlider';
import FormBlock from '../FormBlock';
import SimpleTitle from '../SimpleTitle/SimpleTitle';

const data = {
	top: {
		variant: 'cards',
		title: 'Blockchain',
		description:
			'Our experts can choose the right direction for your product development, utilizing the best practices and applying the latest technological advancements.',
	},
	tech: {
		text: [
			{
				stack: '',
				description: 'Custom Blockchain Development',
			},
			{
				stack: '',
				description: 'Smart Contract',
			},
			{
				stack: '',
				description: 'DeFi',
			},
			{
				stack: '',
				description: 'NFT',
			},
			{
				stack: '',
				description: 'Wallet',
			},
			{
				stack: '',
				description: 'Othe DLT Solutions',
			},
		],
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
	technologies: {
		inversion: true,
		topTitle: {
			title: 'Technologies map',
			text: 'Our Frontend developers work with modern technologies including but not limited by following list',
		},
		cells: [
			{
				title: 'Languages',
				text: 'HTLM 5, JavaScript, TypeScript, CSS 3',
			},
			{
				title: 'Libraries',
				text: 'Redux, RxJs, Lo-dash, D3, jQuery',
			},
			{
				title: 'Markup',
				text: 'Semantic UI, Bootstrap, Foundation, Pug, SASS, Stylus',
			},
			{
				title: 'Tools',
				text: 'Webpack, Babel, ESLint, Gulp',
			},
			{
				title: 'Frameworks',
				text: 'React, Angular, Vue.js, Backbone, Electron',
			},
			{
				title: 'Testing',
				text: 'Mocha, Ava, Jasmine, Chau, Sinon, Protractor, Puppeteer',
			},
		],
	},
	relatedCases: {
		inversion: true,
	},
};

const Blockchain = () => {
	return (
		<>
			<section className='tech-section bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-default'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.services.topTitle}
						inversion={data.services.inversion}
					/>
					<div className='grid gap-x-7.8 gap-y-6 sm:gap-y-11 xl:gap-y-14 xl:grid-cols-2 grid-cols-1'>
						{data.services.cells.map((i, index) => {
							return (
								<TextCard
									key={index}
									content={i}
									number={index}
									inversion={data.services.inversion}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.technologies.topTitle}
						inversion={data.technologies.inversion}
					/>
					<div className='grid gap-x-7.8 gap-y-6 sm:gap-y-11 xl:gap-y-14 xl:grid-cols-2 grid-cols-1'>
						{data.technologies.cells.map((i, index) => {
							return (
								<TextCard
									key={index}
									content={i}
									number={index}
									inversion={data.technologies.inversion}
								/>
							);
						})}
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

export default Blockchain;
