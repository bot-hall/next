import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<Header />
			<main>
				<About />
			</main>
			<Footer />
		</>
	);
};

export default AboutPage;
