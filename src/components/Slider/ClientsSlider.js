import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderWrapper from './SliderWrapper';

function ClientsSlider() {
	const options = {
		spaceBetween: 0,
		slidesPerView: 2,
	};

	const breakpoints = {
		768: {
			slidesPerView: 3,
			pagination: false,
		},
		640: {
			pagination: false,
		},
	};

	const styles = {
		buttonsContainer:
			'justify-between absolute swiper-arrows-container top-1/3 sm:flex hidden',
		swiperContainer: 'sm:px-12',
	};

	return (
		<SliderWrapper
			options={options}
			styles={styles}
			breakpoints={breakpoints}>
			<SwiperSlide className='centered'>
				<div className='max-w-15.6 h-24 sm:h-32.1 relative'>
					<img
						src='/assets/images/hneu.png'
						className='cover-img'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='max-w-15.6 h-24 sm:h-32.1'>
					<img
						src='/assets/images/monero.png'
						className='cover-img'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='max-w-15.6 h-24 sm:h-32.1'>
					<img
						src='/assets/images/microsoft.png'
						className='cover-img'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='max-w-15.6 h-24 md:h-32.1'>
					<img
						src='/assets/images/hneu.png'
						className='cover-img'
						alt=''
					/>
				</div>
			</SwiperSlide>
		</SliderWrapper>
	);
}

export default ClientsSlider;
