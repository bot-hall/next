import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeaderSimpleSubMenuItem from '../HeaderSimpleSubMenuItem';
import HomeServicesItem from '../../Home/HomeServicesItem';

const HeaderWorkItem = ({ item, isActive }) => {
	const { title, subMenu } = item;

	const [isActiveSubTitle, setSubTitle] = useState(false);

	const toggleSubTitle = () => {
		const mediaQuery = window.matchMedia('(max-width: 1290px)');
		if (mediaQuery.matches) {
			setSubTitle(!isActiveSubTitle);
		}
	};

	useEffect(() => {
		setSubTitle(false);
	}, [isActive]);

	return (
		<li
			className={`group menu-simple-list ${
				isActiveSubTitle
					? 'absolute w-full border-0 pr-8'
					: 'relative border-b'
			}`}>
			<Link href='/'>
				<a
					className={`xl:group-hover:opacity-75 xl:transition-opacity flex items-center justify-between sub-title xl:flex-row ${
						isActiveSubTitle ? 'flex-row-reverse' : ''
					}`}
					onClick={toggleSubTitle}>
					<div
						className={`text-base sm:text-xl xl:text-base transition-all ${
							isActiveSubTitle ? 'flex-auto text-center' : ''
						}
                    `}>
						{title}
					</div>
					<div
						className={`transition-transform xl:ml-2.5 xl:rotate-0 -rotate-90 xl:translate-x-0 before-arrow ${
							isActiveSubTitle
								? 'rotate-90 translate-x-4'
								: 'translate-x-0'
						}`}></div>
				</a>
			</Link>
			<div className='xl:hidden'>
				<HeaderSimpleSubMenuItem
					subMenu={subMenu}
					isActiveSubTitle={isActiveSubTitle}
				/>
			</div>
			<div className='sub-menu scale-y-0 group-hover:scale-y-100 transition-transform origin-top-right hidden xl:block'>
				<div className='pt-12 border-t border-alabaster-100 max-w-screen-2xl mx-auto h-full'>
					<div className='custom-container flex flex-col items-center h-full justify-between xl:relative'>
						<HomeServicesItem />
						<div className='xl:block hidden absolute bottom-0 -z-1'>
							<p className='leading-24 menu-img'>MENU</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default HeaderWorkItem;
