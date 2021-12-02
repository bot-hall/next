import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderWrapper from './SliderWrapper';
import Link from 'next/link';

function BlogSlider() {
	const options = {
		spaceBetween: 24,
		slidesPerView: 1,
	};

	const styles = {
		buttonsContainer:
			'hidden xl:flex justify-between absolute swiper-arrows-container top-10',
		swiperContainer: 'xl:px-12',
	};

	const breakpoints = {
		1290: {
			slidesPerView: 3,
			pagination: false,
		},
		1024: {
			slidesPerView: 3.5,
			pagination: false,
		},
		900: {
			slidesPerView: 3,
			pagination: false,
		},
		690: {
			slidesPerView: 2.5,
			pagination: false,
		},
		600: {
			slidesPerView: 2,
			pagination: false,
		},
		375: {
			slidesPerView: 1.5,
			pagination: false,
		},
		200: {
			pagination: false,
		},
	};

	return (
		<SliderWrapper
			options={options}
			styles={styles}
			breakpoints={breakpoints}>
			<SwiperSlide className='flex items-center xl:justify-center justify-start'>
				<Link href='/'>
					<a>
						<div className='flex flex-start'>
							<div className='square-date'>12 MAY</div>
							<div className='text-sm text-alabaster-400 leading-4 sm:max-w-12'>
								<p className='line-clamp-4'>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. Aenean commodo ligula eget
									dolor.
								</p>
							</div>
						</div>
					</a>
				</Link>
			</SwiperSlide>
			<SwiperSlide className='flex items-center xl:justify-center justify-start'>
				<Link href='/'>
					<a>
						<div className='flex flex-start'>
							<div className='square-date'>12 MAY</div>
							<div className='text-sm text-alabaster-400 leading-4 sm:max-w-12'>
								<p className='line-clamp-4'>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. Aenean commodo ligula eget
									dolor.
								</p>
							</div>
						</div>
					</a>
				</Link>
			</SwiperSlide>
			<SwiperSlide className='flex items-center xl:justify-center justify-start'>
				<Link href='/'>
					<a>
						<div className='flex flex-start'>
							<div className='square-date'>12 MAY</div>
							<div className='text-sm text-alabaster-400 leading-4 sm:max-w-12'>
								<p className='line-clamp-4'>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. Aenean commodo ligula eget
									dolor.
								</p>
							</div>
						</div>
					</a>
				</Link>
			</SwiperSlide>
			<SwiperSlide className='flex items-center xl:justify-center justify-start'>
				<Link href='/'>
					<a>
						<div className='flex flex-start'>
							<div className='square-date'>12 MAY</div>
							<div className='text-sm text-alabaster-400 leading-4 sm:max-w-12'>
								<p className='line-clamp-4'>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. Aenean commodo ligula eget
									dolor.
								</p>
							</div>
						</div>
					</a>
				</Link>
			</SwiperSlide>
		</SliderWrapper>
	);
}

export default BlogSlider;
