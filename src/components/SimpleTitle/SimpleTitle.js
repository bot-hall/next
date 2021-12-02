const SimpleTitle = ({ title, clazz, inversion = false }) => {
	return (
		<div
			className={`${
				clazz ? clazz : ''
			} pb-6 mb-9 sm:mb-12 xl:mb-16 border-b ${
				inversion ? 'border-default' : 'border-black-900'
			}`}>
			<h5
				className={`uppercase font-bold text-1.3 sm:text-5xl ${
					inversion ? 'text-default' : 'text-black-900'
				}`}>
				{title}
			</h5>
		</div>
	);
};

export default SimpleTitle;
