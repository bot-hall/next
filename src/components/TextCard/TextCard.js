const TextCard = ({ content, number, inversion = false }) => {
	const calcNumber = () => {
		return number >= 10 ? number : `0${number + 1}`;
	};

	return (
		<div
			className={
				inversion
					? 'white-text-card__container'
					: 'black-text-card__container'
			}>
			<span
				className={
					inversion
						? 'white-text-card__number'
						: 'black-text-card__number'
				}>
				{calcNumber()}
			</span>
			<h5
				className={
					inversion
						? 'white-text-card__title'
						: 'black-text-card__title'
				}>
				{content.title}
			</h5>
			<p
				className={
					inversion
						? 'white-text-card__text'
						: 'black-text-card__text'
				}>
				{content.text}
			</p>
		</div>
	);
};

export default TextCard;
