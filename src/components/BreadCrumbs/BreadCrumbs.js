import Link from 'next/link';
//import { useEffect } from 'react';

const BreadCrumbs = () => {
	// const breadCrumbsListener = () => {
	// 	let mediaQuery = window.matchMedia('(min-width: 640px)');
	// 	if (mediaQuery.matches) {
	// 		console.log(e);
	// 	}
	// };

	return (
		<div className='uppercase pt-4 sm:pt-6 xl:pt-9 md:mb-8'>
			<Link href='/'>
				<a className='text-xs sm:text-base opacity-50'>Main Page</a>
			</Link>
			<Link href='/'>
				<a className='text-xs sm:text-base'>/ Front-End Development</a>
			</Link>
		</div>
	);
};

export default BreadCrumbs;
