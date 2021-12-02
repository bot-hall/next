import Link from 'next/link';

const HeaderSimpleItem = ({ item, style }) => {
	return (
		<div className='xl:px-9 last:pr-0 first:pl-0 xl:pt-0 xl:border-0 border-b border-alabaster-100 pb-3 mb-3 xl:pb-0 xl:mb-0 w-full xl:w-auto'>
			<Link href='/'>
				<a className='sub-title'>
					<p
						className={`xl:hover:opacity-75 transition-opacity text-base sm:text-xl xl:text-base ${style}`}>
						{item.subTitle}
					</p>
				</a>
			</Link>
		</div>
	);
};

export default HeaderSimpleItem;
