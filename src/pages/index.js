import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

const App = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<>
				<Header />
				<main>
					<Home />
				</main>
				<Footer />
			</>
		</>
	);
};

export default App;
