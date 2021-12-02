import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderWrapper from './SliderWrapper';
import LinkedIn from '../Icons/LinkedIn';
import Mail from '../Icons/Mail';

function TeamSlider() {
	const options = {
		spaceBetween: 16,
		slidesPerView: 'auto',
	};

	const styles = {
		buttonsContainer:
			'hidden xl:flex justify-between absolute swiper-arrows-container top-45',
		swiperContainer: 'xl:px-12',
	};

	const breakpoints = {
		1290: {
			pagination: false,
		},
		640: {
			spaceBetween: 32,
		},
	};

	return (
		<SliderWrapper
			options={options}
			styles={styles}
			breakpoints={breakpoints}>
			<SwiperSlide className='centered'>
				<div className='flex flex-col sm:flex-row items-center sm:items-start'>
					<div className='h-52 w-44.2 sm:h-73 sm:w-55 lg:w-73 lg:h-98 xl:h-037.5 xl:w-520 sm:mr-7 flex-shrink-0 flex-grow-0 mb-4 sm:mb-0'>
						<img
							src='/assets/images/ceo.jpg'
							className='cover-img'
						/>
					</div>
					<div className='xl:max-w-5/md'>
						<p className='text-center sm:text-left text-1.3 sm:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4'>
							Vladislav Rudas
						</p>
						<p className='text-center sm:text-left text-alabaster-400 text-xl xl:text-2 mb-3 sm:mb-4 xl:mb-9'>
							Founder & CEO
						</p>
						<p className='text-alabaster-400 text-sm sm:text-xl mb-4 sm:mb-6'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus.
						</p>
						<div className='flex items-end'>
							<a
								href='/'
								target='_blank'
								title='LinkedIn'
								className='mr-6'>
								<LinkedIn
									clazz={'w-5/37 h-5/37 opacity-75'}
									fill={'#FAFAFA'}
								/>
							</a>
							<a
								href='mailTo:info@unitspace.top'
								title='Mail'
								className='flex items-end pl-0.5'>
								<Mail
									clazz={'w-6 h-5 mr-3 opacity-75'}
									fill={'#FAFAFA'}
								/>
								<p className='text-alabaster-400 text-base leading-4'>
									info@unitspace.top
								</p>
							</a>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='flex flex-col sm:flex-row items-center sm:items-start'>
					<div className='h-52 w-44.2 sm:h-73 sm:w-55 lg:w-73 lg:h-98 xl:h-037.5 xl:w-520 sm:mr-7 flex-shrink-0 flex-grow-0 mb-4 sm:mb-0'>
						<img
							src='/assets/images/ceo.jpg'
							className='cover-img'
						/>
					</div>
					<div className='xl:max-w-5/md'>
						<p className='text-center sm:text-left text-1.3 sm:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4'>
							Vladislav Rudas
						</p>
						<p className='text-center sm:text-left text-alabaster-400 text-xl xl:text-2 mb-3 sm:mb-4 xl:mb-9'>
							Founder & CEO
						</p>
						<p className='text-alabaster-400 text-sm sm:text-xl mb-4 sm:mb-6'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus. Donec
							quam felis, ultricies nec, pellentesque eu, pretium
							quis, sem.
						</p>
						<div className='flex items-end'>
							<a
								href='/'
								target='_blank'
								title='LinkedIn'
								className='mr-6'>
								<LinkedIn
									clazz={'w-5/37 h-5/37 opacity-75'}
									fill={'#FAFAFA'}
								/>
							</a>
							<a
								href='mailTo:info@unitspace.top'
								title='Mail'
								className='flex items-end pl-0.5'>
								<Mail
									clazz={'w-6 h-5 mr-3 opacity-75'}
									fill={'#FAFAFA'}
								/>
								<p className='text-alabaster-400 text-base leading-4'>
									info@unitspace.top
								</p>
							</a>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='centered'>
				<div className='flex flex-col sm:flex-row items-center sm:items-start'>
					<div className='h-52 w-44.2 sm:h-73 sm:w-55 lg:w-73 lg:h-98 xl:h-037.5 xl:w-520 sm:mr-7 flex-shrink-0 flex-grow-0 mb-4 sm:mb-0'>
						<img
							src='/assets/images/ceo.jpg'
							className='cover-img'
						/>
					</div>
					<div className='xl:max-w-5/md'>
						<p className='text-center sm:text-left text-1.3 sm:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4'>
							Vladislav Rudas
						</p>
						<p className='text-center sm:text-left text-alabaster-400 text-xl xl:text-2 mb-3 sm:mb-4 xl:mb-9'>
							Founder & CEO
						</p>
						<p className='text-alabaster-400 text-sm sm:text-xl mb-4 sm:mb-6'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus. Donec
							quam felis, ultricies nec, pellentesque eu, pretium
							quis, sem.
						</p>
						<div className='flex items-end'>
							<a
								href='/'
								target='_blank'
								title='LinkedIn'
								className='mr-6'>
								<LinkedIn
									clazz={'w-5/37 h-5/37 opacity-75'}
									fill={'#FAFAFA'}
								/>
							</a>
							<a
								href='mailTo:info@unitspace.top'
								title='Mail'
								className='flex items-end pl-0.5'>
								<Mail
									clazz={'w-6 h-5 mr-3 opacity-75'}
									fill={'#FAFAFA'}
								/>
								<p className='text-alabaster-400 text-base leading-4'>
									info@unitspace.top
								</p>
							</a>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</SliderWrapper>
	);
}

export default TeamSlider;
