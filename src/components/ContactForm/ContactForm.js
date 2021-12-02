import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import Clip from '../Icons/Clip';
import Btn from '../Btn';
import Checkbox from '../Icons/Checkbox';

const ContactForm = ({ inversion = false }) => {
	const [fileTitle, setFileTitle] = useState('Attach Files');
	const [fileList, setFileList] = useState([]);
	const [errorsList, setErrorsList] = useState({});

	const fileInput = React.useRef(null);

	const addFiles = (e) => {
		fileInput.current.click();
	};

	const currentState = (el) => {
		switch (el) {
			case 'border':
				if (inversion && !errorsList?.filesInput) {
					return 'border-black-tr';
				} else if (!inversion && !errorsList?.filesInput) {
					return 'border-white-tr';
				} else if (errorsList?.filesInput) {
					return 'border-error';
				}

			case 'text':
				if (inversion && !errorsList?.filesInput) {
					return 'text-black-tr';
				} else if (!inversion && !errorsList?.filesInput) {
					return 'text-white-tr';
				} else if (errorsList?.filesInput) {
					return 'text-error';
				}

			default:
				break;
		}
	};

	useEffect(() => {
		currentState();
	}, [errorsList]);

	const filesHandling = (e) => {
		setErrorsList({
			...errorsList,
			filesInput: false,
		});

		let files = e.target.files;

		switch (true) {
			case files.length == 1:
				setFileTitle(e.target.files[0].name);
				break;

			case files.length > 1 && files.length <= 5:
				setFileTitle(`${files.length} files loaded`);
				break;

			// case files.length == 5:
			// 	setFileTitle('Maximum files(5) loadded');
			// 	break;

			case files.length > 5:
				setFileTitle('Limit exceeded');
				setErrorsList({
					...errorsList,
					filesInput: true,
				});
				break;

			default:
				break;
		}
	};

	// const uploadFile = (file) => {
	// 	// // файла <5 Мб
	// 	// if (file.size > 5 * 1024 * 1024) {
	// 	//     alert('Файл должен быть не более 5 МБ.');
	// 	//     return;
	// 	// }

	return (
		<form className=''>
			<div
				className={`${
					inversion ? 'border-black-500' : 'border-alabaster-300'
				} relative border-b simple-input mb-20 mt-8`}>
				<input
					autoComplete='off'
					type='text'
					name='name'
					placeholder=' '
					required
					className={`block w-full appearance-none focus:outline-none bg-transparent pb-1 ${
						inversion ? 'text-black-900 ' : 'text-default'
					}`}
				/>
				<label
					htmlFor='name'
					className={`absolute top-0 transition-all origin-0 pointer-events-none ${
						inversion ? 'text-black-tr' : 'text-white-tr'
					}`}>
					Name*
				</label>
			</div>
			<div
				className={`relative border-b simple-input mb-20 ${
					inversion ? 'border-black-500' : 'border-alabaster-300'
				}`}>
				<input
					autoComplete='off'
					type='email'
					name='email'
					placeholder=' '
					required
					className={`block w-full appearance-none focus:outline-none bg-transparent pb-1 ${
						inversion ? 'text-black-900 ' : 'text-default'
					}`}
				/>
				<label
					htmlFor='email'
					className={`absolute top-0 transition-all origin-0 pointer-events-none ${
						inversion ? 'text-black-tr' : 'text-white-tr'
					}`}>
					Email*
				</label>
			</div>
			<div
				className={`relative border-b  simple-input mb-20 ${
					inversion ? 'border-black-500' : 'border-alabaster-300'
				}`}>
				<input
					autoComplete='off'
					type='phone'
					name='phone'
					placeholder=' '
					className={`block w-full appearance-none focus:outline-none bg-transparent pb-1 ${
						inversion ? 'text-black-900 ' : 'text-default'
					}`}
				/>
				<label
					htmlFor='phone'
					className={`absolute top-0 text-alabaster-300 transition-all origin-0 pointer-events-none ${
						inversion ? 'text-black-tr' : 'text-white-tr'
					}`}>
					Phone
				</label>
			</div>
			<div className='flex justify-between items-start w-full mb-5 xl:flex-row flex-col'>
				<div
					className={`relative border-b simple-input xl:mr-7.8 w-full mb-20 xl:mb-0 ${
						inversion ? 'border-black-500' : 'border-alabaster-300'
					}`}>
					<input
						autoComplete='off'
						type='text'
						name='message'
						placeholder=' '
						className={`block w-full appearance-none focus:outline-none bg-transparent pb-1 ${
							inversion ? 'text-black-900 ' : 'text-default'
						}`}
					/>
					<label
						htmlFor='message'
						className={`absolute top-0 transition-all origin-0 pointer-events-none ${
							inversion ? 'text-black-tr' : 'text-white-tr'
						}`}>
						Message
					</label>
				</div>
				<div className='w-full xl:w-45 xl:flex-shrink-0'>
					<div
						className={`relative border-b pb-1 ${currentState(
							'border'
						)}`}>
						<input
							multiple
							type='file'
							name='file'
							accept='.pdf, .doc, .docx, .rtf, .ppt, .pptx'
							className='hidden'
							ref={fileInput}
							onChange={filesHandling}
						/>
						<label
							htmlFor='file'
							className={`flex justify-between cursor-pointer ${
								inversion ? 'text-black-tr' : 'text-white-tr'
							}`}
							onClick={addFiles}>
							<p className='truncate mr-2'>{fileTitle}</p>
							<div>
								<Clip
									clazz={`w-5/37 h-5/37`}
									fill={`${
										inversion ? '#808080' : '#FAFAFA50'
									}`}
								/>
							</div>
						</label>
					</div>
					<p
						className={`text-sm leading-4 pt-2 ${currentState(
							'text'
						)}`}>
						Maximum 5: pdf, doc, docx, rtf, ppt, pptx
					</p>
				</div>
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex mr-4 items-center relative'>
					<input
						type='checkbox'
						name='policy'
						className='mr-4 opacity-0 absolute h-5 w-5 cursor-pointer'
						required
					/>
					<div
						className={`w-5 h-5 flex flex-shrink-0 justify-center items-center mr-4 ${
							inversion ? 'border border-black-900' : 'bg-default'
						}`}>
						<Checkbox
							clazz={
								'fill-current hidden w-3 h-3 text-black-900 pointer-events-none'
							}
							fill={`${inversion ? '#FAFAFA' : '#000000'}`}
						/>
					</div>
					<label
						htmlFor='policy'
						className={`text-base ${
							inversion ? 'text-black-900' : 'text-default'
						}`}>
						I agree to the{' '}
						<Link href='/'>
							<a className='underline'>Privacy Policy</a>
						</Link>
					</label>
				</div>
				<Btn
					type={'button'}
					clazz={'w-80.6'}
					text={'submit'}
					inversion={inversion}
				/>
			</div>
		</form>
	);
};

export default ContactForm;
