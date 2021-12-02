import Map from '../Icons/Map';
import React, { useRef, useEffect, useState } from 'react';

const MapBlock = () => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const callbackFunction = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	};
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, options);
		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, [containerRef, options]);

	return (
		<div
			ref={containerRef}
			className='h-036 xl:h-053.8 max-w-4.5xl xl:max-w-7xl w-full mx-auto'>
			<Map clazz={`${isVisible ? 'shadow-map' : ''} w-full h-full`} />
		</div>
	);
};

export default MapBlock;
