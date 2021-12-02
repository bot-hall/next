import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowWeWorkTeam from '../components/HowWeWorkTeam';

const DedicatedTeamPage = () => {
	return (
		<>
			<Head>
				<title>Dedicated Development Team</title>
			</Head>
			<Header />
			<main>
				<HowWeWorkTeam />
			</main>
			<Footer />
		</>
	);
};

export default DedicatedTeamPage;
