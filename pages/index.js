import styles from '../styles/Home.module.css';
import getT from 'next-translate/getT';
import Layout from "../components/Layout";

export default function Home(props) {
    return (
        <Layout head={'Home'}>
            <main className={styles.main}>
                <h1>{props.title}</h1>
                <p>{props.today}</p>
            </main>
        </Layout>
    );
}

export async function getStaticProps({locale}) {
    const t = await getT(locale, 'home');
    const title = t('title');
    const date = new Date();
    const today = t('today', {today: date.toDateString()});
    return {props: {title, today}};
}
