const Mail = ({ clazz, fill }) => {
	return (
		<svg
			className={clazz}
			width='28'
			height='29'
			viewBox='0 0 28 29'
			fill='none'>
			<path
				d='M23.6 6.00195H4.4C3.76348 6.00195 3.15303 6.25481 2.70294 6.7049C2.25286 7.15498 2 7.76543 2 8.40195V22.802C2 23.4385 2.25286 24.0489 2.70294 24.499C3.15303 24.9491 3.76348 25.202 4.4 25.202H23.6C24.2365 25.202 24.847 24.9491 25.2971 24.499C25.7471 24.0489 26 23.4385 26 22.802V8.40195C26 7.76543 25.7471 7.15498 25.2971 6.7049C24.847 6.25481 24.2365 6.00195 23.6 6.00195V6.00195ZM23.6 11.642L14 18.0428L4.4 11.642V8.75835L14 15.158L23.6 8.75835V11.642Z'
				fill={fill}
			/>
		</svg>
	);
};

export default Mail;