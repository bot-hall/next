import ContactForm from '../ContactForm';
import Planets from '../Icons/Planets';
import Btn from '../Btn';

const FormBlock = ({ inversion = false }) => {
	return (
		<div className='custom-container section-container'>
			<div
				className={`${
					inversion ? 'border-black-900' : 'border-default'
				} border-b pb-6 mb-9 sm:mb-12 xl:mb-16`}>
				<h5
					className={`${
						inversion ? 'text-black-900' : 'text-default'
					} uppercase font-bold text-1.3 sm:text-5xl`}>
					Lets Create something together
				</h5>
				<Btn
					clazz={'block sm:hidden w-full'}
					text={'get in touch'}
					inversion={inversion}
				/>
			</div>
			<div className='hidden sm:flex justify-between pt-3'>
				<div className='xl:mr-33 w-full'>
					<ContactForm inversion={inversion} />
				</div>
				<div className='hidden xl:block'>
					<Planets
						clazz={`w-520 h-508`}
						fill={`${inversion ? '#E6E6E6' : '#FAFAFA25'}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default FormBlock;
