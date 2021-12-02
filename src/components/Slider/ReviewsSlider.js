import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderWrapper from './SliderWrapper';

function ReviewsSlider() {
	const options = {
		spaceBetween: 0,
		slidesPerView: 2,
	};

	const breakpoints = {
		1024: {
			slidesPerView: 5,
			pagination: false,
		},
		768: {
			slidesPerView: 4,
			pagination: false,
		},
		640: {
			slidesPerView: 3,
			pagination: false,
		},
	};

	const styles = {
		buttonsContainer:
			'hidden sm:flex justify-between absolute top-45 xl:top-40 swiper-arrows-container',
		swiperContainer: 'sm:px-12',
	};

	return (
		<SliderWrapper
			options={options}
			styles={styles}
			breakpoints={breakpoints}>
			<SwiperSlide className='centered'>
				<a href='' target='_blank' className='group'>
					<span className='reviews-title'>Behance</span>
					<div className='reviews-img-container'>
						<div className='h-9 sm:h-14 w-9 sm:w-14'>
							<img
								src='/assets/images/behance-2.svg'
								className='reviews-img'
							/>
						</div>
						<div className='reviews-img-mask'></div>
					</div>
					<span className='reviews-link'>Go to the website</span>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<a href='' target='_blank' className='group'>
					<span className='reviews-title'>Dribble</span>
					<div className='reviews-img-container'>
						<div className='h-9 sm:h-14 w-9 sm:w-14'>
							<img
								src='/assets/images/db.svg'
								className='reviews-img'
							/>
						</div>
						<div className='reviews-img-mask'></div>
					</div>
					<span className='reviews-link'>Go to the website</span>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<a href='' target='_blank' className='group'>
					<span className='reviews-title'>GoodFirm</span>
					<div className='reviews-img-container'>
						<div className='h-9 sm:h-14 w-9 sm:w-14'>
							<img
								src='/assets/images/gf.svg'
								className='reviews-img'
							/>
						</div>
						<div className='reviews-img-mask'></div>
					</div>
					<span className='reviews-link'>Go to the website</span>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<a href='' target='_blank' className='group'>
					<span className='reviews-title'>Clutch</span>
					<div className='reviews-img-container'>
						<div className='h-9 sm:h-14 w-9 sm:w-14'>
							<img
								src='/assets/images/cl.svg'
								className='reviews-img'
							/>
						</div>
						<div className='reviews-img-mask'></div>
					</div>
					<span className='reviews-link'>Go to the website</span>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<a href='' target='_blank' className='group'>
					<span className='reviews-title'>It-rating</span>
					<div className='reviews-img-container'>
						<div className='h-9 sm:h-14 w-9 sm:w-14'>
							<img
								src='/assets/images/itr.svg'
								className='reviews-img'
							/>
						</div>
						<div className='reviews-img-mask'></div>
					</div>
					<span className='reviews-link'>Go to the website</span>
				</a>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<a href='' target='_blank' className='group'>
					<span className='reviews-title'>Behance</span>
					<div className='reviews-img-container'>
						<div className='h-9 sm:h-14 w-9 sm:w-14'>
							<img
								src='/assets/images/behance-2.svg'
								className='reviews-img'
							/>
						</div>
						<div className='reviews-img-mask'></div>
					</div>
					<span className='reviews-link'>Go to the website</span>
				</a>
			</SwiperSlide>
		</SliderWrapper>
	);
}

export default ReviewsSlider;
