import { Chrono } from 'react-chrono';

const TimeLine = () => {
	// const items = [
	// 	{
	// 		title: '2021',
	// 		cardDetailedText:
	// 			'Despite the worldwide pandemic and challenges that it created for the IT community, IdeaSoft started 2021 confidently. In January, the company became a member of Sigma Software Group, Swedish development and IT consulting company. Also, IdeaSoft has delivered multiple successful projects and launched a new in-house development service - B2B digital banking solution.',
	// 	},
	// 	{
	// 		title: '2020',
	// 		cardDetailedText:
	// 			'IdeaSoft continues to develop in-house expertise. A full-fledged business analysis department was built within the company. The team has grown to 100+ specialists. In addition, projects for implementing blockchain technology in the Fintech industry such as Securitize, Xion, Biteeu have been added to the companys portfolio. As a result, IdeaSoft has entered the list of top blockchain development companies according to Techreviewer and Clutch.',
	// 	},
	// 	{
	// 		title: '2019',
	// 		cardDetailedText:
	// 			'IdeaSoft continues to develop in-house products. Simultaneously, the team is working on blockchain integration into public services. As part of this work, we have developed a series of products for this segment in Kazakhstan: from the system of automatic calculation of aviation fuel to the tokenization of data collected from home consumption meters. Also, our comprehensive services for working with e-commerce have been successfully integrated with companies in the USA, Canada, and Australia.',
	// 	},
	// 	{
	// 		title: '2018',
	// 		cardDetailedText:
	// 			'IdeaSoft continues to develop in-house products. Simultaneously, the team is working on blockchain integration into public services. As part of this work, we have developed a series of products for this segment in Kazakhstan: from the system of automatic calculation of aviation fuel to the tokenization of data collected from home consumption meters. Also, our comprehensive services for working with e-commerce have been successfully integrated with companies in the USA, Canada, and Australia.',
	// 	},
	// 	{
	// 		title: '2018',
	// 		cardDetailedText:
	// 			'IdeaSoft continues to develop in-house products. Simultaneously, the team is working on blockchain integration into public services. As part of this work, we have developed a series of products for this segment in Kazakhstan: from the system of automatic calculation of aviation fuel to the tokenization of data collected from home consumption meters. Also, our comprehensive services for working with e-commerce have been successfully integrated with companies in the USA, Canada, and Australia.',
	// 	},
	// 	{
	// 		title: '2018',
	// 		cardDetailedText:
	// 			'IdeaSoft continues to develop in-house products. Simultaneously, the team is working on blockchain integration into public services. As part of this work, we have developed a series of products for this segment in Kazakhstan: from the system of automatic calculation of aviation fuel to the tokenization of data collected from home consumption meters. Also, our comprehensive services for working with e-commerce have been successfully integrated with companies in the USA, Canada, and Australia.',
	// 	},
	// 	{
	// 		title: '2018',
	// 		cardDetailedText:
	// 			'IdeaSoft continues to develop in-house products. Simultaneously, the team is working on blockchain integration into public services. As part of this work, we have developed a series of products for this segment in Kazakhstan: from the system of automatic calculation of aviation fuel to the tokenization of data collected from home consumption meters. Also, our comprehensive services for working with e-commerce have been successfully integrated with companies in the USA, Canada, and Australia.',
	// 	},
	// ];

	const items = [
		{ title: '2021' },
		{ title: '2021' },
		{ title: '2021' },
		{ title: '2021' },
		{ title: '2021' },
		{ title: '2021' },
	];

	return (
		<div style={{ width: '100%', height: '600px' }}>
			{/* <Chrono
				items={items}
				mode='HORIZONTAL'
				theme={{
					primary: '#253E66',
					secondary: '#EF6555',
				}}
				cardWidth='520'
				cardHeight='400'
				useReadMore={false}
				borderLessCards='false'
			/> */}
			<Chrono
				mode='HORIZONTAL'
				items={items}
				theme={{
					primary: '#000000',
					secondary: 'transparent',
					cardBgColor: '#FAFAFA',
					// cardForeColor: 'violet',
					titleColor: '#000000',

					//? primary?: string;
					//? secondary?: string;
					//? textColor?: string;
					//? cardBgColor?: string;
					//? cardForeColor?: string;
					//? titleColor?: string;
				}}
				// itemWidth='628'
				cardWidth='520'
				cardHeight='400'
				useReadMore={false}
				borderLessCards='false'>
				<div>
					<p>
						Despite the worldwide pandemic and challenges that it
						created for the IT community, IdeaSoft started 2021
						confidently. In January, the company became a member of
						Sigma Software Group, Swedish development and IT
						consulting company. Also, IdeaSoft has delivered
						multiple successful projects and launched a new in-house
						development service - B2B digital banking solution.
					</p>
				</div>
				<div>
					<p>
						IdeaSoft continues to develop in-house expertise. A
						full-fledged business analysis department was built
						within the company. The team has grown to 100+
						specialists. In addition, projects for implementing
						blockchain technology in the Fintech industry such as
						Securitize, Xion, Biteeu have been added to the
						company's portfolio. As a result, IdeaSoft has entered
						the list of top blockchain development companies
						according to Techreviewer and Clutch.
					</p>
				</div>
				<div>
					<p>
						IdeaSoft continues to develop in-house products.
						Simultaneously, the team is working on blockchain
						integration into public services. As part of this work,
						we have developed a series of products for this segment
						in Kazakhstan: from the system of automatic calculation
						of aviation fuel to the tokenization of data collected
						from home consumption meters. Also, our comprehensive
						services for working with e-commerce have been
						successfully integrated with companies in the USA,
						Canada, and Australia.
					</p>
				</div>
				<div>
					<p>
						Despite the worldwide pandemic and challenges that it
						created for the IT community, IdeaSoft started 2021
						confidently. In January, the company became a member of
						Sigma Software Group, Swedish development and IT
						consulting company. Also, IdeaSoft has delivered
						multiple successful projects and launched a new in-house
						development service - B2B digital banking solution.
					</p>
				</div>
				<div>
					<p>
						IdeaSoft continues to develop in-house expertise. A
						full-fledged business analysis department was built
						within the company. The team has grown to 100+
						specialists. In addition, projects for implementing
						blockchain technology in the Fintech industry such as
						Securitize, Xion, Biteeu have been added to the
						company's portfolio. As a result, IdeaSoft has entered
						the list of top blockchain development companies
						according to Techreviewer and Clutch.
					</p>
				</div>
				<div>
					<p>
						IdeaSoft continues to develop in-house products.
						Simultaneously, the team is working on blockchain
						integration into public services. As part of this work,
						we have developed a series of products for this segment
						in Kazakhstan: from the system of automatic calculation
						of aviation fuel to the tokenization of data collected
						from home consumption meters. Also, our comprehensive
						services for working with e-commerce have been
						successfully integrated with companies in the USA,
						Canada, and Australia.
					</p>
				</div>
			</Chrono>
		</div>
	);
};

export default TimeLine;
