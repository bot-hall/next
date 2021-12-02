import Link from 'next/link';

const HeaderSimpleLink = ({ title }) => {
	return (
		<li className='xl:border-0 border-b border-alabaster-100 pb-3 mb-3 xl:pb-0 xl:mb-3'>
			<Link href='/'>
				<a className='simple-link text-base sm:text-xl xl:text-base'>
					<p>{title}</p>
				</a>
			</Link>
		</li>
	);
};

export default HeaderSimpleLink;
