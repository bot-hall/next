import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustriesDirection from '../components/IndustriesDirection';

const IndustriesDirectionPage = () => {
	return (
		<>
			<Head>
				<title>B2B</title>
			</Head>
			<Header />
			<main>
				<IndustriesDirection />
			</main>
			<Footer />
		</>
	);
};

export default IndustriesDirectionPage;
