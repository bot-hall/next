import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeaderSimpleSubMenuItem from '../HeaderSimpleSubMenuItem';

function HeaderSimpleSubMenuList({ data, isActive }) {
	const { title, subMenu } = data;

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
					className={`xl:group-hover:opacity-75 flex items-center justify-between sub-title xl:flex-row ${
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
			<HeaderSimpleSubMenuItem
				subMenu={subMenu}
				isActiveSubTitle={isActiveSubTitle}
			/>
		</li>
	);
}

export default HeaderSimpleSubMenuList;
