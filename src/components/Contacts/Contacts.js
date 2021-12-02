import BreadCrumbs from '../BreadCrumbs';
import FormBlock from '../FormBlock';
import Link from 'next/dist/client/link';
import WhatsApp from '../Icons/WhatsApp';
import Viber from '../Icons/Viber';
import Telega from '../Icons/Telega';
import Btn from '../Btn';

const data = {
	title: 'Contacts',
	description:
		'Let’s communicate! Don’t hesitate to contact us with your projects, ideas, and questions. Our business developers will help you with the choice.',
};

const Contacts = () => {
	return (
		<>
			<section className='bg-black-900 careers-section'>
				<div className='border-t border-alabaster-100 max-w-screen-2xl mx-auto h-full'>
					<div className='custom-container text-default flex flex-col justify-between h-full'>
						<BreadCrumbs />
						<div className='flex flex-col justify-center h-full'>
							<div className='w-full max-w-46 mb-0 sm:mb-96 lg:mb-28 xl:mt-18 lg:mt-0 sm:mt-40 mt-0 sm-land:mb-52 sm-land:mt-16 2xl-land:mb-28 2xl-land:mt-18'>
								<div className='max-w-44 h-full sm:h-auto flex flex-col justify-center'>
									<div className='flex flex-col justify-center h-first-section sm:h-auto'>
										<h1 className='text-1.7 leading-8 sm:text-5.5xl sm:leading-66 uppercase mb-6'>
											{data.title}
										</h1>
										<p className='mb-9 sm:mb-6 xl:mb-12 leading-6 sm:leading-7 text-alabaster-400'>
											{data.description}
										</p>
										<div className='border-b border-alabaster-500 pb-6 xl:pb-12 mb-9 sm:mb-12'>
											<Btn
												clazz={'min-w-11'}
												text={'get in touch'}
											/>
										</div>
									</div>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-9'>
										<div>
											<p className='text-default mb-4 sm:mb-3'>
												Email
											</p>
											<Link href='/'>
												<a
													href='mailTo:info@unitspace.top'
													className='text-alabaster-400 hover:text-default transition-colors'>
													info@unitspace.top
												</a>
											</Link>
										</div>
										<div>
											<p className='text-default mb-4 sm:mb-3'>
												Phone
											</p>
											<div className='flex'>
												<a
													href='tel:+380639993211'
													target='_blank'
													rel='noopener'
													className='text-alabaster-400 hover:text-default mr-2.5 sm:mr-4 self-end leading-4 transition-colors'>
													+380639993211
												</a>
												<a
													href='https://t.me/unit_space'
													target='_blank'
													rel='noopener'
													className='mr-3'>
													<Telega
														clazz={
															'opacity-75 hover:opacity-100 w-7 sm:w-5/37 h-7 sm:h-5/37 transition-opacity'
														}
														fill={'#FAFAFA'}
													/>
												</a>
												<a
													href='viber://chat?number=%2B380639993211'
													target='_blank'
													rel='noopener'
													className='mr-3'>
													<Viber
														clazz={
															'opacity-75 hover:opacity-100 w-7 sm:w-5/37 h-7 sm:h-5/37 transition-opacity'
														}
														fill={'#FAFAFA'}
													/>
												</a>
												<a
													href='https://wa.me/380639993211'
													target='_blank'
													rel='noopener'
													className='mr-3'>
													<WhatsApp
														clazz={
															'opacity-75 hover:opacity-100 w-7 sm:w-5/37 h-7 sm:h-5/37 transition-opacity'
														}
														fill={'#FAFAFA'}
													/>
												</a>
											</div>
										</div>
										<div>
											<p className='text-default mb-4 sm:mb-3'>
												Kharkiv, Ukraine
											</p>
											<p className='text-alabaster-400'>
												Freedom Square, 7
											</p>
										</div>
										<div>
											<p className='text-default mb-4 sm:mb-3'>
												Kharkiv, Ukraine
											</p>
											<p className='text-alabaster-400'>
												Moskovsky prospect, 251
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-default'>
				<FormBlock inversion={true} />
			</section>
		</>
	);
};

export default Contacts;
