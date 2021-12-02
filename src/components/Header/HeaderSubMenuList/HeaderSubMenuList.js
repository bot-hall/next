import HeaderMenuItem from '../HeaderMenuItem';

const HeaderSubMenuList = ({
	item,
	isActiveSubTitle,
	toggleActiveStyleParrent,
}) => {
	const { subMenu } = item;

	return (
		<div
			// className={`sub-menu xl:translate-x-0 xl:scale-y-0 xl:group-hover:scale-y-100 transition-menu in-expo-custom duration-260 xl:opacity-0 xl:group-hover:opacity-100 origin-top-right xl:origin-top-right w-full xl:w-auto ${
			// 	isActiveSubTitle ? 'translate-x-0 h-screen' : 'translate-x-110-'
			// }`}>
			className={`sub-menu xl:translate-x-0 xl:scale-y-0 origin-top-right w-full xl:w-auto ${
				isActiveSubTitle ? 'translate-x-0 h-screen' : 'translate-x-110-'
			}`}>
			<div className='xl:pt-12 max-w-screen-2xl mx-auto h-full xl:border-t border-alabaster-100'>
				<div className='px-0 xl:px-8 xl:max-w-screen-xl xl:mx-auto flex flex-col items-center h-full justify-between xl:relative'>
					<div className='flex justify-between xl:flex-row flex-col w-full xl:pb-0 pt-3.5'>
						{subMenu.map((i, index) => {
							return (
								<HeaderMenuItem
									key={index}
									subMenuItem={i}
									isActiveSubTitle={isActiveSubTitle}
									toggleActiveStyleParrent={
										toggleActiveStyleParrent
									}
								/>
							);
						})}
					</div>
					<div className='xl:block hidden absolute bottom-0 -z-1'>
						<p className='leading-24 menu-img'>MENU</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderSubMenuList;
