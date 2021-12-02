const ArrowFill = ({ clazz, fill }) => {
	return (
		<svg
			width='4'
			height='8'
			viewBox='0 0 4 8'
			fill='none'
			className={clazz}>
			<path d='M4 4L0 8V0L4 4Z' fill={fill} />
		</svg>
	);
};

export default ArrowFill;
