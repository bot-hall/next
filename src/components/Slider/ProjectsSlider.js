import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderWrapper from './SliderWrapper';

function ProjectsSlider({ inversion = false }) {
	const options = {
		spaceBetween: 15,
		slidesPerView: 'auto',
	};

	const styles = {
		buttonsContainer: 'hidden',
		swiperContainer: '',
	};

	const breakpoints = {
		640: {
			spaceBetween: 14,
			pagination: false,
		},
		200: {
			pagination: false,
		},
	};

	const paletteIcon = () => {
		return inversion
			? '/assets/icons/arrow-down-black.svg'
			: '/assets/icons/arrow-down.svg';
	};

	return (
		<SliderWrapper
			options={options}
			styles={styles}
			breakpoints={breakpoints}>
			<SwiperSlide className='centered w-66i sm:w-630i'>
				<a href='' target='_blank' className='group w-full md:ml-4'>
					<div className='h-53 sm:h-472 mb-4 md:mt-4 sm:mb-6'>
						<img
							src='/assets/images/rad.jpg'
							className='cover-img md:group-hover:shadow transition'
						/>
					</div>
					<div
						className={`flex flex-col pt-4 border-t ${
							inversion
								? 'text-black-900 border-black-900'
								: 'text-default border-default'
						}`}>
						<p
							className={`text-base sm:text-xl mb-3 ${
								inversion
									? 'text-black-750'
									: 'text-alabaster-300'
							}`}>
							Сomplete development process
						</p>
						<span className='text-xl sm:text-2'>
							Raduga Market, Marketplace
						</span>
						<div className='mt-3.5 sm:mt-4 text-xs uppercase xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center'>
							<span className='text-sm'>
								more about the project
							</span>
							<div className='h-1 w-2 ml-5 -rotate-90'>
								<img
									src={paletteIcon()}
									className='cover-img'
								/>
							</div>
						</div>
					</div>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered w-66i sm:w-630i'>
				<a href='' target='_blank' className='group w-full md:ml-4'>
					<div className='h-53 sm:h-472 md:mt-4 mb-4 sm:mb-6'>
						<img
							src='/assets/images/nu.jpg'
							className='cover-img md:group-hover:shadow transition'
						/>
					</div>
					<div
						className={`flex flex-col pt-4 border-t ${
							inversion
								? 'text-black-900 border-black-900'
								: 'text-default border-default'
						}`}>
						<p
							className={`text-base sm:text-xl mb-3 ${
								inversion
									? 'text-black-750'
									: 'text-alabaster-300'
							}`}>
							Сomplete development process
						</p>
						<span className='text-xl sm:text-2'>
							NUOT, Online Store
						</span>
						<div className='mt-3.5 sm:mt-4 text-xs uppercase xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center'>
							<span className='text-sm'>
								more about the project
							</span>
							<div className='h-1 w-2 ml-5 -rotate-90'>
								<img
									src={paletteIcon()}
									className='cover-img'
								/>
							</div>
						</div>
					</div>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered w-66i sm:w-630i'>
				<a href='' target='_blank' className='group w-full md:ml-4'>
					<div className='h-53 sm:h-472 md:mt-4 mb-4 sm:mb-6'>
						<img
							src='/assets/images/one.jpg'
							className='cover-img md:group-hover:shadow transition'
						/>
					</div>
					<div
						className={`flex flex-col pt-4 border-t ${
							inversion
								? 'text-black-900 border-black-900'
								: 'text-default border-default'
						}`}>
						<p
							className={`text-base sm:text-xl mb-3 ${
								inversion
									? 'text-black-750'
									: 'text-alabaster-300'
							}`}>
							UX/UI Design
						</p>
						<span className='text-xl sm:text-2'>
							ONE&ONLY, Landing
						</span>
						<div className='mt-3.5 sm:mt-4 text-xs uppercase xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center'>
							<span className='text:sm'>
								more about the project
							</span>
							<div className='h-1 w-2 ml-5 -rotate-90'>
								<img
									src={paletteIcon()}
									className='cover-img'
								/>
							</div>
						</div>
					</div>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered w-66i sm:w-630i'>
				<a href='' target='_blank' className='group w-full md:ml-4'>
					<div className='h-53 sm:h-472 md:mt-4 mb-4 sm:mb-6'>
						<img
							src='/assets/images/rad.jpg'
							className='cover-img md:group-hover:shadow transition'
						/>
					</div>
					<div
						className={`flex flex-col pt-4 border-t ${
							inversion
								? 'text-black-900 border-black-900'
								: 'text-default border-default'
						}`}>
						<p
							className={`text-base sm:text-xl mb-3 ${
								inversion
									? 'text-black-750'
									: 'text-alabaster-300'
							}`}>
							Сomplete development process
						</p>
						<span className='text-xl sm:text-2'>
							Raduga Market, Marketplace
						</span>
						<div className='mt-3.5 sm:mt-4 text-xs uppercase xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center'>
							<span className='text-sm'>
								more about the project
							</span>
							<div className='h-1 w-2 ml-5 -rotate-90'>
								<img
									src={paletteIcon()}
									className='cover-img'
								/>
							</div>
						</div>
					</div>
				</a>
			</SwiperSlide>
		</SliderWrapper>
	);
}

export default ProjectsSlider;
