import Link from 'next/link';
import { useState, useEffect } from 'react';
import UnitSpace from '../Icons/UnitSpace';
import HeaderMenuList from './HeaderMenuList';
import Btn from '../Btn';

const data = {
	expertise: {
		title: 'Expertise',
		subMenu: [
			{
				subTitle: 'Front-End',
				links: [
					{
						text: 'Angular',
					},
					{
						text: 'Vue',
					},
					{
						text: 'React',
					},
				],
			},
			{
				subTitle: 'Back-End',
				links: [
					{
						text: 'Node.js',
					},
					{
						text: '.NET',
					},
					{
						text: 'PHP',
					},
					{
						text: 'Java',
					},
					{
						text: 'Solidity',
					},
				],
			},
			{
				subTitle: 'Mobile',
				links: [
					{
						text: 'IOS',
					},
					{
						text: 'Android',
					},
					{
						text: 'Hybrid',
					},
				],
			},
			{
				subTitle: 'Blockchain',
				links: [
					{
						text: 'Custom Blockchains',
					},
					{
						text: 'Smart Contracts',
					},
					{
						text: 'NFT Marketplace',
					},
					{
						text: 'Wallet Development',
					},
					{
						text: 'Crypto Exchange',
					},
					{
						text: 'DeFi',
					},
					{
						text: 'Other DLT Solutions',
					},
				],
			},
			{
				subTitle: 'Design',
				links: [
					{
						text: 'UX Design',
					},
					{
						text: 'UI Design',
					},
				],
			},
			{
				subTitle: 'DevOps',
				links: [
					{
						text: 'GCP',
					},
					{
						text: 'AWS',
					},
					{
						text: 'Azure',
					},
				],
			},
			{
				subTitle: 'QA',
				links: [
					{
						text: 'Manual',
					},
					{
						text: 'Automation',
					},
				],
			},
		],
	},
	howWeWork: {
		title: 'How we work',
		subMenu: [
			{
				subTitle: 'Dedicated Development Team',
			},
			{
				subTitle: 'Custom Software Development',
			},
		],
	},
	industries: {
		title: 'Industries',
		subMenu: [
			{
				subTitle: 'Fintech',
			},
			{
				subTitle: 'Agtech',
			},
			{
				subTitle: 'B2B',
			},
			{
				subTitle: 'Smart City',
			},
			{
				subTitle: 'Telecom',
			},
			{
				subTitle: 'Healthcare',
			},
			{
				subTitle: 'Social Media',
			},
			{
				subTitle: 'B2G',
			},
			{
				subTitle: 'Retail',
			},
			{
				subTitle: 'Logistics',
			},
		],
	},
	company: {
		title: 'Company',
		subMenu: [
			{
				subTitle: 'About us',
			},
			{
				subTitle: 'Why Unit Space?',
			},
			{
				subTitle: 'Team',
			},
		],
	},
	blog: {
		subTitle: 'Blog',
	},
	careers: {
		subTitle: 'Careers',
	},
	contacts: {
		subTitle: 'Contacts',
	},
};

const Header = () => {
	const [isActive, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!isActive);
	};

	useEffect(() => {
		let mediaQuery = window.matchMedia('(min-width: 1290px)');
		const resizeThrottler = () => {
			if (mediaQuery.matches) {
				setActive(false);
			}
		};

		window.addEventListener('resize', resizeThrottler);

		return () => window.removeEventListener('resize', resizeThrottler);
	}, []);

	useEffect(() => {
		if (isActive) {
			document.querySelector('body').style.overflow = 'hidden';
		} else {
			document.querySelector('body').style.overflow = 'auto';
		}
	}, [isActive]);

	return (
		<header className='bg-black-900 sticky top-0 z-20 xl:py-6 sm:py-4 py-3.5'>
			<div className='flex justify-between items-stretch custom-container'>
				<div className='flex-shrink-0 mr-4 mt-0.5 sm:mt-0'>
					<Link href='/'>
						<a>
							<UnitSpace
								clazz={'w-22 sm:w-32/7 h-9 sm:h-14'}
								fill={'#FAFAFA'}
							/>
						</a>
					</Link>
				</div>
				<div
					className={`mob-menu xl:block flex flex-col justify-between xl:ml-auto ${
						isActive ? 'active' : ''
					}`}>
					<HeaderMenuList isActive={isActive} data={data} />
					<div className='flex justify-center xl:hidden custom-container pb-9'>
						<div
							className='text-default text-base font-semibold'
							role='button'>
							EN
						</div>
						<div className='border-r border-default opacity-25 mx-2.5'></div>
						<div
							className='text-alabaster-400 text-base font-semibold'
							role='button'>
							RU
						</div>
					</div>
				</div>

				<div className='flex items-center flex-shrink-0'>
					<Btn
						clazz={
							'h-9 sm:h-12 xl:h-auto mr-4 xl:mr-5 sm:mr-6 w-32.1 sm:w-auto sm:min-w-11'
						}
						text={'get in touch'}
					/>
					<div className='hidden xl:flex'>
						<div
							className='text-default text-base font-semibold hover:opacity-75 transition-opacity'
							role='button'>
							EN
						</div>
						<div className='border-r border-default opacity-25 mx-2.5'></div>
						<div
							className='text-alabaster-400 text-base font-semibold'
							role='button'>
							RU
						</div>
					</div>
					<div className='xl:hidden block flex-shrink-0 border border-alabaster-500'>
						<svg
							className={`menu-icon w-9 sm:w-12 ${
								isActive ? 'active' : ''
							}`}
							viewBox='0 0 100 100'
							width='48'
							onClick={toggleMenu}>
							<path
								className='menu-icon__top'
								d='m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013'
							/>
							<path
								className='menu-icon__middle'
								d='m 70,50 h -40'
							/>
							<path
								className='menu-icon__bottom'
								d='m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40'
							/>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
