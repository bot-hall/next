import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowWeWork from '../components/HowWeWork';

const SoftwareDevelopmentPage = () => {
	return (
		<>
			<Head>
				<title>Custom Software Development</title>
			</Head>
			<Header />
			<main>
				<HowWeWork />
			</main>
			<Footer />
		</>
	);
};

export default SoftwareDevelopmentPage;
