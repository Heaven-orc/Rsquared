import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Hero from "pageCompoenents/Team/Hero";
import Head from "next/head";
import Question from "pageCompoenents/Team/Question";
import Philosophy from "pageCompoenents/Team/Philosophy";
import Team from "pageCompoenents/Team/Team";

const R2Team = () => {
    const { t } = useTranslation("common");


    return (
        <>
            <Head>
                <title>{t("seo.team.title")}</title>
                <meta name="keywords" content={t("seo.team.keywords")} />
                <meta name="description" content={t("seo.team.description")} />
            </Head>

            <Hero />
            <Team />
            <Question />
            <Philosophy />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'r2Team']))
        }
    }
}

export default R2Team;