import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Careers from '../components/Careers';

const CareersPage = () => {
	return (
		<>
			<Head>
				<title>Careers</title>
			</Head>
			<Header />
			<main>
				<Careers />
			</main>
			<Footer />
		</>
	);
};

export default CareersPage;
