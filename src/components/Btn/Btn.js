const Btn = ({ clazz, text, type = 'button', inversion = false }) => {
	return (
		<button
			type={type}
			className={`${inversion ? 'btn-white' : 'btn-black'} ${clazz}`}>
			{text}
		</button>
	);
};

export default Btn;
