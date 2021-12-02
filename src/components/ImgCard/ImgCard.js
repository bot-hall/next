import Link from 'next/dist/client/link';
import ArrowFill from '../Icons/ArrowFill';

const ImgCard = ({ content, number }) => {
	const isList = (list) => {
		if (list) {
			return (
				<ul className='list-inside text-black-750 mb-6'>
					{list.map((i, index) => {
						return (
							<li key={index} className='list-disc'>
								{i}
							</li>
						);
					})}
				</ul>
			);
		}
	};

	const isLink = (link) => {
		if (link) {
			return (
				<div className='mb-4 mt-auto'>
					<Link href='/'>
						<a className='flex items-center'>
							<p className='uppercase text-sm leading-4'>
								{link.text}
							</p>
							<ArrowFill
								clazz={'w-3 h-2 ml-4 mb-0.5'}
								fill={'#000000'}
							/>
						</a>
					</Link>
				</div>
			);
		}
	};

	const calcNumber = () => {
		return number >= 10 ? number : `0${number + 1}`;
	};

	return (
		<div className='img-card'>
			<div className='img-card__text-container'>
				<span className='black-text-card__number'>{calcNumber()}</span>
				<h5 className='black-text-card__title'>{content.title}</h5>
				<p className='mb-6 text-black-750'>{content.text}</p>
				{isList(content?.list)}
				{isLink(content?.link)}
			</div>
			<div className='img-card__img-container'>
				<img src={content.img} className='cover-img' />
			</div>
		</div>
	);
};

export default ImgCard;
