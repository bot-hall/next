import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Industries from '../components/Industries';

const IndustriesPage = () => {
	return (
		<>
			<Head>
				<title>Industries We Serve</title>
			</Head>
			<Header />
			<main>
				<Industries />
			</main>
			<Footer />
		</>
	);
};

export default IndustriesPage;
