import React from 'react';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

function SliderWrapper(props) {
	const { options, styles, breakpoints } = props;

	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	return (
		<>
			<div className={styles.buttonsContainer}>
				<div
					className='cursor-pointer swiper-custom-prev'
					ref={navigationPrevRef}>
					<img src='/assets/icons/slider-prev.svg' alt='prev' />
				</div>
				<div
					className='cursor-pointer swiper-custom-next'
					ref={navigationNextRef}>
					<img src='/assets/icons/slider-next.svg' alt='next' />
				</div>
			</div>
			<div className={styles.swiperContainer}>
				<Swiper
					className='static-i'
					modules={[Navigation]}
					spaceBetween={options.spaceBetween}
					slidesPerView={options.slidesPerView}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					pagination={true}
					// pagination={{
					// 	bulletClass: options.bulletClass,
					// 	//el: `swiper-container swiper-container-testClass`,
					// }}
					breakpoints={breakpoints}
					onSwiper={(swiper) => {
						setTimeout(() => {
							swiper.params.navigation.prevEl =
								navigationPrevRef.current;
							swiper.params.navigation.nextEl =
								navigationNextRef.current;

							// Re-init navigation
							swiper.navigation.destroy();
							swiper.navigation.init();
							swiper.navigation.update();
						});
					}}>
					{props.children}
				</Swiper>
			</div>
		</>
	);
}

export default SliderWrapper;
