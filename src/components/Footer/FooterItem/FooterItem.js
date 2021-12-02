import Link from 'next/link';

function FooterItem({ link }) {
	return (
		<li className='mb-3'>
			<Link href='/'>
				<a className='simple-link text-base sm:text-xl xl:text-base'>
					{link.text}
				</a>
			</Link>
		</li>
	);
}

export default FooterItem;
