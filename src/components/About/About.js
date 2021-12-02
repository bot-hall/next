import TopPageBlock from '../TopPageBlock';
import FormBlock from '../FormBlock';
import SimpleTitleBlock from '../SimpleTitleBlock';
import ImgCard from '../ImgCard';
import MapBlock from '../MapBlock';
import Achievements from '../Achievements';
import TeamSlider from '../Slider/TeamSlider';
import TimeLine from '../TimeLine';

const data = {
	top: {
		variant: 'simple',
		title: 'About us',
		description:
			'Unit Space is a boutique software development agency with more than 13 years of experience. We differentiate ourselves by building strategic long-term partnerships with our clients and providing exceptional quality services at all stages of the application development lifecycle.',
	},
	whyunitspace: {
		inversion: false,
		topTitle: {
			title: 'Why Unit Space',
			text: 'Key strengths that our customers value the most in our cooperation',
		},
		cells: [
			{
				title: 'A Team of Top Developers',
				text: 'To build effective teams for clients, we handpick the most talented local engineers. We follow a rigorous recruitment process, evaluating hundreds of candidates for each open position. At the same time, more than 50% of our developers come from our annual Academy program, which has a 0.5% acceptance-to-hire rate.',
				img: '/assets/images/software-1.jpg',
				link: {
					lk: '',
					text: 'Meet our team',
				},
			},
			{
				title: '13 Years of Experience',
				text: 'Customers value professionalism, work ethics, and dependability as is evidenced by our longstanding experience. For over 13+ years, we have earned a reputation for excellence and we work hard every day to defend it.',
				img: '/assets/images/software-2.jpg',
				link: {
					lk: '',
					text: 'View our case studies',
				},
			},
			{
				title: 'Strong Company Culture',
				text: 'At Binary Studio, we offer a friendly workplace with great opportunities for development and a management that cares. Ranked by developers as one of the best companies to work for in Lviv, we are proud of our high employee satisfaction and very low attrition rates.',
				img: '/assets/images/software-3.jpg',
				link: {
					lk: '',
					text: 'see open positions',
				},
			},
			{
				title: 'We aim for the future',
				text: 'We have already become strategic partners for the majority of our clients. They rely on our developers professional expertise the same way that they would rely on their own in-house employees. On average, our customers stay with us for more than three years already. We are especially delighted to still continue partnership with our very first customer from 2005!',
				img: '/assets/images/software-4.jpg',
			},
		],
	},
};

const About = () => {
	return (
		<>
			<section className='bg-black-900'>
				<TopPageBlock data={data} />
			</section>
			<section className='bg-black-900'>
				<div className='custom-container section-container'>
					<Achievements />
				</div>
			</section>
			<section className='bg-default'>
				<div className='custom-container section-container'>
					<SimpleTitleBlock
						topTitle={data.whyunitspace.topTitle}
						inversion={data.whyunitspace.inversion}
					/>
					<div className='grid gap-y-6 sm:gap-y-11 xl:gap-y-14 grid-cols-1'>
						{data.whyunitspace.cells.map((i, index) => {
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
			<section className='bg-default'>
				<div className='max-w-screen-16 ml-auto 2xl:mx-auto 2xl:max-w-screen-xl 2xl:px-8 pl-8 relative'>
					<TimeLine />
				</div>
			</section>
			<section className='bg-black-900'>
				{/* <div className='text-default mb-20 sm:mb-28 xl:mb-21 xl:static relative pt-12 sm:pt-16 xl:pt-21'> */}
				<div className='text-default mb-20 sm:mb-28 xl:mb-21 xl:static relative pt-12 sm:pt-16 xl:pt-21 flex flex-col items-center justify-center lg:h-screen'>
					<h5 className='custom-container uppercase text-1.3 sm:text-5xl font-bold leading-7 sm:leading-58 mb-11.8 xl:mb-20'>
						OUR TEAM
					</h5>
					<div className='custom-container xl:relative team-container'>
						<TeamSlider />
					</div>
				</div>
			</section>
			<section className='bg-default hidden lg:block'>
				<div className='section-container'>
					<div
						className={`pb-6 mb-9 sm:mb-12 xl:mb-16 custom-container`}>
						<h5
							className={`uppercase font-bold text-1.3 sm:text-5xl text-black-900 text-center xl:text-left`}>
							OUR clients locations
						</h5>
					</div>
					<MapBlock />
				</div>
			</section>
			<section className='bg-black-900'>
				<FormBlock />
			</section>
		</>
	);
};

export default About;
