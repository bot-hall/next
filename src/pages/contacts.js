import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';

const ContactsPage = () => {
	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<Header />
			<main>
				<Contacts />
			</main>
			<Footer />
		</>
	);
};

export default ContactsPage;
