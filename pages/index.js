import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>New List | Home</title>
				<meta name='keywords' content='listing' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
					vero perspiciatis. Obcaecati aspernatur labore ducimus tempora modi
					eos amet error minus magni excepturi? Blanditiis repellendus vero
					maxime recusandae sunt nobis!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
					vero perspiciatis. Obcaecati aspernatur labore ducimus tempora modi
					eos amet error minus magni excepturi? Blanditiis repellendus vero
					maxime recusandae sunt nobis!
				</p>

				<Link href='/listing'>
					<a className={styles.btn}>See listing</a>
				</Link>
			</div>
		</>
	);
}
