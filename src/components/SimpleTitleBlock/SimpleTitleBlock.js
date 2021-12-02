const SimpleTitleBlock = ({ topTitle, inversion = false }) => {
	return (
		<div
			className={
				inversion
					? 'white-title-block__container'
					: 'black-title-block__container'
			}>
			<h2
				className={
					inversion
						? 'white-title-block__title'
						: 'black-title-block__title'
				}>
				{topTitle.title}
			</h2>
			<p
				className={
					inversion
						? 'white-title-block__text'
						: 'black-title-block__text'
				}>
				{topTitle.text}
			</p>
		</div>
	);
};

export default SimpleTitleBlock;
