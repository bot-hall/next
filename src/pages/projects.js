import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const ProjectsPage = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<Header />
			<main>
				<Projects />
			</main>
			<Footer />
		</>
	);
};

export default ProjectsPage;
