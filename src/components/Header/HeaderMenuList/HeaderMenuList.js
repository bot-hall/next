import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeaderSubMenuList from '../HeaderSubMenuList';
import HeaderSimpleSubMenuList from '../HeaderSimpleSubMenuList';
import HeaderSimpleItem from '../HeaderSimpleItem';
import HeaderWorkItem from '../HeaderWorkItem';

const HeaderMenuList = ({ data, isActive }) => {
	const {
		blog,
		careers,
		company,
		contacts,
		expertise,
		howWeWork,
		industries,
	} = data;

	const [isActiveSubTitle, setSubTitle] = useState(false);
	const [isActiveStyle, setActiveStyle] = useState(false);

	const toggleSubTitle = () => {
		const mediaQuery = window.matchMedia('(max-width: 1290px)');
		if (mediaQuery.matches) {
			setSubTitle(!isActiveSubTitle);
		}
	};

	const toggleActiveStyle = () => {
		const mediaQuery = window.matchMedia('(max-width: 1290px)');
		if (mediaQuery.matches) {
			setActiveStyle(!isActiveStyle);
		}
	};

	useEffect(() => {
		setSubTitle(false);
	}, [isActive]);

	return (
		<nav className='xl:ml-auto border-t border-alabaster-100 xl:border-0 xl:h-full pt-7 sm:pt-9 xl:pt-0'>
			<ul className='flex items-stretch h-full text-default xl:flex-row flex-col px-4 md:px-8 xl:px-0'>
				<li className='group menu-group-list'>
					<Link href='/'>
						<a
							className={`xl:group-hover:opacity-75 xl:transition-opacity flex items-center justify-between sub-title xl:flex-row ${
								isActiveSubTitle ? 'flex-row-reverse' : ''
							}`}
							onClick={toggleSubTitle}>
							<div
								className={`text-base sm:text-xl xl:text-base transition-all ${
									isActiveSubTitle
										? 'flex-auto text-center'
										: ''
								}
		                    `}>
								{expertise.title}
							</div>
							<div
								className={`transition-transform xl:ml-2.5 xl:rotate-0 -rotate-90 xl:translate-x-0 before-arrow ${
									isActiveSubTitle
										? 'rotate-90 translate-x-4'
										: 'translate-x-0'
								} ${
									isActiveStyle ? 'translate-x-0' : ''
								}`}></div>
						</a>
					</Link>
					<HeaderSubMenuList
						item={expertise}
						isActiveSubTitle={isActiveSubTitle}
						toggleActiveStyleParrent={toggleActiveStyle}
					/>
				</li>
				<HeaderWorkItem item={howWeWork} isActive={isActive} />
				<HeaderSimpleSubMenuList
					data={industries}
					isActive={isActive}
				/>
				<HeaderSimpleSubMenuList data={company} isActive={isActive} />
				<li className='xl:mr-8 flex items-center'>
					<HeaderSimpleItem style={'xl:mb-0'} item={blog} />
				</li>
				<li className='xl:mr-8 flex items-center'>
					<HeaderSimpleItem style={'xl:mb-0'} item={careers} />
				</li>
				<li className='xl:mr-8 flex items-center'>
					<HeaderSimpleItem style={'xl:mb-0'} item={contacts} />
				</li>
			</ul>
		</nav>
	);
};

export default HeaderMenuList;
