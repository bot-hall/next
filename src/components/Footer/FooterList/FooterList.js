import { useState, useEffect } from 'react';
import FooterItem from '../FooterItem';
import TinyCollapse from 'react-tiny-collapse';

function FooterList({ list }) {
	const [isActive, setActive] = useState(true);

	const toggleFooterList = () => {
		let mediaQuery = window.matchMedia('(max-width: 1289px)');
		if (mediaQuery.matches) {
			setActive(!isActive);
		}
	};

	useEffect(() => {
		let mediaQuery = window.matchMedia('(min-width: 1290px)');

		mediaQuery.matches ? setActive(true) : setActive(false);

		const resizeThrottler = () => {
			mediaQuery.matches ? setActive(true) : setActive(false);
		};

		window.addEventListener('resize', resizeThrottler);

		return () => window.removeEventListener('resize', resizeThrottler);
	}, []);

	return (
		<div>
			<div
				className='sub-title footer-title-container'
				onClick={toggleFooterList}>
				<p className='text-base sm:text-xl xl:text-base'>
					{list.title}
				</p>
				<div
					className={`before-arrow footer-arrow ${
						isActive ? 'rotate-180' : ''
					}`}></div>
			</div>
			<TinyCollapse
				isOpen={isActive}
				className='xl:max-h-full overflow-hidden'>
				<ul className='xl:pb-0 pb-2'>
					{list.links.map((i, index) => {
						return <FooterItem key={index} link={i} />;
					})}
				</ul>
			</TinyCollapse>
		</div>
	);
}

export default FooterList;
