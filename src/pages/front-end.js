import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FrontEnd from '../components/FrontEnd';

const FrontEndPage = () => {
	return (
		<>
			<Head>
				<title>Front-End Development</title>
			</Head>
			<Header />
			<main>
				<FrontEnd />
			</main>
			<Footer />
		</>
	);
};

export default FrontEndPage;
