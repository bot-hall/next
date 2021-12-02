import Link from 'next/link';
import FooterList from './FooterList';
import LinkedIn from '../Icons/LinkedIn';
import FaceBook from '../Icons/FaceBook';
import Twitter from '../Icons/Twitter';
import Instagram from '../Icons/Instagram';
import Clutch from '../Icons/Clutch';
import GoodFirm from '../Icons/GoodFirm';
import Behance from '../Icons/Behance';
import Dribble from '../Icons/Dribble';
import UnitSpace from '../Icons/UnitSpace';

const dataLeft = [
	{
		title: 'Quick Links',
		links: [
			{
				text: 'Free Outsourcing Strategy Call',
			},
			{
				text: 'Buyer’s Guide to Outsourcing',
			},
			{
				text: 'Hire Software Developers in Ukraine',
			},
			{
				text: 'Offshore Rates',
			},
			{
				text: 'How Much Does It Cost to Hire Developers',
			},
			{
				text: 'Nearshore Development Team',
			},
			{
				text: 'Available Developers',
			},
			{
				text: 'Daxx Team',
			},
			{
				text: 'Careers',
			},
			{
				text: 'FAQ',
			},
			{
				text: 'Write For Us',
			},
		],
	},
	{
		title: 'Services',
		links: [
			{
				text: 'Dedicated Software Development Team in Ukraine',
			},
			{
				text: 'Process Consulting',
			},
			{
				text: 'IT Relocation',
			},
			{
				text: 'Quality Control',
			},
			{
				text: 'Software Security Testing',
			},
			{
				text: 'Launch Workshop',
			},
			{
				text: 'DevOps Engineer Services by Daxx',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				text: 'Whitepapers',
			},
			{
				text: 'Webinars',
			},
			{
				text: 'Books',
			},
			{
				text: 'Blog',
			},
			{
				text: 'Interviews',
			},
		],
	},
];

const dataCenter = [
	{
		title: 'Top Technologies',
		links: [
			{
				text: 'Front-End Developers',
			},
			{
				text: 'Full-Stack Developers',
			},
			{
				text: 'Angular Developers',
			},
			{
				text: 'Node.js Developers',
			},
			{
				text: 'JavaScript Developers',
			},
			{
				text: 'React Developer',
			},
			{
				text: '.NET Developers',
			},
			{
				text: 'Java Developers',
			},
			{
				text: 'Scala Developers',
			},
			{
				text: 'PHP Developers',
			},
			{
				text: 'Spring Developers',
			},
			{
				text: 'Python Developers',
			},
			{
				text: 'C/C++ Developers',
			},
			{
				text: 'C# Developers',
			},
			{
				text: 'Ruby Developers',
			},
			{
				text: 'Unity3D Developers',
			},
			{
				text: 'iOS Developers',
			},
			{
				text: 'Android Developers',
			},
			{
				text: 'Xamarin Developers',
			},
			{
				text: 'Zend Developers',
			},
			{
				text: 'Symfony Developers',
			},
			{
				text: 'Magento Developers',
			},
			{
				text: 'Drupal Developers',
			},
			{
				text: 'SQL Developers',
			},
			{
				text: 'QA Engineers',
			},
			{
				text: 'UI/UX Designers',
			},
			{
				text: 'Product Owner',
			},
			{
				text: 'Scrum Master',
			},
			{
				text: 'DevOps Engineer in Ukraine',
			},
		],
	},
];

const dataRight = [
	{
		title: 'Policies',
		links: [
			{
				text: 'GDPR',
			},
			{
				text: 'Cookie Policy',
			},
			{
				text: 'Privacy Policy',
			},
			{
				text: 'Privacy Policy',
			},
		],
	},
];

function Footer() {
	return (
		<foooter className='border-t border-alabaster-100 mx-auto w-full max-w-screen-2xl bg-black-900'>
			<div className='custom-container flex xl:flex-row flex-col'>
				<div className='xl:border-r border-alabaster-100 flex flex-col pt-9 xl:w-4/12 w-full'>
					{dataLeft.map((i, index) => {
						return (
							<div key={index} className='simple-footer-wrapper'>
								<FooterList list={i} />
							</div>
						);
					})}
				</div>
				<div className='xl:border-r border-alabaster-100 xl:px-7.8 xl:pt-9 xl:w-4/12 w-full'>
					{dataCenter.map((i, index) => {
						return <FooterList key={index} list={i} />;
					})}
				</div>
				<div className='xl:pt-9 xl:w-4/12 w-full flex flex-col justify-between'>
					<div className=''>
						{dataRight.map((i, index) => {
							return (
								<div
									key={index}
									className='second-footer-wrapper'>
									<FooterList list={i} />
								</div>
							);
						})}
						<div className='second-footer-wrapper'>
							<p className='sub-title xl:mb-4 mb-3 text-base sm:text-xl xl:text-base'>
								Follow us
							</p>
							<div className=''>
								<ul className='flex sm:justify-between xl:pb-0 pb-2 max-w-16.5 sm:max-w-29.5 xl:max-w-none flex-wrap sm:flex-nowrap'>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='LinkedIn'>
											<LinkedIn
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='FaceBook'>
											<FaceBook
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='Twitter'>
											<Twitter
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='Instagram'>
											<Instagram
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='Clutch'>
											<Clutch
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a href='/' target='_blank' title=''>
											<GoodFirm
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='Behance'>
											<Behance
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
									<li className='mb-3 xl:mb-0 mr-7 sm:mr-0'>
										<a
											href='/'
											target='_blank'
											title='Dribble'>
											<Dribble
												clazz={'footer-svg'}
												fill={'#FAFAFA'}
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='second-footer-wrapper'>
							<p className='sub-title xl:mb-4 mb-3 text-base sm:text-xl xl:text-base'>
								Call us
							</p>
							<div className=''>
								<ul className='xl:pb-0 pb-2'>
									<li className='mb-3 xl:mb-0'>
										<Link href='/'>
											<a
												href='tel:+380639993211'
												className='simple-link text-base sm:text-xl xl:text-base'>
												+380639993211
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='second-footer-wrapper'>
							<p className='sub-title xl:mb-4 mb-3 text-base sm:text-xl xl:text-base'>
								More information
							</p>
							<div className=''>
								<ul className='xl:pb-0 pb-2'>
									<li className='mb-3 xl:mb-0'>
										<Link href='/'>
											<a
												href='mailTo:info@unitspace.top'
												className='simple-link text-base sm:text-xl xl:text-base'>
												info@unitspace.top
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='xl:pl-7.8'>
							<p className='sub-title xl:mb-4 mb-3 text-base sm:text-xl xl:text-base'>
								Our location
							</p>
							<div className=''>
								<ul className='xl:pb-0 pb-2'>
									<li className='mb-3 xl:mb-0'>
										<Link href='/'>
											<a
												href='/'
												className='simple-link text-base sm:text-xl xl:text-base'>
												Ukraine, Kharkiv, Freedom
												Square, 7
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='xl:pl-7.8 flex items-center w-full xl:w-auto justify-between mb-5'>
						<p className='text-default opacity-25 xl:text-xl text-base mr-6'>
							Unit Space &copy; 2021
						</p>
						<div className='flex-shrink-0'>
							<Link href='/'>
								<a
									href='/'
									className='simple-link text-base sm:text-xl xl:text-base'>
									<UnitSpace
										clazz={
											'xl:w-32/7 w-32.1 xl:h-14 h-12.2 opacity-25'
										}
										fill={'#FAFAFA'}
									/>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</foooter>
	);
}

export default Footer;
