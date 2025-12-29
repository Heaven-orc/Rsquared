import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Hero from "pageCompoenents/Portfolio/Hero";
import Head from "next/head";
import Philosophy from "pageCompoenents/Portfolio/Philosophy";
import Question from "pageCompoenents/Portfolio/Question";

const R2Portfolio = () => {
    const { t } = useTranslation("common");

    return (
        <>
            <Head>
                <title>{t("seo.portfolio.title")}</title>
                <meta name="keywords" content={t("seo.portfolio.keywords")} />
                <meta name="description" content={t("seo.portfolio.description")} />
            </Head>

            <Hero />
            <Question />
            <Philosophy />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'r2Portfolio']))
        }
    }
}

export default R2Portfolio;
