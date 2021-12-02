import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blockchain from '../components/Blockchain';

const FrontEndPage = () => {
	return (
		<>
			<Head>
				<title>Blockchain</title>
			</Head>
			<Header />
			<main>
				<Blockchain />
			</main>
			<Footer />
		</>
	);
};

export default FrontEndPage;
