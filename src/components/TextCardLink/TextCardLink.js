import Link from 'next/link';
import ArrowFill from '../Icons/ArrowFill';

const TextCard = ({ content, number, inversion = false }) => {
	const calcNumber = () => {
		return number >= 10 ? number : `0${number + 1}`;
	};

	return (
		<div
			className={
				inversion
					? 'border-b border-default flex flex-col'
					: 'border-b border-black-900 flex flex-col'
			}>
			<span
				className={
					inversion
						? 'sm:mb-2 block text-alabaster-250 sm:text-2xl text-base'
						: 'sm:mb-2 block text-black-250 sm:text-2xl text-base'
				}>
				{calcNumber()}
			</span>
			<h5
				className={
					inversion
						? 'sm:mb-2 text-xl sm:text-2 leading-9 sm:leading-38 text-default'
						: 'sm:mb-2 text-xl sm:text-2 leading-9 sm:leading-38 text-black-900'
				}>
				{content.title}
			</h5>
			<p
				className={
					inversion
						? 'mb-4 xl:mb-6 text-alabaster-400'
						: 'mb-4 xl:mb-6 text-black-750'
				}>
				{content.text}
			</p>
			<div className='mb-4 mt-auto'>
				<Link href='/'>
					<a className='flex items-center'>
						<p className='uppercase text-sm leading-4'>
							learn more
						</p>
						<ArrowFill
							clazz={'w-3 h-2 ml-4 mb-0.5'}
							fill={'#000000'}
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default TextCard;
