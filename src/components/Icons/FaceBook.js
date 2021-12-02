const FaceBook = ({ clazz, fill }) => {
	return (
		<svg
			className={clazz}
			width='28'
			height='29'
			viewBox='0 0 28 29'
			fill='none'>
			<g clipPath='url(#clip0)'>
				<path
					d='M11.308 25.002V14.6789H8.5V10.9621H11.308V7.7875C11.308 5.29286 12.9668 3.00195 16.7888 3.00195C18.3363 3.00195 19.4806 3.14616 19.4806 3.14616L19.3904 6.61702C19.3904 6.61702 18.2234 6.60597 16.95 6.60597C15.5717 6.60597 15.3508 7.2234 15.3508 8.24818V10.9621H19.5L19.3195 14.6789H15.3508V25.002H11.308Z'
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id='clip0'>
					<rect
						width='11'
						height='22'
						fill='white'
						transform='translate(8.5 3.00195)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default FaceBook;
