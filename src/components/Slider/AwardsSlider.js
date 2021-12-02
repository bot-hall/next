import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderWrapper from './SliderWrapper';

function AwardsSlider() {
	const options = {
		spaceBetween: 0,
		slidesPerView: 3,
	};

	const styles = {
		buttonsContainer:
			'hidden sm:flex justify-between absolute swiper-arrows-container top-40',
		swiperContainer: 'sm:px-12',
	};

	const breakpoints = {
		1290: {
			slidesPerView: 6,
			pagination: false,
		},
		1024: {
			slidesPerView: 5,
			pagination: false,
		},
		768: {
			slidesPerView: 3,
			pagination: false,
		},
		640: {
			slidesPerView: 3,
			pagination: false,
		},
	};

	return (
		<SliderWrapper
			options={options}
			styles={styles}
			breakpoints={breakpoints}>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa1.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa1.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa3.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa3.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa3.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa4.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa1.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa1.png' className='cover-img' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='h-16.3 sm:h-32 my-6'>
					<img src='/assets/images/awa1.png' className='cover-img' />
				</div>
			</SwiperSlide>
		</SliderWrapper>
	);
}

export default AwardsSlider;
