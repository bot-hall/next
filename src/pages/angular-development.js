import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StackView from '../components/StackView';

const AngularPage = () => {
	return (
		<>
			<Head>
				<title>Angular Development</title>
			</Head>
			<Header />
			<main>
				<StackView />
			</main>
			<Footer />
		</>
	);
};

export default AngularPage;
