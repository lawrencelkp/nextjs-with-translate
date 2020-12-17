import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import useTranslation from 'next-translate/useTranslation';

const Layout = (props) => {

    const router = useRouter();
    const { t, lang } = useTranslation('common')

    return (
        <div>
            <div className={styles.lang}>
                <ul className={styles.langSwitcher}>
                    {router.locales.map(locale => (
                        <li key={locale}>
                            <Link href={router.asPath} locale={locale}>
                                <a>{t(locale)}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Head>
                <title>{t(props.head)}</title>
            </Head>
            <div className={styles.container}>
                {props.children}
            </div>
            <div className={styles.footer}>
                <div>
                    <Link href={'/'}>
                        <a>{t('Home')}</a>
                    </Link>
                </div>
                <div style={{marginLeft: 40}}>
                    <Link href={'/about'}>
                        <a>{t('About us')}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Layout;
