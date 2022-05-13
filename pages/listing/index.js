import Head from 'next/head';
import styles from '../../styles/Jobs.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { lists: data },
	};
};

const Listing = ({ lists }) => {
	return (
		<>
			<Head>
				<title>New List | Listing</title>
				<meta name='keywords' content='listing' />
			</Head>
			<div>
				<h1>Listing</h1>
				{lists.map((list) => (
					<Link href={`/listing/${list.id}`} key={list.id}>
						<a className={styles.single}>
							<h3>{list.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Listing;
