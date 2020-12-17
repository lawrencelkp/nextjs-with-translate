import getT from "next-translate/getT";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function about({title, name}) {
    return (
        <Layout head={'About us'}>
            <main className={styles.main}>
                <h1>{title}</h1>
                <p>{name}</p>
            </main>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const t = await getT(locale, 'about')
    const title = t('title');
    const name = t('name');
    return { props: { title, name } }
}
