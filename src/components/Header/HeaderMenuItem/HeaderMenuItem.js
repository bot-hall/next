import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderSimpleLink from '../HeaderSimpleLink';

const HeaderMenuItem = ({
	isActiveSubTitle,
	toggleActiveStyleParrent,
	subMenuItem,
}) => {
	const { subTitle, links } = subMenuItem;

	const [isActiveSubMenu, setSubMenu] = useState(false);

	const toggleSubMenu = () => {
		const mediaQuery = window.matchMedia('(max-width: 1290px)');
		if (mediaQuery.matches) {
			setSubMenu(!isActiveSubMenu);
			toggleActiveStyleParrent();
		}
	};

	useEffect(() => {
		setSubMenu(false);
	}, [isActiveSubTitle]);

	return (
		<div
			className={`xl:px-9 last:pr-0 first:pl-0 xl:pt-0 xl:border-0 border-b border-alabaster-100 pb-3 mb-3 xl:pb-0 xl:mb-0 ${
				isActiveSubMenu ? 'sub-menu-absolute' : ''
			}`}>
			<Link href='/'>
				<a
					className={`flex items-center justify-between sub-title ${
						isActiveSubMenu ? 'flex-row-reverse' : ''
					}`}
					onClick={toggleSubMenu}>
					<p
						className={`xl:hover:opacity-75 text-base sm:text-xl xl:text-base xl:mb-4 transition-all ${
							isActiveSubMenu ? 'flex-auto text-center mb-3' : ''
						}
                    `}>
						{subTitle}
					</p>
					<div
						className={`transition-transform xl:ml-2.5 xl:rotate-0 -rotate-90 before-arrow xl:hidden block ${
							isActiveSubMenu
								? 'rotate-90 translate-x-4 mb-3'
								: ''
						}`}></div>
				</a>
			</Link>
			<ul
				className={`overflow-y-auto absolute xl:translate-x-0 transition-transform origin-top-right w-full xl:w-auto h-full xl:h-auto xl:relative xl:bg-transparent bg-black-900 xl:border-0 border-t border-alabaster-100 pt-3.5 ${
					isActiveSubMenu
						? 'translate-x-0 relative h-screen'
						: 'translate-x-110-'
				}`}>
				{links.map((i, index) => {
					return <HeaderSimpleLink key={index} title={i.text} />;
				})}
			</ul>
		</div>
	);
};

export default HeaderMenuItem;
